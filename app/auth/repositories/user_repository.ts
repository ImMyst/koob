import User from "#auth/models/user";
import { Identifier } from "#core/domain/identifier";

export class UserRepository {
  async findUserByEmail(email: string) {
    const userRecord = await User.query().where("email", email).first();

    if (!userRecord) {
      return null;
    }

    return User.create({
      id: Identifier.fromString(userRecord.id),
      password: userRecord.password,
      email: userRecord.email,
    });
  }
}
