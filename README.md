## Preparando o banco de dados
Conforme solicitado, o DB utilizado foi o postgresql.  Edite o arquivo ``` /util/database.js ``` de acordo suas configurações:
```
const database = [Nome do seu banco de dados]
const username = [Nome de usuário com as devidas permissões]
const password = [Senha do usuário]
```
Atente-se para a linha 8 ``` schema: database ``` caso o nome do seu schema não seja o mesmo do seu banco.<br>
Todo o resto será configurado automaticamente pelo [Sequelize](https://sequelize.org/).

## Instalação
No terminal, vá até a pasta do projeto e inicie o npm:
```
npm init -y
```
Faça a instalação dos pacotes nescessários para o funcionamento:
```
npm i
```
Execute o projeto:
```
npm start
```
Para ver o projeto, acesse o localhost pela porta 3000 via navegador: ``` 127.0.0.1:3000 ```
