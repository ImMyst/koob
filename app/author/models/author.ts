import { DateTime } from "luxon";
import { BaseModel, column, hasMany } from "@adonisjs/lucid/orm";
import { Opaque } from "@adonisjs/core/types/helpers";
import Book from "#book/models/book";
import type { HasMany } from "@adonisjs/lucid/types/relations";

export type AuthorId = Opaque<"AuthorId", "string">;

export default class Author extends BaseModel {
  @column({ isPrimary: true })
  declare id: AuthorId;

  @column({ serializeAs: null })
  declare firstName: string;

  @column({ serializeAs: null })
  declare lastName: string;

  @column({ serializeAs: null })
  @hasMany(() => Book)
  declare books: HasMany<typeof Book>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;
}
