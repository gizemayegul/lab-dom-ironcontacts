// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// // Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

const buttonDelete = exampleRow.querySelector(".btn-delete");
buttonDelete.addEventListener("click", () => {
  exampleRow.remove();
});
// ITERATION 3 - Like Buttons

// Your code goes here ...
const likedButton = exampleRow.querySelector(".btn-like");
likedButton.addEventListener("click", () => {
  likedButton.classList.toggle("selected");
});

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.map((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = ` <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(newRow);
  // ITERATION 2 - Delete Buttons

  // Your code goes here ...

  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => {
    newRow.remove();
  });
  // ITERATION 3 - Like Buttons

  // Your code goes here ...
  const likedButton = newRow.querySelector(".btn-like");
  likedButton.addEventListener("click", () => {
    likedButton.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
buttonAddRandom.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts[randomIndex];
  // const randomIndex = Math.floor(Math.random() * contacts.length);
  // const randomContact = contacts.splice(randomIndex, 1)[0];
  const newRow = document.createElement("tr");
  newRow.innerHTML = ` <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  tableBody.appendChild(newRow);

  const buttonDelete = newRow.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", () => {
    newRow.remove();
  });

  const likedButton = newRow.querySelector(".btn-like");
  likedButton.addEventListener("click", () => {
    likedButton.classList.toggle("selected");
  });
});
