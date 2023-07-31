function openGallery() {
    const overlay = document.getElementById("galleryOverlay");
    overlay.style.display = "block";
}

function closeGallery() {
    const overlay = document.getElementById("galleryOverlay");
    overlay.style.display = "none";
}

const galleryItems = document.querySelectorAll(".gallery-link");
galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const imageUrl = item.getAttribute("href");
        const galleryContent = document.querySelector(".gallery-content");
        const img = document.createElement("img");
        img.src = imageUrl;
        galleryContent.innerHTML = "";
        galleryContent.appendChild(img);
        openGallery();
    });
});