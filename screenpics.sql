-- MariaDB dump 10.18  Distrib 10.5.7-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: screenpics
-- ------------------------------------------------------
-- Server version	10.5.7-MariaDB-1:10.5.7+maria~buster

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `screenpics`
--

/*!40000 DROP DATABASE IF EXISTS `screenpics`*/;

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `screenpics` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `screenpics`;

--
-- Table structure for table `ScreenPics_img`
--

DROP TABLE IF EXISTS `ScreenPics_img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ScreenPics_img` (
  `name` text NOT NULL,
  `src` text NOT NULL,
  `artist` text NOT NULL,
  `author` text NOT NULL,
  `year` year(4) NOT NULL,
  `genre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ScreenPics_img`
--

LOCK TABLES `ScreenPics_img` WRITE;
/*!40000 ALTER TABLE `ScreenPics_img` DISABLE KEYS */;
INSERT INTO `ScreenPics_img` VALUES ('Fate/Stay Night','/images/galleryManga/fsn_1.jpg','Datto Nishiwaki','TYPE-MOON',2006,'Shônen Action Romance Supernaturel Fantastique'),('Fate/Stay Night','/images/galleryManga/fsn_2.jpg','Datto Nishiwaki','TYPE-MOON',2006,'Shônen Action Romance Supernaturel Fantastique'),('Fate/Stay Night','/images/galleryManga/fsn_3.jpg','Datto Nishiwaki','TYPE-MOON',2006,'Shônen Action Romance Supernaturel Fantastique'),('Nisekoi','/images/galleryManga/nisekoi_1.jpg','Komi Naoshi','Komi Naoshi',2011,'Comédie School Life Harem Romance Shônen'),('Nisekoi','/images/galleryManga/nisekoi_2.jpg','Komi Naoshi','Komi Naoshi',2011,'Comédie School Life Harem Romance Shônen'),('Nisekoi','/images/galleryManga/nisekoi_3.jpg','Komi Naoshi','Komi Naoshi',2011,'Comédie School Life Harem Romance Shônen'),('Gantz','/images/galleryManga/gantz_1.jpg','Oku Hiroya','Oku Hiroya',2000,'Action Drame Sci-Fi Supernaturel Horreur Psychologique Seinen'),('Gantz','/images/galleryManga/gantz_2.jpg','Oku Hiroya','Oku Hiroya',2000,'Action Drame Sci-Fi Supernaturel Horreur Psychologique Seinen'),('Gantz','/images/galleryManga/gantz_3.jpg','Oku Hiroya','Oku Hiroya',2000,'Action Drame Sci-Fi Supernaturel Horreur Psychologique Seinen'),('Shingeki No Kyojin','/images/galleryManga/snk_1.jpg','Isayama Hajime','Isayama Hajime',2009,'Action Drame Fantastique Horreur Mystère Tragique Supernaturel Shônen Super Pouvoirs'),('Shingeki No Kyojin','/images/galleryManga/snk_2.jpg','Isayama Hajime','Isayama Hajime',2009,'Action Drame Fantastique Horreur Mystère Tragique Supernaturel Shônen Super Pouvoirs'),('Shingeki No Kyojin','/images/galleryManga/snk_3.jpg','Isayama Hajime','Isayama Hajime',2009,'Action Drame Fantastique Horreur Mystère Tragique Supernaturel Shônen Super Pouvoirs'),('Fairy Tail','/images/galleryManga/FT_1.jpg','Mashima Hiro','Mashima Hiro',2006,'Action Aventure Ecchi Comédie Fantastique Super Pouvoirs Shônen'),('Fairy Tail','/images/galleryManga/FT_2.jpg','Mashima Hiro','Mashima Hiro',2006,'Action Aventure Ecchi Comédie Fantastique Super Pouvoirs Shônen'),('Fairy Tail','/images/galleryManga/FT_3.jpg','Mashima Hiro','Mashima Hiro',2006,'Action Aventure Ecchi Comédie Fantastique Super Pouvoirs Shônen'),('Naruto','/images/galleryManga/naruto_1.jpg','Kishimoto Masashi','Kishimoto Masashi',1999,'Action Aventure Super Pouvoirs Arts Martiaux Shônen'),('Naruto','/images/galleryManga/naruto_2.jpg','Kishimoto Masashi','Kishimoto Masashi',1999,'Action Aventure Super Pouvoirs Arts Martiaux Shônen'),('Naruto','/images/galleryManga/naruto_3.jpg','Kishimoto Masashi','Kishimoto Masashi',1999,'Action Aventure Super Pouvoirs Arts Martiaux Shônen'),('One Piece','/images/galleryManga/OP_1.jpg','Oda Eiichiro','Oda Eiichiro',1997,'Action Aventure Comédie Fantastique Shônen Super Pouvoirs'),('One Piece','/images/galleryManga/OP_2.jpg','Oda Eiichiro','Oda Eiichiro',1997,'Action Aventure Comédie Fantastique Shônen Super Pouvoirs'),('One Piece','/images/galleryManga/OP_3.jpg','Oda Eiichiro','Oda Eiichiro',1997,'Action Aventure Comédie Fantastique Shônen Super Pouvoirs'),('Defense Devil','/images/galleryManga/dD_1.jpg','Yang Kyung-Il','Youn In-Wan',2009,'Action Comédie Mystère Drame Ecchi Romance Shônen Supernaturel'),('Defense Devil','/images/galleryManga/dD_2.jpg','Yang Kyung-Il','Youn In-Wan',2009,'Action Comédie Mystère Drame Ecchi Romance Shônen Supernaturel'),('Defense Devil','/images/galleryManga/dD_3.jpg','Yang Kyung-Il','Youn In-Wan',2009,'Action Comédie Mystère Drame Ecchi Romance Shônen Supernaturel'),('Dragon Ball','/images/galleryManga/db_1.jpg','Toriyama Akira','Toriyama Akira',1984,'Action Aventure Comédie Arts Martiaux Sci-Fi Shônen Super Pouvoirs'),('Dragon Ball','/images/galleryManga/db_2.jpg','Toriyama Akira','Toriyama Akira',1984,'Action Aventure Comédie Arts Martiaux Sci-Fi Shônen Super Pouvoirs'),('Dragon Ball','/images/galleryManga/db_3.jpg','Toriyama Akira','Toriyama Akira',1984,'Action Aventure Comédie Arts Martiaux Sci-Fi Shônen Super Pouvoirs'),('Nichijou','/images/galleryManga/nichijou_1.jpg','Arawi Keiichi','Arawi Keiichi',2006,'Action Comédie School Life Shônen'),('Nichijou','/images/galleryManga/nichijou_2.jpg','Arawi Keiichi','Arawi Keiichi',2006,'Action Comédie School Life Shônen'),('Nichijou','/images/galleryManga/nichijou_3.jpg','Arawi Keiichi','Arawi Keiichi',2006,'Action Comédie School Life Shônen'),('Rave Master','/images/galleryManga/rave_1.jpg','Mashima Hiro','Mashima Hiro',1999,'Action Shônen Comédie Fantastique'),('Rave Master','/images/galleryManga/rave_2.jpg','Mashima Hiro','Mashima Hiro',1999,'Action Shônen Comédie Fantastique'),('Rave Master','/images/galleryManga/rave_3.jpg','Mashima Hiro','Mashima Hiro',1999,'Action Shônen Comédie Fantastique');
/*!40000 ALTER TABLE `ScreenPics_img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ScreenPics_tags`
--

DROP TABLE IF EXISTS `ScreenPics_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ScreenPics_tags` (
  `artist` text NOT NULL,
  `author` text NOT NULL,
  `genre` text NOT NULL,
  `name` text NOT NULL,
  `year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ScreenPics_tags`
--

LOCK TABLES `ScreenPics_tags` WRITE;
/*!40000 ALTER TABLE `ScreenPics_tags` DISABLE KEYS */;
INSERT INTO `ScreenPics_tags` VALUES ('Datto Nishiwaki','TYPE-MOON','Fantastique','Fate/Stay Night',2006),('Oku Hiroya','Oku Hiroya','Sci-Fi','Gantz',2000),('Kishimoto Masashi','Kishimoto Masashi','Action','Naruto',1999),('Mashima Hiro','Mashima Hiro','Aventure','Rave Master',0000),('Isayama Hajime','Isayama Hajime','Horreur','Shingeki No Kyojin',2009),('Komi Naoshi','Komi Naoshi','Romance','Nisekoi',2011),('Arawi Keiichi','Arawi Keiichi','Comédie','Nichijou',2007),('Toriyama Akira','Toriyama Akira','School Life','Dragon Ball',1984),('Yang Kyung-Il','Youn In-Wan','Harem','Defense Devil',1997),('Oda Eiichiro','Oda Eiichiro','Drame','One Piece',0000),('','','Ecchi','',0000),('','','Supernaturel','',0000),('','','Arts Martiaux','',0000),('','','Super Pouvoirs','',0000),('','','Mystère','',0000),('','','Tragique','',0000),('','','Shônen','',0000),('','','Seinen','',0000),('','','Psychologique','',0000);
/*!40000 ALTER TABLE `ScreenPics_tags` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-16 20:05:48
