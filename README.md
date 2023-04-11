# Shopverse Frontend project
<img src="/src/assets/logo.png" alt="Alt text" title="Optional title">
## The Problem:

One problem that this front-end project solves is the difficulty customers face in finding and purchasing products online. With so many online stores available, customers often struggle to navigate confusing or outdated interfaces, leading to frustration and lost sales.

## Shopverse Solution:

Here we offer a modern and user-friendly interface that makes it easy for customers to browse and purchase products. With intuitive search and filtering options, customers can quickly find the products they are looking for and make a purchase with just a few clicks.

In addition, the store is optimized and has responsive design ensuring that customers can shop from any device, whether it be a desktop computer or a mobile phone, providing a seamless shopping experience from start to finish. By solving these common problems, Shopverse design for the front-end can help businesses increase sales and improve customer satisfaction.

## Features

### ** Ready to use **

-Google Authentication

** --Customers-- **

- Products:

  - Prducts Search
  - Filter products by price
  - Clear Filters
  - Product variants selection
  - Add product to Cart

- Cart:
  - Increase and decrease order ammount
  - Remove product from cart
  - Clear all items from cart

** --Admins-- **

-All customer features included
-Access to admin dashboard through gear icon in navigation bar

Dashboard:

- Products Table:
  - Products data visualization
  - Edit a product (name, price, description)
  - Delete a product
- Orders Table:
  - Products data visualization (relationship between data sources)
- Users Table:
  - Users data visialization

### **In development **

** --Customers-- **

- Products:

  - Filter products by Categories
  - Filter products by Color
  - Filter products by Size
  - User input for Rating System
  - Direct Buy button from the product view
  - Visual signal to know if product instance is in the cart
  - Variant selection system

- Cart:
  - Add variant selection from the cart
  - Create checkout method conected to stripe

** --Admins-- **

Dashboard:

- Products Table:
  - Increase edit controls for product(Categories, Colors, Sizes)
  - Create new product
- Orders Table:
  - Cancel Order
  - Add order status
- Users Table:
  - User management (ban and unban an user)
  - Check users roles

## Tech Stack and Dependencies:

** Core Tech **

-React
-TypeScript
-Redux
-Tailwind CSS

** Project Dependencies **

- @react-oauth/google: ^0.9.0
- @reduxjs/toolkit: ^1.9.3
- framer-motion: ^10.8.4
- jwt-decode: ^3.1.2
- react: ^18.2.0
- react-dom: ^18.2.0
- react-redux: ^8.0.5
- react-router: ^6.9.0
- react-router-dom: ^6.9.0
- redux: ^4.2.1
- redux-thunk: ^2.4.2

** Dev Dependencies **

- "@types/react": "^18.0.28",
- "@types/react-dom": "^18.0.11",
- "@types/react-redux": "^7.1.25",
- "@typescript-eslint/eslint-plugin": "^5.55.0",
- "@typescript-eslint/parser": "^5.55.0",
- "@vitejs/plugin-react": "^3.1.0",
- "autoprefixer": "^10.4.14",
- "eslint": "^8.36.0",
- "eslint-config-prettier": "^8.8.0",
- "eslint-plugin-prettier": "^4.2.1",
- "eslint-plugin-react": "^7.32.2",
- "postcss": "^8.4.21",
- "prettier": "^2.8.4",
- "tailwindcss": "^3.2.7",
- "typescript": "^4.9.3",
- "vite": "^4.2.0"

## Set up

Install Node.js and NPM (Node Package Manager) on your system if you haven't already. You can download the latest version of Node.js and NPM from their official website. node:https://nodejs.org/en

Create a new directory on your system and navigate to it using your terminal / command prompt.

Clone the repository to the current repo or create a new file named package.json and copy the content of the file with the same name from the this repository into it.

Run the command npm install to install all the dependencies listed in the dependencies and devDependencies sections of the package.json file.

Once the installation is complete, you can run the following commands:

npm run dev to start the development server using Vite.
npm run build to build the production-ready code.
npm run preview to preview the built production code.

## Usage:
