import productModel from "../models/productModel.js";
import {v2 as cloudinary} from "cloudinary"

// Function to add a new product
const addProduct = async (req, res) => {
  try {
    const {
        title,
        description,
        price,
        category,
        author,
        format,
        bestseller
      } = req.body;
      
      const image1 = req.files.image1 && req.files.image1[0]
      const image2 = req.files.image2 && req.files.image2[0]
      const image3 = req.files.image3 && req.files.image3[0]
      const image4 = req.files.image4 && req.files.image4[0]

      const images = [image1, image2, image3, image4].filter((item)=> item !== undefined)

      let imagesUrl = await Promise.all(
        images.map(async (item)=> {
            let result = await cloudinary.uploader.upload(item.path,{resource_type: 'image'});
            return result.secure_url
        })
      )


      console.log(
        title,
        description,
        price,
        category,
        format,
        bestseller)
        console.log(imagesUrl)

        const productData = {
          title, description, price: Number (price), category, bestseller: bestseller === "true"? true: false, author, format: JSON.parse(format), images: imagesUrl, date: Date.now()
        }
  
        console.log(productData)
  
        const product = new productModel(productData);
        await product.save()

    res.json({success:true, message:"Product Added"})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Failed to add product", error: error.message });
    
  }
};

// Function to list all products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

// Function to remove a product by ID
const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted", product: deletedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error: error.message });
  }
};

// Function to get a single product by ID
const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
