// import mongoose from "mongoose";
// import { enviromentVariable } from "../enviromentvariable/enviromentvariable";

// // const URL = enviromentVariable.LIVE
// const URL = enviromentVariable.MONGODB_STRING

// export const dbConfig = async() => {
//     try {
//         const conn = await mongoose.connect(URL)
//         if (
//             mongoose.connection.host === "localhost"
//         ) {
//             console.log("connected to localhost")
//         } else {
//             console.log("Database is live now")
//         }
            
            
        
//     } catch (error) {
//         console.log("Failed to connect to the database", error)
//     }
// }