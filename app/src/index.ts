import { Elysia } from "elysia";
import { pages } from "./pages/*";

const app = new Elysia()
  .use(pages)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
