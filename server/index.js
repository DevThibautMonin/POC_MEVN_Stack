import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRouter from "./routes/todoRouter.js"
import config from "config"

const PORT = config.get("server.port")
const mongoBaseUrl = config.get("server.mongoBaseUrl")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/todolist", todoRouter)

mongoose.connect(mongoBaseUrl, {
  useNewUrlParser : true,
  useUnifiedTopology : true
}).then(
  () => console.log("MongoDB database connected.")
).catch((err) => {
  console.log(err)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
