# e-Commerce Demo (React)

**e-Commerce Demo** is a fully functional single-page web application built with **React** that simulates an online shopping experience. It demonstrates key features of modern e-commerce systems such as product listing, category filtering, cart management, and client-side routing. This project is ideal for developers looking to understand component-based architecture, state management, and routing in a React environment.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo Screenshots](#demo-screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

This application is a front-end prototype of an online store. It simulates real-world shopping behaviors with the ability to:

- Browse products across categories
- Add/remove items to/from the shopping cart
- View cart total and item quantity
- Navigate across pages using React Router

Although the app does not persist data to a backend or database, it provides a solid base for integrating a real API and building a full-stack e-commerce platform.

---

## Features

- Responsive UI with dynamic routing
- Category-based product filtering
- Shopping cart management
- Real-time updates to cart summary
- Modular and reusable components
- Clean, maintainable code with separation of concerns

---

## Tech Stack

- **React** – UI library for building reusable components
- **React Router** – Client-side routing
- **Context API / useReducer** – State management
- **CSS** – Styling and layout
- **JavaScript (ES6+)** – Core scripting
- **HTML5** – Markup language for structure

---

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js >= 14.x
- npm or yarn

### Clone the repository

```bash
git clone https://github.com/mrkankilic27/e-commerce-demo-react.git
cd e-commerce-demo-react
```

### Install dependencies

```bash
npm install
```

or

```bash
yarn
```

### Start the development server

```bash
npm start
```

Then open your browser and navigate to:  
`http://localhost:3000`

---

## Usage

Once the app is running:

1. Navigate to the homepage to browse all products.
2. Use the category sidebar to filter products by category.
3. Click "Add to Cart" to add items.
4. Click the cart icon to view or remove items from the cart.
5. Use the total price and item count to track your order summary.

---

## Project Structure

```
e-commerce-demo-react/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable UI components (e.g., Navbar, ProductCard)
│   ├── pages/              # Route-based pages (e.g., Home, Cart)
│   ├── context/            # Global state management
│   ├── data/               # Sample product data
│   ├── App.js              # Main component with routing
│   └── index.js            # Entry point
├── .gitignore
├── LICENSE
├── package.json
└── README.md
```

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Create a Pull Request

Before contributing, please ensure your code follows the project's code style and is linted properly.

---

## License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for more information.

---

## Contact

**Mertcan Kankılıç**  
Email: mertcankankilic27@gmail.com  
GitHub: [mrkankilic27](https://github.com/mrkankilic27)

If you found this project useful, feel free to star the repository.
