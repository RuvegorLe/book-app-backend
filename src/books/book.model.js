const mongoose =  require('mongoose');

//xác định trường thông qua schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true,
    },
    category:  {
        type: String,
        required: true,
    },
    trending: {
        type: Boolean,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    newPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  }, {
    // quản lý thời gian cập nhật dữ liệu
    timestamps: true,
  });
  // mongoose sẽ ánh xạ model Book sang colection books ( chuyển sang chữ thường + số nhiều)
  // sau khi gọi .save() trong controller thì mongo sẽ tự tạo collection
  const Book = mongoose.model('Book', bookSchema);

  module.exports = Book;