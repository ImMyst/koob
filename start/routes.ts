/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () =>
  import("#auth/controllers/register_controller");
import { middleware } from "#start/kernel";
import router from "@adonisjs/core/services/router";

router.get("/", async ({ auth, inertia }) => {
  await auth.check();

  return inertia.render("home");
});

router.group(() => {
  router.get("/register", [RegisterController, "render"]);
  router.post("/register", [RegisterController, "execute"]);
});
