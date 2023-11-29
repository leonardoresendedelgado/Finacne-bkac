import bodyParser from 'body-parser';
import Unidades from './Unidades.js';
import Viagens from './Viagens.js';

const router = (App)=>{
    App.use(
        bodyParser.json(),
        Unidades,
        Viagens
    )
}

export default router;