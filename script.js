// ==========================================
// 30 PRODUCTS – UNSPLASH (Working Images)
// ==========================================
const products = [
  // Mobiles
  {
    id: 1, name: "iPhone 14", category: "mobile",
    price: 80000, rating: 4.8,
    img: "assests/iphone-14.webp",
    desc: "Premium Apple smartphone with advanced camera."
  },
  {
    id: 2, name: "Samsung Galaxy S23", category: "mobile",
    price: 65000, rating: 4.6,
    img: "assests/-original-imah4zp7fgtezhsz.webp",
    desc: "Flagship Samsung device with AMOLED display."
  },
  {
    id: 3, name: "OnePlus 11R", category: "mobile",
    price: 42000, rating: 4.5,
    img: "assests/11r 1+.webp ",
    desc: "Smooth performance with fast charging."
  },
  {
    id: 4, name: "Redmi Note 13 Pro", category: "mobile",
    price: 28000, rating: 4.4,
    img: "assests/redmi note 13.webp",
    desc: "Value for money with great battery."
  },
  {
    id: 5, name: "Realme Narzo 60", category: "mobile",
    price: 19000, rating: 4.2,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    desc: "Budget gaming phone."
  },
  {
    id: 6, name: "Vivo V29", category: "mobile",
    price: 33000, rating: 4.3,
    img: "assests/Vivo V29.webp ",
    desc: "Camera-focused smartphone."
  },
  {
    id: 7, name: "Oppo Reno 10", category: "mobile",
    price: 38000, rating: 4.1,
    img: " assests/oppo reno 10.webp",
    desc: "Premium slim design."
  },
  {
    id: 8, name: "POCO X6 Pro", category: "mobile",
    price: 26000, rating: 4.0,
    img: "assests/poco x6.webp ",
    desc: "Performance-centric phone."
  },
  {
    id: 9, name: "Moto Edge 40", category: "mobile",
    price: 32000, rating: 4.3,
    img: "assests/moo edge 10.webp ",
    desc: "Stock Android + smooth display."
  },
  
  // Laptops
  {
    id: 11, name: "HP 15s Ryzen 5", category: "laptop",
    price: 52000, rating: 4.4,
    img: " ",
    desc: "Perfect for students."
  },
  {
    id: 12, name: "Dell Inspiron 3520", category: "laptop",
    price: 58000, rating: 4.3,
    img: " assests/Dell Inspiron 3520.webp",
    desc: "Reliable typing experience."
  },
  {
    id: 13, name: "Lenovo IdeaPad Slim 5", category: "laptop",
    price: 60000, rating: 4.5,
    img: "assests/Lenovo IdeaPad Slim 5.webp",
    desc: "Slim, light & powerful."
  },
  {
    id: 14, name: "ASUS TUF Gaming F15", category: "laptop",
    price: 78000, rating: 4.6,
    img: " assests/ASUS TUF Gaming F15.webp",
    desc: "Powerful gaming laptop."
  },
  {
    id: 15, name: "Acer Aspire 7", category: "laptop",
    price: 56000, rating: 4.3,
    img: " assests/Acer Aspire 7.webp",
    desc: "Work + play machine."
  },
  {
    id: 16, name: "MacBook Air M1", category: "laptop",
    price: 90000, rating: 4.9,
    img: " assests/MacBook Air M1.webp",
    desc: "Smart, sleek, silent."
  },
  {
    id: 17, name: "MSI Modern 14", category: "laptop",
    price: 65000, rating: 4.2,
    img: " assests/MSI Modern 14.webp",
    desc: "Portable & efficient."
  },
  {
    id: 18, name: "Dell XPS 13", category: "laptop",
    price: 115000, rating: 4.8,
    img: " assests/Dell XPS 13.webp",
    desc: "Premium ultrabook."
  },
  {
    id: 19, name: "ASUS Vivobook 16", category: "laptop",
    price: 62000, rating: 4.1,
    img: " assests/ASUS Vivobook 16.webp",
    desc: "Big screen productivity."
  },
  {
    id: 20, name: "Lenovo Legion 5", category: "laptop",
    price: 98000, rating: 4.7,
    img: " assests/Lenovo Legion 5.webp",
    desc: "Pro-level gaming."
  },

  // Electronics
  {
    id: 21, name: "Sony WH-1000XM4", category: "electronics",
    price: 26000, rating: 4.8,
    img: "assests/Sony WH-1000XM4.webp ",
    desc: "Noise cancellation king."
  },
  {
    id: 22, name: "JBL PartyBox", category: "electronics",
    price: 30000, rating: 4.5,
    img: " assests/JBL PartyBox.webp",
    desc: "Premium party speaker."
  },
  {
    id: 23, name: "Mi Power Bank", category: "electronics",
    price: 2500, rating: 4.4,
    img: " assests/Mi Power Bank.webp",
    desc: "20000mAh backup."
  },
  {
    id: 24, name: "Samsung 32\" Monitor", category: "electronics",
    price: 18000, rating: 4.3,
    img: " assests/Samsung 32 Monitor.webp",
    desc: "Full HD monitor."
  },
  {
    id: 25, name: "Logitech MX Master 3", category: "electronics",
    price: 9500, rating: 4.7,
    img: " assests/Logitech MX Master 3.webp",
    desc: "Best productivity mouse."
  },
  {
    id: 26, name: "RGB Mechanical Keyboard", category: "electronics",
    price: 4500, rating: 4.2,
    img: " assests/RGB Mechanical Keyboard.webp",
    desc: "RGB clicky keyboard."
  },
  {
    id: 27, name: "Apple Watch SE", category: "electronics",
    price: 32000, rating: 4.6,
    img: "assests/Apple Watch SE.webp ",
    desc: "Fitness + smart features."
  },
  {
    id: 28, name: "Google Chromecast 4K", category: "electronics",
    price: 6000, rating: 4.5,
    img: " assests/Google Chromecast 4K.webp",
    desc: "Stream content easily."
  },
  {
    id: 29, name: "Canon EOS 200D", category: "electronics",
    price: 52000, rating: 4.4,
    img: " assests/Canon EOS 200D.webp",
    desc: "Beginner DSLR camera."
  },
  {
    id: 30, name: "Smart LED TV 50\"", category: "electronics",
    price: 48000, rating: 4.3,
    img: "assests/Smart LED TV 50.webp",
    desc: "4K smart TV."
  }
];

