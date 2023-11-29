import bodyParser from 'body-parser';
import Unidades from './Unidades.js';

const router = (App)=>{
    App.use(
        bodyParser.json(),
        Unidades
    )
}

export default router;