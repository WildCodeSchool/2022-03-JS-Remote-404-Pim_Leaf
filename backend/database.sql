-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: pimleaf_database
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE="+00:00" */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE="NO_AUTO_VALUE_ON_ZERO" */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity_field`
--

DROP TABLE IF EXISTS `activity_field`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_field` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_field`
--

LOCK TABLES `activity_field` WRITE;
/*!40000 ALTER TABLE `activity_field` DISABLE KEYS */;
INSERT INTO `activity_field` VALUES (1,"Epicerie vrac"),(2,"Fabricant de pâtes"),(3,"Biscuiterie"),(4,"Autre"),(5,"Vente de thé et infusions");
/*!40000 ALTER TABLE `activity_field` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `allergen_category`
--

DROP TABLE IF EXISTS `allergen_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `allergen_category` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `allergen_category`
--

LOCK TABLES `allergen_category` WRITE;
/*!40000 ALTER TABLE `allergen_category` DISABLE KEYS */;
INSERT INTO `allergen_category` VALUES (1,"Gluten"),(2,"Sésame"),(3,"Fruits à coque"),(4,"Crustacés"),(5,"Œuf"),(6,"Poisson"),(7,"Moutarde"),(8,"Lait"),(9,"Céleri"),(10,"Arachide"),(11,"Soja"),(12,"Mollusques"),(13,"Lupin"),(14,"Sulfites");
/*!40000 ALTER TABLE `allergen_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,"Boissons"),(2,"Epicerie sucrée"),(3,"Epicerie salée"),(4,"Produits frais"),(5,"Conserves"),(6,"Cosmétiques / Hygiène / Entretien"),(7,"Accessoires"),(8,"Autre"),(9,"Epices"),(10,"Huiles et condiments");
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `company_name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `post_code` int NOT NULL,
  `city` varchar(255) NOT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `file_id` int DEFAULT NULL,
  `group_id` int NOT NULL,
  `activity_field_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,"Eco Vrac","13, avenue du Maréchal Foch",68100,"Mulhouse","ecovrac@email.com","+33-655-535-768",NULL,NULL,1,1),(2,"Valfleuri","5, rue de la Charente",68270,"Wittenheim","valfleuri@email.com","+33-755-552-764",NULL,NULL,2,2),(3,"DAO","1664, avenue Saint-Maurice",4100,"Manosque","dao@email.com","+33-655-527-008",NULL,NULL,2,3),(4,"Nat-ali","ZAC de la Brosse, 3 Rue Nicolas Appert",44400,"Reze","nat-alie@email.com","+33-655-536-223",NULL,NULL,2,4),(5,"Lazzaretti","Z.A. du Couquiou 656 Avenue du Clapier",84320,"Entraigues sur la Sorgue","lazzareti@email.com","+33-755-558-733",NULL,NULL,2,2),(6,"La Route des Comptoirs","1 Z.A. La Bossardière",44430,"Le Landreau","route-des-comptoires@email.com","+33-655-549-450",NULL,NULL,2,5),(7,"Epice Scop","7, Chemin des Tuileries",13015,"Marseille","epi-scope@email.com","+33-765-550-901",NULL,NULL,2,4),(8,"Moulin Herzog","8, route d\\\"Elsenheim",68970,"Illhaeusern","moulin-herzog@email.com","+33-765-553-489",NULL,NULL,2,4),(9,"Moulin 12","14, chemin des Blaches du Levant",26200,"Montélimar","moulin12@email.com","+33-700-555-504",NULL,NULL,2,4),(10,"Biofruitsec","640, rue du Jeu d\\\"arc",60490,"Margny-sur-Matz","biofruisec@email.com","+33-700-555-917",NULL,NULL,2,4),(11,"Grillon d\\\"Or","ZA La Fontenelle",35113,"Domagn","grillondor@email.com","+33-755-550-783",NULL,NULL,2,4),(12,"La maison du coco","22 rue Bernard Moitessier",92500,"Rueil Malmaison","maison-du-coco@email.com","+33-775-550-313",NULL,NULL,2,4),(13,"SDMR Marcel Recorbet","2, rue des Bourelles",38420,"Domène","sdmr@email.com","+33-700-555-236",NULL,NULL,2,4),(14,"helloVrac","3 rue des coquelicots",45960,"St Quentin sur Erdre","hellovrac@email.com","33-785-552-876",NULL,NULL,1,1),(15,"Les Biscuits d\"Hélène ","16 bis avenue Jean Gilles",49370,"Bécon les Granits","les-biscuits-dhelene@email.com","+33-700-555-673",NULL,NULL,1,3),(16,"Thé en Bretagne","52 Bd Charles de Gaulles",29390,"Guipavas","théenbretagne@email.com","+33-655-506-326",NULL,NULL,1,5),(17,"Le petit épicier","6 rue des timoniers",29470,"Plougastel-Daoulas","le-petit-epicier@email.com","+33-655-586-499",NULL,NULL,1,1),(18,"Zooxo","9599 Rutledge Lane",45893,"Jielin","gkiendl0@diigo.com","+86-602-217-5223",NULL,NULL,1,3),(19,"Flashspan","9 Crownhardt Place",52963,"Nanshi","spiscotti1@friendfeed.com","+86-820-891-4943",NULL,NULL,1,2),(20,"Mybuzz","82591 Delaware Terrace",2548,"Ledenice","jdyke2@google.es","+420-582-866-7535",NULL,NULL,1,1),(21,"Meevee","68 Forest Dale Place",78654,"Aibura","echambers3@flavors.me","+62-984-297-5420",NULL,NULL,1,4),(22,"Trudeo","8488 Green Ridge Circle",75698,"Santa Eulália","lfloodgate4@live.com","+351-436-641-3462",NULL,NULL,1,3),(23,"Tagopia","48877 Buhler Circle",15963,"Longxing","qrisborough5@cisco.com","+86-726-641-0692",NULL,NULL,1,2),(24,"Plambee","386 Haas Crossing",45963,"Xiaozhi","bdobbison8@cbsnews.com","+86-732-798-6831",NULL,NULL,2,3);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_group`
--

DROP TABLE IF EXISTS `company_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_group` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_group`
--

LOCK TABLES `company_group` WRITE;
/*!40000 ALTER TABLE `company_group` DISABLE KEYS */;
INSERT INTO `company_group` VALUES (1,"Commerce"),(2,"Fournisseur");
/*!40000 ALTER TABLE `company_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `connection`
--

DROP TABLE IF EXISTS `connection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `connection` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `id_retailer` int DEFAULT NULL,
  `id_supplier` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `connection`
--

LOCK TABLES `connection` WRITE;
/*!40000 ALTER TABLE `connection` DISABLE KEYS */;
/*!40000 ALTER TABLE `connection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `files` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `alt` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `label` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `file_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (1,"AB",NULL),(2,"Eurofeuille",NULL),(3,"Eurofeuille - FR",NULL),(4,"Savourez l\"Alsace",NULL),(5,"Savourez l\"Alsace - Produit du terroir",NULL),(6,"PME +",NULL),(7,"Alsace Excellence",NULL),(8,"Vegan Society",NULL),(9,"Fairtrade - Max Havelaar",NULL),(10,"Symbole des Producteurs Paysans - SPP",NULL);
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `origin`
--

DROP TABLE IF EXISTS `origin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `origin` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `country` varchar(255) NOT NULL,
  `region` varchar(255) DEFAULT NULL,
  `file_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `origin`
--

LOCK TABLES `origin` WRITE;
/*!40000 ALTER TABLE `origin` DISABLE KEYS */;
INSERT INTO `origin` VALUES (1,"France","Alsace",NULL),(2,"UE/NonUE",NULL,NULL),(3,"Afrique du Sud",NULL,NULL),(4,"Inde ",NULL,NULL),(5,"Colombie",NULL,NULL),(6,"Ethiopie",NULL,NULL),(7,"Guatemalas",NULL,NULL),(8,"Honduras",NULL,NULL),(9,"Pérou",NULL,NULL),(10,"France","Drome",NULL),(11,"Amérique Latine",NULL,NULL),(12,"Afrique",NULL,NULL),(13,"Bulgarie",NULL,NULL),(14,"Egypte",NULL,NULL),(15,"Chine",NULL,NULL),(16,"Cameroun",NULL,NULL),(17,"Togo",NULL,NULL);
/*!40000 ALTER TABLE `origin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `advise` varchar(255) DEFAULT NULL,
  `category_id` int NOT NULL,
  `allergen_id` int DEFAULT NULL,
  `origin_id` int DEFAULT NULL,
  `label_id` int DEFAULT NULL,
  `recipe_idea` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,"Sucre de canne non raffiné","","",0,2,0,1,""),
(3,"Farine de sarrasin","","",0,3,0,1,""),
(4,"Farine de riz complet","","",0,4,0,1,""),
(5,"Huile de coco non hydrogénée","","",0,5,0,1,""),
(6,"Eau","","",0,6,0,1,""),(7,"Jus de citron","","",0,7,0,1,""),
(8,"Poudre de citron","","",0,8,0,1,""),
(9,"Sel de Guérande","","",0,9,0,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(10,"Farine de froment T65","","",0,10,0,1,""),
(11,"Graines de lin brun","","",0,11,0,1,""),
(12,"Graines de pavot","","",0,12,0,1,""),
(13,"Sésame blond complet","","",0,13,0,1,""),
(14,"Sirop d’agave","","",0,14,0,1,""),
(15,"Bicarbonate d’ammonium","","",0,15,0,1,""),
(16,"Œufs","","",0,1,0,1,""),(18,"Semoule de blé dur","","",0,3,0,1,""),
(19,"Coquillette Epais Bio","","",3,4,2,1,""),
(20,"Nüdle 10mm à l'ancienne","","",3,5,2,1,""),
(22,"Spaetzle Plat","","",3,7,2,1,""),
(23,"Son d'avoine","","",0,8,0,1,""),
(24,"Arôme naturel","","",0,9,0,1,""),
(25,"Rigatoni Bronze","","",3,10,2,1,""),
(26,"Knepfle Epais","","",3,11,1,1,""),
(27,"Penne Epais Bio","","",3,12,1,1,""),
(28,"Spaghetti Très Epais 1,8mm","","",3,13,1,1,""),
(29,"Sucre de canne complet rapadura","","",0,14,0,1,""),
(31,"Farine de petit épeautre","","",0,15,0,1,""),
(32,"Citron","","",0,1,0,1,""),
(33,"Huile essentielle de citron","","",0,2,0,1,""),
(34,"Biscuits DAO petit épeautre amande citron","Biscuit biologique sans huile de palme et sans produit d’origine animale au petit épeautre de Haute Provence (IGP*) à l’amande et au citron.","Traces possibles de soja. Conserver dans un endroit frais\net sec.",2,3,1,1,""),
(39,"Agar-agar","","",0,4,0,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(41,"Sel","","",0,6,0,1,""),
(42,"Farine de riz","","",0,7,0,1,""),
(43,"Légumes (oignon, céleri, carotte, potiron)","","",0,8,0,1,""),
(44,"Extrait de levure","","",0,9,0,1,""),(45,"Huile de tournesol","","",0,10,0,1,""),
(46,"Epices","","",0,11,0,1,""),
(47,"Epices (curcuma, livèche, ail, fenouil)","","",0,12,0,1,""),
(48,"Sucre de canne","","",0,13,0,1,""),
(49,"Persil","","",0,14,0,1,""),
(50,"Bouillon de légumes Bio","","Dosage recommandé : 20g pour 1 litre d’eau\nVerser la poudre dans l’eau. Homogénéiser puis porter à ébullition tout en remuant, c'est prêt !\nConservation de la poudre à température ambiante, dans un endroit sec.",3,15,1,1,""),
(51,"Amidon de maïs","","",0,1,0,1,""),
(52,"Bicarbonate de sodium","","",0,2,0,1,""),
(53,"Acide tartrique","","",0,3,0,1,""),
(54,"Poudre à lever Bio","","Mélanger à sec la poudre à lever avec une partie de la farine pour une meilleure répartition.\nDosage recommandé : 7g pour 250g de farine",2,4,1,1,""),
(55,"Farine de quinoa","","",0,5,0,1,""),
(56,"Fusilli riz quinoa biologiques","","Cuisson : 3 min dans l’eau bouillante salée.\nA conserver dans un endroit sec et frais à l’abri de la lumière",3,6,1,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(57,"Farine de sarrasin","","",0,7,0,1,""),
(58,"Fusilli sarrasin biologiques","","Cuisson : 2 min dans l’eau bouillante salée.\nA conserver dans un endroit sec et frais à l’abri de la lumière",3,8,1,1,""),
(59,"Gingembre","","",0,9,0,1,""),
(60,"Réglisse","","",0,10,0,1,""),
(61,"Citronnelle","","",0,11,0,1,""),
(62,"Cardamome","","",0,12,0,1,""),
(63,"Hibiscus","","",0,13,0,1,""),
(64,"Clou de girofle","","",0,14,0,1,""),
(65,"Fleurs d'eucalyptus","","",0,15,0,1,""),
(66,"Fleurs d'oranger","","",0,1,0,1,""),
(67,"Infusion KAPHA","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 3-5 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,2,1,1,""),
(68,"Menthe poivrée","","",0,3,0,1,""),
(69,"Ecorces d'orange","","",0,4,0,1,""),
(70,"Cynorrhodon","","",0,5,0,1,""),
(71,"Poivre noir","","",0,6,0,1,""),
(72,"Infusion PITTA","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 3-5 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,7,1,1,""),
(74,"Huiles essentielles (citron, bergamote, pamplemousse, orange, limette)","","",0,9,0,1,""),
(75,"Rooïbos AGRUMES","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 4-5min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,10,1,1,""),
(76,"Thé noir Paralai","","",0,11,0,1,""),
(77,"Thé noir BREAKFAST","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 2-3 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,12,1,1,""),
(78,"Thé noir Darjeeling Ambootia","","",0,13,0,1,""),
(79,"Thé noir DARJEELING AMBOOTIA","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 3-5 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,14,1,1,""),
(80,"Pétales de bleuets","","",0,15,0,1,""),(81,"Thé noir","","",0,1,0,1,""),(82,"Huile essentielle de bergamote","","",0,2,0,1,""),
(83,"Thé noir EARL GREY","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 2-3 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,3,1,1,""),
(84,"Racines de chicorée torréfiées","","",0,4,0,1,""),
(85,"Chicorée nature","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 2-5 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,5,1,1,""),
(86,"Cannelle","","",0,6,0,1,""),(87,"Jyoti Massala","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 4 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité, ne dépassant pas 25°C.",1,7,1,1,""),
(88,"Verveine odorante","","",0,8,0,1,""),
(89,"Rooïbos vert","","",0,9,0,1,""),
(90,"Tilleul","","",0,10,0,1,""),
(91,"Huile essentielle d'orange","","",0,11,0,1,""),
(92,"Baies roses","","",0,12,0,1,""),
(93,"Pétales de coquelicot","","",0,13,0,1,""),
(94,"Les Herbes du Soir","","Dosage : 3 cuillères / litre.\nTemps d’infusion : 3-5 min.\nTempérature de l’eau : 80°C.\nA conserver à l’abri de la lumière, de la chaleur et de l’humidité.",1,14,1,1,""),
(95,"Café","","",0,15,0,1,""),
(96,"Café Colombie Excelso Makéda","100% arabica d'altitude. Torréfié et conditionné en France.","Traces possibles de fruits à coques, sésame et moutarde.\nConserver dans un endroit sec et frais, à l’abri de la lumière.",1,1,1,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(97,"Café Ethiopie Sidamo Makéda","100% arabica d'altitude. Torréfié et conditionné en France.","Traces possibles de fruits à coques, sésame et moutarde.\nConserver dans un endroit sec et frais, à l’abri de la lumière.",1,2,1,1,""),
(98,"Café Guatemala Chiquimula Makéda","100% arabica d'altitude. Torréfié et conditionné en France.","Traces possibles de fruits à coques, sésame et moutarde.\nConserver dans un endroit sec et frais, à l’abri de la lumière.",1,3,1,1,""),
(99,"Café Honduras Marcala Makéda","Torréfié et conditionné en France.","Traces possibles de fruits à coques, sésame et moutarde.\nConserver dans un endroit sec et frais, à l’abri de la lumière.",1,4,1,1,""),
(100,"Cacao en poudre","","",0,5,0,1,""),
(102,"Panela (sucre de canne complet)","","",0,7,0,1,""),
(104,"Quinoa","","",0,9,0,1,""),
(106,"Café décaféiné Makéda","Café d'Amérique latine 100% arabica d'altitude, décaféiné sans solvant.\nTorréfié et conditionné en France.\n","Traces possibles de fruits à coques, sésame et moutarde.\nConserver dans un endroit sec et frais, à l’abri de la lumière.",1,11,3,1,""),
(107,"Fève de cacao crue","","",0,12,0,1,""),
(109,"Beurre de cacao","","",0,14,0,1,""),
(110,"Fèves de cacao","","",0,15,0,1,""),
(114,"Lait entier en poudre","","",0,4,0,1,""),
(116,"Orange confite","","",0,6,0,1,""),
(118,"Eclats de fèves de cacao","","",0,8,0,1,""),
(120,"Ecorces de citron confites","","",0,10,0,1,""),
(121,"Huile essentielle de citron","","",0,11,0,1,""),
(123,"Gingembre confit","","",0,13,0,1,""),
(124,"Gingembre en poudre","","",0,14,0,1,""),
(126,"Amandes","","",0,1,0,1,""),
(128,"Noisettes","","",0,3,0,1,""),
(130,"Blé","","",0,5,0,1,""),
(131,"Farine de blé bio type 45","Processe de farbication : nettoyage, lavage, mouture sur machine à cylindre rotation lente. Extraction à environ 55 % . Tamisage Type 45. Ensachage. La farine T45 est tamisée. Produite selon des critères traditionnels.","Peut contenir des traces de, soja, sésame, lait, fruits à coque.",3,6,2,1,""),
(132,"Farine de blé bio type 65","Process de fabrication : nettoyage, lavage, mouture sur machine à cylindre à rotation lente. Extraction à environ 65 %. Tamisage Type 65. Ensachage. La farine T65 est tamisée. Produite selon des critères traditionnels.","Peut contenir des traces de, soja, sésame, lait, fruits à coque.",3,7,2,1,""),
(133,"Farine de blé T65","","",0,8,0,1,""),
(134,"Son gros","","",0,9,0,1,""),
(135,"Son fin","","",0,10,0,1,""),
(136,"Remoulage","","",0,11,0,1,""),
(137,"Gluten","","",0,12,0,1,""),
(138,"Farine céréales complète T110","Process de fabrication : Nettoyage, lavage, mouture sur machine à cylindre à rotation lente. Tamisage. Farine de base Type 65, mélange des sons et remoulage. Ensachage.","Peut contenir des traces de, soja, sésame, lait, fruits à coque.",3,13,2,1,""),
(139,"Farine céréales complète T150","Process de fabrication : nettoyage, lavage, mouture sur machine à cylindre à rotation lente. Tamisage. Farine de base Type 65, mélange des sons et remoulage. Ensachage.","Peut contenir des traces de, soja, sésame, lait, fruits à coque.",3,14,2,1,""),
(140,"Cumin","","",0,15,0,1,""),
(141,"Fenugrec","","",0,1,0,1,""),
(142,"Piment doux","","",0,2,0,1,""),
(143,"Badiane","","",0,3,0,1,""),
(144,"Mélange ras el hanout","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,4,3,1,""),
(145,"Ail","","",0,5,0,1,""),
(146,"Ail semoule","","",9,6,3,1,""),
(147,"Cannelle poudre","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,7,3,1,""),
(148,"Cannelle tuyaux (bâtons)","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,8,3,1,""),
(149,"Anis","","",0,9,0,1,""),
(150,"Coriandre","","",0,10,0,1,""),
(151,"Mélange pain d’épices","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,11,3,1,""),
(152,"Anis vert","","",0,12,0,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(153,"Anis vert graines","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,13,3,1,""),
(154,"Clous de girofle","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,14,3,1,""),
(155,"Poivre noir poudre","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,15,3,1,""),
(156,"Poivre noir grains","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,1,3,1,""),
(157,"Genièvre baies","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,2,3,1,""),
(158,"Moutarde","","",0,3,0,1,""),
(159,"Moutarde jaune graines","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,4,3,1,""),
(161,"Curcuma","","",0,6,0,1,""),
(162,"Piment fort","","",0,7,0,1,""),
(163,"Curry Indien","","Traces possibles de fruits à coque, gluten, arachide, soja, sésame et moutarde.  Conserver dans un endroit sec et frais, à l’abri de la lumière.",9,8,3,1,""),
(164,"Paprika","","",0,9,0,1,""),
(165,"Miel","","",0,10,0,1,""),
(166,"Sirop de maïs","","",0,11,0,1,""),
(167,"Orange","","",0,12,0,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(168,"Graines d'anis","","",0,13,0,1,""),
(169,"Graines de sésame","","",0,14,0,1,""),
(170,"Graines de lin","","",0,15,0,1,""),
(171,"Biscuits  DAO sarrasin miel orange","Biscuits biologiques sucrés sans huile de palme au sarrasin.","Peut contenir des traces de gluten, d'oeufs, de soja, de lait, de fruits à coque et de moutarde.",2,1,1,1,""),
(172,"Beurre doux","","",0,2,0,1,""),
(173,"Pépites de caramel au sel de Guérande","","",0,3,0,1,""),
(174,"Oeuf entier en poudre","","",0,4,0,1,""),
(175,"Arôme naturel de caramel","","",0,5,0,1,""),
(176,"Sel fin de Guérande","","",0,6,0,1,""),
(177,"Extrait de vanille","","",0,7,0,1,""),
(179,"Rapadura (sucre de canne complet)","","",0,9,0,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(181,"Farine de millet","","",0,11,0,1,""),
(182,"Pépites de chocolat noir","","",0,12,0,1,""),
(183,"Noisettes toastées","","",0,13,0,1,""),
(184,"Cookies choco noisette sans gluten","Fabriqué dans un atelier n’utilisant pas de gluten.\nNotre gamme de cookies sans gluten a été conçue pour que tout le monde puisse\npartager un moment gourmand sans se soucier des ingrédients utilisés.","",2,14,1,1,""),
(185,"Cacao","","",0,15,0,1,""),
(186,"Gomme d'acacia","","",0,1,0,1,""),
(187,"Flocons d'avoine","","",0,2,0,1,""),
(188,"Biscuits avoine chocolat","","Peut contenir traces d’amandes.\nA conserver dans un endroit frais et sec.",2,3,1,1,""),
(189,"Petit flocon d'avoine","","",0,4,0,1,""),
(190,"Comté","","",0,5,0,1,""),
(191,"Biscuits DAO comté","Biscuit biologique salé sans huile de palme au comté.","Trace possible de fruits à coque et de soja. Conserver dans un endroit frais\net sec.",3,6,1,1,"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."),
(192,"Ferment","","",0,7,0,1,""),
(193,"Tamari (eau, soja, sel marin, alcool, ferment)","","",0,8,0,1,""),
(194,"Romarin","","",0,9,0,1,""),
(195,"Thym","","",0,10,0,1,""),
(197,"Tomate en poudre","","",0,12,0,1,""),
(198,"Olives noires","","",0,13,0,1,""),
(199,"Basilic","","",0,14,0,1,""),
(200,"Biscuit DAO tomate basilic","Biscuit apéritif sans huile de palme à la tomate et au basilic.\nConvient aux vegans.","Trace possible de fruits à coque et de soja.",3,15,1,1,""),
(201,"Emmental râpé","","",0,1,0,1,""),
(202,"Marjolaine","","",0,2,0,1,""),
(203,"Origan","","",0,3,0,1,""),
(204,"Ail en poudre","","",0,4,0,1,""),
(205,"Biscuits DAO pizza","Biscuit apéritif sans huile de palme Saveur pizza","Peut contenir des traces de soja, de fruits à coque et de sésame.",3,5,1,1,"");
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `company_id` int NOT NULL,
  `quantity` int NOT NULL,
  `price_ttc` int NOT NULL,
  `price_ht` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,12,19,912,57,6),(2,3,21,826,71,25),(3,2,9,408,44,41),(4,13,12,420,92,43),(5,14,27,421,63,67),(6,22,28,12,24,82),(7,19,26,287,70,16),(8,21,15,907,32,39),(9,7,10,813,83,98),(10,21,13,784,75,38),(11,21,10,559,41,94),(12,24,3,416,84,87),(13,10,18,799,17,92),(14,2,3,281,81,26),(15,17,22,858,72,24),(16,1,12,116,70,62),(17,22,6,638,39,31),(18,17,23,62,99,97),(19,21,3,50,91,59),(20,22,9,390,22,21),(21,7,2,984,77,95),(22,20,21,870,83,72),(23,22,28,736,15,44),(24,1,21,464,41,19),(25,17,11,981,94,54),(26,21,2,463,76,40),(27,20,7,768,80,84),(28,4,10,56,93,34),(29,9,18,308,33,40),(30,19,19,406,82,79),(31,9,28,949,44,26),(32,18,11,479,93,79),(33,7,7,935,16,64),(34,17,21,809,60,91),(35,11,3,637,63,3),(36,20,3,65,49,36),(37,22,21,642,31,7),(38,17,4,846,53,49),(39,8,3,173,66,32),(40,17,6,544,97,68),(41,3,27,549,72,80),(42,22,26,524,44,78),(43,6,17,682,91,13),(44,4,22,888,70,78),(45,6,4,180,35,2),(46,12,25,980,12,82),(47,22,1,53,44,83),(48,12,22,604,100,68),(49,8,4,236,23,80),(50,12,18,259,79,15),(51,3,7,891,91,96),(52,24,11,930,40,20),(53,8,13,796,46,23),(54,2,28,684,24,47),(55,7,5,19,78,53),(56,3,28,44,69,41),(57,12,22,172,5,33),(58,3,12,7,93,72),(59,22,13,867,58,87),(60,5,13,617,80,47);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` char(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-13 16:29:26
