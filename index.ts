import express, { Application } from "express"
import { AppConfig } from "./App"
import { dbConfig } from "./config/db"
import { enviromentVariable } from "./enviromentvariable/enviromentvariable"


const app: Application = express()

AppConfig(app)
dbConfig()

app.listen(enviromentVariable.port, () => {
    console.log("App is running")
})