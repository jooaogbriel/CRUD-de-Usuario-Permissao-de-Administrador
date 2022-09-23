import express from "express";
import userRouter from './routes/users.routes'
import loginRouter from './routes/login.routes'

const app = express();
app.use(express.json());

app.use("/users", userRouter)
app.use("/login", loginRouter)

app.listen(3000)

export default app;