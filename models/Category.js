const db = require("../config/connection");

class Category {
  getAll() {
    return db.query("SELECT * FROM categories ORDER BY name");
  }

  getOne({ id }) {
    return db.query("SELECT * FROM categories WHERE id = $1", [id]);
  }

  create({ name, icon }) {
    return db.query(
      "INSERT INTO categories (name, icon) VALUES ($1, $2) RETURNING *",
      [name, icon]
    );
  }

  update({ name, icon, id }) {
    return db.query(
      "UPDATE categories SET name = $1, icon = $2 WHERE id = $3",
      [name, icon, id]
    );
  }

  delete({ id }) {
    return db.query("DELETE FROM categories WHERE id = $1", [id]);
  }
}

module.exports = new Category();
