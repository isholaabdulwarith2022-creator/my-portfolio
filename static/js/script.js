const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// ==================== MOBILE MENU ====================

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });


    document.querySelectorAll("#navMenu a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// ==================== IMAGE VIEWER ====================

const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

const galleryImages = document.querySelectorAll(".gallery-image");


galleryImages.forEach((button) => {

    button.addEventListener("click", () => {

        const image = button.dataset.image;
        const title = button.dataset.title;

        modalImage.src = image;
        modalImage.alt = title;
        modalTitle.textContent = title;

        imageModal.classList.add("active");
        imageModal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");
    });

});


function closeImageModal() {

    imageModal.classList.remove("active");
    imageModal.setAttribute("aria-hidden", "true");

    modalImage.src = "";
    modalTitle.textContent = "";

    document.body.classList.remove("modal-open");
}


if (modalClose) {
    modalClose.addEventListener("click", closeImageModal);
}


if (imageModal) {

    imageModal.addEventListener("click", (event) => {

        if (event.target === imageModal) {
            closeImageModal();
        }

    });

}


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeImageModal();
    }

});