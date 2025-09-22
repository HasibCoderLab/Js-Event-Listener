

































// ============= use EventListener........ ============
let btns = document.querySelectorAll("button");
btns.forEach((clickBtn) => {
    clickBtn.addEventListener("click", () => {
       console.log("Hello");

    });
});


// *============== * increment Hello *  + create Hello           ============    
// **
// ***
let allBtns = document.querySelectorAll("button");
let counter = 1;

btns.forEach((clickBtn) => {
    clickBtn.addEventListener("click", () => {
        // clickBtn.innerText = "Amare Click Dise"

        let newH2 = document.createElement("h2");
        newH2.innerText = `Hello ${counter}`;
        clickBtn.parentElement.append(newH2);
        console.log(newH2);
        counter++;
    });
});
