import express from "express";
import cors from "cors";
import usersRoutes from "./Routes/usersRoutes";
import commentRoutes from "./Routes/commentsRoutes";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors());

//create middlewares for routes
app.use("/api", usersRoutes);
app.use("/apicomment", commentRoutes);

import "./DB/connection";
const port = process.env.PORT || 5000;

//start express server
app.listen(port, () => {
	console.log(`Express server listening on Port ${port}`);
});
