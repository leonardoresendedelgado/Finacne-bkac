import App from './src/app.js';

const Port = 3000;

App.listen(Port, ()=>{
    console.log(`Servidor rodando em ${Port}`)
})