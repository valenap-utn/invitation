// Array con las rutas de las imágenes
const images = [
    "2023/IMG_8370.jpeg",
    "2023/IMG_8371.jpeg",
    "2023/IMG_8372.jpeg",
    "2023/IMG_8373.jpeg",
    "2023/IMG_8374.jpeg",
    "2023/IMG_8375.jpeg",
    "2023/IMG_8376.jpeg",
    "2023/IMG_8377.jpeg",
    "2023/IMG_8378.jpeg",
    "2023/IMG_8379.jpeg",
    "2023/IMG_8380.jpeg",
    "2023/IMG_8381.jpeg",
    "2023/IMG_8384.jpeg",
    "2023/IMG_8385.jpeg",
    "2023/IMG_8386.jpeg",
    "2023/IMG_8387.jpeg",
    "2023/IMG_8388.jpeg",
    "2023/IMG_8389.jpeg",
    "2023/IMG_8391.jpeg",
    "2023/IMG_8392.jpeg",
    "2023/IMG_8393.jpeg",
    "2023/IMG_8394.jpeg",
    "2023/IMG_8395.jpeg",
    "2023/IMG_8396.jpeg",
    "2023/IMG_8397.jpeg",
    "2023/IMG_8398.jpeg",
    "2023/IMG_8399.jpeg",
    "2023/IMG_8400.jpeg",
    "2023/IMG_8401.jpeg",
    "2023/IMG_8402.jpeg",
    "2023/IMG_8403.jpeg",
    "2023/IMG_8404.jpeg",
    "2023/IMG_8405.jpeg",
    "2023/IMG_8406.jpeg",
    "2023/IMG_8407.jpeg",
    "2023/IMG_8408.jpeg",
    "2023/IMG_8409.jpeg",
    "2023/IMG_8410.jpeg",
    "2023/IMG_8411.jpeg",
    "2023/IMG_8412.jpeg",
    "2023/IMG_8413.jpeg",
    "2023/IMG_8414.jpeg",
    "2023/IMG_8415.jpeg",
    "2023/IMG_8416.jpeg",
    "2023/IMG_8418.jpeg",
    "2023/IMG_8420.jpeg",
    "2023/IMG_8421.jpeg",
    "2023/IMG_8422.jpeg",
    "2023/IMG_8423.jpeg",
    "2023/IMG_8424.jpeg",
    "2023/IMG_8425.jpeg",
    "2023/IMG_8426.jpeg",
    "2023/IMG_8427.jpeg",
    "2023/IMG_8428.jpeg",
    "2023/IMG_8429.jpeg",
    "2023/IMG_8430.jpeg",
    "2023/IMG_8431.jpeg",
    "2023/IMG_8432.jpeg",
    "2023/IMG_8433.jpeg",
    "2023/IMG_8434.jpeg",
    "2023/IMG_8435.jpeg",
    "2023/IMG_8436.jpeg",
    "2023/IMG_8437.jpeg",
    "2023/IMG_8438.jpeg",
    "2023/IMG_8439.jpeg",
    "2023/IMG_8440.jpeg",
    "2023/IMG_8441.jpeg",
    "2023/IMG_8442.jpeg",
    "2023/IMG_8443.jpeg",
    "2023/IMG_8444.jpeg",
    "2023/IMG_8445.jpeg",
    "2023/IMG_8446.jpeg",
    "2023/IMG_8447.jpeg",
    "2023/IMG_8448.jpeg",
    "2023/IMG_8449.jpeg",
    "2023/IMG_8450.jpeg",
    "2023/IMG_8451.jpeg",
    "2023/IMG_8452.jpeg",
    "2023/IMG_8453.jpeg",
    "2023/IMG_8454.jpeg",
    "2023/IMG_8455.jpeg",
    "2023/IMG_8456.jpeg",
    "2023/IMG_8457.jpeg",
    "2023/IMG_8458.jpeg",
    "2023/IMG_8459.jpeg",
    "2023/IMG_8460.jpeg",
    "2023/IMG_8461.jpeg",
    "2023/IMG_8462.jpeg",
    "2023/IMG_8463.jpeg",
    "2023/IMG_8464.jpeg",
    "2023/IMG_8465.jpeg",
    "2023/IMG_8466.jpeg",
    "2023/IMG_8467.jpeg",
    "2023/IMG_8468.jpeg",
    "2023/IMG_8469.jpeg",
    "2023/IMG_8470.jpeg",
    "2023/IMG_8471.jpeg",
    "2023/IMG_8472.jpeg",
    "2023/IMG_8473.jpeg",
    "2023/IMG_8474.jpeg",
    "2023/IMG_8475.jpeg",
    "2023/IMG_8476.jpeg",
    "2023/IMG_8477.jpeg",
    "2023/IMG_8479.jpeg",
    "2023/IMG_8480.jpeg",
    "2023/IMG_8482.jpeg",
    "2023/IMG_8484.jpeg",
    "2023/IMG_8486.jpeg",
    "2023/IMG_8487.jpeg"
];

// Contenedor de la galería
const galleryContainer = document.getElementById("gallery-container");

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Boton previa-siguiente
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0; // Índice actual de la imagen en el modal

// Renderizar las imágenes en la galería
images.forEach((src,index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto de la galería";
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
    });
    galleryContainer.appendChild(img);
});

// Muestra la imagen correspondiente
function showImage(currentIndex) {
    modal.classList.remove("hidden");
    modalImg.src = images[currentIndex];
}

// Cerrar el modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// Mostrar imagen anterior
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Ciclo circular
    showImage(currentIndex);
});

// Mostrar imagen siguiente
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Ciclo circular
    showImage(currentIndex);
});

// Teclas
document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden")) {
        if (e.key === "ArrowLeft") {
            // Flecha izquierda: imagen anterior
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.key === "ArrowRight") {
            // Flecha derecha: imagen siguiente
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (e.key === "Escape") {
            // Tecla Escape: cerrar modal
            modal.classList.add("hidden");
        }
    }
});