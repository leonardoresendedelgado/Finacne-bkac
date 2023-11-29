import bodyParser from 'body-parser';
import Unidades from './Unidades.js';
import Viagens from './Viagens.js';
import bilhete from './bilhetes.js';

const router = (App)=>{
    App.use(
        bodyParser.json(),
        Unidades,
        Viagens,
        bilhete
    )
}

export default router;