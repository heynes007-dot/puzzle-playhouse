document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// Set your next puzzle release date here
const releaseDate = new Date(2026, 3, 1, 18, 0, 0).getTime();


const countdownElement = document.getElementById("countdown");

setInterval(function () {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "This month's puzzle is now available!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML =
        `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
}, 1000);
