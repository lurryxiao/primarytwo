-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2013 年 08 月 19 日 10:10
-- 服务器版本: 5.1.41
-- PHP 版本: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `trynodejs`
--

-- --------------------------------------------------------

--
-- 表的结构 `content`
--

CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(8) NOT NULL,
  `content` text NOT NULL,
  `result` text NOT NULL,
  `len` int(10) NOT NULL,
  `co1` int(10) NOT NULL,
  `co2` int(10) NOT NULL,
  `dotime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `content`
--

INSERT INTO `content` (`id`, `uid`, `content`, `result`, `len`, `co1`, `co2`, `dotime`) VALUES
(1, 1, '1,3,2', '1,2,3', 3, 1, 1, 1),
(2, 0, '3,2,1,6,7,5,4', '1,2,3,4,5,6,7', 0, 0, 0, 0),
(3, 1, '1,2,5,4,7,6,53,43,23', '1,2,4,5,6,7,23,43,53', 9, 0, 0, 0),
(4, 1, '1,3,2,4,5,7,6,9,8', '1,2,3,4,5,6,7,8,9', 9, 0, 0, 0),
(5, 1, '1,6,5,4,9,3', '1,3,4,5,6,9', 6, 0, 0, 0),
(6, 1, '1,6,7,3,8,22', '1,3,6,7,8,22', 6, 0, 0, 0),
(7, 1, '2,6,5,9,6,2,10', '2,5,6,9,10', 7, 4, 5, 0);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`) VALUES
(1, 'comeon');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
