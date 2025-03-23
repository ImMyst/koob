import { AuthService } from "@adonisjs/auth/types";
import { inject } from "@adonisjs/core";
import type { HttpContext } from "@adonisjs/core/http";

@inject()
export default class LoginController {
  constructor(private authService: AuthService) {}
  async execute({ auth, request, response, session }: HttpContext) {
    const { email, password } = request.all();

    const user = await this.authService.attempt(email, password);

    if (!user) {
      session.flashErrors({
        E_INVALID_CREDENTIALS:
          "Aucun compte n'a été trouvé avec les identifiants fournis.",
      });

      return response.redirect().back();
    }

    await auth.use("web").login(user);

    return response.redirect().toPath("/");
  }
}
