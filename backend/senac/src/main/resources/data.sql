insert into tbroles (id, name) values (1, 'ROLE_USER');
insert into tbroles (id, name) values (2, 'ROLE_ADMIN');

-- inserindo usuário padrão ADMIN
insert into tbusuarios values (1, "39331605889", "fabricio@hotmail.com", "Fabricio", "$2a$12$wECWoGUUDXofd/wT5edKqu/wbfQ1Pp9a7PYyAllODVWSvLZ.LnWYa");
insert into usuario_roles values (1, 2);


INSERT INTO `sistemadbrefeito`.`tbreservas` (`id_reserva`, `data_abertura_reserva`, `data_reservada_reserva`, `motivo_reserva`, `nome_cliente_reserva`, `status_reserva`, `id_cliente_reserva`,`n_De_Pessoas_reserva`) VALUES ('1', '2022-09-11', '2022-09-12 08:00:00', 'Aniversário', 'Fabricio', '0', '1', '10');


INSERT INTO `tbtipos` (`id_tipo`, `sigla_tipo`, `rotulo_tipo`) VALUES
(1, 'chu', 'Churrasco'),
(2, 'sob', 'Sobremesa'),
(3,'beb','Bebidas');