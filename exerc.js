const express = require("express");

const app = express();

app.use(express.static("publica"));
app.set('view engine', 'ejs');

//----------------Rota Raiz
app.get("/", (req, res) => {
    res.render('raiz', {});
});

//-----------------Rota Nome
app.get("/nome/:nomePessoa", (req, res) => {
    const {nomePessoa} = req.params;
    // const {nomePessoa} = req.query;
    res.render('nome', {nomePessoa});
});


//-----------------Multiplicando
app.get("/repetir/:text/:qtd", (req, res) => {
    let {text, qtd} = req.params;
    let msg = "";
    for(let i=0; i < qtd; i++){
        msg+=text + " ";
    }
    res.render('repetir', {msg});
});

//-----------------SOM
app.get("/som/:animal", (req, res) =>{
    let {animal} = req.params;
    switch(animal){
        case "cao":
            res.render('som', {animal});
            break;
        
        case "gato":
            res.render('som', {animal});
            break;

        case "vaca":
            res.render('som', {animal});
            break;
        
        case "ovelha":
            res.render('som', {animal});
            break;

        case "cavalo":
            res.render('som', {animal});
            break;        
    
        default:
            res.render('som', {animal});
    }
});

//--------------------------- rep?texto=Ola&quant=3
app.get("/rep", (req, res) =>{
    let {texto, quant} = req.query;
    let mens = "";
    for(let cont = 0; cont < quant; cont++){
        mens += texto + " ";
    }
    res.render('rep', mens);
});

//usar uma porta para rodar -fazer no final-
app.listen(4000, () => {
    console.log("Servidor rodando na porta 4000")    
});