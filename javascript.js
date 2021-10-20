
// Botão de Like

const likes = document.querySelectorAll(".like");

for (let like of likes) like.addEventListener("click", () => liked(like));

const liked = (item) => {
    if(item.classList.contains("far")){
        item.classList.remove("far");
        item.classList.add("fas");
    } else {
        item.classList.remove("fas");
        item.classList.add("far");
    }
};


// Animação 

const sr = ScrollReveal ({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
});

ScrollReveal().reveal(".texto",{delay: 200});
ScrollReveal().reveal(".data",{delay: 400});
ScrollReveal().reveal(".título",{delay: 500});
ScrollReveal().reveal(".artigo",{delay: 600});