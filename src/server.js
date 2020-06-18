import express from "express";
import cors from "cors";
import usersRoutes from "./Routes/usersRoutes";
import commentRoutes from "./Routes/commentsRoutes";
import sequelize from "./DB/connection";
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

//create middlewares for routes
app.use("/api", usersRoutes);
app.use("/apicomment", commentRoutes);

//App's entry point
app.get("/", (req, res) => {
  res.send(
    `<marquee height='100%'>Welcome to Comments API built with Node/Express server. You can interact with this API with a Frontend App or with Postman. Thank you...Comments API &copy; 2020</marquee>`
  );
});

const port = process.env.PORT || 5000;

//start express server
app.listen(port, async () => {
  console.log(`Express server listening on Port ${port}`);
  try {
    await sequelize.authenticate({ logging: false });
    console.log("Database Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
