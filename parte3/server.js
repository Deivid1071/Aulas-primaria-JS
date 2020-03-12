const express = require('express');
const nunjucks = require('nunjucks');
const imagens = require("./data");

const server = express();

server.use(express.static('public'));

server.set("view engine","njk");

nunjucks.configure("views",{
  express: server
})

server.get("/",(req,res)=>{
  return res.render("about");
});

server.get("/portifolio",(req,res)=>{
  return res.render("portifolio",{items: imagens});
});

server.listen(5000,function(){
  console.log('Servidor rodando');
});