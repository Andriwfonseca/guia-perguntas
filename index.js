const express = require('express');
const app = express();
const connection = require('./database/mysql');
const routes = require('./routes/routes');


//conecta no banco
connection.authenticate().then(() =>{
    console.log('Conexão feita com o banco de dados')
}).catch((err)=>{
    console.log(err)
})

//view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes)

app.listen(3000, ()=> console.log("App rodando!"));