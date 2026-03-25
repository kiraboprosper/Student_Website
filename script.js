// TYPING EFFECT
const text = "Welcome to Lawrence High";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
window.onload = typing;

// FADE IN
window.addEventListener("scroll", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// NAVBAR SCROLL
window.addEventListener("scroll", () => {
    document.getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// COUNTER
document.querySelectorAll(".counter").forEach(counter => {
    const update = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const inc = target / 100;

        if (c < target) {
            counter.innerText = Math.ceil(c + inc);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };
    update();
});

// TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";

    // PROGRESS BAR
    let scroll = window.scrollY;
    let height = document.body.scrollHeight - window.innerHeight;
    document.getElementById("progressBar").style.width =
        (scroll / height) * 100 + "%";
};

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// FORM VALIDATION
function validateForm(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;

    if (!email.includes("@")) {
        alert("Enter valid email");
    } else {
        alert("Message sent!");
    }
}

// ADMISSION FORM
function validateAdmissionForm(e) {
    e.preventDefault();

    let name = document.getElementById("admission-name").value;

    if (name === "") {
        alert("Fill all fields");
    } else {
        alert("Application submitted!");
    }
}
