function saveFormData() {
    // Get form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let pinCode = document.getElementById("pinCode").value;
    let phone = document.getElementById("phone").value;
    
    let Email = document.getElementById("Email").value;

    // Create an object to store the form data
    var formdata = {
        firstName: firstName,
        lastName: lastName,
        country:country,
        pinCode:pinCode,
        phone:phone,
        city:city,
        Email: Email,
        
    };

    // Convert the object to a JSON string and store in local storage
    event.preventDefault();
   
    fetch('newPage.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
    localStorage.setItem("formdata", JSON.stringify(formdata));

    // Redirect to another page
    // window.location.href = "newPage.html";
}

function toggleDiv() {
    event.preventDefault();
   
    fetch('newPage.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
  
}
function toggleDivHeader() {
    event.preventDefault();
   
    fetch('header.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
  
}
// side bar expr
function toggleDivExpr() {
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
  
}

//education page js
function saveFormDataNewPage() {
    // console.log("wefwrgergvgv00");
    // Get form values
    event.preventDefault();
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

    // Convert the object to a JSON string and store in local storage
    localStorage.setItem("newformdata", JSON.stringify(formdataNewPage));

}

//experience page js

function saveNewExpr() {
    // Get form values
    let jobtittle = document.getElementById("jobtittle").value;
    let WorkExpr = document.getElementById("WorkExpr").value;
    let cityExpr = document.getElementById("cityExpr").value;
    let countryExpr = document.getElementById("countryExpr").value;
    let StartDate = document.getElementById("StartDate").value;
    let EndDate = document.getElementById("EndDate").value;
    
    


    let formdataExpr = {
        jobtittle: jobtittle,
        WorkExpr: WorkExpr,
        cityExpr:cityExpr,
        countryExpr:countryExpr,
        StartDate:StartDate,
        EndDate:EndDate,
       
        
    };

 
    event.preventDefault();
   
    fetch('skills.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
    localStorage.setItem("formdataExpr", JSON.stringify(formdataExpr));

}

// Skills page js


function saveNewSkill() {
    // Get form values
    let skillTittle = document.getElementById("skillTittle").value;
    let skill = document.getElementById("skill").value;
    let ProjectName = document.getElementById("ProjectName").value;
    let ProjectLink = document.getElementById("ProjectLink").value;
    let Skilldescription = document.getElementById("Skilldescription").value;
    let linkedIn = document.getElementById("linkedIn").value;
    let github = document.getElementById("github").value;
    let  twitter = document.getElementById("twitter").value;
    


    let formdataSkill = {
        skillTittle: skillTittle,
        skill: skill,
        ProjectName:ProjectName,
        ProjectLink:ProjectLink,
        Skilldescription:Skilldescription,
        linkedIn:linkedIn,
        github: github,
        twitter: twitter,
        
    };

 
   
    localStorage.setItem("formdataSkill", JSON.stringify(formdataSkill));
    console.log("hello");
    window.location.href = 'displayNet.html';

}
function toggleDivSkill() {
    event.preventDefault();
   
    fetch('skills.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
  
}
// all backward buttons
function backwardHeader(){
    window.location.href='main_page.html';
}
function backwardexpr() {
    event.preventDefault();
   
    fetch('newPage.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
  
}
function ForwardHeader() {
    event.preventDefault();
   
    fetch('header.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
  
}
function displayThePage() {
  window.location.href = "displayNet.html";
  
  
}
function backwardHeader(){
    window.location.href='main_page.html';
}
function backwardSkill() {
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
  
}
function backwardedu() {
    event.preventDefault();
   
    fetch('header.html').then(
        response=>{
           return response.text();
        }
    ).then(
     data=>{
       
     document.getElementById("cont").innerHTML=data;
    }
    )
  
}