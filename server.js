const express = require('express');
const { Author, Book } = require('./model');

const app = express();
const PORT = process.env.PORT || 3000

app.get('/authors', async (req,res)=>{
  try {
    const allAuthors = await Author.findAll();
    res.send(allAuthors)
  } catch (e) {
    console.log("ha")
  }
})

app.get('/books', async (req,res)=>{
  try {
    const allBook = await Book.findAll();
    res.send(allBook)
  } catch (e) {
    console.log("ha")
  }
})

app.get('/authors/:id/books', async(req,res)=>{
  try {
    const id = req.params.id
    const who = await Author.findByPk(id);
    const whoBooks = await who.getBooks();
    res.send(whoBooks);

  } catch (e) {
    console.log("ha")
  }
})



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
