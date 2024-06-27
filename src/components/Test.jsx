import React, { useState } from "react";
import "../css/Pover.css"; // Make sure to create this CSS file for styling
import ReactImageMagnify from "react-image-magnify";

const ImagesGallery = () => {
  const product = {
    name: "Awesome Sneakers",
    description: "Comfortable and stylish sneakers perfect for everyday use.",
    price: "$99.99",
    sizes: ["S", "M", "L", "XL"],
    images: [
      "https://www.meenabazaar.shop/cdn/shop/files/Artboard1_ab15cf60-48ac-43fd-9527-fa3cec01500f_small.jpg?v=1711975685",
      "https://www.meenabazaar.shop/cdn/shop/files/Artboard10_e55d43cc-ac8c-4ebd-b1bb-c3ff3e9fcb6e_small.jpg?v=1711975683",
      "https://via.placeholder.com/300?text=Back+View",
      "https://via.placeholder.com/300?text=Top+View",
    ],
    rating: 4.5,
    reviews: 120,
  };

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    alert(
      `Added ${product.name} (Size: ${selectedSize}, Quantity: ${quantity}) to cart!`
    );
  };

  const handleBuyNow = () => {
    alert(
      `Proceeding to buy ${product.name} (Size: ${selectedSize}, Quantity: ${quantity})!`
    );
  };

  return (
    <div className="product-overview">
      <div className="image-gallery">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${product.name} view ${index + 1}`}
            className={`thumbnail ${selectedImage === image ? "selected" : ""}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <img src={selectedImage} alt={product.name} className="product-image" />
      <div className="product-details">
        <h1 className="product-name">{product.name}</h1>
        <div className="product-rating">
          <span>Rating: {product.rating}⭐</span>
          <span>({product.reviews} reviews)</span>
        </div>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <div className="product-sizes">
          <label htmlFor="sizes">Choose size:</label>
          <select
            id="sizes"
            value={selectedSize}
            onChange={(e) => handleSizeChange(e.target.value)}
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="product-quantity">
          <label htmlFor="quantity">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
          />
        </div>
        <div className="product-actions">
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
          <button onClick={handleBuyNow} className="buy-now-button">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImagesGallery;
