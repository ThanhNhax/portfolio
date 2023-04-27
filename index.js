window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.querySelector(".header").classList.add("sticky");
    } else {
        document.querySelector(".header").classList.remove("sticky");
    }
    if (document.documentElement.scrollTop > 500) {
        document.querySelector(".scroll-up-btn").classList.add("show");
    } else {
        document.querySelector(".scroll-up-btn").classList.remove("show")(
            "show"
        );
    }
}

var typed = new Typed(".typing", {
    strings: ["Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

var typed = new Typed(".typing-about", {
    strings: ["Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
document.querySelector(".scroll-up-btn").addEventListener(
    "click",
    function () {
        document.documentElement.scrollTop = 0;
    },
    false
);

// slide-up script
