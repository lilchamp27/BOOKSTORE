const mongoose = require('mongoose');

// Define Item Schema
const ItemSchema = new mongoose.Schema(
  {
    productID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference the Product model
      required: true,
    },
    title: {
      type: String,
      required: true, // Title of the book
    },
    author: {
      type: String, // Author of the book
      required: true,
    },
    format: {
      type: String, // Format of the book (e.g., Hardcover, Paperback, eBook)
      enum: ["Hardcover", "Paperback", "eBook"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity cannot be less than 1"],
    },
    price: {
      type: Number,
      required: true,
      min: [1, "Price cannot be less than 1"],
    },
    image: {
      type: String, // URL to the book's image
      required: true,
    },
  },
  { timestamps: true }
);

// Define Cart Schema
const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference the User model
      required: true,
    },
    items: [ItemSchema], // Array of items in the cart
    deliveryFee: {
      type: Number,
      default: 10, // Default delivery fee (can be adjusted)
      min: [0, "Delivery fee cannot be negative"],
    },
    total: {
      type: Number,
      required: true,
      default: 0, // Total amount for the cart
      min: [0, "Total cannot be negative"],
    },
  },
  { timestamps: true }
);

// Middleware to calculate cart total before saving
CartSchema.pre("save", function (next) {
  const cart = this;

  cart.total = cart.items.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, cart.deliveryFee);

  next();
});

// Export the model
module.exports = mongoose.model("Cart", CartSchema);
