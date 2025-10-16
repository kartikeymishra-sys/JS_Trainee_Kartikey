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

const getAverage = () => {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total = total + students[i].score;
  }
  return total / students.length;
};

const getHighest = () => {
  let highest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highest.score) {
      highest = students[i];
    }
  }
  return highest;
};

const getLowest = () => {
  let lowest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowest.score) {
      lowest = students[i];
    }
  }
  return lowest;
};

const getGradeDistribution = () => {
  let A = 0, B = 0, C = 0, D = 0, F = 0;
  for (let i = 0; i < students.length; i++) {
    let score = students[i].score;
    if (score >= 90 && score <= 100){
        A++;
    } 
    else if (score >= 80 && score < 90) {
        B++;
    }
    else if (score >= 70 && score < 80) {
        C++;
    }
    else if (score >= 60 && score < 70) {
        D++;
    }
    else F++;
  }
  return { A, B, C, D, F };
};

const getRetakeList = () => {
  let retake = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 60) {
      retake.push(students[i].name);
    }
  }
  return retake;
};

const gradeAnalyzer = () => {
  const average = getAverage();
  const highest = getHighest();
  const lowest = getLowest();
  const grades = getGradeDistribution();
  const retake = getRetakeList();

  console.log("Average Score:", average);
  console.log("Highest Score:", highest.name, "(", highest.score, ")");
  console.log("Lowest Score:", lowest.name, "(", lowest.score, ")");
  console.log("Grade Distribution:", grades);
  console.log("Students needing retake:", retake);
}

gradeAnalyzer();