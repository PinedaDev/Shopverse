# <img src="/src/assets/logo.png" alt="Alt text" title="Optional title"> Shopverse Frontend project

## The Problem:

One problem that this front-end project solves is the difficulty customers face in finding and purchasing products online. With so many online stores available, customers often struggle to navigate confusing or outdated interfaces, leading to frustration and lost sales.

## Shopverse Solution:

Here you have a modern and user-friendly interface that makes it easy for customers to browse and purchase products. With intuitive search and filtering options, customers can quickly find the products they are looking for and make a purchase with just a few clicks.

![image](https://user-images.githubusercontent.com/90119717/231150033-c6b7fa08-e35a-433c-8bc0-c673d04ee5d5.png)

In addition, the store is optimized and has responsive design ensuring that customers can shop from any device, whether it be a desktop computer or a mobile phone, providing a seamless shopping experience from start to finish. By solving these common problems, Shopverse design for the front-end can help businesses increase sales and improve customer satisfaction.

![image](https://user-images.githubusercontent.com/90119717/231150361-b2e9f604-dcdf-46aa-845b-2b018fb3638a.png)

## Features

### ** Ready to use **

-Google Authentication

![image](https://user-images.githubusercontent.com/90119717/231150508-8622d643-1bab-425a-b53d-489077f71908.png)

** --Customers-- **

- Products:

  - Prducts Search
  - Filter products by price
  - Clear Filters
  - Product variants selection
  - Add product to Cart

![image](https://user-images.githubusercontent.com/90119717/231151495-3251667a-dd9e-464e-81f4-a96054fcab88.png)
![image](https://user-images.githubusercontent.com/90119717/231150957-9ec47fb3-dd90-4787-8850-5e6d67067bc7.png)

- Cart:
  - Increase and decrease order ammount
  - Remove product from cart
  - Clear all items from cart

![image](https://user-images.githubusercontent.com/90119717/231151126-1610bd24-72ed-4830-acd0-9ca07c629fe4.png)

** --Admins-- **

- All customer features included
- Access to admin dashboard through gear icon in navigation bar

![image](https://user-images.githubusercontent.com/90119717/231151909-3dba9316-5db1-41b5-8092-009316673256.png)

Dashboard:

- Products Table:
  - Products data visualization
  - Edit a product (name, price, description)
  - Delete a product
- Orders Table:
  - Products data visualization (relationship between data sources)
- Users Table:
  - Users data visialization

![image](https://user-images.githubusercontent.com/90119717/231152228-16f01225-15d3-4997-9c0e-a5f7f3b8ea28.png)
![image](https://user-images.githubusercontent.com/90119717/231152355-ac5169cf-8eef-44e5-9eac-1025edbcc2bd.png)

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

Clone the repository to the directory that you created before

Run the command npm install to install all the dependencies listed in the dependencies and devDependencies sections of the package.json file.

Once the installation is complete, you can run the following commands:

- npm run dev : to start the development server using Vite.
- npm run build : to build the production-ready code.
- npm run preview : to preview the built production code.

## Usage:
