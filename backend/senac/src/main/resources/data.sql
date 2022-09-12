insert into tbroles (id, name) values (1, 'ROLE_USER');
insert into tbroles (id, name) values (2, 'ROLE_ADMIN');
insert into tbusuarios values (1, "39331605889", "fabricio@hotmail.com", "Fabricio", "$10$60s/z0xBc9NbJoSjhjpVO.QFwjCgZtIMH.OfcaIpyygqjtVcvR/RW");
insert into usuario_roles values (1, 2);
INSERT INTO `sistemadbrefeito`.`tbreservas` (`id_reserva`, `data_abertura_reserva`, `data_reservada_reserva`, `motivo_reserva`, `nome_cliente_reserva`, `status_reserva`, `id_cliente_reserva`) VALUES ('1', '2022-09-11', '2022-09-12 08:00:00', 'Aniversário', 'Fabricio', '0', '1');

