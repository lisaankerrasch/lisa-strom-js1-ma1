// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML += "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function listNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listNames(cats);

// Question 8

let catList = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age Unknown";

    if (cats[i].age !== undefined && cats[i].age !== null) {
      catAge = cats[i].age;
    }
    catList = catList + "<div>" + "<h5>" + cats[i].name + "</h5>" + "</div>";
    catList = catList + "<div>" + "<p>" + catAge + "</p>" + "</div>";
  }
  const finalHtml = catList;

  return finalHtml;
}

const newHtml = createCats(cats);

const container = document.querySelector(".cat-container");
container.innerHTML = newHtml;
