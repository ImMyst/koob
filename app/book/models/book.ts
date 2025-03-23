import { DateTime } from "luxon";
import { BaseModel, column, hasOne } from "@adonisjs/lucid/orm";
import { Opaque } from "@adonisjs/core/types/helpers";

import type { HasOne } from "@adonisjs/lucid/types/relations";
import Author from "#author/models/author";

export type BookId = Opaque<"BookId", "string">;

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  declare id: BookId;

  @column({ serializeAs: null })
  declare name: string;

  @column({ serializeAs: null })
  declare description: string;

  @column({ serializeAs: null })
  @hasOne(() => Author)
  declare author: HasOne<typeof Author>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;
}
