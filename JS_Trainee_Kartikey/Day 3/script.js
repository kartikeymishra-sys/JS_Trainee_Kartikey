const form = document.getElementById("userForm");
const displayBox = document.getElementById("displayBox");
const themeToggle = document.getElementById("themeToggle");
const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");

let allData = JSON.parse(localStorage.getItem("formData")) || []; 

if (allData.length) displayBox.textContent = JSON.stringify(allData, null, 2);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const age = parseInt(ageInput.value.trim());
  const dob = dobInput.value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const hobbies = [...document.querySelectorAll('input[type="checkbox"]:checked'),].map((h) => h.value);
  const country = document.getElementById("country").value;

  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  let isValid = true;

  if (!name || name.length < 2 || name.length > 50) {
    document.getElementById("nameError").textContent ="Name must be 2–50 characters.";
    isValid = false;
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  if (!age || age < 1 || age > 120 || isNaN(age)) {
    document.getElementById("ageError").textContent ="Enter a valid age between 1 and 120.";
    isValid = false;
  }

  if (!dob || new Date(dob) > new Date()) {
    document.getElementById("dobError").textContent ="Enter a valid past date.";
    isValid = false;
  }

  if (!gender) {
    document.getElementById("genderError").textContent = "Select a gender.";
    isValid = false;
  }

  if (hobbies.length === 0) {
    document.getElementById("hobbiesError").textContent ="Select at least one hobby.";
    isValid = false;
  }

  if (!country) {
    document.getElementById("countryError").textContent = "Select a country.";
    isValid = false;
  }

  if (!isValid) return;

  const userData = {
    name,
    email,
    age,
    dob,
    gender: gender.value,
    hobbies,
    country,
  };

  allData.push(userData);
  localStorage.setItem("formData", JSON.stringify(allData)); 

  displayBox.textContent = JSON.stringify(allData, null, 2);
  alert("Form submitted successfully!");
  form.reset();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
