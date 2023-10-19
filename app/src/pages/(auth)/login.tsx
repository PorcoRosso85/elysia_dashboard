import Elysia from "elysia";
import { html } from "@elysiajs/html";

export const login = new Elysia().use(html()).get("/login", () => {
  return `<dev>login</dev>`;
});
