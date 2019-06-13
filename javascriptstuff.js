function search(){
    var input=document.getElementById("searchinput").value
    var skills=document.getElementsByClassName("skill")
    var i;
    for(i=0;i<skills.length;i++){
        if (skills[i].getAttribute("data-keywords").indexOf(input)>-1||skills[i].innerHTML.indexOf(input)>-1){
            skills[i].style.display="block";
        }
        else{
            skills[i].style.display="none";
        }
    }
}