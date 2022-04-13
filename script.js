const array3 = [];

let usersFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedBody = await response.json();
  console.log(parsedBody);

  array1 = [...parsedBody];

  let row1 = document.querySelector(".row1");

  parsedBody.forEach((name) => {
    let col2 = document.createElement("div");
    col2.classList.add("col-12");

    col2.innerHTML = `
        <p>${name.name}</p>
        `;
    row1.appendChild(col2);
  });
};

let selectedValue = [];

let selectorValue = (event) => {
  console.log(event.target.value);
  selectedValue.push(event.target.value);

  if (event.target.value === "email") {
    return showEmailFunction();
  } else if (event.target.value === "username") {
    return showUsernameFunction();
  } else if (event.target.value === "name") {
    return showNameFunction();
  }
};

/* THIS IS TEH EMAILK FUNCTIOIN */
let showEmailFunction = async (event) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedBody = await response.json();
  console.log(parsedBody);

  let row1 = document.querySelector(".row1");

  row1.innerHTML = "";

  parsedBody.forEach((email) => {
    let col2 = document.createElement("div");
    col2.classList.add("col-12");
    col2.innerHTML = `<p>${email.email}
        `;
    row1.appendChild(col2);
  });
};
/* THISIS THE USERNAME FUNCTIOIN */
let showUsernameFunction = async (event) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedBody = await response.json();
  console.log(parsedBody);
  let row1 = document.querySelector(".row1");

  row1.innerHTML = "";

  parsedBody.forEach((username) => {
    let col2 = document.createElement("div");
    col2.classList.add("col-12");
    col2.innerHTML = `<p>${username.username}
            `;
    row1.appendChild(col2);
  });
};

/* tHIS IS THE NAME FUNCTION */
let showNameFunction = async (event) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedBody = await response.json();
  console.log(parsedBody);

  let row1 = document.querySelector(".row1");

  row1.innerHTML = "";

  parsedBody.forEach((name) => {
    let col2 = document.createElement("div");
    col2.classList.add("col-12");
    col2.innerHTML = `<a href="./detail.html?userId=${name.id}">${name.name}</a>
                `;
    row1.appendChild(col2);
  });
};

/* BUTTON INPUT SERACH FUNCTION */

let searchButton = (event) => {
  console.log(event.target.parentElement.querySelector("input").value);

  let searchQuery = event.target.parentElement.querySelector("input").value;

  let row1 = document.querySelector(".row1");
  row1.innerHTML = "";

  array1
    .filter((array) =>
      array.name
        .toLowerCase()
        .includes(
          event.target.parentElement.querySelector("input").value.toLowerCase()
        )
    )
    .forEach((name) => {
      let col2 = document.createElement("div");
      col2.classList.add("col-12");
      col2.innerHTML = `<p>${name.name}
        `;
      row1.appendChild(col2);
    });

  array1
    .filter((array) =>
      array.username
        .toLowerCase()
        .includes(
          event.target.parentElement.querySelector("input").value.toLowerCase()
        )
    )
    .forEach((name) => {
      let col2 = document.createElement("div");
      col2.classList.add("col-12");
      col2.innerHTML = `<p>${name.username}
        `;
      row1.appendChild(col2);
    });

  array1
    .filter((array) =>
      array.email
        .toLowerCase()
        .includes(
          event.target.parentElement.querySelector("input").value.toLowerCase()
        )
    )
    .forEach((name) => {
      let col2 = document.createElement("div");
      col2.classList.add("col-12");
      col2.innerHTML = `<p>${name.email}
        `;
      row1.appendChild(col2);
    });
};

let arrayOfAddressesAsStrings = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedBody = await response.json();
  console.log(parsedBody);

  let row3 = document.querySelector(".row3");

  row3.innerHTML = "";

  parsedBody.forEach((name) => {
    let col3 = document.createElement("div");
    col3.classList.add("col-12");

    col3.innerHTML = `
        <p>${JSON.stringify(name.address)}</p>
        `;
    row3.appendChild(col3);
  });
};
arrayOfAddressesAsStrings();

window.onload = () => {
  usersFunction();
};

const sort = (e) => {
  let sorted = data.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
};

let isReversed = false;

/*     THIS THE THE DESCENDING / ASCENDING BUTTON */
let ascendDescendFunction = async (event) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const parsedBody = await response.json();
  console.log(parsedBody);
  console.log(event.target.innerText);
  let row5 = document.querySelector(".row1");
  const sortedArray = parsedBody.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );
  const sorted = isReversed ? sortedArray.reverse() : sortedArray;

  isReversed = !isReversed;
  event.target.innerText = isReversed ? "Sort Ascending" : "Sort Descending";

  row5.innerHTML = "";

  sorted.forEach((name) => {
    let col3 = document.createElement("div");
    col3.classList.add("col-12");

    col3.innerHTML = `<p>${name.name}</p>`;
    row5.appendChild(col3);
  });
};
