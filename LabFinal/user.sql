-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2023 a las 18:50:41
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `labfinal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `primerAp` varchar(30) NOT NULL,
  `segundoAp` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `contrasena` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `nombre`, `primerAp`, `segundoAp`, `email`, `username`, `contrasena`) VALUES
(3, 'Nuria', 'Iglesias', 'Traviesa', 'enedenurs@gmail.com', 'Nuria', '12345'),
(4, 'Sergio', 'Iglesias', 'Traviesa', 'sergio@gmail.com', 'sergio', '12345'),
(23, 'hola', 'hola', 'hola', 'hola@gmail.com', 'hola', 'holaa'),
(24, 'hola1', 'hola1', 'hola1', 'hola1@gmail.com', 'asdasdads', 'asdasdad'),
(25, 'hola1', 'hola2', 'asd', 'asdad@gmail.com', 'asdad', 'asdadsa'),
(26, 'hola', 'hola', 'hola', 'hasd@gmail.com', 'hola', 'holaa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
