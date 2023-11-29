import Express from 'express';
import conectDataBase from './config/dbConnect.js';
const App = Express();
conectDataBase()



import router from './Router/index.js';
router(App)


export default App;