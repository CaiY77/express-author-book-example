const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'what_ever',
  dialect: 'postgres',
});

const Author = sequelize.define('author', {
  name: Sequelize.STRING
});

const Book = sequelize.define('book', {
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  book_image_url: Sequelize.STRING,
  description: Sequelize.TEXT
});

Author.hasMany(Book, { onDelete: 'cascade' });
Book.belongsTo(Author);

module.exports = {
  Author,
  Book,
  sequelize
}
