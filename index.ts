import express, { Application } from "express"
import { AppConfig } from "./App"
import { enviromentVariable } from "./enviromentvariable/enviromentvariable"


const app: Application = express()

AppConfig(app)

app.listen(enviromentVariable.port, () => {
    console.log("App is running")
})