// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// only appears when the guest list is full
const assignButton = document.querySelector(".assign");
// targets the list that will populate with the guest’s name and their assigned dish
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  // console.log(guest);
  if (guest !== "") {
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const clearInput = function () {
  guestInput.value = "";
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;

  if (guests.length === 8) {
    // Inside the if statement, add the "hide" class to the
    // addGuestButton, guestInput, and guestInputLabel
    // variables. Remove the  "hide" class from the guestFull
    // variable.
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "chicken",
    "ribs",
    "beans",
    "rolls",
    "salad",
    "hummus",
    "chips",
    "dip",
    "soda",
    "cookies",
    "cake",
    "fruits"
  ];

  const allGuests = document.querySelectorAll(".guest-list li");
  // Inside the for...of loop, create a variable called randomPotluckIndex.
  // In the value, you’ll generate a number between 0 and the length of
  // allGuests
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
});