// ========================================================
// LOCALSTORAGE HELPERS
// ========================================================
function getCart() { return JSON.parse(localStorage.getItem("cart")) || []; }
function saveCart(c) { localStorage.setItem("cart", JSON.stringify(c)); updateCartCount(); }

function getWishlist() { return JSON.parse(localStorage.getItem("wishlist")) || []; }
function saveWishlist(w) { localStorage.setItem("wishlist", JSON.stringify(w)); }

function getRatings() { return JSON.parse(localStorage.getItem("ratings")) || {}; }
function saveRatings(r) { localStorage.setItem("ratings", JSON.stringify(r)); }

// ========================================================
// CART
// ========================================================
function addToCart(id) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else cart.push({ id, qty: 1 });
  saveCart(cart);
}

function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (!el) return;
  let count = 0;
  getCart().forEach(i => count += i.qty);
  el.textContent = count;
}

// ========================================================
// WISHLIST
// ========================================================
function toggleWishlist(id) {
  let w = getWishlist();
  if (w.includes(id)) w = w.filter(x => x !== id);
  else w.push(id);
  saveWishlist(w);
  displayProducts(products);
  loadProductDetails();
}

function isInWishlist(id) { return getWishlist().includes(id); }

// ========================================================
// PRODUCT LIST PAGE
// ========================================================
function displayProducts(list) {
  const box = document.getElementById("productList");
  if (!box) return;

  box.innerHTML = list.map(p => `
    <div class="product-card">
      <img src="${p.img}" class="product-img">
      
      <div class="product-overlay">
        <button class="overlay-btn" onclick="addToCart(${p.id})">Add</button>
        <button class="overlay-btn" onclick="viewDetails(${p.id})">View</button>
        <button class="overlay-btn" onclick="toggleWishlist(${p.id})">
          ${isInWishlist(p.id) ? "❤️" : "🤍"}
        </button>
      </div>

      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <p class="rating">⭐ ${p.rating}</p>
    </div>
  `).join("");
}

function viewDetails(id) {
  window.location.href = `product.html?id=${id}`;
}

// ========================================================
// FILTERS + SEARCH + SORT
// ========================================================
function setupFilters() {
  const listBox = document.getElementById("productList");
  if (!listBox) return;

  const search = document.getElementById("searchBar");
  const sort = document.getElementById("sortFilter");

  function apply() {
    let data = [...products];

    const cat = document.querySelector("input[name='cat']:checked")?.value || "all";
    const price = document.querySelector("input[name='price']:checked")?.value || "all";
    const rate = document.querySelector("input[name='rating']:checked")?.value || "all";

    if (cat !== "all") data = data.filter(p => p.category === cat);

    if (price !== "all") {
      const [min, max] = price.split("-").map(Number);
      data = data.filter(p => p.price >= min && p.price <= max);
    }

    if (rate !== "all") data = data.filter(p => p.rating >= Number(rate));

    const q = search.value.toLowerCase();
    data = data.filter(p => p.name.toLowerCase().includes(q));

    const s = sort.value;
    if (s === "priceLowHigh") data.sort((a,b)=>a.price-b.price);
    if (s === "priceHighLow") data.sort((a,b)=>b.price-a.price);
    if (s === "ratingHighLow") data.sort((a,b)=>b.rating-a.rating);

    displayProducts(data);
  }

  search.addEventListener("input", apply);
  sort.addEventListener("change", apply);
  document.querySelectorAll(".sidebar input").forEach(i =>
    i.addEventListener("change", apply)
  );

  displayProducts(products);
}

// ========================================================
// PRODUCT DETAILS PAGE
// ========================================================
function loadProductDetails() {
  const box = document.getElementById("product-details");
  if (!box) return;

  const id = Number(new URLSearchParams(location.search).get("id"));
  const p = products.find(x => x.id === id);

  if (!p) {
    box.innerHTML = "<h2>Product Not Found!</h2>";
    return;
  }

  const ratings = getRatings();
  const ur = ratings[id] || 0;

  box.innerHTML = `
    <div class="product-details-wrapper">
      <a href="index.html" class="back-link">← Back</a>

      <div class="product-details">
        <img src="${p.img}" class="details-img">

        <div class="details-info">
          <h2>${p.name}</h2>
          <p class="price">₹${p.price}</p>
          <p class="rating">⭐ ${p.rating}</p>
          <p>${p.desc}</p>

          <div class="rating-stars" data-id="${id}">
            ${[1,2,3,4,5].map(n=>`
              <span data-value="${n}">${ur>=n ? "★" : "☆"}</span>
            `).join("")}
          </div>

          <button class="add-btn" onclick="addToCart(${id})">Add to Cart</button>
          <button class="wishlist-btn" onclick="toggleWishlist(${id})">
            ${isInWishlist(id) ? "❤️ Remove" : "🤍 Wishlist"}
          </button>
        </div>
      </div>
    </div>
  `;

  initRatingStars(id);
}

function initRatingStars(id) {
  const stars = document.querySelectorAll(".rating-stars span");
  if (!stars) return;

  stars.forEach(s => {
    s.addEventListener("click", () => {
      const v = Number(s.dataset.value);
      const r = getRatings();
      r[id] = v;
      saveRatings(r);
      loadProductDetails();
    });
  });
}

// ========================================================
// CART PAGE
// ========================================================
function loadCartPage() {
  const box = document.getElementById("cart-container");
  if (!box) return;

  const cart = getCart();
  if (cart.length === 0) {
    box.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let total = 0;
  box.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    const sub = p.price * item.qty;
    total += sub;
    return `
      <div class="cart-item">
        <strong>${p.name}</strong>
        <p>₹${p.price} × ${item.qty} = ₹${sub}</p>

        <div class="cart-qty">
          <button onclick="changeQty(${p.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${p.id}, 1)">+</button>
        </div>

        <button class="remove-btn" onclick="removeFromCart(${p.id})">Remove</button>
      </div>
    `;
  }).join("") + `<h3>Total: ₹${total}</h3>`;
}

function changeQty(id, d) {
  let cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  loadCartPage();
}

function removeFromCart(id) {
  let cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  loadCartPage();
}

// ========================================================
// WISHLIST PAGE
// ========================================================
function loadWishlistPage() {
  const box = document.getElementById("wishlist-container");
  if (!box) return;

  const w = getWishlist();
  if (w.length === 0) {
    box.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  box.innerHTML = w.map(id => {
    const p = products.find(pr => pr.id === id);
    return `
      <div class="cart-item">
        <strong>${p.name}</strong>
        <p>₹${p.price}</p>
        <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
        <button class="remove-btn" onclick="toggleWishlist(${p.id})">Remove</button>
      </div>
    `;
  }).join("");
}

// ========================================================
// CHECKOUT PAGE
// ========================================================
function initCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    localStorage.removeItem("cart");
    updateCartCount();
    document.getElementById("checkout-message").textContent =
      "🎉 Order placed successfully!";
    form.reset();
  });
}

// ========================================================
// DARK MODE
// ========================================================
function initTheme() {
  const t = localStorage.getItem("theme") || "light";
  if (t === "dark") document.body.classList.add("dark");

  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.textContent = t === "dark" ? "☀️" : "🌙";

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    btn.textContent = mode === "dark" ? "☀️" : "🌙";
    localStorage.setItem("theme", mode);
  });
}

// ========================================================
// INITIALIZE EVERYTHING
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  initTheme();
  setupFilters();
  loadProductDetails();
  loadCartPage();
  loadWishlistPage();
  initCheckout();
});
