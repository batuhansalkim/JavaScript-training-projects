let count  = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");



btns.forEach(function(btn){
    btn.addEventListener("click",function(e){

        const styles =  e.currentTarget.classList;
       // console.log(styles);

        if(styles.contains("decrease")){
            count--;
           
        }
        else if(styles.contains("increase")){
            count++
        }
        else{
            count = 0;
        }
        
        if(count > 0){
            value.style.color="green";
            btn.style.background="green";
            btn.style.color="white";
        }
        if(count <0){
            value.style.color = "red";
            btn.style.background="red";
        }
        if(count=== 0){
            value.style.color = "#222";
            btn.style.background="black";
            btn.style.color="white";
        }
        value.textContent = count;

    })
})





