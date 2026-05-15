const data = {
  milk: [
    { store: "Tesco", price: 1.65 },
    { store: "Asda", price: 1.60 },
    { store: "Sainsbury's", price: 1.70 },
    { store: "Morrisons", price: 1.68 }
  ],
  bread: [
    { store: "Tesco", price: 1.10 },
    { store: "Asda", price: 1.05 },
    { store: "Sainsbury's", price: 1.20 },
    { store: "Morrisons", price: 1.15 }
  ]
};

function searchProduct() {
  const input = document.getElementById("search").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  if (!data[input]) {
    results.innerHTML = "<p>No product found</p>";
    return;
  }

  const sorted = data[input].sort((a, b) => a.price - b.price);
  const cheapest = sorted[0].price;

  sorted.forEach(item => {
    const div = document.createElement("div");
    div.className = "card" + (item.price === cheapest ? " cheap" : "");
    div.innerHTML = `<b>${item.store}</b>: £${item.price}`;
    results.appendChild(div);
  });
}