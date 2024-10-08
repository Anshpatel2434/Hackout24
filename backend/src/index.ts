import { Hono } from "hono";
import { cors } from "hono/cors";
import { userRouter } from "./routes/user";
import { farmerRouter } from "./routes/farmer";
import { projectRouter } from "./routes/project";

const app = new Hono();

app.use("/*", cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/farmer", farmerRouter);
app.route("/api/v1/project", projectRouter);

export default app;
