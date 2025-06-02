import { Schema, model, type Document } from 'mongoose';

export interface BookDocument extends Document {
  bookId: string;
  title: string;
  authors: string[];
  description: string;
  image: string;
  link: string;
}

export const bookSchema = new Schema<BookDocument>({
  bookId: { type: String, required: true }, // <-- required!
  title: { type: String, required: true },
  authors: [{ type: String }],
  description: String,
  image: String,
  link: String,
});

const Book = model<BookDocument>('Book', bookSchema);

export default Book;
