import { ExpressApp } from "./app";
import db from "./config/db";

const PORT = process.env.PORT || 3000;

export const StartServer = async () => {
  const expressApp = await ExpressApp();
  
  expressApp.listen(PORT, () => {
    console.log(`App is listening to ${PORT}`);
  });

  process.on("uncaughtException", async (err) => {
    process.exit(1);
  });

  await db.testConnection();
};

StartServer().then(() => {
  console.log("Server is up");
});