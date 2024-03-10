
function saveFormDataNewPage() {
    console.log("wefwrgergvgv00");
    // Get form values
    let SchoolName = document.getElementById("SchoolName").value;
    let location = document.getElementById("location").value;
    let degree = document.getElementById("degree").value;
    let fieldStudy = document.getElementById("fieldStudy").value;
    let graduateMonth = document.getElementById("graduateMonth").value;
    let graduateYear = document.getElementById("graduateYear").value;
  

   
    // Create an object to store the form data
    let formdataNewPage  = {
        SchoolName: SchoolName,
        location: location,
        degree:degree,
        fieldStudy:fieldStudy,
        graduateMonth:graduateMonth,
        graduateYear:graduateYear,
       
        
    };


    // Convert the object to a JSON string and store in local storage
  


    event.preventDefault();
   
    fetch('experiance.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
    localStorage.setItem("newformdata", JSON.stringify(formdataNewPage));
    // Redirect to another page
    // window.location.href = "hello.html";
}