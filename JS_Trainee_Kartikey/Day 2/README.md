🛒 Interactive Shopping Cart System

An interactive shopping cart calculator built using HTML, CSS, and JavaScript, which dynamically fetches product data from an API, allows users to add items to a cart, and automatically applies discounts based on quantity and price.

📋 Features

✅ Fetches live product data from FakeStore API
✅ Displays products dynamically on the webpage
✅ Add items to the cart with a single click
✅ Automatically updates item quantity if the same product is added again
✅ Calculates subtotal, discounts, and final total
✅ Applies 10% discount if total quantity > 10
✅ Applies 5% discount if total price after quantity discount > $500
✅ Includes a fallback product list if API fails
✅ Responsive and simple UI design

🧩 Technologies Used

HTML5 – Structure of the webpage

CSS3 – Styling and layout

JavaScript (ES6) – Dynamic data handling and logic

FakeStore API – External product data source

🚀 How to Run the Project

Download or clone this repository:

git clone https://github.com/your-username/shopping-cart-calculator.git

Open the folder in your code editor (like VS Code).

Open the file index.html in your web browser.

Wait for products to load (from API).

Click Add to Cart for any item.

Click Calculate Total to view subtotal, discounts, and final price.

🧮 Discount Logic
Condition	Discount Type	Percentage	Description
Total Quantity > 10	Quantity Discount	10%	Applied to subtotal
After Quantity Discount > $500	Price Discount	5%	Applied to updated total

📦 Folder Structure
📂 Shopping-Cart
 ┣ 📜 index.html
 ┣ 📜 script.js
 ┣ 📜 README.md
 ┗ 📂 Screenshots

 ⚠️ Notes

If the FakeStore API is unavailable, the app automatically loads fallback products (Laptop, Mouse, Keyboard, etc.).

The cart resets when the page reloads.