document.getElementById('button_id').addEventListener('click',getproducts);
let div=document.querySelector('.showcase name of id in html');
function getproducts(){
    //1 create an xml HTTP request object 
    let xhr=new XMLHttpRequest();
    // creating  an request will use open function
    //arguments taken  by the open function
    //method ,url,async or sync,id/user password for the intermidiate that when he will out the id pass then only can get the data
    xhr.open('GET','products.json',true);
    //sending the  request 
    xhr.send();
    //while  data taking the req show loading fun
    xhr.onprogress=function(){
        div.textContent='LOADING.....'
    }
    //when the data arrived 
    xhr.onload=function(){
        // console.log(xhr.responseText);
        let project =JSON.parse(xhr.responseText);//to make js understable 
        console.log(project);
        //our data was the array to take out the data from the  arry will use
        //Destructuring 
        let{nameofarray}=project;
        console.log(nameofarray);
        //apply foreach loop and take the object
    }

}