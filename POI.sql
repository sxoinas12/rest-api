CREATE TABLE `Points_of_Interest` (
	`id` INT(10) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255) NOT NULL,
	`description` VARCHAR(255),
	`lon` DECIMAL(15,2) NOT NULL,
	`lat` DECIMAL(15,2) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `POI_to_type` (
	`POI_id` INT(10) NOT NULL AUTO_INCREMENT,
	`Type_id` INT(10) NOT NULL,
	PRIMARY KEY (`POI_id`,`Type_id`)
);

CREATE TABLE `Types_of_POI` (
	`id` INT(10) NOT NULL,
	`type` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `POI_to_type` ADD CONSTRAINT `POI_to_type_fk0` FOREIGN KEY (`POI_id`) REFERENCES `Points_of_Interest`(`id`);

ALTER TABLE `POI_to_type` ADD CONSTRAINT `POI_to_type_fk1` FOREIGN KEY (`Type_id`) REFERENCES `Types_of_POI`(`id`);



INSERT INTO Types_of_POI(id,type)
VALUES (1,'Restaurant');

INSERT INTO Types_of_POI(id,type)
VALUES (2,'Park');

INSERT INTO Types_of_POI(id,type)
VALUES (3,'Museum');

INSERT INTO Types_of_POI(id,type)
VALUES (4,'Sport Club');

INSERT INTO Types_of_POI(id,type)
VALUES (5,'Bridge');






