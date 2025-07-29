require("dotenv").config();
const express = require ("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const connectDb = require("./utils/Database");
const errorMiddleware = require("./middlewares/error-middleware");
const blogRoute = require("./router/blog-router")


//teckle
const corsOptions = {
    origin: [
        "http://localhost:5173",
        "https://blogging-platform-mu-three.vercel.app"
    ],
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credential:true,
}

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
//admin route
app.use("/api/admin", adminRoute);
app.use("/api/blogging", blogRoute);
app.use('/uploads', express.static('uploads'));



app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
app.listen(PORT, () => {
    console.log(`server is runnin at port: ${PORT}`);
    });
});