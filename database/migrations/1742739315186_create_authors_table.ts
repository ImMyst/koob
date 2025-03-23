import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "authors";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid("id")
        .primary()
        .defaultTo(this.db.rawQuery("gen_random_uuid()").knexQuery);
      table.increments("first_name");
      table.increments("last_name");
      table.increments("books");

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
