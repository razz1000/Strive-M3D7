

let usersFunction = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const parsedBody = await response.json();
    console.log(parsedBody)

    let row1 = document.querySelector(".row1");


    parsedBody.forEach(name => {
        let col2 = document.createElement("div")
        col2.classList.add("col-12")
        
        col2.innerHTML = `
        <p>${name.name}</p>
        `
        row1.appendChild(col2)





    })

}

let selectedValue = []

let selectorValue = (event) => {
let selector = document.getElementById("names")
console.log(event.target.value)
selectedValue.push(event.target.value)


let showOptionFunction = async (event) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const parsedBody = await response.json();
    console.log(parsedBody)
    /* console.log(event) */
    let row1 = document.querySelector(".row1");

    if(selectedValue === email) {
        parsedBody.forEach(name => {
        let col2 = document.createElement("div")
        col2.classList.add("col-12") 
        col2.innerHTML = `<p>${name.email}
        `
        row1.appendChild(col2)
    })
    }

}
showOptionFunction();

}





window.onload = () => {
    usersFunction();
}