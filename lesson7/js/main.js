let imgToLoad = document.querySelectorAll("img[data-src]");

const loadImg = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
}

// imgToLoad.forEach((pictures) => {
//     loadImg(pictures);
// });

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((item, observer) => {
        item.forEach((item) => {
            if (item.isIntersecting) {
                loadImg(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imgToLoad.forEach((img) => {
        observer.observe(img);
    });
}
else {
    imgToLoad.forEach((img) => {
        loadImg(img);
    })
}