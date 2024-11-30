// Smooth Scroll to Projects or Footer
document.querySelectorAll('a[href^="https://"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");
        window.open(target, "_blank");
    });
});
