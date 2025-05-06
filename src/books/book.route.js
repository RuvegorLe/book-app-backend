const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// frontend => backend server => controller => book schema => database => send to server => back to the frontend
// post = khi gửi dữ liệu(submit) từ frontend lên database (thông qua server)
// get = khi lấy dữ liệu từ database về cho frontend
// put/patch = khi sửa hoặc cập nhật dữ liệu
// delete = khi xóa dữ liệu

// post a book
// cách 1 sử dụng controller
// router.post("/create-book", async (req, res) => {
//     try {
//       const newBook = await Book({ ...req.body });
//       await newBook.save();
//       res.status(200).send({ message: "Book posted successfully", book: newBook });
//     } catch (error) {
//       console.error("Error creating book", error);
//       res.status(500).send({ message: "Failed to create book" });
//     }
//   });
// cách 2
router.post("/create-book", verifyAdminToken, postABook)
//router.post("/create-book",  postABook)
// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);
//router.put("/edit/:id",  UpdateBook);

router.delete("/:id", verifyAdminToken, deleteABook)


module.exports = router;
