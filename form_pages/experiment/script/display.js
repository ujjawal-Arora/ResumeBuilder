var storedDatahead = localStorage.getItem("formdata");
var storedDataexpr = localStorage.getItem("formdataExpr");
var storedDataedu = localStorage.getItem("newformdata");
var storedDataskill = localStorage.getItem("formdataSkill");

var formDatahead = JSON.parse(storedDatahead);
var formDataexpr = JSON.parse(storedDataexpr);
var formDataedu = JSON.parse(storedDataedu);
var formDataskill = JSON.parse(storedDataskill);



    document.getElementById("myname").innerHTML =  formDatahead.firstName +" "+formDatahead.lastName ;

    document.getElementById("phone").innerHTML =  "Phone: "+formDatahead.phone ;

    document.getElementById("email").innerHTML =  "Email: "+formDatahead.Email ;
    
    document.getElementById("github").innerHTML =  "github: "+formDataskill.github ;
    document.getElementById("linkedIn").innerHTML =  "linkedIn: "+formDataskill.linkedIn ;
    
    document.getElementById("twitter").innerHTML =  "Twitter: "+formDataskill.twitter ;

    document.getElementById("uniName").innerHTML =  formDataedu.SchoolName ;
    document.getElementById("degree").innerHTML =  "Degree: "+formDataedu.degree ;

    document.getElementById("graduYear").innerHTML =  "Year: "+formDataedu.graduateYear ;
    document.getElementById("location").innerHTML =  "CGPA: "+formDataedu.fieldStudy ;
    document.getElementById("tittle").innerHTML =  formDataskill.skillTittle ;
    document.getElementById("skills").innerHTML =  formDataskill.skill ;
    document.getElementById("proName").innerHTML =  "Project Name: "+formDataskill.ProjectName;
    document.getElementById("proLink").innerHTML = "Project Link: "+ formDataskill.ProjectLink;
    document.getElementById("jobtittle").innerHTML = formDataexpr.jobtittle ;
    document.getElementById("from").innerHTML = formDataexpr.cityExpr+","+formDataexpr.countryExpr;
    document.getElementById("date").innerHTML = "Start date: "+formDataexpr.StartDate+"   " +"End Date: "+formDataexpr.EndDate;

    document.getElementById("workexpr").innerHTML = "Work Experience: "+formDataexpr.WorkExpr;

function printPage(){
    window.print();
  }