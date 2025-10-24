# 🧾 Dynamic Form with JSON Display

## 📘 Description
This project is a **Dynamic Form** created using **HTML, CSS, and JavaScript**.  
It allows users to fill in their details, validates the input, and displays the submitted data in **JSON format**.  
The submitted data is also **saved in Local Storage**, so it remains visible even after reloading the page.  
A **Theme Toggle Button** is provided to switch between light 🌞 and dark 🌙 modes.

---

## 🧠 Fields to Enter
The user needs to fill out the following fields in the form:

1. **Name** – Must be between 2 to 50 characters  
2. **Email** – Must be a valid email address  
3. **Date of Birth (DOB)** – Must be a past date  
4. **Age** – Between 1 and 120  
5. **Gender** – Male / Female / Other  
6. **Hobbies** – Select at least one (Reading, Traveling, Coding, Music)  
7. **Country** – Choose from India, USA, or UK  

---

## ⚙️ Functions Used
- `addEventListener()` → To handle form submission and theme toggle  
- `preventDefault()` → To stop page reload on submit  
- `querySelector()` / `getElementById()` → To access input fields and error messages  
- `JSON.stringify()` → To convert data into JSON format  
- `localStorage.setItem()` → To save submitted data in browser storage  
- `localStorage.getItem()` → To retrieve and show stored data on page load  
- `classList.toggle()` → To switch between light and dark themes  

---

## 🧩 Sample JSON Output

```json
[
  {
    "name": "Kartikey Mishra",
    "email": "kartikey@example.com",
    "age": 22,
    "dob": "2003-05-10",
    "gender": "Male",
    "hobbies": ["Reading", "Coding"],
    "country": "India"
  }
]
