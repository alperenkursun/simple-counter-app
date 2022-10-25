let count=0;
document.getElementById("dec").addEventListener("click",function(){
    count--;
    display();
})
document.getElementById("res").addEventListener("click",function(){
    count=0;
    display();
})
document.getElementById("inc").addEventListener("click",function(){
    count++;
    display();
})

function display(){
    if(count>0){
        document.getElementById("count").classList.remove("text-muted");
        document.getElementById("count").classList.remove("text-danger");
        document.getElementById("count").classList.add("text-success");
    }
    else if(count<0){
        document.getElementById("count").classList.remove("text-muted");
        document.getElementById("count").classList.remove("text-success");
        document.getElementById("count").classList.add("text-danger");
    }
    else{
        document.getElementById("count").classList.add("text-muted");
        document.getElementById("count").classList.remove("text-success");
        document.getElementById("count").classList.remove("text-danger");
    }
    document.getElementById("count").innerText = `${count}`;
}