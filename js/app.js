
const form = document.querySelector("form")
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form)
    const photo = formData.get('photo')
    const firstname = formData.get('firstname')
    const lastname = formData.get('lastname')
    const email = formData.get('email') 
    const hire_date = formData.get('hire_date')  
    const tableBody = document.getElementById('employeeList')
    console.log(formData) 

    
    const tableRow = document.createElement('tr')
    tableRow.innerHTML = `
     <td> <img src='./images/${photo.name}'> </td>
     <td>${firstname}</td>
     <td>${lastname}</td>
     <td>${email}</td>
     <td>${hire_date}</td>
     <td>   
        <button onclick="deleteFunc(this)" >Delete</button>    
     <td/>
    `
    
    tableBody.appendChild(tableRow);
    console.log(photo.name)
    form.reset()
})

function deleteFunc(event) {
    if(confirm("Are you sure you want to delete this employee?") ===true){
    event.parentElement.parentElement.remove()
    }
}


