var classNameNode=document.querySelector(".insertData>#class");
var nameNode=document.querySelector(".insertData>input");
var gradeNode=document.querySelector(".insertData>#grade");
var addButtonNode=document.querySelector(".insertData>button");
var ulListFailedNode=document.querySelector("#listFailed");
var ulListPassedNode=document.querySelector("#listPassed");
var countPassedNode=document.querySelector("header>.passed>.count");
var countFailedNode=document.querySelector("header>.failed>.count");
var percentPassedNode=document.querySelector("header>.passed>.percent");
var percentFailedNode=document.querySelector("header>.failed>.percent");



    
function addDataHandler(){
    try{
        if(!nameNode.value){
            throw new Error("You have to insert name of student!")
        }
        if (classNameNode.value === "-" || gradeNode.value==="-"){
            throw new Error("You have to choose grade and class name!")
        }
        var newLi=document.createElement("li");
        newLi.innerHTML="<span class='span1'></span> <span class='span2'></span> <span class='span3'></span>";
        var s1Node=newLi.children[0];
        var s2Node=newLi.children[1];
        var s3Node=newLi.children[2];
        if(parseInt(gradeNode.value)===5){
            ulListFailedNode.appendChild(newLi);
            s1Node.innerText=classNameNode.value;
            s2Node.innerText=nameNode.value;
            s3Node.innerText=gradeNode.value;
        }else{
            ulListPassedNode.appendChild(newLi);
            s1Node.innerText=classNameNode.value;
            s2Node.innerText=nameNode.value;
            s3Node.innerText=gradeNode.value;  
        }
    
        var countPassed=ulListPassedNode.childElementCount;
        var countFailed=ulListFailedNode.childElementCount;
        countPassedNode.innerText=countPassed;
        countFailedNode.innerText=countFailed;
        percentFailedNode.innerText=parseInt((100*countFailed)/(countPassed+countFailed))+"%";
        percentPassedNode.innerText=parseInt((100*countPassed)/(countPassed+countFailed))+"%";
    }catch(err){
        alert(err)
    }

}


addButtonNode.addEventListener("click",addDataHandler)

