import Express from 'express';
import conectDataBase from './config/dbConnect.js';
import router from './Router/index.js';
const App = Express();
conectDataBase()
router(App)


export default App;