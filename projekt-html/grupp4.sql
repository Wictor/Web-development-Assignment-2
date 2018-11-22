-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Värd: 127.0.0.1
-- Tid vid skapande: 22 nov 2018 kl 16:50
-- Serverversion: 10.1.36-MariaDB
-- PHP-version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `grupp4`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `news`
--

CREATE TABLE `news` (
  `ArticleID` int(11) NOT NULL,
  `ArticleImage` varchar(255) DEFAULT NULL,
  `ArticleTitle` varchar(255) DEFAULT NULL,
  `ArticleText` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumpning av Data i tabell `news`
--

INSERT INTO `news` (`ArticleID`, `ArticleImage`, `ArticleTitle`, `ArticleText`) VALUES
(1, 'https://www.w3schools.com/w3css/img_lights.jpg', 'Bild', 'Test'),
(2, 'https://i2.wp.com/beebom.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg?resize=640%2C426', 'Bild2', 'Test2'),
(3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDaJ_Coyjmt96WJi5-JoiKQLC33yx81v64p4jijqFnib7o2NY', 'Bild3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor.'),
(4, 'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.ngsversion.1526587209178.adapt.1900.1.jpg', 'Bild4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor.'),
(5, 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg', 'Bild4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dolor.');

-- --------------------------------------------------------

--
-- Tabellstruktur `subscribe`
--

CREATE TABLE `subscribe` (
  `ID` int(11) NOT NULL,
  `Email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumpning av Data i tabell `subscribe`
--

INSERT INTO `subscribe` (`ID`, `Email`) VALUES
(1, 'Test@test.test'),
(2, 'Test@test.test');

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`ArticleID`);

--
-- Index för tabell `subscribe`
--
ALTER TABLE `subscribe`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `news`
--
ALTER TABLE `news`
  MODIFY `ArticleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT för tabell `subscribe`
--
ALTER TABLE `subscribe`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
