import express, {Application} from "express"
import { appConfig } from "./App"

const app: Application = express()

appConfig(app)

app.listen(3030, () => {
    console.log("Server up and running")
})