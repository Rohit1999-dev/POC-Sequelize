# POC-sequelize
Use of sequelize with express CRUD Operation and postgres Database through Migration, And reltation maping between two or more table.

# Requirement 

There is some packages which is available or need to install all these packages in your project --
    >> sudo npm i express --save  for express install
    >> sudo npm install pg  for pg installation
    >> sudo npm i sequelize  for sequelize instalation
    >> sudo npm i pg pg-hstore for postgres


For installing the Sequelize CLI--<br>
    >> sudo npm install --save-dev sequelize-cli<br>

To create an empty project you will need to execute init command<br>
    >> sudo npx sequelize-cli init<br>


For Sequelize migration<br>
    <> Create of models of tables run this command which is given below --<br>
    >> npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string<br>

For Running Migration run this command which is given below--<br>
    >> sudo npx sequelize-cli db:migrate<br>

# Instruction the code how to run the code on terminal and which port is on working to test the server<br>
In this project, we have check the code on server as well as postman, and start your server by your terminal,<br>
simply run the <br>
>> npm start






