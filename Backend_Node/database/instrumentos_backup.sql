/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`instrumentosDB` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `instrumentosDB`;

/*Table structure for table `articulo` */

DROP TABLE IF EXISTS `instrumento`;

CREATE TABLE `instrumento` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `instrumento` varchar(45) DEFAULT NULL,
  `marca` varchar(45) DEFAULT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `imagen` varchar(2500) DEFAULT NULL,
  `precio` decimal DEFAULT NULL,
  `costoEnvio` decimal DEFAULT NULL,
  `cantidadVendida` integer DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `articulo` */

INSERT INTO instrumento(instrumento, marca, modelo, imagen, precio, costoEnvio, cantidadVendida, descripcion) VALUES ('Flauta', 'Yamaha', 'Yrs23', 'xx', 1249.99, 500, 5, 'Esto es una flauta'), ('Guitarra', 'Fender Stratocaster', 'Surf', 'xa', 98000.99, 0, 2, 'Su madera de tilo tiene una densidad media lo que proporciona un tono suave con medios enfatizados'), ('Bajo', 'Aston', 'Ebs100-20', 'xb', 25099.99, 300, 3, 'Esto es un bajo'), ('Microfono', 'Shure', 'SM58-LC', 'xd', 29200.00, 499, 2, 'Esto es un microfono'), ('Bateria', 'Mapex Prodigy', '5254cdr', 'xe', 125000.00, 0, 1, 'Esto es una bateria');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

