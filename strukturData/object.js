//object assign
const object = {
  name: "Farhan A S",
  age: 22,
  gender: "Man",
  experience: [
    {
      company: "CV STARMEDIA COMPUTAMA",
      division: "IT Technician",
      year: "2023",
    },
    {
      company: "Bangkit Academy",
      division: {
        roleDivision: "IT Developer",
        category: "Android Developer",
      },
      year: "2023",
    },
  ],
};

// Create a string with all array elements in a list format
let content = "<ul>";
for (const key in object) {
  if (Array.isArray(object[key])) {
    // Handle the experience array
    content += `<li> ${key}: <ul>`;
    object[key].forEach((exp) => {
      content += "<li>";
      for (const expKey in exp) {
        if (typeof exp[expKey] === "object") {
          content += `${expKey}: <ul>`;
          for (const subKey in exp[expKey]) {
            content += `<li>${subKey}: ${exp[expKey][subKey]}</li>`;
          }
          content += "</ul>";
        } else {
          content += `${expKey}: ${exp[expKey]}<br>`;
        }
      }
      content += "</li>";
    });
    content += "</ul></li>";
  } else {
    content += `<li> ${key}: ${object[key]} </li>`; // Add each item as a list item
  }
}

content += "</ul>";

const outputDiv = document.getElementById("objectOutput");
outputDiv.innerHTML = content;

// using Object construct & for of
const object2 = new Object();
object2.name = "Farhan A S";
object2.age = 22;
object2.gender = "Man";
object2.experience = [
  {
    company: "CV STARMEDIA COMPUTAMA",
    division: "IT Technician",
    year: "2023",
  },
  {
    company: "Bangkit Academy",
    division: {
      roleDivision: "IT Developer",
      category: "Android Developer",
    },
    year: "2023",
  },
];

const outputDiv2 = document.getElementById("objectOutput2");

let content2 = "<ul>";
for (const [key, value] of Object.entries(object2)) {
  if (Array.isArray(value)) {
    // Handle the experience array
    content2 += `<li> ${key}: <ul>`;
    for (const exp of value) {
      content2 += "<li>";
      for (const [expKey, expValue] of Object.entries(exp)) {
        if (typeof expValue === "object") {
          content2 += `${expKey}: <ul>`;
          for (const [subKey, subValue] of Object.entries(expValue)) {
            content2 += `<li>${subKey}: ${subValue}</li>`;
          }
          content2 += "</ul>";
        } else {
          content2 += `${expKey}: ${expValue}<br>`;
        }
      }
      content2 += "</li>";
    }
    content2 += "</ul></li>";
  } else {
    content2 += `<li> ${key}: ${value} </li>`; // Add each item as a list item
  }
}

content2 += "</ul>";

outputDiv2.innerHTML = content2;

//using constructor function & for each
function EmployeeProfile(name, age, sumYearExperience) {
  this.name = name;
  this.age = age;
  this.sumYearExperience = sumYearExperience;
}

const employee = new EmployeeProfile("Farhan A S", 22, 1);

const outputDiv3 = document.getElementById("objectOutput3");

if (outputDiv3) {
  let content3 = "<ul>";
  Object.keys(employee).forEach((key) => {
    content3 += `<li> ${key}: ${employee[key]}</li>`;
  });
  content3 += "</ul>";

  outputDiv3.innerHTML = content3;
} else {
  console.error("Element with ID 'objectOutput3' not found.");
}

//method 4 using ES6 Class
class Employee {
  constructor(nameParam, ageParam, sumYearExperienceParam) {
    this.name = nameParam;
    this.age = ageParam;
    this.sumYearExperience = sumYearExperienceParam;
  }
}

const employee2 = new Employee("Farhan A S", 22, 1);

const outputDiv4 = document.getElementById("objectOutput4");

if (outputDiv4) {
  outputDiv4.innerHTML = `
    <ul>
      <li>name: ${employee2.name}</li>
      <li>age: ${employee2.age}</li>
      <li>sumYearExperience: ${employee2.sumYearExperience}</li>
    </ul>
  `;
} else {
  console.error("Element with ID 'objectOutput4' not found.");
}
