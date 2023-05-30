-- MySQL dump 10.13  Distrib 5.7.32, for Linux (x86_64)
--
-- Host: localhost    Database: recipe
-- ------------------------------------------------------
-- Server version	5.7.32-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `display_name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'cakes','Ciasta'),(2,'salads','Sałatki'),(3,'soups','Zupy');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comment`
--

DROP TABLE IF EXISTS `Comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_recipe` int(11) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8pk8cly554ratoppj0oofgwa6` (`id_recipe`),
  CONSTRAINT `FK8pk8cly554ratoppj0oofgwa6` FOREIGN KEY (`id_recipe`) REFERENCES `Recipe` (`id`),
  CONSTRAINT `comment_recipe_fk` FOREIGN KEY (`id_recipe`) REFERENCES `Recipe` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment`
--

LOCK TABLES `Comment` WRITE;
/*!40000 ALTER TABLE `Comment` DISABLE KEYS */;
INSERT INTO `Comment` VALUES (1,1,'Pyszne, chrupiące ciasto. Idealny przepis na imprezę, Sylwestra i karnawał!'),(2,1,'Sprawdzony przepis na najlepsze ciasto.'),(3,2,'Prosty przepis!'),(4,3,'Smaczne!'),(76,8,'?wietny przepis!'),(77,8,'pyszne!'),(78,15,'smaczne!');
/*!40000 ALTER TABLE `Comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Recipe`
--

DROP TABLE IF EXISTS `Recipe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Recipe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `ingredients` text NOT NULL,
  `method` text NOT NULL,
  `image` text,
  `categoryName` varchar(255) NOT NULL DEFAULT 'cakes',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Recipe`
--

LOCK TABLES `Recipe` WRITE;
/*!40000 ALTER TABLE `Recipe` DISABLE KEYS */;
INSERT INTO `Recipe` VALUES (1,'Tarta czekoladowa','180 g mąki\n50 g kakao\n80 g cukru pudru\nmała szczypta soli\n100 g masła (zimnego)\n1 małe jajko (lub 1 żółtko + 1 - 2 łyżki wody)','Do miski lub na stolnicę wsypać mąkę, dodać kakao, cukier puder oraz sól i wymieszać.\nDodać pokrojone na kawałeczki masło i siekać składniki nożem lub mieszadłem miksera aż powstanie drobna kruszonka.\nWówczas dodać jajko i miksować lub zagniatać ręcznie, łącząc składniki w jednolite ciasto. Włożyć do lodówki na ok. 20 - 30 minut.\nCiasto rozwałkować pomiędzy dwoma arkuszami papieru do pieczenia na placek większy niż średnica formy (używamy takiej o średnicy 22 - 23 cm). \nOdkleić jeden arkusz papieru, włożyć ciasto do formy, odkleić górny papier, wykleić boki formy ciastem i odciąć wystające brzegi ciasta powyżej formy. \nSpód podziurkować widelcem i wstawić do lodówki na czas nagrzania piekarnika do 180 stopni C.\nCiasto nakryć folią aluminiową (spód i boki), na spód wysypać obciążenie (suchą fasolę, ryż) i wstawić do piekarnika. Piec przez 20 minut. Zdjąć folię z obciążeniem i piec jeszcze przez ok. 10 minut. Wyjąć i ostudzić.','tarta_czekoladowa.jpg','cakes'),(2,'Rolada z ciasta marchewkowego','2 marchewki (ok. 280 g)\n3 duże jaja\n1/2 szklanki cukru\n2 łyżki oleju roślinnego\n3/4 szklanki mąki pszennej\n1 łyżka cukru wanilinowego\nszczypta soli\n1 łyżeczka proszku do pieczenia\n1/2 łyżeczki sody oczyszczonej\n1 łyżeczka cynamonu\n1/3 łyżeczki mielonego imbiru','Jajka, serek, masło i marchewkę wyjąć wcześniej z lodówki i ogrzać. Blaszkę do pieczenia o wymiarach ok. 25 x 33 cm posmarować tłuszczem, położyć papier do pieczenia i z wierzchu też posmarować go tłuszczem. Marchewkę obrać i zetrzeć na tarce o małych oczkach. Piekarnik nagrzać do 175 stopni C. Jajka ubijać przez ok. 3 minuty na puszysto, następnie stopniowo, po łyżce, wsypywać cukier cały czas ubijając. Na koniec stopniowo wlewać olej ubijając składniki. W oddzielnej misce wymieszać mąkę z cukrem wanilinowym, solą, proszkiem, sodą, cynamonem i imbirem. Suche składniki wsypać do ubitej masy i delikatnie wymieszać łyżką. Następnie dodać marchewkę lekko odciśniętą w dłoni z soku i ponownie wymieszać. Wyłożyć do przygotowanej formy i wstawić do piekarnika na ok. 17 - 20 minut. Ściereczkę kuchenną wysypać przez sitko cukrem pudrem i wyłożyć na to ciasto do góry dnem. Odkleić z wierzchu papier i zawinąć roladę w ściereczkę wzdłuż dłuższego boku. Odłożyć do całkowitego ostudzenia.','rolada_z_ciasta_marchewkowego.jpg','cakes'),(3,'Ciasto kruche z malinami','200 g mąki\n150 g zimnego masła\n50 g cukru\nszczypta soli\n2/3 łyżeczki proszku do pieczenia\n3 żółtka','Formę o wymiarach 20 x 30 cm posmarować masłem i wyłożyć papierem do pieczenia (spód i boki). Piekarnik nagrzać do 170 stopni C. Mąkę wsypać na stolnicę lub do misy miksera, dodać pokrojone na kawałeczki zimne masło, cukier, sól i proszek do pieczenia. Siekać nożem na stolnicy lub miksować mikserem lub rozcierać palcami na drobną kruszonkę, następnie dodać żółtka (białka zachować do bezy) i zagnieść gładkie ciasto. Uformować z niego kulę. Ciasto pokroić nożem na plasterki i wyłożyć nimi spód oraz ok. 2 cm boków, ugniatając ciasto palcami. Spód podziurkować widelcem.','ciasto_kruche_z_malinami.jpg','cakes'),(4,'Tarta brzoskwiniowa z brzoskwiniami','180 g mąki\n4 łyżki kakao\n70 g cukru\n120 g masła (zimnego)\n1 małe jajko','Ciasto i kruszonka: Mąkę wsypać do miski, dodać kakao, cukier oraz pokrojone na kawałeczki zimne masło. Miksować mieszadłem miksera aż powstanie drobna kruszonka. Dodać jajko i zagnieść ciasto łącząc składniki w gładką kulę. Rozpłaszczyć je i zawinąć w folię, włożyć do lodówki na godzinę. Formę na tartę o średnicy ok. 23 - 24 cm posmarować masłem. Odłożyć ok. 1/4 część ciasta i włożyć do lodówki. Resztę ciasta rozwałkować podsypując mąką, wyłożyć spód i boki formy, włożyć do lodówki na około 1/2 godziny. Piekarnik nagrzać do 190 stopni C. Ciasto w formie okryć folią aluminiową (spód i boki). Na spodzie rozsypać obciążenie np. w postaci suchej fasoli lub ryżu (do wielokrotnego wykorzystania). Piec przez 15 minut, następnie zdjąć folię z obciążeniem, ustawić 180 stopni C i piec jeszcze przez ok. 15 minut. Wyjąć formę z ciastem, piekarnika nie wyłączać. Masa serowa: Twaróg wymieszać z cukrem, budyniem w proszku i wanilią, następnie dodać jajko i jeszcze raz wymieszać do połączenia się składników. Brzoskwinie pokroić na cząstki. Masę serową wyłożyć na upieczony spód, ułożyć cząstki brzoskwiń i posypać resztą ciasta startą na tarce i uformowaną w palcach na kruszonkę. Wstawić do piekarnika i piec przez 20 minut. Wyjąć z piekarnika i pokroić.','tarta_sernikowa_z_brzoskwiniami.jpg','cakes'),(5,'Ciasto Snickers','720 g herbatników\n1 puszka (510 g) masy kajmakowej lub krówkowej o smaku waniliowym\n70 g orzeszków ziemnych smażonych i solonych\n150 g masła orzechowego\n200 g masła lub masła roślinnego','Odlać 1 szklankę mleka i dokładnie wymieszać je (np. rózgą) z żółtkami, mąką pszenną i ziemniaczaną oraz cukrem. Resztę mleka zagotować (dokładnie, aż zacznie kipieć), następnie wlewać do niego mieszankę mleka, mąki i żółtek, jednocześnie energicznie mieszając. Zagotować. Po zagotowaniu gotowy budyń odstawić z ognia, przelać do czystej miski i całkowicie ostudzić (na wierzch można położyć folię spożywczą aby nie zrobił się kożuch). Miękkie masło ubijać przez ok. 3 minuty aż się napuszy, następnie, w krótkich odstępach czasu, dodawać budyń ciągle ubijając. Zmiksować z połową masy kajmakowej i całą ilością masła orzechowego. Większą prostokątną formę (ok. 25 cm x 36 cm) wyłożyć papierem do pieczenia. Układać warstwami na przemian herbatniki i krem, otrzymując 4 lub 5 takich warstw. Ostatnią warstwę herbatników posmarować pozostałą masą kajmakową (rozmiksowaną, aby łatwiej się rozprowadzała). Posypać posiekanymi orzeszkami i polać czekoladą roztopioną i wymieszaną z olejem. Schłodzić w lodówce lub innym chłodnym miejscu. Najlepiej przygotować dzień wcześniej.','ciasto_snickers_bez_pieczenia.jpg','cakes'),(6,'Ciasto Michałek','6 jajek (ogrzane)\n3/4 szklanki cukru\n1 szklanka mąki pszennej\n3 łyżki kakao\n1 łyżeczka proszku do pieczenia\n1/2 łyżeczki sody\n1/2 szklanki oleju\ndo nasączenia: 1/2 szklanki zaparzonej kawy + 1/3 szklanki likieru lub innego alkoholu','Ogrzane jajka ubić z cukrem na puszystą i jasną masę (ok. 10 minut). W oddzielnej misce wymieszać mąkę z kakao, proszkiem do pieczenia i sodą. Przesiać przez sitko bezpośrednio do masy. Wlać olej i całość delikatnie zmiksować na jednolitą masę. Wyłożyć do formy o wymiarach ok. 22 x 33 cm wyścielonej papierem do pieczenia i wstawić do piekarnika nagrzanego do 180 stopni C. Piec do suchego patyczka przez ok. 20 minut. Wyjąć i ostudzić, następnie przekroić poziomo na 2 blaty. 3 szklanki mleka zagotować. Do pozostałej 1 szklanki mleka wsypać 2 budynie, cukier i mąkę. Wymieszać rózgą na jednolitą masę. Wlewać stopniowo do gotującego się mleka i jednocześnie mieszać energicznie rózgą. Gotować przez ok. 2 minuty (budyń ma się zagotować). Całkowicie ostudzić np. na dworze lub w misce z zimną wodą. Cukierki Michałki zmielić w melakserze lub drobno posiekać, wymieszać z kakao. Miękkie masło utrzeć (ubić) na puszysto, następnie stopniowo dodawać rozdrobnione cukierki cały czas ubijając (odłożyć ok. pół szklanki cukierków do dekoracji wierzchu). Następnie dodawać stopniowo po kilka łyżek chłodnego budyniu cały czas ubijając krem. Spód ciasta włożyć z powrotem do formy, nasączyć połową mieszanki kawy i alkoholu, wyłożyć dżem a następnie krem. Przykryć drugą połową ciasta i ponownie nasączyć.','ciasto_michalek.jpg','cakes'),(7,'Sernik z malinami i brzoskwiniami','250 g mąki pszennej\n3 łyżki naturalnego kakao\n1/2 szklanki cukru\n1 łyżeczka proszku do pieczenia\nszczypta soli\n150 g zimnego masła\n1 jajko','Piekarnik nagrzać do 180 stopni C. Dno tortownicy o średnicy min. 26 cm (lub prostokątną blaszkę 20 x 30 cm) wyłożyć papierem do pieczenia. Zapiąć obręcz tortownicy wypuszczając papier na zewnątrz. Do misy miksera lub na stolnicę wsypać mąkę, dodać kakao, cukier, proszek do pieczenia, sól oraz pokrojone w kostkę zimne masło. Miksować mieszadłem miksera lub siekać składniki na desce aż powstanie drobna kruszonka (można też użyć melaksera lub rozcierać składniki palcami). Dodać jajko i zagnieść składniki w jednolite ciasto. Ciasto podzielić na 2 części, jedną większą od drugiej. Większą część pokroić na plasterki i wyłożyć nimi spód oraz 1 - 2 cm boków formy, doklejając palcami brakujące miejsca. Do misy miksera włożyć twaróg sernikowy, cukier, proszek budyniowy oraz mąkę ziemniaczaną. Zmiksować do połączenia się składników, następnie dodać jajka i znów zmiksować do połączenia się składników. Wyłożyć na spód, następnie wyłożyć maliny i pokrojone brzoskwinie. Posypać resztą ciasta startego na tarce o dużych oczkach. Wstawić do piekarnika i piec przez ok. 50 minut. Wyjąć z piekarnika i całkowicie ostudzić. Po ostudzeniu sernik jest gotowy, ale najlepiej wstawić go do lodówki aby masa serowa bardziej stężała. ','sernik_z_malinami_brzoskwiniami.jpg','cakes'),(8,'Ciasto z wiśniami','2 szklanki (300 g) mąki pszennej\nszczypta soli\n1 łyżeczka proszku do pieczenia\n1/2 szklanki cukru\n200 g masła (zimnego)\n1 jajko','Prostokątną formę o wymiarach 20 x 30 cm posmarować masłem i wyłożyć papierem do pieczenia. Piekarnik nagrzać do 180 stopni C. Do miski wsypać mąkę, dodać sól, proszek do pieczenia, cukier oraz pokrojone w kosteczkę zimne masło. Rozdrabniać składniki aż powstanie drobna kruszonka (palcami, mieszadłem miksera lub siekać nożem na stolnicy). Dodać jajko i połączyć składniki w gładkie oraz jednolite ciasto. Uformować kulę, podzielić na 2 części. Jedną część ciasta włożyć do lodówki, drugą pokroić na plasterki i wyłożyć nimi spód formy, ugnieść palcami na równy placek. Podziurkować widelcem.','ciasto_z_wisniami_budyniem.jpg','cakes'),(9,'Napoleonka','3 szklanki mąki pszennej\n250 g masła lub margaryny\n1 całe jajko\n1 żółtko\n2 łyżki gęstej śmietany (z kubeczka, kwaśnej, 18%)\n4 całe jajka\n120 g cukru\n16 łyżeczek mąki pszennej\n2 opakowania cukru wanilinowego\n1 litr mleka\n','Zagnieść ciasto z podanych składników: mąkę przesiać na stolnicę, dodać pokrojone w kosteczkę masło lub margarynę i siekać dokładnie nożem aż powstanie drobna kruszonka. Dodać jajko, żółtko i wymieszać. Ciasto można też zagnieść w mikserze planetarnym. Zacząć zagniatać ciasto łącząc składniki w jednolitą kulę, pod koniec dodać śmietanę. Podzielić na 2 części, zawinąć w folię i włożyć do lodówki na godzinę. Piekarnik nagrzać do 180 stopni C. Obie części ciasta cieniutko rozwałkować i piec w blaszkach o wymiarach ok. 25 x 36 cm wyłożonych papierem do pieczenia przez ok. 20-25 minut na złoty kolor. Po upieczeniu ostudzić. Jajka z cukrem rozbić widelcem. Dodać mąkę, cukier wanilinowy i wymieszać. Następnie wlać mleko, postawić na ogniu i mieszać aż do rozpuszczenia się składników i otrzymania gładkiej masy. Po zagotowaniu odstawić z ognia i przestudzić. Letnią masę budyniową wylać na pierwszy placek. Przykryć drugim plackiem i posypać cukrem pudrem. Odstawić na ok. 3 godziny.','napoleonka.jpg','cakes'),(10,'Miodownik','100 g miodu\n50 g cukru\n50 ml mleka\n30 ml rumu\n125 g masła\n2 i 1/2 łyżeczki sody oczyszczonej\n500 g mąki pszennej tortowej\n2 jajka\n','Miód rozpuścić w rondelku z cukrem, wymieszać. Do gorącej masy dodać mleko, rum i masło, wymieszać do rozpuszczenia, na koniec połączyć z sodą, przestudzić.\nDo większej miski wsypać mąkę, wlać masę z rondelka i wymieszać. Dodać jajka i połączyć wszystkie składniki w gładkie ciasto. Wyłożyć je na podsypaną mąką stolnicę i uformować gładką kulę. Podzielić ją na 6 równych części. Piekarnik nagrzać do 180 stopni C (góra i dół bez termoobiegu). Dno formy o średnicy 24 cm wyłożyć papierem do pieczenia, zapiąć obręcz wypuszczając papier na zewnątrz. Każdą część ciasta rozwałkować na placek o średnicy formy, podsypując w razie potrzeby mąką. Do tortownicy włożyć pierwszy placek z ciasta i wstawić do piekarnika. Piec przez ok. 6 - 7 minut na delikatnie złoty kolor (nie przepiec, bo blaty za mocno stwardnieją). Jeśli mamy 2 tortownice, możemy piec jednocześnie 2 placki. Ostudzić.','miodownik.jpg','cakes'),(11,'Szarlotka z bitą śmietaną','4 jajka (w temp. pokojowej)\n50 g cukru pudru\n100 g mąki\n25 g masła\ndo nasączenia: 1/2 szklanki herbaty z cytryną\n900 g prażonych jabłek (1 litrowy słoik) *\n1 galaretka cytrynowa\n','Jajka wyjąć wcześniej z lodówki aby się ogrzały. Dno okrągłej formy o średnicy 25 - 26 cm wyłożyć papierem do pieczenia. Piekarnik nagrzać do 180 stopni C. Masło roztopić i ostudzić.\nCałe jajka ubijać razem z cukrem pudrem przez około 10 minut na puszysty, gęsty i jasny krem. Przesiać przez sitko (koniecznie!) połowę mąki do ubitego kremu i bardzo delikatnie wymieszać szpatułką lub krótko zmiksować na najmniejszych obrotach miksera. Powtórzyć z drugą porcją mąki. Następnie dodać rozpuszczone oraz ostudzone (koniecznie!) masło i delikatnie wymieszać. Przelać ciasto do przygotowanej formy i włożyć do nagrzanego piekarnika. Piec przez około 15 minut lub do lekkiego zrumienienia wierzchu. Wyjąć i ostudzić. Nasączyć herbatą z cytryną.','szarlotka_z_bita_smietana.jpg','cakes'),(12,'Tort makowy','1 i 1/2 szklanki maku\n1 szklanka cukru pudru\n7 jaj\n1 łyżka miodu\n5 łyżek bułki tartej\n50 g orzechów włoskich\nolejek migdałowy\n','Mak wsypać do garnka, zalać wrzątkiem, gotować przez 15 minut. Dokładnie odcedzić na sitku, ostudzić i zmielić dwukrotnie w maszynce (mak można zmielić w termomiksie). Żółtka utrzeć z cukrem pudrem, następnie stopniowo dodawać mak. Na koniec dodać miód, bułkę tartą, rozdrobnione orzechy, olejek migdałowy i wymieszać. Białka ubić na sztywną pianę i delikatnie wmieszać w masę makową. Wyłożyć do tortownicy o średnicy 25 cm i piec przez ok. 40 minut w 180 stopniach C. Po ostudzeniu przekroić na 2 blaty. Jajka ubić na parze z dodatkiem cukru. Pod koniec dodawać kawę, i ubijać dalej aż kawa się rozpuści. Gdy masa już się podgrzeje, zdjąć miskę z pary i dalej ubijać już bez podgrzewania. Masło utrzeć na puszystą masę, stopniowo dodawać przestudzoną masę z ubitych jajek cały czas ubijając. Na koniec dodawać małymi porcjami spirytus. Dolny blat makowy nasączyć połową mieszanki amaretto i wody, wyłożyć 1/3 masy kawowej, ułożyć warstwę bezów i przykryć 1/3 masy kawowej. Położyć drugi krążek makowy, nasączyć resztą mieszanki, posmarować wierzch oraz boki resztą kremu. Udekorować pozostałą bezą i orzechami. Wstawić do lodówki na minimum 1 i 1/2 godziny.','tort_makowy.jpg','cakes'),(13,'Sałatka grecka','2 pomidory\n4 ogórki gruntowe lub 2 szklarniowe\n1/2 czerwonej cebuli\n1/2 szklanki czarnych oliwek\n250 g oryginalnego, greckiego sera feta\n4 łyżeczki suszonego oregano\n4 łyżki oliwy extra vergine\nświeżo zmielony pieprz','Pomidory pokroić na ćwiartki, usunąć szypułki, następnie pokroić na jeszcze mniejsze kawałki. Ogórki obrać (można pozostawić miejscami paseczki zielonej skórki), przekroić wzdłuż na pół a następnie na grubsze półplasterki. Cebulę cienko poszatkować. Oliwki przekroić na połówki. Wszystkie składniki umieścić w jednej większej salaterce lub w 4 mniejszych, doprawić świeżo zmielonym pieprzem. Na wierzchu położyć plasterki sera feta. Posypać suszonym oregano i polać oliwą. Można doprawić solą, ale ser feta jest już dość słony.','salatka_grecka.jpg','salads'),(14,'Sałatka gyros','3 pojedyncze filety kurczaka\n2 łyżki stołowe przyprawy gyros/kebab\n1 średnia czerwona cebula\n1 duży por\n1 średni słoik ogórków konserwowych (np. korniszonów)\n1 puszka kukurydzy\n1 czerwona papryka\n1/2 kapusty pekińskiej\n4 łyżki ketchupu pikantnego\n2 łyżki oleju roślinnego\n2/3 szklanki majonezu','Filety opłukać, osuszyć, oczyścić z błonek i kostek. Pokroić na małe paseczki lub w kostkę. Wymieszać z przyprawą gyros/kebab i odłożyć na ok. 1/2 godziny lub dłużej jeśli mamy czas. W międzyczasie przygotować warzywa. Czerwoną cebulę obrać, przekroić na 4 części, następnie na plasterki, oprószyć solą. Odciąć korzonki pora, zielone liście oraz zewnętrzną 1 - 2 warstwy. Przekroić wzdłuż na 4 części i opłukać. Posiekać na desce, włożyć na sitko i przelać wrzątkiem z czajnika, odsączyć. Ogórki konserwowe pokroić w kosteczkę, kukurydzę odcedzić na sitku z zalewy, paprykę pokroić w kosteczkę, kapustę pekińską opłukać, osuszyć i drobno poszatkować. Na większej patelni podgrzać olej, włożyć kurczaka i obsmażać na złoty kolor z każdej strony (w sumie ok. 10 minut). W trakcie smażenia doprawić mięso solą oraz pieprzem. Przełożyć na dno salaterki o średnicy 20 cm. Polać ketchupem, przykryć plasterkami czerwonej cebuli, następnie układać kolejne warstwy składników: ogórki, kukurydzę, pora, paprykę, majonez wymieszany ze śmietaną lub jogurtem, a na koniec przykryć posiekaną kapustą pekińską.','salatka_gyros.jpg','salads'),(15,'Sałatka ziemniaczana','awokado\nsok z limonki lub cytryny\nugotowane jajka\nsałata i kolendra lub szczypiorek\noliwa extra vergine i musztarda francuska','awokado obrać, pokroić w kostkę, skropić sokiem z limonki lub cytryny. Do miseczki włożyć ziemniaki, awokado, dodać jajko pokrojone na kawałki, poszarpaną sałatę i kolendrę lub szczypiorek. Doprawić solą, pieprzem oraz łyżką oliwy extra vergine wymieszaną z 2 łyżeczkami musztardy francuskiej.','salatka_ziemniaczana.jpg','salads'),(16,'Sałatka Cezar','1/2 główki sałaty rzymskiej\n8 łyżek tartego parmezanu lub grana padano\n10 cm kawałek bagietki lub 1 ciabatta\n1 łyżka masła\n1 ząbek czosnku\n4 łyżki majonezu\n1 mały ząbek czosnku\n1 łyżeczka musztardy\n1 łyżeczka soku z cytryny (lub octu winnego)\n1 łyżeczka sosu worcestershire\nsól i świeżo zmielony czarny pieprz','Przygotować sos Cezar: czosnek drobno posiekać, posolić i rozetrzeć na desce końcem noża (lub przecisnąć przez praskę). Włożyć do miski, dodać majonez, musztardę, sok z cytryny lub ocet winny i sos worcestershire. Wymieszać, doprawić świeżo zmielonym czarnym pieprzem i w razie potrzeby solą. Sałatę opłukać, osuszyć i pokroić na kawałki. Włożyć do salaterki, doprawić solą i pieprzem, wymieszać z sosem i połową tartego sera. Pieczywo pokroić w kosteczkę, wrzucić na suchą patelnię i delikatnie tostować z każdej strony. Gdy grzanki będą już zrumienione zmniejszyć ogień do minimum, dodać łyżkę masła wymieszaną ze startym czosnkiem i mieszać aż grzanki pokryją się masłem czosnkowym. Dodać do sałatki, całość posypać resztą sera.','salatka_cezar.jpg','salads'),(17,'Zupa szpinakowa','1 łyżka masła\n1 łyżka oliwy\n1 cebula\n1 por\n300 g ziemniaków\n600 ml bulionu\n1 ząbek czosnku\n100 g szpinaku\n125 ml śmietanki 18% (do zup i sosów, z kartnika) lub 250 ml mleka','W większym garnku na maśle i oliwie zeszklić pokrojoną w kosteczkę cebulę.\nOdkroić zielone liście pora, pozostawiając białą i jasnozieloną część. Przekroić ją wzdłuż na 2 części, opłukać i pokroić na plasterki. Wrzucić do garnka, posolić i podsmażać co chwilę mieszając przez ok. 3 - 4 minuty. Dodać obrane i pokrojone w kosteczkę ziemniaki, wymieszać i smażyć jeszcze przez około minutę. Wlać gorący bulion i zagotować na większym ogniu. Zmniejszyć nieco ogień, przykryć i gotować przez ok. 15 minut do miękkości warzyw. Dodać obrany i przepołowiony ząbek czosnku, opłukane liście szpinaku (lub rozmrożony szpinak), wymieszać i zagotować. Gotować przez ok. 45 sekund, następnie zmiksować w pojemniku blendera z dodatkiem śmietanki lub mleka.','zupa_szpinakowa.jpg','soups'),(18,'Zupa borowikowa','20 - 30 g suszonych borowików\n1 łyżka masła\n1 łyżka oliwy extra vergine\n1 mała cebula\n1 mała marchewka\n4 ziemniaki\n1/3 szklanki białego wina wytrawnego (można pominąć)\n1 litr bulionu drobiowego lub jarzynowego\nkilka listków świeżego rozmarynu lub ewentualnie 1/2 łyżeczki suszonego tymianku\n100 ml śmietanki 30% lub 18% (do zup i sosów)','Suszone borowiki zalać szklanką zimnej wody i odstawić na noc lub na kilka godzin do namoczenia. Po namoczeniu większe kawałki grzybów pokroić na mniejsze kawałeczki. W garnku na rozgrzanym maśle i oliwie zeszklić pokrojoną w kosteczkę cebulę. Dodać obrane i pokrojone w kosteczkę marchewkę oraz ziemniaki, smażyć co chwilę mieszając przez ok. 3 minuty. Wlać wino i gotować przez chwilę. Następnie zwiększyć ogień, dodać grzyby wraz z wodą, w której się moczyły oraz gorący bulion. Zagotować. Doprawić solą, pieprzem oraz rozmarynem lub tymiankiem. Zmniejszyć ogień, przykryć i gotować pod przykryciem przez około 20 minut do miękkości składników. Odstawić z ognia i wlać śmietankę, w razie potrzeby doprawić solą i pieprzem. Podawać z natką pietruszki oraz grzankami lub łazankami.','zupa_borowikowa.jpg','soups'),(19,'Zupa fasolkowa','1 łyżka oliwy\n1 łyżka masła\n1 cebula\n1/2 pora\n1 ząbek czosnku\n1 marchewka\n1 mała pietruszka\n3 ziemniaki\n1 i 1/2 litra bulionu (drobiowego lub jarzynowego)\n1/2 łyżeczki kurkumy w proszku\n400 g zielonej lub żółtej fasolki szparagowej (poza sezonem mrożonej)\n1 łyżka posiekanego koperku\n200 g śmietany 18% lub 80 ml śmietanki 18% z kartonika (do zup i sosów)','W garnku na oliwie i maśle poddusić pokrojoną w kosteczkę cebulę. Pora opłukać, obrać z zewnętrznych grubszych warstw i odciąć zielone końce. Pozostałą białą i jasnozieloną część przekroić wzdłuż na 4 części, opłukać je i pokroić na plasterki.\nDodać do garnka z cebulą i razem podsmażać przez ok. 2 minuty. Pod koniec dodać przeciśnięty przez praskę czosnek.\nDodać obraną i pokrojoną na cienkie plasterki marchewkę oraz pietruszkę wymieszać. Ziemniaki obrać i pokroić w kostkę. Dodać do garnka i mieszając podsmażać ok. 2 minuty.\nWlać gorący bulion, doprawić solą i pieprzem, dodać kurkumę i zagotować. Przykryć i gotować przez ok. 15 minut. W połowie gotowania dodać opłukaną na sitku (i rozmrożoną jeśli używamy mrożonej) zieloną fasolkę.\nOdstawić z ognia i dodać posiekany koperek oraz śmietanę (gęstą z kubka należy wcześniej zahartować kilkoma łyżkami zupy, natomiast słodką śmietankę z kartonika można wlać bezpośrednio do zupy).','zupa_fasolkowa.jpg','soups'),(20,'Zupa paprykowa','1 łyżka masła\n1 łyżka oliwy\n1 cebula\n2 ząbki czosnku\n1 marchewka\n3 czerwone papryki\n2 i 1/2 szklanki bulionu\n2 łyżki koncentratu pomidorowego\nprzyprawy: sól, pieprz, 1 łyżeczka tymianku, 1 łyżka słodkiej papryki, 2 łyżki czosnku niedźwiedziego, 1 łyżeczka płatków chili lub 1/2 łyżeczki ostrej papryki','W garnku na maśle i oliwie zeszklić pokrojoną w kostkę cebulę. Dodać pokrojony na plasterki czosnek i chwilę razem podsmażać. Dodać obraną i startą na tarce o dużych oczkach marchewkę i wymieszać. Dodać pokrojoną w kostkę paprykę i mieszając co chwilę podsmażać składniki przez ok. 5 minuty. Dodać przyprawy i wymieszać. Wlać gorący bulion, dodać koncentrat pomidorowy, doprawić w razie potrzeby solą i pieprzem i zagotować. Zmniejszyć ogień i gotować pod lekko uchyloną pokrywą przez ok. 10 minut. Po ugotowaniu zmiksować (najlepiej w stojącym mikserze planetarnym) lub blenderem ręcznym. Podawać z ulubionymi dodatkami.','zupa_paprykowa.jpg','soups'),(21,'Zupa gulaszowa','2 łyżki masła\n1 cebula\n1 ząbek czosnku\n300 g łopatki wieprzowej\n1 łyżeczka mielonej słodkiej papryki\nszczypta ostrej papryki w proszku\n2 gałązki tymianku lub 1 łyżeczka suszonego\n1/2 szklanki białego wina\n3 i 1/2 szklanki bulionu\n700 g świeżych pomidorów lub 250 ml zmiksowanych pomidorów z puszki\n1 łyżeczka koncentratu pomidorowego\n1 czerwona papryka\n3 ziemniaki\n2 łyżki posiekanej natki pietruszki','W garnku na maśle poddusić pokrojoną w kosteczkę cebulę oraz przepołowiony czosnek. Dodać pokrojone w kosteczkę mięso i obsmażyć z każdej strony. Dodać papryki w proszku, tymianek i chwilę razem podsmażyć. Wlać wino i pogotować przez 1 - 2 minuty, następnie wlać bulion (najlepiej gorący) i zagotować. Dodać świeże pomidory (obrane ze skórek, pozbawione nasion i pokrojone w kosteczkę) lub zmiksowane pomidory z puszki oraz koncentrat pomidorowy. Doprawić solą, pieprzem, przykryć garnek pokrywą i gotować przez ok. 1 i 1/2 godziny. Dodać pokrojoną w kosteczkę paprykę oraz ziemniaki, wymieszać, przykryć i gotować jeszcze przez ok. pół godziny lub do miękkości ziemniaków. Posypać posiekaną natką.','zupa_gulaszowa.jpg','soups'),(22,'Zupa z cukinii','600 g cukinii\n1 łyżka oliwy\n2 łyżki masła\n1 duża cebula\n1 ząbek czosnku\n800 ml bulionu drobiowego\n1/4 szklanki śmietanki 30%','W garnku z grubym dnem roztopić masło z oliwą. Dodać pokrojoną w kosteczkę cebulę i zeszklić ją. Dodać przeciśnięty przez praskę czosnek i jeszcze chwilę razem podsmażać. Dodać pokrojoną w kostkę cukinię i mieszając co chwilę smażyć przez ok. 2 minuty. Zalać bulionem i zagotować. Doprawić solą, pieprzem i gotować przez ok. 25 minut pod przykryciem na umiarkowanym ogniu. Zupę zmiksować w stojącym blenderze na krem, pod koniec dodać śmietankę. Podawać ze szczypiorkiem i grzankami czosnkowymi lub pokruszoną fetą.','zupa_z_cukinii.jpg','soups');
/*!40000 ALTER TABLE `Recipe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (4,'admin','jGl25bVBBBW96Qi9Te4V37Fnqchz/Eu4qB9vKrRIqRg=','admin'),(71,'cook','A/uUGAqg/yxYPZe7sfxthKa6ffW948JnRZu5qbjJhBs=','user'),(74,'user','BPiZbadjt6lpsQKO4wB1aerzpjVIbdqyEdUSyFud+Ps=','user'),(75,'asdf','8OTC92xYkW7CWPJGhRvqCR0U1CR6L8PhhpRGGxgW4Ts=','user');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (79),(79),(1),(1),(1);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-08 22:45:19
