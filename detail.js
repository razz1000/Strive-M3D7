


 let catchingtheURLFunction = async () => {
    let urlQuery = new URLSearchParams(document.location.search)
    console.log(urlQuery)
    let id = urlQuery.get("userId") 
    console.log(id)


   const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
   const parsedBody = await response.json();
   console.log(parsedBody)
   
   let row4= document.querySelector(".row4");
        
   row4.innerHTML = ""

   let col4 = document.createElement("div")
   col4.classList.add("col-12") 
   col4.innerHTML = `<p>${parsedBody.address.city}</p>
   <p>${parsedBody.address.street}</p>
   <p>${parsedBody.address.zipcode}</p>
   <p>${parsedBody.address.suite}</p>
   `
   row4.appendChild(col4)
   }

   catchingtheURLFunction();








