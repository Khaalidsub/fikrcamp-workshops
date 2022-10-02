import express, { json } from "express";
function main() {
  const app = express();
  app.use(json());

  app.listen(8080, () => {
    console.log("server running on port 8080");
  });
}

main();
