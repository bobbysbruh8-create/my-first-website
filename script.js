const data = {
  milk: [
    { store: "Tesco", price: 1.65 },
    { store: "Sainsbury's", price: 1.70 },
    { store: "Asda", price: 1.60 },
    { store: "Morrisons", price: 1.68 }
  ],
  bread: [
    { store: "Tesco", price: 1.10 },
    { store: "Sainsbury's", price: 1.20 },
    { store: "Asda", price: 1.05 },
    { store: "Morrisons", price: 1.15 }
  ],
  eggs: [
    { store: "Tesco", price: 2.30 },
    { store: "Sainsbury's", price: 2.45 },
    { store: "Asda", price: 2.10 },
    { store: "Morrisons", price: 2.20 }
  ]
};

function searchProduct() {
  const input = document.getElementById("search").value.toLowerCase();
  const results = document.getElementById("results");

  results.innerHTML = "";

  if (!data[input]) {
    results.innerHTML = `<p>No results found for "<b>${input}</b>"</p>`;
    return;
  }

  const sorted = [...data[input]].sort((a, b) => a.price - b.price);
  const cheapest = sorted[0].price;

  sorted.forEach(item => {
    const div = document.createElement("div");
    div.className = "card" + (item.price === cheapest ? " cheap" : "");

    div.innerHTML = `
      <span class="store">${item.store}</span>
      <span class="price">£${item.price.toFixed(2)}</span>
    `;

    results.appendChild(div);
  });
}