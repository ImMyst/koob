import { DateTime } from "luxon";
import hash from "@adonisjs/core/services/hash";
import { compose } from "@adonisjs/core/helpers";
import { BaseModel, column } from "@adonisjs/lucid/orm";
import { withAuthFinder } from "@adonisjs/auth/mixins/lucid";
import { Opaque } from "@adonisjs/core/types/helpers";

const AuthFinder = withAuthFinder(() => hash.use("scrypt"), {
  uids: ["email"],
  passwordColumnName: "password",
});

export type UserId = Opaque<"UserId", "string">;

export default class User extends compose(BaseModel, AuthFinder) {
  @column({ isPrimary: true })
  declare id: UserId;

  @column()
  declare email: string;

  @column({ serializeAs: null })
  declare password: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;
}
