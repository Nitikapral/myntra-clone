document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      id: "1",
      image: "./assets/images/img/c1.jpg",
    },
    {
      id: "2",
      image: "./assets/images/img/2.jpg",
    },
    {
      id: "3",
      image: "./assets/images/img/3.jpg",
    },
    {
      id: "4",
      image: "./assets/images/img/4.jpg",
    },

    {
      id: "5",
      image: "./assets/images/img/5.jpg",
    },
    {
      id: "6",
      image: "./assets/images/img/6.jpg",
    },
    {
      id: "7",
      image: "./assets/images/img/7.jpg",
    },
    {
      id: "8",
      image: "./assets/images/img/8.jpg",
    },

    {
      id: "9",
      image: "./assets/images/img/9.jpg",
    },
    {
      id: "10",
      name: "Sleepwear",
      image: "./assets/images/img/2.jpg",
      price: 7000,
    },
    {
      id: "11",
      image: "./assets/images/img/3.jpg",
    },
    {
      id: "12",
      image: "./assets/images/img/4.jpg",
    },
  ];
  const catalog = document.getElementById("catalog");

  if (catalog) {
    displayProducts(data);
  } else {
    console.error("Catalog element not found");
  }
});
function createProductCard(product) {
  return `
    <div class="product-card text-wrap w-100 "   >
      
       <img class="product-image" src="${product.image}" alt="${product.name}">
      
    </div>
  `;
}
function displayProducts(products) {
  const catalog = document.getElementById("catalog");

  if (catalog) {
    catalog.innerHTML = products.map(createProductCard).join("");
  } else {
    console.error("Catalog element not found");
  }
}

// dropdown
function setupDropdown(elementId, dropdownId) {
  const mainElement = document.getElementById(elementId);
  const dropdownElement = document.getElementById(dropdownId);

  function showDropdown() {
    dropdownElement.style.display = "block";
  }

  function hideDropdown() {
    dropdownElement.style.display = "none";
  }

  mainElement.addEventListener("mouseenter", showDropdown);
  dropdownElement.addEventListener("mouseenter", showDropdown);

  mainElement.addEventListener("mouseleave", function () {
    if (!dropdownElement.matches(":hover")) {
      hideDropdown();
    }
  });

  dropdownElement.addEventListener("mouseleave", function () {
    if (!mainElement.matches(":hover")) {
      hideDropdown();
    }
  });
}

// Usage
setupDropdown("men", "menwear");
setupDropdown("women", "womenwear");
setupDropdown("kid", "kidwear");
setupDropdown("homenav", "Home");
setupDropdown("beautynav", "Beauty");
setupDropdown("studionav", "studio");
setupDropdown("profile-outer", "profile-inner");

// swiper1
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else if (usernameValue.length < 3) {
    setError(username, "Username must be at least 3 characters long");
  } else if (!/^[A-Za-z]+$/.test(usernameValue)) {
    setError(username, "Username must contain only alphabet characters");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
      passwordValue
    )
  ) {
    setError(
      password,
      "Password should include at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
  } else {
    setSuccess(password);
  }

  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords don't match");
  } else {
    setSuccess(password2);
  }

  if (
    usernameValue !== "" &&
    emailValue !== "" &&
    passwordValue !== "" &&
    password2Value !== ""
  ) {
    alert("Registration Successful!");
  } else if (
    usernameValue == "" &&
    emailValue !== "" &&
    passwordValue !== "" &&
    password2Value !== ""
  ) {
    alert("UserName will not be Empty");
  } else if (
    usernameValue !== "" &&
    emailValue == "" &&
    passwordValue !== "" &&
    password2Value !== ""
  ) {
    alert("Email will not be Empty");
  } else if (
    usernameValue !== "" &&
    emailValue !== "" &&
    passwordValue == "" &&
    password2Value !== ""
  ) {
    alert("Password will not be Empty");
  } else if (
    usernameValue !== "" &&
    emailValue !== "" &&
    passwordValue !== "" &&
    password2Value == ""
  ) {
    alert("Password will not be Empty");
  } else {
    alert("Please enter valid input in all required fields.");
  }
};
