function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
}


function showTreatPopup() {
    document.getElementById('treatPopup').classList.remove('hidden');
}


function closeTreatPopup() {
    document.getElementById('treatPopup').classList.add('hidden');
}
document.getElementById('exploreDelicacy').addEventListener('click', function () {
alert('Explore the best delicacies at AMADO, this month\'s top-rated cafe!');
});
function navigateToPreviousPage() {
alert('Navigating to the previous page!');

}

function navigateToNextPage() {
alert('Navigating to the next page!');

}
const delicacyButton = document.getElementById("exploreDelicacy");
const delicacyModal = document.getElementById("delicacyModal");
const closeModal = document.getElementById("closeModal");

delicacyButton.addEventListener("click", () => {
delicacyModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
delicacyModal.classList.add("hidden");
});

delicacyModal.addEventListener("click", (e) => {
if (e.target === delicacyModal) {
    delicacyModal.classList.add("hidden");
}
});
const playVideoButton = document.getElementById('playVideo');
const videoModal = document.getElementById('videoModal');
const closeVideoModal = document.getElementById('closeVideoModal');
const videoPlayer = document.getElementById('videoPlayer');

playVideoButton.addEventListener('click', () => {
videoModal.classList.remove('hidden');
});

closeVideoModal.addEventListener('click', () => {
videoModal.classList.add('hidden');
videoPlayer.pause(); 
});

videoModal.addEventListener('click', (e) => {
if (e.target === videoModal) {
    videoModal.classList.add('hidden');
    videoPlayer.pause();
}
});
let currentImageIndex = 0;
const images = [
"./assets/oliver2.webp",
"./assets/oliver1.webp",

];

const rightSection = document.getElementById("rightSection");
const nextPageButton = document.getElementById("nextPage");
const previousPageButton = document.getElementById("previousPage");


nextPageButton.addEventListener("click", () => {
currentImageIndex = (currentImageIndex + 1) % images.length;
rightSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
});


previousPageButton.addEventListener("click", () => {
currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
rightSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
});


const diveIntoDelight = document.getElementById("diveIntoDelight");
diveIntoDelight.addEventListener("click", () => {
window.open("https://maps.app.goo.gl/vfv8ePdxA7t5S2XA8", "_blank"); 
});


const showDishesButton = document.getElementById("showDishes");
const dishesModal = document.getElementById("dishesModal");
const closeDishesModal = document.getElementById("closeDishesModal");

showDishesButton.addEventListener("click", () => {
dishesModal.classList.remove("hidden");
});

closeDishesModal.addEventListener("click", () => {
dishesModal.classList.add("hidden");
});

dishesModal.addEventListener("click", (e) => {
if (e.target === dishesModal) {
    dishesModal.classList.add("hidden");
}
});
const foodCategories = {
"Sweets": [
    "Chocolate Lava Cake",
    "Red Velvet Cheesecake",
    "Macarons",
    "Strawberry Shortcake"
],
"Spicy": [
    "Spicy Chicken Wings",
    "Buffalo Cauliflower Bites",
    "Jalapeño Poppers",
    "Chili Paneer"
],
"Healthy": [
    "Quinoa Salad",
    "Avocado Toast",
    "Smoothie Bowl",
    "Grilled Vegetables"
],
"Comfort Food": [
    "Classic Burger",
    "Loaded Fries",
    "Mac and Cheese",
    "Grilled Cheese Sandwich"
],
"Beverages": [
    "Iced Mocha",
    "Matcha Latte",
    "Fruit Punch",
    "Classic Lemonade"
]
};

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

const whimsicalDelicacy = document.getElementById('whimsicalDelicacy');
const foodSuggestionModal = document.getElementById('foodSuggestionModal');
const closeFoodSuggestionModal = document.getElementById('closeFoodSuggestionModal');
const foodSuggestionContent = document.getElementById('foodSuggestionContent');

whimsicalDelicacy.addEventListener('click', () => {
const randomCategory = getRandomItem(Object.keys(foodCategories));
const randomFood = getRandomItem(foodCategories[randomCategory]);
foodSuggestionContent.innerHTML = `<h3 class='font-semibold'>Category: ${randomCategory}</h3><ul><li>${randomFood}</li></ul>`;
foodSuggestionModal.classList.remove('hidden');
});

closeFoodSuggestionModal.addEventListener('click', () => {
foodSuggestionModal.classList.add('hidden');
});

foodSuggestionModal.addEventListener('click', (e) => {
if (e.target === foodSuggestionModal) {
    foodSuggestionModal.classList.add('hidden');
}
});


document.getElementById('pay-button').onclick = function () {
    
    fetch('http://localhost:3000/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: 50000, currency: 'INR' }) 
    })
    .then(response => response.json()) 
    .then(order => {
      if (!order.id) {
        alert('Error: No order ID returned!');
        return;
      }

      
      const options = {
        key: 'rzp_test_jsP25tWjtceUAz', 
        amount: 50000, 
        currency: 'INR',
        name: 'Demo Store',
        description: 'Test Payment',
        order_id: order.id, 
        handler: function (response) {
          
          alert('Payment successful!');
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9876543210'
        },
        theme: {
          color: '#F37254'
        }
      };

      const razorpay = new Razorpay(options);
      razorpay.open();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong while creating order.');
    });
  };

  const dishImageMap = {
    "Cold Coffee": "https://images.unsplash.com/photo-1530373239216-42518e6b4063?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Veg Sandwich": "https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Cheese Pasta": "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  };

  function updateDishImage() {
    const dish = document.getElementById("dish").value;
    const img = document.getElementById("dishImage");
    img.src = dishImageMap[dish] || "/images/default.jpg";
  }

  fetch('http://localhost:3000/profile', {
    method: 'GET',
    credentials: 'include'
  })
    .then(response => response.text())
    .then(data => {
      console.log(data);
    });

    app.use(cors({
      origin: 'http://127.0.0.1:5500',
      credentials: true
    }));
  


    
    
function handleSearch() {
  const searchTerm = document.getElementById('searchInput').value.trim();
  
  if (searchTerm.length === 0) {
      
      document.getElementById('searchResults').innerHTML = '';
      return;
  }

  
  fetch(`http://localhost:3000/search?query=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
          displaySearchResults(data);
      })
      .catch(error => {
          console.error('Error fetching search results:', error);
      });
}


function displaySearchResults(results) {
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = ''; 

  if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No cafes or dishes found.</p>';
      return;
  }

  results.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.classList.add('result-item', 'p-4', 'border-b', 'border-gray-300', 'mt-2');
      resultElement.innerHTML = `
          <h3 class="font-semibold">${result.name}</h3>
          <p class="text-sm">${result.category} - Rating: ${result.rating}</p>
          <p class="text-sm">Dishes: ${result.dishes.join(', ')}</p>
      `;
      resultsContainer.appendChild(resultElement);
  });
}
