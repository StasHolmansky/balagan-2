const ul = document.createElement("ul");
const list = document.querySelector(".list");

const array_li_data = [
  "Dedicated 24/7 Travel Advisor",
  "Global coverage",
  "Wide selection of aircrafts",
  "VIP helicopter management",
  "Accidental damage protection",
  "Travel insurance",
  "Package deals",
];

for (let i = 0; i < array_li_data.length; i++) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = array_li_data[i];
  li.appendChild(span);
  ul.appendChild(li);
}

list.appendChild(ul);
