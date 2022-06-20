SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- 
-- Database name : `pimleaf`

-- Database tables :
-- `user`
-- `company`
-- `activity_field`
-- `company_group`
-- `connection`
-- `stock`
-- `products`
-- `category`
-- `allergen_category`
-- `files`
-- `label`
-- `origin`
-- ----------------------------------------------------------------------------


--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `password` VARCHAR(50) NOT NULL,
  `mail` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=6;

--
-- Content for table `item`
--

LOCK TABLES `user` WRITE;
INSERT INTO `user` (`id`, `name`, `password`, `mail`, `phone`) VALUES
(1, "JohnA", "Iamthebest", "JohnA@company.com", "+33111111111"),
(2, "JohnB", "Iamthebest", "JohnB@company.com", "+33222222222"),
(3, "JohnC", "Iamthebest", "JohnC@company.com", "+33333333333"),
(4, "JohnD", "Iamthebest", "JohnD@company.com", "+33444444444"),
(5, "JohnE", "Iamthebest", "JohnE@company.com", "+33555555555");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `company_name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(255) NULL,
  `postcode` TINYINT NULL,
  `city` VARCHAR(255) NULL,
  `mail` VARCHAR(255) NULL,
  `phone` VARCHAR(20) NULL,
  `description` VARCHAR(255) NULL,
  `file_id` INT NULL,
  `group_id` TINYINT NULL,
  `activity_field_id` TINYINT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=6;

--
-- Content for table `company`
--

LOCK TABLES `company` WRITE;
INSERT INTO `company` (`id`, `company_name`, `address`, `postcode`, `city`, `mail`, `phone`, `description`, `file_id`, `group_id`, `activity_field_id`) VALUES
(1, "Eco Vrac", "13, avenue du Maréchal Foch", 68100, "Mulhouse", "ecovrac@email.com", "+33-655-535-768", "desc test", NULL, 1, 1),
(2, "Valfleuri", "5, rue de la Charente", 68270, "Wittenheim", "valfleuri@email.com", "+33-755-552-764", "desc test", NULL, 1, 5),
(3, "DAO", "1664, avenue Saint-Maurice", 4100, "Manosque", "dao@email.com", "+33-655-527-008", "desc test", NULL, 2, 4),
(4, "Nat-ali", "ZAC de la Brosse, 3 Rue Nicolas Appert", 44400, "Reze", "nat-alie@email.com", "+33-655-536-223", "desc test", NULL, 2, 4),
(5, "Epice Scop", "7, Chemin des Tuileries", 13015, "Marseille", "epi-scope@email.com", "+33-765-550-901", "desc test", NULL, 2, 5);
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `activity_field`
--

DROP TABLE IF EXISTS `activity_field`;
CREATE TABLE `activity_field` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=11;

--
-- Content for table `activity_field`
--

LOCK TABLES `activity_field` WRITE;
INSERT INTO `activity_field` (`id`, `name`) VALUES
(1, "Boissons"),
(2, "Épicerie sucrée"),
(3, "Épicerie salée"),
(4, "Produits frais"),
(5, "Conserves"),
(6, "Cosmétiques / Hygiène / Entretien"),
(7, "Accessoires"),
(8, "Autre"),
(9, "Épices"),
(10, "Huiles et condiments");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `company_group`
--

DROP TABLE IF EXISTS `company_group`;
CREATE TABLE `company_group` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=3;

--
-- Content for table `company_group`
--

LOCK TABLES `company_group` WRITE;
INSERT INTO `company_group` (`id`, `name`) VALUES
(1, "Commerce"),
(2, "Fournisseur");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `connection`
--

DROP TABLE IF EXISTS `connection`;
CREATE TABLE `connection` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `status` VARCHAR(30) NOT NULL,
  `retailer_id` INT NOT NULL,
  `supplier_id` INT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=6;

--
-- Content for table `connection`
--

LOCK TABLES `connection` WRITE;
INSERT INTO `connection` (`id`, `status`, `retailer_id`, `supplier_id`) VALUES
(1, "pending", 1, 3),
(2, "connected", 1, 4),
(3, "connected", 1, 5),
(4, "connected", 2, 3),
(5, "disabled", 2, 4);
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE `stock` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `company_id` INT NULL,
  `quantity` INT NULL,
  `price_ttc` INT NULL,
  `price_ht` INT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=21;

--
-- Content for table `stock`
--

LOCK TABLES `stock` WRITE;
INSERT INTO `stock` (`id`, `product_id`, `company_id`, `quantity`, `price_ttc`, `price_ht`) VALUES
(1, 1, 3, 50, 20, 19),
(2, 2, 4, 0, 20, 19),
(3, 3, 3, 100, 20, 19),
(4, 4, 4, 100, 20, 19),
(5, 5, 5, 0, 20, 19),
(6, 6, 3, 100, 20, 19),
(7, 7, 4, 0, 10, 9.5),
(8, 8, 5, 100, 20, 19),
(9, 9, 4, 100, 20, 19),
(10, 10, 5, 0, 20, 19),
(11, 11, 4, 100, 20, 19),
(12, 12, 5, 100, 20, 19),
(13, 13, 3, 100, 20, 19),
(14, 14, 4, 0, 20, 19),
(15, 15, 5, 100, 20, 19),
(16, 16, 3, 100, 20, 19),
(17, 17, 5, 100, 20, 19),
(18, 18, 5, 0, 20, 19),
(19, 19, 3, 100, 20, 19),
(20, 20, 5, 100, 20, 19);
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `detail` VARCHAR(255) NULL,
  `advise` VARCHAR(255) NULL,
  `category_id` TINYINT NOT NULL,
  `allergen_id` INT NULL,
  `origin_id` INT NULL,
  `label_id` INT NULL,
  `recipe_idea` VARCHAR(255) NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=21;

--
-- Content for table `products`
--

LOCK TABLES `products` WRITE;
INSERT INTO `products` (`id`, `product_name`, `detail`, `advise`, `category_id`, `allergen_id`, `origin_id`, `label_id`, `recipe_idea`) VALUES
(1, "Sucre de canne non raffiné", "details test", "advise test", 2, 0, 0, 0, "recipe test"),
(2, "Sucre de canne non raffiné", "details test", "advise test", 2, 0, 0, 0, "recipe test"),
(3, "Sirop d'agave", "details test", "advise test", 2, 0, 0, 0, "recipe test"),
(4, "Son d'avoine", "details test", "advise test", 8, 0, 0, 0, "recipe test"),
(5, "Son d'avoine", "details test", "advise test", 8, 0, 0, 0, "recipe test"),
(6, "Huile essentielle de citron", "details test", "advise test", 10, 0, 0, 0, "recipe test"),
(7, "Huile essentielle de citron", "details test", "advise test", 10, 0, 0, 0, "recipe test"),
(8, "Huile essentielle de citron", "details test", "advise test", 10, 0, 0, 0, "recipe test"),
(9, "Acide tartarique", "details test", "advise test", 6, 0, 0, 0, "recipe test"),
(10, "Acide tartarique", "details test", "advise test", 6, 0, 0, 0, "recipe test"),
(11, "Bicarbonate de sodium", "details test", "advise test", 6, 0, 0, 0, "recipe test"),
(12, "Bicarbonate de sodium", "details test", "advise test", 6, 0, 0, 0, "recipe test"),
(13, "Farine de Quinoa", "details test", "advise test", 8, 0, 0, 0, "recipe test"),
(14, "Farine de Quinoa", "details test", "advise test", 8, 0, 0, 0, "recipe test"),
(15, "Farine de Quinoa", "details test", "advise test", 8, 0, 0, 0, "recipe test"),
(16, "Gingembre", "details test", "advise test", 10, 0, 0, 0, "recipe test"),
(17, "Gingembre", "details test", "advise test", 10, 0, 0, 0, "recipe test"),
(18, "Poivre noir", "details test", "advise test", 10, 0, 0, 0, "recipe test"),
(19, "Menthe poivrée", "details test", "advise test", 4, 0, 0, 0, "recipe test"),
(20, "Menthe poivrée", "details test", "advise test", 4, 0, 0, 0, "recipe test");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=11;

--
-- Content for table `category`
--

LOCK TABLES `category` WRITE;
INSERT INTO `category` (`id`, `name`) VALUES
(1, "Boissons"),
(2, "Épicerie sucrée"),
(3, "Épicerie salée"),
(4, "Produits frais"),
(5, "Conserves"),
(6, "Cosmétiques / Hygiène / Entretien"),
(7, "Accessoires"),
(8, "Autre"),
(9, "Épices"),
(10, "Huiles et condiments");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `allergen_category`
--

DROP TABLE IF EXISTS `allergen_category`;
CREATE TABLE `allergen_category` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=15;

--
-- Content for table `allergen_category`
--

LOCK TABLES `allergen_category` WRITE;
INSERT INTO `allergen_category` (`id`, `name`) VALUES
(1, "Gluten"),
(2, "Sésame"),
(3, "Fruits à coque"),
(4, "Crustacés"),
(5, "Œuf"),
(6, "Poisson"),
(7, "Moutarde"),
(8, "Lait"),
(9, "Céleri"),
(10, "Arachide"),
(11, "Soja"),
(12, "Mollusques"),
(13, "Lupin"),
(14, "Sulfites");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  `alt` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=6;

--
-- Content for table `files`
--

LOCK TABLES `files` WRITE;
INSERT INTO `files` (`id`, `url`, `alt`) VALUES
(1, "testURL", "testALT"),
(2, "testURL", "testALT"),
(3, "testURL", "testALT"),
(4, "testURL", "testALT"),
(5, "testURL", "testALT");
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
CREATE TABLE `label` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `file_id` INT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=11;

--
-- Content for table `label`
--

LOCK TABLES `label` WRITE;
INSERT INTO `label` (`id`, `name`, `file_id`) VALUES
(1, "AB", NULL),
(2, "Eurofeuille", NULL),
(3, "Eurofeuille - FR", NULL),
(4, "Savourez l'Alsace", NULL),
(5, "Savourez l'Alsace - Produit du terroir", NULL),
(6, "PME +", NULL),
(7, "Alsace Excellence", NULL),
(8, "Vegan Society", NULL),
(9, "Fairtrade - Max Havelaar", NULL),
(10, "Symbole des Producteurs Paysans - SPP", NULL);
UNLOCK TABLES;
-- ----------------------------------------------------------------------------


--
-- Table structure for table `origin`
--

DROP TABLE IF EXISTS `origin`;
CREATE TABLE `origin` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `country` VARCHAR(255) NULL,
  `region` VARCHAR(255) NULL,
  `file_id` INT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci AUTO_INCREMENT=18;

--
-- Content for table `origin`
--

LOCK TABLES `origin` WRITE;
INSERT INTO `origin` (`id`, `country`, `region`, `file_id`) VALUES
(1, "France","Alsace", NULL),
(2, "UE/NonUE", NULL, NULL),
(3, "Afrique du Sud", NULL, NULL),
(4, "Inde ", NULL, NULL),
(5, "Colombie", NULL, NULL),
(6, "Ethiopie", NULL, NULL),
(7, "Guatemalas", NULL, NULL),
(8, "Honduras", NULL, NULL),
(9, "Pérou", NULL, NULL),
(10, "France","Drome", NULL),
(11, "Amérique Latine", NULL, NULL),
(12, "Afrique", NULL, NULL),
(13, "Bulgarie", NULL, NULL),
(14, "Egypte", NULL, NULL),
(15, "Chine", NULL, NULL),
(16, "Cameroun", NULL, NULL),
(17, "Togo", NULL, NULL);
UNLOCK TABLES;
-- ----------------------------------------------------------------------------