-- MySQL dump 10.13  Distrib 8.0.15, for macos10.14 (x86_64)
--
-- Host: localhost    Database: tickets
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `tickets`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `tickets` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `tickets`;

--
-- Table structure for table `Events`
--

DROP TABLE IF EXISTS `Events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Events` (
  `url` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `bannerUrl` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`url`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Events`
--

LOCK TABLES `Events` WRITE;
/*!40000 ALTER TABLE `Events` DISABLE KEYS */;
INSERT INTO `Events` VALUES ('/cocktail','Cocktail Gathering','https://juven-stg.s3.amazonaws.com/images_1697_1548661055505_Test-123-cover','2019-06-01 19:00:00','Lan Kwai Fong, Central, Hong Kong','Meet some new friends in this awesome cocktail gathering! Extra brownie points if you bring some cool friends.','2019-03-31 15:53:36','2019-03-31 15:53:36'),('/heli','Helicopter Tour','https://juven-stg.s3.amazonaws.com/images_1723_1549268249636_Juven-Clubbin-cover','2019-05-15 12:00:00','Sha Tin Heliport, Sha Tin, Hong Kong','Get onboard this once-in-a-lifetime ride and see the majestic views of urban and rural Hong Kong from a fresh angle!','2019-03-31 15:55:20','2019-03-31 15:55:20'),('/spaceship','Spaceship Experience','https://juven-stg.s3.amazonaws.com/images_1743_1549968724608_Lets-celebrate-Juven-birthday-cover','2021-08-31 18:00:00','Singapore Spaceport, Changi, Singapore','A literally out-of-this-world experience - take our cutting-edge spaceship and cruise to an altitude of 150km. A unique opportunity to join the exclusive Astronaut Club!','2019-03-31 15:56:19','2019-03-31 15:56:19');
/*!40000 ALTER TABLE `Events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Guests`
--

DROP TABLE IF EXISTS `Guests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Guests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tickets` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Guests`
--

LOCK TABLES `Guests` WRITE;
/*!40000 ALTER TABLE `Guests` DISABLE KEYS */;
/*!40000 ALTER TABLE `Guests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TicketsTypes`
--

DROP TABLE IF EXISTS `TicketsTypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `TicketsTypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `available` int(11) DEFAULT NULL,
  `eventUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `eventUrl` (`eventUrl`),
  CONSTRAINT `ticketstypes_ibfk_1` FOREIGN KEY (`eventUrl`) REFERENCES `events` (`url`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TicketsTypes`
--

LOCK TABLES `TicketsTypes` WRITE;
/*!40000 ALTER TABLE `TicketsTypes` DISABLE KEYS */;
INSERT INTO `TicketsTypes` VALUES (1,'VIP',10,'/cocktail'),(2,'Standard',NULL,'/cocktail'),(3,'Alumnus',NULL,'/cocktail'),(4,'Full HK tour',2,'/heli'),(5,'30 minute experience',5,'/heli'),(6,'Singapore to Hong Kong',NULL,'/spaceship'),(7,'Singapore to Sydney',200,'/spaceship'),(8,'Signapore to New York',50,'/spaceship');
/*!40000 ALTER TABLE `TicketsTypes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-03  0:49:01
