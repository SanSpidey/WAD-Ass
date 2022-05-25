$(document).ready(function(){
    getData();
});

function getData(){
    let localStorageData=localStorage.getItem("formdata");
    let studentObj=JSON.parse(localStorageData);
    console.log(studentObj);

    $("#email").text(studentObj.email);
    $("#password").text(studentObj.password);
}