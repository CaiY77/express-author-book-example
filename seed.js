const {Book,Author} = require('./model.js');

const main = async () => {

  await Book.destroy({
    where: {}
  });
  await Author.destroy({
    where: {}
  });

  const austen = await Author.create({
    name: 'Jane Austen'
  });

  const pride = await Book.create({
    title: 'Pride and Prejudice',
    year: 1813,
    cover_image_url: 'https://cdn.theatlantic.com/media/old_wire/img/upload/2013/01/14/9780307950901_p0_v1_s260x420.jpeg',
    description: 'no'
  });

  await pride.setAuthor(austen);
};



main();
