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


Breve deploy via Docker

Algumas imagens do projeto com suas funcionalidades

![TelaInicial - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861847-55c8a0aa-659c-4c7c-a60d-2debdd42a8e8.PNG)
![TelaInicial2 - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861868-06b961be-fb31-4d3d-837e-06ccc54e5a36.PNG)

![CadastroCliente](https://user-images.githubusercontent.com/95991747/202861892-a9f259e5-2749-448b-be2a-fbe81f34df0b.PNG)
![LoginCliente - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861901-d7601600-ef66-41b6-90a5-2d76854867d3.PNG)
![LoginAdmin - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861907-c662fbf1-d65a-4018-a96a-664fc0f13ce1.PNG)
![AreaADM - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861914-fec8d70a-15fb-4aab-829c-6d6a9eaf6a6c.PNG)
![ListaProdutos - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861934-47567811-484f-4edc-9b69-a651e8c3c01b.PNG)
![ListaReservasADM - Chuleta Quente v2](https://user-images.githubusercontent.com/95991747/202861938-66ba9cc6-559f-4c89-989e-0eb6193db2fb.PNG)
![TratativaReservaADM](https://user-images.githubusercontent.com/95991747/202861948-158332f9-f5e8-4c48-b070-5b04f3173c9f.PNG)


