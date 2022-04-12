const express = require('express');
const app = express();
const connection = require('./database/mysql');
const Pergunta = require('./models/Pergunta');''

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

app.get("/", (req, res)=>{
    //fazer um select all - raw = trazer apenas os dados
    Pergunta.findAll({raw: true}).then(perguntas =>{
        res.render('index', {
            perguntas
        });
    });
});

app.get("/perguntar", (req, res) =>{
    res.render('perguntar');
});

app.post("/salvarpergunta", (req, res) =>{
    const { titulo } = req.body;
    const { descricao } = req.body;

    //fazer o insert no banco de dados e redireciona o usuario para a pagina principal
    Pergunta.create({
        titulo,
        descricao
    }).then(()=> {
        res.redirect("/");
    });
})

app.listen(3000, ()=> console.log("App rodando!"));