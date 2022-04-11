const express = require('express');
const app = express();

//view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", (req, res)=>{
    res.render('index');
});

app.get("/perguntar", (req, res) =>{
    res.render('perguntar');
});

app.post("/salvarpergunta", (req, res) =>{
    const { titulo } = req.body;
    const { descricao } = req.body;

    res.send(titulo + descricao);
})

app.listen(3000, ()=> console.log("App rodando!"));