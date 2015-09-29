-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 29, 2015 at 01:19 AM
-- Server version: 5.6.24
-- PHP Version: 5.5.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `infografico`
--

-- --------------------------------------------------------

--
-- Table structure for table `cidade`
--

CREATE TABLE IF NOT EXISTS `cidade` (
  `id` bigint(20) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `uf` varchar(255) DEFAULT NULL,
  `oid_regiao` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cidade`
--

INSERT INTO `cidade` (`id`, `nome`, `uf`, `oid_regiao`) VALUES
(154, 'Araquari', 'SC', 153),
(155, 'Barra do Sul', 'SC', 153),
(156, 'Barra Velha', 'SC', 153),
(157, 'Joinville', 'SC', 153),
(159, 'Garuva', 'SC', 158),
(160, 'Itapoá', 'SC', 158),
(162, 'São Chico', 'SC', 161),
(163, 'São João', 'SC', 161);

-- --------------------------------------------------------

--
-- Table structure for table `conta`
--

CREATE TABLE IF NOT EXISTS `conta` (
  `ID` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `permissao` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `conta`
--

INSERT INTO `conta` (`ID`, `email`, `permissao`, `senha`) VALUES
(1, 'alif.correa@a2c.com.br', 'usuario', '89AB15C0AE8BD5B6E972C968BB92ED6F'),
(3, 'msndeestudoslk@hotmail.com', 'usuario', '4EB7C8229D4F923E03C867901D1E7401'),
(5, 'rodrigoventuri123@gmail.com', 'usuario', '84CB719A779D6731117610AAD23F31DF'),
(7, 'vinicius0schadeck@gmail.com', 'administrador', 'D3E96020B643A60C4CBF7A85F17995A5'),
(101, 'niltonadao@hotmail.com', 'administrador', 'F8B70CA14DBD1C8A97DF79528096CDB0');

-- --------------------------------------------------------

--
-- Table structure for table `conta_tema`
--

CREATE TABLE IF NOT EXISTS `conta_tema` (
  `Conta_ID` bigint(20) NOT NULL,
  `temas_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grafico`
--

CREATE TABLE IF NOT EXISTS `grafico` (
  `id` bigint(20) NOT NULL,
  `fonte` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `grafico_valorgrafico`
--

CREATE TABLE IF NOT EXISTS `grafico_valorgrafico` (
  `Grafico_id` bigint(20) NOT NULL,
  `valoresGrafico_ID` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `imagem`
--

CREATE TABLE IF NOT EXISTS `imagem` (
  `ID` bigint(20) NOT NULL,
  `imagem` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `indicador`
--

CREATE TABLE IF NOT EXISTS `indicador` (
  `id` bigint(20) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `id_tema` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `pessoa`
--

CREATE TABLE IF NOT EXISTS `pessoa` (
  `id` bigint(20) NOT NULL,
  `cpf` bigint(20) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `id_conta` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pessoa`
--

INSERT INTO `pessoa` (`id`, `cpf`, `nome`, `id_conta`) VALUES
(2, 19312319231, 'Alif Corrêa', 1),
(4, 19208390128, 'Lucas Kruger', 3),
(6, 1923019239, 'Rodrigo Venturi', 5),
(8, 12312302132, 'Vinicius Schadeck', 7),
(102, 12310232193, 'Nilton Lacerda', 101);

-- --------------------------------------------------------

--
-- Table structure for table `quadro`
--

CREATE TABLE IF NOT EXISTS `quadro` (
  `id` bigint(20) NOT NULL,
  `conteudo` varchar(255) DEFAULT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `id_indicador` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `regiao`
--

CREATE TABLE IF NOT EXISTS `regiao` (
  `id` bigint(20) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `id_conta` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `regiao`
--

INSERT INTO `regiao` (`id`, `nome`, `id_conta`) VALUES
(153, 'Nordeste de Santa Catarina', 5),
(158, 'Região Norte de Santa Catarina', 7),
(161, 'Região Oeste de Santa Catarina', 3);

-- --------------------------------------------------------

--
-- Table structure for table `sequence`
--

CREATE TABLE IF NOT EXISTS `sequence` (
  `SEQ_NAME` varchar(50) NOT NULL,
  `SEQ_COUNT` decimal(38,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sequence`
--

INSERT INTO `sequence` (`SEQ_NAME`, `SEQ_COUNT`) VALUES
('SEQ_GEN', '200');

-- --------------------------------------------------------

--
-- Table structure for table `tema`
--

CREATE TABLE IF NOT EXISTS `tema` (
  `id` bigint(20) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `id_regiao` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tema`
--

INSERT INTO `tema` (`id`, `nome`, `id_regiao`) VALUES
(164, 'Sustentabilidade Ambiental', 153),
(165, 'Produtividade', 153),
(166, 'Infraestrutura', 153),
(167, 'Qualidade de Vida', 153),
(168, 'Inclusão e Equidade Social', 153),
(169, 'Sustentabilidade Ambiental', 158),
(170, 'Produtividade', 158),
(171, 'Infraestrutura', 158),
(172, 'Qualidade de Vida', 158),
(173, 'Inclusão e Equidade Social', 158),
(174, 'Sustentabilidade Ambiental', 161),
(175, 'Produtividade', 161),
(176, 'Infraestrutura', 161),
(177, 'Qualidade de Vida', 161),
(178, 'Inclusão e Equidade Social', 161);

-- --------------------------------------------------------

--
-- Table structure for table `texto`
--

CREATE TABLE IF NOT EXISTS `texto` (
  `ID` bigint(20) NOT NULL,
  `texto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `valorgrafico`
--

CREATE TABLE IF NOT EXISTS `valorgrafico` (
  `ID` bigint(20) NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `unidadeMedida` varchar(255) DEFAULT NULL,
  `valor` double DEFAULT NULL,
  `id_pessoa` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cidade`
--
ALTER TABLE `cidade`
  ADD PRIMARY KEY (`id`), ADD KEY `FK_CIDADE_oid_regiao` (`oid_regiao`);

--
-- Indexes for table `conta`
--
ALTER TABLE `conta`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `conta_tema`
--
ALTER TABLE `conta_tema`
  ADD PRIMARY KEY (`Conta_ID`,`temas_id`), ADD KEY `FK_CONTA_TEMA_temas_id` (`temas_id`);

--
-- Indexes for table `grafico`
--
ALTER TABLE `grafico`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `grafico_valorgrafico`
--
ALTER TABLE `grafico_valorgrafico`
  ADD PRIMARY KEY (`Grafico_id`,`valoresGrafico_ID`), ADD KEY `FK_GRAFICO_VALORGRAFICO_valoresGrafico_ID` (`valoresGrafico_ID`);

--
-- Indexes for table `imagem`
--
ALTER TABLE `imagem`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `indicador`
--
ALTER TABLE `indicador`
  ADD PRIMARY KEY (`id`), ADD KEY `FK_INDICADOR_id_tema` (`id_tema`);

--
-- Indexes for table `pessoa`
--
ALTER TABLE `pessoa`
  ADD PRIMARY KEY (`id`), ADD KEY `FK_PESSOA_id_conta` (`id_conta`);

--
-- Indexes for table `quadro`
--
ALTER TABLE `quadro`
  ADD PRIMARY KEY (`id`), ADD KEY `FK_QUADRO_id_indicador` (`id_indicador`);

--
-- Indexes for table `regiao`
--
ALTER TABLE `regiao`
  ADD PRIMARY KEY (`id`), ADD KEY `FK_REGIAO_id_conta` (`id_conta`);

--
-- Indexes for table `sequence`
--
ALTER TABLE `sequence`
  ADD PRIMARY KEY (`SEQ_NAME`);

--
-- Indexes for table `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`id`), ADD KEY `FK_TEMA_id_regiao` (`id_regiao`);

--
-- Indexes for table `texto`
--
ALTER TABLE `texto`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `valorgrafico`
--
ALTER TABLE `valorgrafico`
  ADD PRIMARY KEY (`ID`), ADD KEY `FK_VALORGRAFICO_id_pessoa` (`id_pessoa`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cidade`
--
ALTER TABLE `cidade`
ADD CONSTRAINT `FK_CIDADE_oid_regiao` FOREIGN KEY (`oid_regiao`) REFERENCES `regiao` (`id`);

--
-- Constraints for table `conta_tema`
--
ALTER TABLE `conta_tema`
ADD CONSTRAINT `FK_CONTA_TEMA_Conta_ID` FOREIGN KEY (`Conta_ID`) REFERENCES `conta` (`ID`),
ADD CONSTRAINT `FK_CONTA_TEMA_temas_id` FOREIGN KEY (`temas_id`) REFERENCES `tema` (`id`);

--
-- Constraints for table `grafico_valorgrafico`
--
ALTER TABLE `grafico_valorgrafico`
ADD CONSTRAINT `FK_GRAFICO_VALORGRAFICO_Grafico_id` FOREIGN KEY (`Grafico_id`) REFERENCES `grafico` (`id`),
ADD CONSTRAINT `FK_GRAFICO_VALORGRAFICO_valoresGrafico_ID` FOREIGN KEY (`valoresGrafico_ID`) REFERENCES `valorgrafico` (`ID`);

--
-- Constraints for table `indicador`
--
ALTER TABLE `indicador`
ADD CONSTRAINT `FK_INDICADOR_id_tema` FOREIGN KEY (`id_tema`) REFERENCES `tema` (`id`);

--
-- Constraints for table `pessoa`
--
ALTER TABLE `pessoa`
ADD CONSTRAINT `FK_PESSOA_id_conta` FOREIGN KEY (`id_conta`) REFERENCES `conta` (`ID`);

--
-- Constraints for table `quadro`
--
ALTER TABLE `quadro`
ADD CONSTRAINT `FK_QUADRO_id_indicador` FOREIGN KEY (`id_indicador`) REFERENCES `indicador` (`id`);

--
-- Constraints for table `regiao`
--
ALTER TABLE `regiao`
ADD CONSTRAINT `FK_REGIAO_id_conta` FOREIGN KEY (`id_conta`) REFERENCES `conta` (`ID`);

--
-- Constraints for table `tema`
--
ALTER TABLE `tema`
ADD CONSTRAINT `FK_TEMA_id_regiao` FOREIGN KEY (`id_regiao`) REFERENCES `regiao` (`id`);

--
-- Constraints for table `valorgrafico`
--
ALTER TABLE `valorgrafico`
ADD CONSTRAINT `FK_VALORGRAFICO_id_pessoa` FOREIGN KEY (`id_pessoa`) REFERENCES `grafico` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
