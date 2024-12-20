const dotenv = require('dotenv');  // Variables de entorno
dotenv.config();


const express = require('express')
const routes = require('./routes') 
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })

