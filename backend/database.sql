SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- 
-- Database name : `pimleaf`

-- Database tables :
-- `user`
-- `files`
-- `activity_field`
-- `company_group`
-- `company`
-- `connection`
-- `origin`
-- `label`
-- `allergen_category`
-- `category`
-- `products`
-- `stock`

-- ----------------------------------------------------------------------------


DROP TABLE IF EXISTS `stock`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `category`;
DROP TABLE IF EXISTS `allergen_category`;
DROP TABLE IF EXISTS `label`;
DROP TABLE IF EXISTS `origin`;
DROP TABLE IF EXISTS `connection`;
DROP TABLE IF EXISTS `company`;
DROP TABLE IF EXISTS `company_group`;
DROP TABLE IF EXISTS `activity_field`;
DROP TABLE IF EXISTS `files`;
DROP TABLE IF EXISTS `user`;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `password` VARCHAR(255) NOT NULL,
  `mail` VARCHAR(255) NOT NULL UNIQUE, 
  `phone` VARCHAR(20) NULL
) ENGINE=InnoDB;

--
-- Content for table `user`
--

LOCK TABLES `user` WRITE;
INSERT INTO `user` (`name`, `password`, `mail`, `phone`) VALUES
("JohnA", "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4", "JohnA@company.com", "+33111111111"),
("JohnB", "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4", "JohnB@company.com", "+33222222222"),
("JohnC", "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4", "JohnC@company.com", "+33333333333"),
("JohnD", "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4", "JohnD@company.com", "+33444444444"),
("JohnE", "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4", "JohnE@company.com", "+33555555555"),
("Faker", "$argon2id$v=19$m=65536,t=5,p=1$FkjcCc0+F15P0N5TLh3ndQ$FkttWmV6YpXwaqtjrKfALtaYkwyHv2ongXDP/C6bvY4", "Faker", "+33666666666");

UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  `alt` VARCHAR(255) NULL
) ENGINE=InnoDB;

--
-- Content for table `files`
--

LOCK TABLES `files` WRITE;
INSERT INTO `files` (`url`, `alt`) VALUES
("testURL1", "testALT1"),
("testURL2", "testALT2"),
("testURL3", "testALT3"),
("testURL4", "testALT4"),
("testURL5", "testALT5");
UNLOCK TABLES;


-- ----------------------------------------------------------------------------
--
-- Table structure for table `activity_field`
--

CREATE TABLE `activity_field` (
  `id` TINYINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL
) ENGINE=InnoDB;

--
-- Content for table `activity_field`
--

LOCK TABLES `activity_field` WRITE;
INSERT INTO `activity_field` (`name`) VALUES
("Epicerie vrac"),
("Fabricant de pâtes"),
("Biscuiterie"),
("Autre"),
("Vente de thé et infusions"),
("Cosmétiques");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `company_group`
--

CREATE TABLE `company_group` (
  `id` TINYINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

--
-- Content for table `company_group`
--

LOCK TABLES `company_group` WRITE;
INSERT INTO `company_group` (`name`) VALUES
("Commerce"),
("Fournisseur"),
("Fabricant");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `company_name` VARCHAR(100) NULL,
  `address` VARCHAR(255) NULL,
  `postcode` INT NULL,
  `city` VARCHAR(255) NULL,
  `mail` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NULL,
  `description` VARCHAR(255) NULL,
  `file_id` INT NULL,
  `company_group_id` TINYINT NULL,
  `activity_field_id` TINYINT NULL,
  `user_id` INT NOT NULL,
  FOREIGN KEY (file_id) REFERENCES files(id),
  FOREIGN KEY (company_group_id) REFERENCES company_group(id),
  FOREIGN KEY (activity_field_id) REFERENCES activity_field(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
) ENGINE=InnoDB;

--
-- Content for table `company`
--

LOCK TABLES `company` WRITE;
INSERT INTO `company` (`company_name`, `address`, `postcode`, `city`, `mail`, `phone`, `description`, `file_id`, `company_group_id`, `activity_field_id`, `user_id`) VALUES
("Eco Vrac", "13, avenue du Maréchal Foch", 68100, "Mulhouse", "ecovrac@email.com", "+33-655-535-768", "desc test", NULL, 1, 1, 1),
("Valfleuri", "5, rue de la Charente", 68270, "Wittenheim", "valfleuri@email.com", "+33-755-552-764", "desc test", NULL, 1, 5, 2),
("DAO", "1664, avenue Saint-Maurice", 4100, "Manosque", "dao@email.com", "+33-655-527-008", "desc test", NULL, 1, 4, 3),
("Nat-ali", "ZAC de la Brosse, 3 Rue Nicolas Appert", 44400, "Reze", "nat-alie@email.com", "+33-655-536-223", "desc test", NULL, 2, 4, 4),
("Le petit épicier","6 rue des timoniers",29470,"Plougastel-Daoulas","le-petit-epicier@email.com","+33-655-586-499", "desc test", NULL, 2, 2, 5),
("Tagopia","48877 Buhler Circle",15963,"Longxing","qrisborough5@cisco.com","+86-726-641-0692", "desc test", NULL, 3, 3, 6),
("Plambee","386 Haas Crossing",45963,"Xiaozhi","bdobbison8@cbsnews.com","+86-732-798-6831", "desc test", NULL, 3, 4, 6);
UNLOCK TABLES;


-- ----------------------------------------------------------------------------
--
-- Table structure for table `connection`
--

CREATE TABLE `connection` (
  `id` INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `status` VARCHAR(30) NOT NULL,
  `retailer_id` INT NOT NULL,
  `supplier_id` INT NOT NULL,
  FOREIGN KEY (retailer_id) REFERENCES company(id),
  FOREIGN KEY (supplier_id) REFERENCES company(id)
) ENGINE=InnoDB;

--
-- Content for table `connection`
--

LOCK TABLES `connection` WRITE;
INSERT INTO `connection` (`status`, `retailer_id`, `supplier_id`) VALUES
("En cours de connexion", 2, 4),
("Connecté", 1, 4),
("Connecté", 1, 5),
("Connecté", 3, 5),
("Annulé", 2, 5);
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `origin`
--

CREATE TABLE `origin` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `country` VARCHAR(255) NULL,
  `region` VARCHAR(255) NULL,
  `file_id` INT NULL,
  FOREIGN KEY (file_id) REFERENCES files(id)
) ENGINE=InnoDB;

--
-- Content for table `origin`
--

LOCK TABLES `origin` WRITE;
INSERT INTO `origin` (`country`, `region`, `file_id`) VALUES
("France","Alsace", NULL),
("UE/NonUE", NULL, NULL),
("Afrique du Sud", NULL, NULL),
("Inde ", NULL, NULL),
("Colombie", NULL, NULL),
("Ethiopie", NULL, NULL),
("Guatemalas", NULL, NULL),
("Honduras", NULL, NULL),
("Pérou", NULL, NULL),
("France","Drome", NULL),
("Amérique Latine", NULL, NULL),
("Afrique", NULL, NULL),
("Bulgarie", NULL, NULL),
("Egypte", NULL, NULL),
("Chine", NULL, NULL),
("Cameroun", NULL, NULL),
("Togo", NULL, NULL);
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `label`
--

CREATE TABLE `label` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `file_id` INT NULL,
  FOREIGN KEY (file_id) REFERENCES files(id)
) ENGINE=InnoDB;

--
-- Content for table `label`
--

LOCK TABLES `label` WRITE;
INSERT INTO `label` (`name`, `file_id`) VALUES
("AB", NULL),
("Eurofeuille", NULL),
("Eurofeuille - FR", NULL),
("Savourez l'Alsace", NULL),
("Savourez l'Alsace - Produit du terroir", NULL),
("PME +", NULL),
("Alsace Excellence", NULL),
("Vegan Society", NULL),
("Fairtrade - Max Havelaar", NULL),
("Symbole des Producteurs Paysans - SPP", NULL);
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `allergen_category`
--

CREATE TABLE `allergen_category` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

--
-- Content for table `allergen_category`
--

LOCK TABLES `allergen_category` WRITE;
INSERT INTO `allergen_category` (`name`) VALUES
("Gluten"),
("Sésame"),
("Fruits à coque"),
("Crustacés"),
("Œuf"),
("Poisson"),
("Moutarde"),
("Lait"),
("Céleri"),
("Arachide"),
("Soja"),
("Mollusques"),
("Lupin"),
("Sulfites");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` TINYINT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

--
-- Content for table `category`
--

LOCK TABLES `category` WRITE;
INSERT INTO `category` (`name`) VALUES
("Boissons"),
("Épicerie sucrée"),
("Épicerie salée"),
("Produits frais"),
("Conserves"),
("Cosmétiques / Hygiène / Entretien"),
("Accessoires"),
("Autre"),
("Épices"),
("Huiles et condiments");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `detail` VARCHAR(255) NULL,
  `advise` VARCHAR(255) NULL,
  `category_id` TINYINT NULL,
  `allergen_category_id` INT NULL,
  `origin_id` INT NULL,
  `label_id` INT NULL,
  `recipe_idea` VARCHAR(255) NULL,
  FOREIGN KEY (category_id) REFERENCES category(id),
  FOREIGN KEY (allergen_category_id) REFERENCES allergen_category(id),
  FOREIGN KEY (origin_id) REFERENCES origin(id),
  FOREIGN KEY (label_id) REFERENCES label(id)
) ENGINE=InnoDB;

--
-- Content for table `products`
--

LOCK TABLES `products` WRITE;
INSERT INTO `products` (`product_name`, `detail`, `advise`, `category_id`, `allergen_category_id`, `origin_id`, `label_id`, `recipe_idea`) VALUES
("Sucre de canne non raffiné", "details test", "advise test", 2, 1, 1, 1, "recipe test"),
("Sucre de canne non raffiné", "details test", "advise test", 2, 1, 1, 1, "recipe test"),
("Sirop d'agave", "details test", "advise test", 2, 1, 1, 1, "recipe test"),
("Son d'avoine", "details test", "advise test", 8, 1, 1, 1, "recipe test"),
("Son d'avoine", "details test", "advise test", 8, 1, 1, 1, "recipe test"),
("Huile essentielle de citron", "details test", "advise test", 10, 1, 1, 1, "recipe test"),
("Huile essentielle de citron", "details test", "advise test", 10, 1, 1, 1, "recipe test"),
("Huile essentielle de citron", "details test", "advise test", 10, 1, 1, 1, "recipe test"),
("Acide tartarique", "details test", "advise test", 6, 1, 1, 1, "recipe test"),
("Acide tartarique", "details test", "advise test", 6, 1, 1, 1, "recipe test"),
("Bicarbonate de sodium", "details test", "advise test", 6, 1, 1, 1, "recipe test"),
("Bicarbonate de sodium", "details test", "advise test", 6, 1, 1, 1, "recipe test"),
("Farine de Quinoa", "details test", "advise test", 8, 1, 1, 1, "recipe test"),
("Farine de Quinoa", "details test", "advise test", 8, 1, 1, 1, "recipe test"),
("Farine de Quinoa", "details test", "advise test", 8, 1, 1, 1, "recipe test"),
("Gingembre", "details test", "advise test", 10, 1, 1, 1, "recipe test"),
("Gingembre", "details test", "advise test", 10, 1, 1, 1, "recipe test"),
("Poivre noir", "details test", "advise test", 10, 1, 1, 1, "recipe test"),
("Menthe poivrée", "details test", "advise test", 4, 1, 1, 1, "recipe test"),
("Menthe poivrée", "details test", "advise test", 4, 1, 1, 1, "recipe test");
UNLOCK TABLES;

-- ----------------------------------------------------------------------------
--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `owner_id` INT NOT NULL,
  `supplier_id` INT NOT NULL,
  `disponibility` TINYINT NOT NULL,
  `price_ttc` INT NULL,
  `price_ht` INT NULL,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (owner_id) REFERENCES company(id),
  FOREIGN KEY (supplier_id) REFERENCES company(id)
) ENGINE=InnoDB;

--
-- Content for table `stock`
--

LOCK TABLES `stock` WRITE;
INSERT INTO `stock` (`product_id`, `owner_id`,`supplier_id`, `disponibility`, `price_ttc`, `price_ht`) VALUES
(1, 1, 3, 0, 20, 19),
(2, 2, 4, 1, 40, 38),
(3, 3, 3, 0, 20, 19),
(4, 4, 4, 0, 20, 19),
(5, 5, 5, 1, 20, 19),
(6, 1, 3, 0, 20, 19),
(7, 2, 4, 1, 10, 9.5),
(8, 1, 5, 0, 20, 19),
(9, 2, 4, 0, 20, 19),
(10, 1, 5, 1, 20, 19),
(11, 2, 4, 1, 20, 19),
(12, 3, 5, 0, 20, 19),
(13, 4, 3, 1, 20, 19),
(14, 5, 4, 0, 20, 19),
(15, 1, 5, 1, 20, 19),
(16, 2, 3, 1, 20, 19),
(17, 1, 5, 0, 20, 19),
(18, 2, 5, 1, 20, 19),
(19, 2, 3, 0, 20, 19),
(20, 1, 5, 0, 20, 19);
UNLOCK TABLES;

-- ----------------------------------------------------------------------------