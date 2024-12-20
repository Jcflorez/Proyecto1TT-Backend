-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-12-2024 a las 00:54:37
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto1tt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idRef` int(11) NOT NULL,
  `CodigoRef` varchar(50) NOT NULL,
  `NombreRef` varchar(200) NOT NULL,
  `CategoriaRef` varchar(10) NOT NULL,
  `PrecioRef` int(11) NOT NULL,
  `PathImgRef` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idRef`, `CodigoRef`, `NombreRef`, `CategoriaRef`, `PrecioRef`, `PathImgRef`) VALUES
(2, '123455', 'Producto 5', 'HombrES', 50000, './assets/img/tenis-ubounce-dna.avif'),
(5, '123456', 'Producto 6', 'HombrES', 60000, './assets/img/tenis-ubounce-dna.avif'),
(7, '123457', 'Producto 7', 'HombrES', 70000, './assets/img/tenis-gazelle.avif'),
(9, '123458', 'Producto 8', 'HombrES', 80000, './assets/img/tenis-run-72.avif');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idRef`),
  ADD UNIQUE KEY `CodigoRef` (`CodigoRef`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idRef` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
