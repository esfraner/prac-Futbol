-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql:3306
-- Tiempo de generación: 03-12-2019 a las 18:59:47
-- Versión del servidor: 5.7.28
-- Versión de PHP: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `docker`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `PLAYERS`
--

CREATE TABLE IF NOT EXISTS `PLAYERS` (
  `ID` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `ALIAS` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `NAME` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `BIRTHDAY` date NOT NULL,
  `CLUB` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ROL` enum('PORTERO','DEFENSA','MEDIO','DELANTERO') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'MEDIO'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `PLAYERS`
--

INSERT INTO `PLAYERS` (`ID`, `ALIAS`, `NAME`, `BIRTHDAY`, `CLUB`, `ROL`) VALUES
('25', 'NEYMAR JR', 'Neymar da Silva Santos Júnior', '1992-02-05', 'Real Madrid', 'DELANTERO'),
('44', 'SILVA', 'Thiago Emiliano da Silva', '1984-09-22', 'FC Malaga', 'MEDIO'),
('27', 'RONALDINHO', 'Ronaldo de Assis Moreira', '1986-07-22', 'FC Barcelona', 'DELANTERO'),
('29', 'KILLER', 'Pepe Képler Laveran Lima Ferreira', '1990-09-11', 'FC Porto', 'DEFENSA'),
('89', 'Iker', 'Iker Casillas Fernández', '1997-09-11', 'FC Porto', 'PORTERO');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
