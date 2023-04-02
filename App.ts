// import express, { Application, Request, Response } from "express"
// import cors from "cors"
// import morgan from "morgan"

// export const AppConfig = (app: Application) => {
//     app.use(express.json())
//         .use(cors())
//         .use(morgan("dev"))
    
//         .get("/", (req: Request, res: Response) => {
//             res.status(201).json({
//             message: "Server is up and running"
//         })
//         app.all("*",(req: Request, res: Response) => {
//             res.status(404).json({
//             message: `routes not found ${req.originalUrl}`
//             })
                
//         })
//     })
//     }

import express, {Application, Request, Response} from "express"
import cors from "cors"
import morgan from "morgan"

export const appConfig = (app: Application) => {
    app.use(express.json())
        .use(cors())
        .use(morgan("dev"))
    
        .get("/", (req: Request, res: Response) => {
            res.status(200).json({
            message: "Server is running"
        })

            app.get("*", (req: Request, res: Response) => {
                res.status(404).json({
                    message: `routes nnot found ${req.originalUrl}`
                })
            })
    })
}