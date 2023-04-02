import dotenv from "dotenv"

dotenv.config()

export const enviromentVariable = {
    port: process.env.PORT as string,
    MONGODB_STRING: process.env.MONGODB_STRING as string
}