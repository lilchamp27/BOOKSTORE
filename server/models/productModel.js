import mongoose from 'mongoose'

// Define the Product Schema
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Title of the book
      trim: true,
    },
    description: {
      type: String,
      required: true, // Description or summary of the book
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    price: {
      type: Number,
      required: true, // Price of the book
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String, // Genre or category of the book (e.g., Fiction, Non-Fiction, Mystery)
      required: true,
      enum: [
        "Fiction",
        "Non-Fiction",
        "Science",
        "Mystery",
        "Romance",
        "Biography",
        "Children",
        "Fantasy",
        "Self-Help",
      ],
    },
    format: {
      type: [String], // Formats available (e.g., Hardcover, Paperback, eBook)
      enum: ["Hardcover", "Paperback", "eBook"],
      default: ["Paperback"],
    },
    bestseller: {
      type: Boolean, // Indicates if the book is a bestseller
      default: false,
    },
    stock: {
      type: Number, // Available stock
      default: 0,
      required: true,
      min: [0, "Stock cannot be negative"],
    },
    publicationDate: {
      type: Date, // Date the book was published
    },
    publisher: {
      type: String, // Publisher of the book
    },
    rating: {
      type: Number, // Average rating of the book
      min: 0,
      max: 5,
      default: 0,
    },
    reviewsCount: {
      type: Number, // Number of reviews for the book
      default: 0,
      min: 0,
    },
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Export the Product model
const productModel = mongoose.model("Product", productSchema);

export default productModel