# E-Commerce Frontend (Amazon Clone)

## Overview
This project is a frontend e-commerce application built with React, designed as an exact UI clone of Amazon. It integrates with a live API to allow users to:
- Add products to cart
- Delete products from cart
- Update product quantity in cart
- Add reviews and ratings
- Like products

## Features
- **Product Management:** Fetch and display products dynamically from the API.
- **Shopping Cart:** Add, update, and remove items from the cart with real-time updates.
- **User Interaction:** Users can rate, review, and like products.
- **Responsive Design:** Fully optimized for desktop and mobile devices.
- **State Management:** Uses React Context API for state management.

## Tech Stack
- **Frontend:** React, React Router, Context API, Tailwind CSS 
- **Backend:** Live API 
- **Package Manager:** npm

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Damiieibikun/Amazon-Clone.git
   
   ```

2. **Navigate to the project directory:**
   ```sh
   cd ecommerce-frontend
   ```

3. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

4. **Create an environment file:**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_API_BASE_URL=https://your-live-api-url.com
   ```

5. **Run the application:**
   ```sh
   npm start
   # or
   yarn start
   ```

6. **Access the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Interaction
The frontend interacts with the backend API using `fetch` or `axios`. Here are the key API endpoints used:

- **Fetch Products:** `GET /products?merchant_id={merchantId}`
- **Fetch Categories:** `GET /categories?merchant_id={merchantId}`
- **Create User:** `POST /users`
- **Login User:** `POST /users/login`
- **Add to Cart:** `POST /cart`
- **Update Cart Quantity:** `PUT /cart/:id`
- **Delete from Cart:** `DELETE /cart/:id`
- **Post Review:** `POST /reviews`
- **Delete Review:** `DELETE /reviews`
- **Edit Review:** `PUT /reviews/{id}`
- **Post Rating:** `POST /ratings`
- **Delete Rating:** `DELETE /ratings`
- **Edit Rating:** `PUT /ratings`
- **Get Likes:** `GET /users/likes?user_id={id}`
- **Like Product:** `POST /likes`
- **Remove Like:** `DELETE /likes`

> Ensure the API base URL is set correctly in `.env` before running the application.

## File Structure
```
📦 ecommerce-frontend
├── 📂 src
│   ├── 📂 components   # Reusable components (Navbar, ProductCard, etc.)
│   ├── 📂 pages        # Pages (Home, Cart, Product Details, etc.)
│   ├── 📂 context      # Context API for global state management (if used)
│   ├── 📂 assets       # Images, icons, etc.
│   ├── App.js         # Main application file
│   ├── index.js       # Entry point
├── .env               # Environment variables
├── package.json       # Project dependencies and scripts
├── README.md          # Documentation
```


## Usage
### Adding a Product to Cart
1. Navigate to a product page.
2. Click on "Add to Cart."
3. View cart to update quantity or remove the item.

### Updating Product Quantity
1. Go to the cart page.
2. Use the `+` or `-` buttons to change the quantity.
3. Changes reflect in real-time.

### Adding Reviews and Ratings
1. Open a product page.
2. Scroll to the review section and submit a rating/comment.

### Liking a Product
1. Click the heart icon to like a product.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

