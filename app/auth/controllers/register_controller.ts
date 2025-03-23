import User from "#auth/models/user";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";

@inject()
export default class RegisterController {
  async render({ inertia }: HttpContext) {
    return inertia.render("register");
  }

  async execute({ auth, request, response }: HttpContext) {
    const { email, password } = request.only(["email", "password"]);

    const user = await User.create({
      email,
      password,
    });

    await auth.use("web").login(user);

    return response.redirect("/");
  }
}
