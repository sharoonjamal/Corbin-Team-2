CREATE TABLE `characters` (
  `character_id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `gender` text NOT NULL,
  `country` text NOT NULL,
  `FIDE_rating` bigint NOT NULL,
  PRIMARY KEY (`character_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

 

CREATE TABLE `fans` (   `id` bigint NOT N... by Aaron Jamal
Aaron Jamal
Yesterday 3:56 PM

CREATE TABLE `fans` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `country` text,
  `favorite_character_id` bigint NOT NULL,
  `FIDE_rating` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `character_id_idx` (`favorite_character_id`),
  CONSTRAINT `fk_favorite_character` FOREIGN KEY (`favorite_character_id`) REFERENCES `characters` (`character_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

has context menu