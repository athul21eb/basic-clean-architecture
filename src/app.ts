import express from "express"
import roleRouter from "./api/routes/role.routes"
import userRouter from "./api/routes/user.routes"
import morgan from "morgan";
import { errorHandler } from "./api/middlewares/errorHandler";



const app = express();

app.use(express.json({
  limit:"50mb"
  }))
app.use(express.urlencoded({
  limit:"50mb",
  extended:true
}))
app.use(morgan  ("dev"))

app.use("/api/role",roleRouter)
app.use("/api/user",userRouter)
app.get("/",(req,res)=>{
  res.send("Hello world")
})

app.use(errorHandler)

export default app

