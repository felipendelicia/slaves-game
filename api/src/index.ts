import app from "./app";
import { info } from "./config/setColors";

app.listen(app.get("port"), () => {
  console.log(
    info(`[server]: Server is running at https://localhost:${app.get("port")}`)
  );
});
