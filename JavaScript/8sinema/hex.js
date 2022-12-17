const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click",function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotal(); 
    }
});


select.addEventListener("change",function(e){
    calculateTotal();
});



function calculateTotal(){
    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });


    seats.forEach(function(seat){
        seatArr.push(seat);
    });

    //[1,3,5]
    let selectedSeatIndex = selectedSeatsArr.map(function(seat){
        return seatArr.indexOf(seat);
    });

    console.log(selectedSeatIndex);

    //spread

    let SelectedSeatCount = selectedSeats.length;
    count.innerText = SelectedSeatCount;
    amount.innerText = SelectedSeatCount * select.value;
}

