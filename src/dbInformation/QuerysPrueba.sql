--SELECT * FROM tipousuario
INSERT INTO tipousuario (idtipousuario, nombre_tipousuario) VALUES (1,'prueba')

--SELECT * FROM usuario
INSERT INTO usuario (email, nombreusuario, contraseña, idtipousuario) VALUES ('aldo.ibanez21@gmail.com','prueba','prueba',1)

--SELECT * FROM tipoproyecto
INSERT INTO tipoproyecto (idtipoproyecto, nombretipoproyecto) VALUES (1, 'prueba')

--SELECT * FROM proyecto
INSERT INTO proyecto (idproyecto, nombre_proyecto, pdf_proyecto, esfuerzo_calculado, pf, usuario_email, idtipoproyecto) VALUES (1,'prueba','pdf',1,1,'aldo.ibanez21@gmail.com',1)

--SELECT * FROM puntofuncion
INSERT INTO puntofuncion (idpuntofuncion, noufp, notcf, lenguaje_fp, idproyecto) VALUES (1,1,1,'prueba',1)

--SELECT * FROM nivel
INSERT INTO nivel (idnivel, nombrenivel) VALUES (1, 'prueba')

--SELECT * FROM nivel
INSERT INTO nivel (idnivel, nombrenivel) VALUES (1, 'prueba')

--SELECT * FROM tipoufp
INSERT INTO tipoufp (idtipoufp, nombretipoufp) VALUES (1,'prueba')

INSERT INTO ufp (idufp, nombre_ufp, det_ufp, ret_ufp, ftr_ufp, nivel_idnivel, idpuntofuncion, idtipoufp) VALUES (1, 'prueba',1,1,1,1,1,1)
--SELECT * FROM ufp

--SELECT * FROM tipofee
INSERT INTO tipofee (idtipofee, nombre_fee) VALUES (1,'prueba') 

--SELECT * FROM factorexponencialescala
INSERT INTO factorexponencialescala (idfee,valorfactor,idnivel,idtipofee) VALUES (1,1,1,1)

--SELECT * FROM fee_proyecto
INSERT INTO fee_proyecto (idfee, idproyecto) VALUES (1,1)

--SELECT * FROM tipome
INSERT INTO tipome (idtipome, nombre_me) VALUES (1,'prueba')

--SELECT * FROM multiplicadoresfuerzo
INSERT INTO multiplicadoresfuerzo (id_me, valormult, idnivel, idtipome) VALUES (1,1,1,1)

--SELECT * FROM me_proyecto
INSERT INTO me_proyecto (idproyecto, id_me) VALUES (1,1)

--SELECT * FROM pesofactorcomplejidad
INSERT INTO pesofactorcomplejidad (peso_pfc, idnivel, idtipoufp) VALUES (1,1,1)

--SELECT * FROM postarquitectura
INSERT INTO postarquitectura (idpostarquitectura,pmnominal_pa,aa,ksloc_pa,b_pa,totalmultesf_pa,idproyecto) VALUES (1,1,1,1,1,1,1)

--SELECT * FROM tipoprod
INSERT INTO tipoprod (idtipoprod, nombre_prod) VALUES (1,'prueba')

--SELECT * FROM prod
INSERT INTO prod (idprod, valor_prod, idnivel, idtipoprod) VALUES (1,1,1,1)

--SELECT * FROM prod_composicionaplicacion
INSERT INTO prod_composicionaplicacion (idprod,idcomposicionaplicacion) VALUES (1,1)

--SELECT * FROM puntofuncioncosmic
INSERT INTO puntofuncioncosmic (idpuntofuncioncosmic,nombre_pf,entradas_pf,salidas_pf,lecturas_pf,escrituras_pf,idcosmic) VALUES (1,'prueba',1,1,1,1,1)

--SELECT * FROM tcf
INSERT INTO tcf (idtcf,nombre_tcf,peso,idpuntofuncion) VALUES (1,'prueba',1,1)

