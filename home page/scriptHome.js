document.addEventListener("DOMContentLoaded", function (){
    const incrementButtons = document.querySelectorAll(".increment-btn")
    const decrementButtons = document.querySelectorAll(".decrement-btn")

    incrementButtons.forEach(button =>{
        button.addEventListener("click", function() {
            const input = this.previousElementSibling;
            let currentValue = parseInt(input.value);
            input.value = currentValue + 1;
        });
    });
    decrementButtons.forEach(button => {
        button.addEventListener("click", function () {
          const input = this.nextElementSibling;
          let currentValue = parseInt(input.value);
          if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    });
  });
});