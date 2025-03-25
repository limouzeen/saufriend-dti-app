-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: saufriend_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `myfriend_tb`
--

DROP TABLE IF EXISTS `myfriend_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myfriend_tb` (
  `myfriendId` int(11) NOT NULL AUTO_INCREMENT,
  `myfriendFullname` varchar(100) NOT NULL,
  `myfriendPhone` varchar(10) NOT NULL,
  `myfriendAge` int(11) NOT NULL,
  `myfriendMajor` enum('IoT','DTI','IT') NOT NULL,
  `myfriendImage` varchar(150) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`myfriendId`),
  KEY `userId` (`userId`),
  CONSTRAINT `myfriend_tb_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user_tb` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myfriend_tb`
--

/*!40000 ALTER TABLE `myfriend_tb` DISABLE KEYS */;
INSERT INTO `myfriend_tb` VALUES (2,'พิมพ์ใจ ศิริวัฒน์','0823456789',23,'DTI','default.png',15),(3,'อรวรรณ สมบูรณ์','0834567890',22,'IT','img_1742892408124-131647563.jpg',15),(4,'จักรพงษ์ รุ่งเรือง','0845678901',25,'IoT','default.png',15),(5,'ศรัณย์ภัทร พรชัย','0856789012',26,'DTI','default.png',15),(6,'ชลธิชา แซ่ลี้','0867890123',21,'IT','default.png',15),(7,'วรัญญา ศักดิ์ชัย','0878901234',27,'IoT','default.png',15),(15,'กิตติชัย มั่งมี','0812345678',25,'IoT','default.png',15),(17,'ดนัย ห้วงฝัน','0819165889',27,'IT','img_1738919549391-377412837.png',18);
/*!40000 ALTER TABLE `myfriend_tb` ENABLE KEYS */;

--
-- Table structure for table `user_tb`
--

DROP TABLE IF EXISTS `user_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_tb` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userFullname` varchar(100) NOT NULL,
  `userEmail` varchar(100) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `userPassword` varchar(60) NOT NULL,
  `userImage` varchar(150) NOT NULL,
  `userStatus` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tb`
--

/*!40000 ALTER TABLE `user_tb` DISABLE KEYS */;
INSERT INTO `user_tb` VALUES (15,'ลาลา มาลัยวรรณ','lala@gmail.com','lala','$2b$10$7/l5tkXZje94AMZftwmIu.CamgUhsnRnwBANxtlretpwK/E/XQdM2','lala.jpg',1),(16,'มะลิวัลย์ นวลจันทร์','maliwal@hotmail.com','mali123','$2b$10$hv33/VYuCOCmEFln629Zj.oefodsE/atUvoy59KGPJG7RJ.O.MfYC','default.jpg',1),(17,'มะลิลา นวลจันทร์','malila@hotmail.com','malila','$2b$10$Re1vazgMZKeRlcUOZCB93uJa/gVEFR5IsNOx7tb06ZYochhNx2wVG','user_1738908752847-647928312.png',1),(18,'น้ำฟ้า งามไทย','namfah789@hotmail.com','namfah789','$2b$10$V0KjvwJlNTDftCFyOu5eoeRZF99MZsweWYD6QOX9Ua7065MjDnotS','img_1738914091381-96825698.png',1),(20,'พงษ์ศาสตร์ ศรีสง่า','pongsart@mail.com','ps123','$2b$10$yyinuigKajMY0cuH6AfRoukbb4uCc.oacNZtig9QOW46faGnIVEge','default.png',1);
/*!40000 ALTER TABLE `user_tb` ENABLE KEYS */;

--
-- Dumping routines for database 'saufriend_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-25 16:17:09
