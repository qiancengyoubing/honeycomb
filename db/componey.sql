/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : honeycomb

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2019-03-04 10:35:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `componey`
-- ----------------------------
DROP TABLE IF EXISTS `componey`;
CREATE TABLE `componey` (
  `id` int(11) NOT NULL,
  `name` char(255) NOT NULL,
  `regist_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `legal_person` char(255) DEFAULT NULL,
  `business_scope` char(255) DEFAULT NULL,
  `registered_capital` char(255) DEFAULT NULL,
  `official_website` char(100) DEFAULT NULL,
  `is_list` char(10) DEFAULT NULL,
  `headqurters` char(10) DEFAULT NULL,
  `industry` char(100) DEFAULT NULL,
  `employees` char(100) DEFAULT NULL,
  `products` text,
  `note` text,
  `modify_time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of componey
-- ----------------------------
