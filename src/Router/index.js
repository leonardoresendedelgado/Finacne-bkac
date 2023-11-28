import bodyParser from 'body-parser';

const Router = (App) => {
    App.use(
        bodyParser.json()
    )
}

export default Router;