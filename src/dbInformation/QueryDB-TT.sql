-- -----------------------------------------------------
-- Table `mydb`.`TipoUsuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoUsuario (
  idTipoUsuario INT NOT NULL,
  nombre_TipoUsuario VARCHAR(30) NOT NULL,
  PRIMARY KEY (idTipoUsuario)
);
-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Usuario (
  email VARCHAR(50) NOT NULL,
  nombreusuario VARCHAR(15) NOT NULL,
  contraseña VARCHAR(15) NOT NULL,
  idTipoUsuario INT NOT NULL,
  PRIMARY KEY (email),
  FOREIGN KEY (idTipoUsuario) REFERENCES TipoUsuario (idTipoUsuario)
);
-- -----------------------------------------------------
-- Table `mydb`.`TipoProyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoProyecto (
  idTipoProyecto INT NOT NULL,
  nombreTipoProyecto VARCHAR(30) NOT NULL,
  PRIMARY KEY (idTipoProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Proyecto (
  idProyecto INT NOT NULL,
  nombre_proyecto VARCHAR(20) NOT NULL,
  pdf_proyecto BYTEA NOT NULL,
  esfuerzo_calculado INT NULL,
  PF INT NULL,
  Usuario_email VARCHAR(30) NOT NULL,
  idTipoProyecto INT NOT NULL,
  PRIMARY KEY (idProyecto),
  FOREIGN KEY (Usuario_email) REFERENCES Usuario (email),
  FOREIGN KEY (idTipoProyecto) REFERENCES TipoProyecto (idTipoProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`DiseñoTemprano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS DiseñoTemprano (
  idDiseñoTemprano INT NOT NULL,
  Pmnominal_dt INT NULL,
  a_dt INT NOT NULL,
  ksloc_dt INT NULL,
  b_dt INT NULL,
  totalmultesf_dt INT NULL,
  idProyecto INT NOT NULL,
  PRIMARY KEY (idDiseñoTemprano),
  FOREIGN KEY (idProyecto) REFERENCES Proyecto (idProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`PostArquitectura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS PostArquitectura (
  idPostArquitectura INT NOT NULL,
  Pmnominal_pa INT NULL,
  aa INT NOT NULL,
  ksloc_pa INT NULL,
  b_pa INT NULL,
  totalmultesf_pa INT NULL,
  idProyecto INT NOT NULL,
  PRIMARY KEY (idPostArquitectura),
  FOREIGN KEY (idProyecto) REFERENCES Proyecto (idProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`ComposicionAplicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ComposicionAplicacion (
  idComposicionAplicacion INT NOT NULL,
  nop_ca INT NOT NULL,
  op_ca INT NULL,
  reuso_ca INT NULL,
  totalprod_ca INT NOT NULL,
  noPantallas_ca INT NULL,
  noReportes_ca INT NULL,
  noServidores INT NULL,
  idProyecto INT NOT NULL,
  PRIMARY KEY (idComposicionAplicacion),
  FOREIGN KEY (idProyecto)
    REFERENCES Proyecto (idProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`Cosmic`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Cosmic (
  idCosmic INT NOT NULL,
  totalpuntosFuncion_cosmic INT NOT NULL,
  tasaEntrega_cosmic INT NOT NULL,
  idProyecto INT NOT NULL,
  PRIMARY KEY (idCosmic),
  FOREIGN KEY (idProyecto) REFERENCES Proyecto (idProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`PuntoFuncionCosmic`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS PuntoFuncionCosmic (
  idPuntoFuncionCosmic INT NOT NULL,
  entradas_pf INT NOT NULL,
  salidas_pf INT NOT NULL,
  lecturas_pf INT NOT NULL,
  escrituras_pf INT NOT NULL,
  idCosmic INT NOT NULL,
  PRIMARY KEY (idPuntoFuncionCosmic),
  FOREIGN KEY (idCosmic) REFERENCES Cosmic (idCosmic)
);
-- -----------------------------------------------------
-- Table `mydb`.`Nivel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Nivel (
  idNivel INT NOT NULL,
  nombrenivel VARCHAR(20) NOT NULL,
  PRIMARY KEY (idNivel)
);
-- -----------------------------------------------------
-- Table `mydb`.`TipoProd`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoProd (
  idTipoProd INT NOT NULL,
  nombre_prod VARCHAR(50) NOT NULL,
  PRIMARY KEY (idTipoProd)
);
-- -----------------------------------------------------
-- Table `mydb`.`Prod`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Prod (
  idProd INT NOT NULL,
  valor_prod INT NOT NULL,
  idNivel INT NOT NULL,
  idTipoProd INT NOT NULL,
  PRIMARY KEY (idProd),
  FOREIGN KEY (idNivel) REFERENCES Nivel (idNivel),
  FOREIGN KEY (idTipoProd) REFERENCES TipoProd (idTipoProd)
);
-- -----------------------------------------------------
-- Table `mydb`.`TipoME`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoME (
  idTipoME INT NOT NULL,
  nombre_me VARCHAR(20) NOT NULL,
  PRIMARY KEY (idTipoME)
);
-- -----------------------------------------------------
-- Table `mydb`.`MultiplicadorEsfuerzo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS MultiplicadorEsfuerzo (
  id_ME INT NOT NULL,
  valormult INT NOT NULL,
  idNivel INT NOT NULL,
  idTipoME INT NOT NULL,
  PRIMARY KEY (id_ME),
  FOREIGN KEY (idNivel) REFERENCES Nivel (idNivel)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_MultiplicadorEsfuerzo_TipoME1
    FOREIGN KEY (idTipoME)
    REFERENCES TipoME (idTipoME)
);
-- -----------------------------------------------------
-- Table `mydb`.`TipoFEE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoFEE (
  idTipoFEE INT NOT NULL,
  nombre_fee VARCHAR(20) NOT NULL,
  PRIMARY KEY (idTipoFEE)
);
-- -----------------------------------------------------
-- Table `mydb`.`FactorExponencialEscala`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS FactorExponencialEscala (
  idFEE INT NOT NULL,
  valorfactor INT NOT NULL,
  Nivel_idNivel INT NOT NULL,
  TipoFEE_idTipoFEE INT NOT NULL,
  PRIMARY KEY (idFEE),
  FOREIGN KEY (Nivel_idNivel) REFERENCES Nivel (idNivel),
  FOREIGN KEY (TipoFEE_idTipoFEE) REFERENCES TipoFEE (idTipoFEE)
);
-- -----------------------------------------------------
-- Table `mydb`.`TipoUFP`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TipoUFP (
  idTipoUPF INT NOT NULL,
  nombreTipoUPF VARCHAR(30) NOT NULL,
  PRIMARY KEY (idTipoUPF)
);
-- -----------------------------------------------------
-- Table `mydb`.`PesoFactorComplejidad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS PesoFactorComplejidad (
  peso_pfc INT NOT NULL,
  Nivel_idNivel INT NOT NULL,
  idTipoUPF INT NOT NULL,
  PRIMARY KEY (Nivel_idNivel),
  FOREIGN KEY (Nivel_idNivel) REFERENCES Nivel (idNivel),
  FOREIGN KEY (idTipoUPF) REFERENCES TipoUFP (idTipoUPF)
);
-- -----------------------------------------------------
-- Table `mydb`.`PuntoFuncion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS PuntoFuncion (
  idPuntoFuncion INT NOT NULL,
  noUFP INT NOT NULL,
  noTCF INT NOT NULL,
  lenguaje_fp VARCHAR(20) NULL,
  idProyecto INT NOT NULL,
  PRIMARY KEY (idPuntoFuncion),
  FOREIGN KEY (idProyecto) REFERENCES Proyecto (idProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`TCF`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS TCF (
  idTCF INT NOT NULL,
  nombre_TCF VARCHAR(60) NOT NULL,
  peso INT NOT NULL,
  idPuntoFuncion INT NOT NULL,
  PRIMARY KEY (idTCF),
  FOREIGN KEY (idPuntoFuncion) REFERENCES PuntoFuncion (idPuntoFuncion)
);
-- -----------------------------------------------------
-- Table `mydb`.`UFP`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS UFP (
  idUFP INT NOT NULL,
  det_UFP INT NOT NULL,
  ret_UFP INT NULL,
  ftr_UFP INT NULL,
  Nivel_idNivel INT NOT NULL,
  idPuntoFuncion INT NOT NULL,
  idTipoUPF INT NOT NULL,
  PRIMARY KEY (idUFP),
  FOREIGN KEY (Nivel_idNivel) REFERENCES Nivel (idNivel),
  FOREIGN KEY (idPuntoFuncion) REFERENCES PuntoFuncion (idPuntoFuncion),
  FOREIGN KEY (idTipoUPF) REFERENCES TipoUFP (idTipoUPF)
);
-- -----------------------------------------------------
-- Table `mydb`.`Prod_ComposicionAplicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Prod_ComposicionAplicacion (
  idProd INT NOT NULL,
  idComposicionAplicacion INT NOT NULL,
  FOREIGN KEY (idProd) REFERENCES Prod (idProd),
  FOREIGN KEY (idComposicionAplicacion) REFERENCES ComposicionAplicacion (idComposicionAplicacion)
);
-- -----------------------------------------------------
-- Table `mydb`.`FEE_Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS FEE_Proyecto (
  idFEE INT NOT NULL,
  idProyecto INT NOT NULL,
  FOREIGN KEY (idFEE) REFERENCES FactorExponencialEscala (idFEE),
  FOREIGN KEY (idProyecto) REFERENCES Proyecto (idProyecto)
);
-- -----------------------------------------------------
-- Table `mydb`.`ME_Proyecto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ME_Proyecto (
  idProyecto INT NOT NULL,
  id_ME INT NOT NULL,
  FOREIGN KEY (idProyecto) REFERENCES Proyecto (idProyecto),
  FOREIGN KEY (id_ME) REFERENCES MultiplicadorEsfuerzo (id_ME)
);