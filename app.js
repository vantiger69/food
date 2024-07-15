// app.js

// Function to generate mock menu data
function generateMenu() {
  const menu = [];
  for (let i = 1; i <= 10; i++) {
    menu.push({
      id: i,
      name: `Dish ${i}`,
      description: `Description for Dish ${i}`,
      price: Math.floor(Math.random() * 20) + 5, // Random price between 5 and 25
    });
  }
  return menu;
}
// Function to simulate ordering
function orderFood(item) {
  const itemName = item.name;
  alert(`You ordered: ${item.name}`);
  // You can perform additional actions here, such as adding to a cart or sending an order request to a backend.
}
// Function to fetch menu data (simulated fetch)
async function fetchMenu() {
  return new Promise((resolve, reject) => {
    try {
      const menu = generateMenu();
      resolve(menu);
    } catch (error) {
      reject(error);
    }
  });
}

// Function to render menu items on the webpage
async function renderMenu() {
  const menuList = document.getElementById("menu-list");
  const menuItems = await fetchMenu();

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong>
    <br>
    ${item.description}
    <br>
    Price: $${item.price}
    <br>
    <button onclick="orderFood(${JSON.stringify(
      item
    )})"> Make order Now</button>`;
    menuList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
});
