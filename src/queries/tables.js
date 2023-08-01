const createTablesQueries = {

  createUsers: () => {
    return {
      name: "create-users",
      text: "CREATE TABLE usere(id SERIAL PRIMARY KEY NOT NULL,name TEXT NOT NULL,email TEXT UNIQUE NOT NULL)",
    };
  },
  createCategories: () => {
    return {
      name: "create-categories",
      text: "CREATE TABLE categorie(id SERIAL PRIMARY KEY NOT NULL, name TEXT NOT NULL)",
    };
  },
  createFinances: () => {
    return {
      name: "create-finances",
      text: "CREATE TABLE finance(id SERIAL PRIMARY KEY NOT NULL, user_id INT, category_id INT, date DATE, title TEXT, value NUMERIC, CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, CONSTRAINT fk_categories FOREIGN KEY(category_id) REFERENCES categories(id) ON DELETE SET NULL)",
    };
  },
};

module.exports = createTablesQueries;