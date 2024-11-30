// Smooth Scroll for Internal Links and Open External Links in a New Tab
document.querySelectorAll('a').forEach(link => {
    if (link.href.startsWith("https://")) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.open(this.href, "_blank");
        });
    } else if (link.hash) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth",
            });
        });
    }
});
