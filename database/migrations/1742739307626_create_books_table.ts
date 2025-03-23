import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "books";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(this.db.rawQuery("gen_random_uuid()").knexQuery);
      table.string("name");
      table.string("description");
      table.uuid("author_id");

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
