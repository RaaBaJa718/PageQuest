import { Schema, model, type Document } from 'mongoose';

export interface BookDocument extends Document {
  title: string;
  author: string;
  // ...other fields...
}

export const bookSchema = new Schema<BookDocument>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  // ...other fields...
});

const Book = model<BookDocument>('Book', bookSchema);

export default Book;
