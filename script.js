const options = document.querySelectorAll(".option");
const message = document.getElementById("message");
const exitBtn = document.getElementById("exit");

// قفل شدن سه گزینه
options.forEach(option => {

    option.addEventListener("click", function() {

        if (this.classList.contains("locked")) {

            this.classList.add("selected");
            this.style.background = "red";
            this.innerHTML = "🔒 این گزینه قفل است";

            message.innerText = " این گزینه قفل است  برو گزینه بدی !";

            return;
        }

        options.forEach(item => {
            item.classList.remove("selected");
        });

        this.classList.add("selected");

        message.innerText = "صد درصد شک کرده بودی !";
    });

});

// ارسال درخواست
document.getElementById("submit").addEventListener("click", () => {

    const active = document.querySelector(".option.active.selected");

    if (active) {
        message.innerText = "✅ درخواست شما ثبت شد!";
    } else {
        message.innerText = "لطفاً گزینه فعال را انتخاب کنید.";
    }

});

// // فرار دکمه خروج
// function moveExit() {

//     const x = Math.random() * 140 - 70;
//     const y = Math.random() * 140 - 70;

//     exitBtn.style.transform =
//         translate(${x}px, ${y}px);
// }

// exitBtn.addEventListener("mouseenter", moveExit);

// exitBtn.addEventListener("touchstart", function(e) {
//     e.preventDefault();
//     moveExit();
// });