import Elysia from "elysia";
import { authGroup } from "./(auth)/*";

export const pages = new Elysia().use(authGroup);
