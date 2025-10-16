# 📘 Grade Analyzer (Vanilla JavaScript)

## 📖 Overview
This project analyzes the performance of a class of students based on their scores.  
It calculates and displays:
- ✅ Average score of the class  
- 🏆 Highest and lowest scoring students  
- 🎯 Grade distribution (A, B, C, D, F)  
- 🔁 List of students who need to retake the exam (score < 60)

The project is written entirely in **vanilla JavaScript**, using simple loops and conditionals — perfect for beginners learning logic and arrays.

---

## 💻 Example Input
```javascript
const students = [
  { name: "Tanmay", score: 85 },
  { name: "Shrey", score: 92 },
  { name: "Varun", score: 58 },
  { name: "Pranav", score: 74 },
  { name: "Kartikey", score: 67 },
  { name: "Het", score: 81 },
  { name: "Parth", score: 95 },
  { name: "Jay", score: 49 },
  { name: "Nazil", score: 73 },
  { name: "Yash", score: 88 }
];

⚙️ How It Works

The program uses several helper functions:

Function	Description
getAverage()	Calculates the average score of all students
getHighest()	Finds the student with the highest score
getLowest()	Finds the student with the lowest score
getGradeDistribution()	Counts how many students fall into each grade category (A–F)
getRetakeList()	Lists students who scored below 60
gradeAnalyzer()	Main function that calls all helpers and prints the results

🧮 Grade Categories
Grade	Score Range
A	90–100
B	80–89
C	70–79
D	60–69
F	Below 60

🖥️ Example Output

When you run the program (node gradeAnalyzer.js), the console will display:

Average Score: 76.2
Highest Score: Parth ( 95 )
Lowest Score: Jay ( 49 )
Grade Distribution: { A: 2, B: 3, C: 2, D: 1, F: 2 }
Students needing retake: [ 'Varun', 'Jay' ]

🚀 How to Run

Save the file as gradeAnalyzer.js

Open your terminal in the same folder

Run the program using:

node gradeAnalyzer.js

🧩 Key Learnings

Working with arrays of objects in JavaScript

Using loops, functions, and conditionals

Performing calculations and organizing results in objects

Printing formatted output to the console.