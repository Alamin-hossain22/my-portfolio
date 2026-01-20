
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});


const sections = document.querySelectorAll("section");
function animateSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = 0;
            section.style.transform = "translateY(50px)";
        }
    });
}

window.addEventListener("scroll", animateSections);
window.addEventListener("load", animateSections);


const words = ["Web Developer", "Freelancer", "Designer"];
let wordIndex = 0, charIndex = 0, currentWord = [], isDeleting = false;
const typingSpan = document.querySelector(".typing");

function type() {
    const word = words[wordIndex];

    if(!isDeleting) {
        currentWord.push(word[charIndex]);
        charIndex++;
        typingSpan.textContent = currentWord.join("");
        if(charIndex === word.length){
            isDeleting = true;
            setTimeout(type, 1000); 
            return;
        }
    } else {
        currentWord.pop();
        charIndex--;
        typingSpan.textContent = currentWord.join("");
        if(charIndex === 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500); 
            return;
        }
    }
    setTimeout(type, isDeleting ? 100 : 200);
}
document.addEventListener("DOMContentLoaded", type);


const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");


document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", () => {
        modal.style.display = "flex";
        modalTitle.textContent = project.dataset.title || "Project";
        modalDesc.textContent = project.dataset.desc || "No description";
    });

 
    project.addEventListener("touchstart", () => {
        modal.style.display = "flex";
        modalTitle.textContent = project.dataset.title || "Project";
        modalDesc.textContent = project.dataset.desc || "No description";
    });
});


function closeModal() {
    modal.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", e => { if(e.target === modal) closeModal(); });


window.addEventListener("keydown", e => {
    if(e.key === "Escape") closeModal();
});
