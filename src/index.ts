import app from "./app";
import AppDataSource from "./infrastructure/db/dataSource";

const PORT = 3000;
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");

    app.listen(PORT, () => {
  console.log("server is running ");
});


  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });


