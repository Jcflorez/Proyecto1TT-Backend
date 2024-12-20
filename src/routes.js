const express = require('express');

const yup = require('yup');

const connection = require("./db")//Importa la connection al


const router = express.Router();

const schema = yup.object().shape({
    CodigoRef: yup.string().required("Codigo de producto se debe diligenciar"),
    NombreRef: yup.string().required("El nombre es Obligatorio"),
    CategoriaRef: yup.string().required("El Categoria es Obligatorio"),
    PrecioRef: yup.number().required("El precio es obrigatorio" ),
    PathImgRef: yup.string()
        .required("Imagen Obligatorio"),
})


router.get('/', function (req, res) {
    connection.query("SELECT * FROM productos", function (err, results) {
        if (err) return res.status(400).json({ message: err.message });
        res.json(results)
        console.log("Request: " + req);
        res.json("success",)
    })
})

/* Inserta Producto */ 
router.post('/producto', async function (req, res) {
    const datos = req.body
    try {
        const result = await schema.validate(datos);

        const query = "INSERT INTO productos (CodigoRef, NombreRef, CategoriaRef, PrecioRef, PathImgRef) VALUES (?, ?, ?, ?, ?)"

        connection.execute(query, Object.values(datos), function (err, results) {
            if (err) {
                res.status(400).json({
                    message: "Error al Guardar Producto",
                    errors: err.message
                })
                //throw console.error(err.message);
            } else {
                res.json({
                    message: "Producto agregado con éxito",
                    data: results
                })
            }
        })

    }
    catch (error) {
        return res.status(400).json({
            message: error.message,
        });
    }

});


router.get("/producto/:id", function (request, response) {
    const { id } = request.params
  
    const query = "SELECT * FROM productos WHERE idRef = ?"
  
    connection.query(query, [id], function (error, result) {
      if (error) {
        response.status(400).json({
          message: "Error al obtener el Proructo",
          error: error,
        })
      } else {
        if (result.length > 0) {
          response.json(result[0])
        } else {
          response.status(404).json({
            message: "Producto no encontrado",
          })
        }
      }
    })
  })
  
  router.put("/producto/:id", async function (request, response) {
    const data = request.body
    const { id } = request.params
  
    //const query = "UPDATE clientes SET ? WHERE id = ?"
    try {
      await schema.validate(data) // validamos que el objeto cumpla con el esquema
  
      const query =
    "UPDATE productos SET CodigoRef = ?, NombreRef = ?, CategoriaRef = ?, PrecioRef = ?, PathImgRef = ? WHERE idRef = ?"
    
      connection.execute(
        query,
        Object.values(data).concat(id),
        function (error, result) {
          if (error) {
            response.status(400).json({
              message: "Error al actualizar el Producto",
              error,
            })
          } else {
            response.json({
              message: "Producot actualizado",
              data: result,
            })
          }
        },
      )
    } catch (error) {
      response.status(400).json({
        message: error.message,
      })
    }
  }) // cierre del put


  router.delete("/producto/:id", function (request, response){
    console.log("Estamos borrar el producto")
    const {id} = request.params
  
    const query = "DELETE FROM productos WHERE idRef = ?"
  
    connection.execute(query, [id], function(error, result){
      if (error) {
        response.status(400).json({
          message: "Error al eliminar el cliente",
          error
        })
      } else {
        response.json({
          message: "Producto eliminado correctamente",
          data: result
        })
      }
    })
  })

router.get('/productos', function (req, res) {
    connection.query("SELECT * FROM productos ORDER BY IdRef DESC", function (error, result) {
            if (error) return res.status(400).json({ message: error.message });
            res.json(result)
        })
})





module.exports = router