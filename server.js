import 'dotenv/config'
import App from './src/app.js';

const Port = 8080;

App.listen(Port, ()=>{
    console.log(`Servidor rodando em ${Port}`)
})