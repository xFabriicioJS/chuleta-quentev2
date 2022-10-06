# chuleta-quentev2


Esse é um projeto remodelado com base em um sistema de uma churrascaria que nos foi apresentado em aula pelo Professor Well do Senac Itaquera, o projeto original foi feito nas linguagens PHP, Javascript, com as tecnologias Ajax e Bootstrap. 

Nessa remodelagem, tentei aplicar conceitos novos que venho aprendendo nos últimos meses.

Atualmente ele é feito com:

- React.JS
- Spring Framework
- Chakra-UI
- Formik
- React Router v6

O projeto possui suporte a autenticação JWT, e permite upload de arquivos com UUID gerado automaticamente no banco de dados MySQL.

Funcionalidades:
- Adição, Exclusão e Alteração dos produtos e tipos cadastrados;
- Painel do admin para gerenciamento;
- Sistema de reservas, onde um cliente, devidademente cadastrado, poderá solicitar um pedido de reserva de mesa na churrascaria;
- O administrador poderá cancelar, negar ou aceitar esse pedido de reserva, especificando o motivo.
- O cliente, ao concluir o seu pedido, terá um email enviado tanto ao adminstrador quanto ao cliente, detalhando os detalhes da reserva.

