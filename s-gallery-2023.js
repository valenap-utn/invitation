// Array con las rutas de las imágenes (miniaturas y originales)
const images = [
    {
        thumbnail:"thumbnails/2023/IMG_8370.jpeg",
        fullSize: "2023/IMG_8370.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8371.jpeg",
        fullSize: "2023/IMG_8371.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8372.jpeg",
        fullSize: "2023/IMG_8372.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8373.jpeg",
        fullSize: "2023/IMG_8373.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8374.jpeg",
        fullSize: "2023/IMG_8374.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8375.jpeg",
        fullSize: "2023/IMG_8375.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8376.jpeg",
        fullSize: "2023/IMG_8376.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8377.jpeg",
        fullSize: "2023/IMG_8377.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8378.jpeg",
        fullSize: "2023/IMG_8378.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8379.jpeg",
        fullSize: "2023/IMG_8379.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8380.jpeg",
        fullSize: "2023/IMG_8380.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8381.jpeg",
        fullSize: "2023/IMG_8381.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8384.jpeg",
        fullSize: "2023/IMG_8384.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8385.jpeg",
        fullSize: "2023/IMG_8385.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8386.jpeg",
        fullSize: "2023/IMG_8386.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8387.jpeg",
        fullSize: "2023/IMG_8387.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8388.jpeg",
        fullSize: "2023/IMG_8388.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8389.jpeg",
        fullSize: "2023/IMG_8389.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8391.jpeg",
        fullSize: "2023/IMG_8391.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8392.jpeg",
        fullSize: "2023/IMG_8392.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8393.jpeg",
        fullSize: "2023/IMG_8393.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8394.jpeg",
        fullSize: "2023/IMG_8394.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8395.jpeg",
        fullSize: "2023/IMG_8395.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8396.jpeg",
        fullSize: "2023/IMG_8396.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8397.jpeg",
        fullSize: "2023/IMG_8397.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8398.jpeg",
        fullSize: "2023/IMG_8398.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8399.jpeg",
        fullSize: "2023/IMG_8399.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8400.jpeg",
        fullSize: "2023/IMG_8400.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8401.jpeg",
        fullSize: "2023/IMG_8401.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8402.jpeg",
        fullSize: "2023/IMG_8402.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8403.jpeg",
        fullSize: "2023/IMG_8403.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8404.jpeg",
        fullSize: "2023/IMG_8404.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8405.jpeg",
        fullSize: "2023/IMG_8405.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8406.jpeg",
        fullSize: "2023/IMG_8406.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8407.jpeg",
        fullSize: "2023/IMG_8407.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8408.jpeg",
        fullSize: "2023/IMG_8408.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8409.jpeg",
        fullSize: "2023/IMG_8409.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8410.jpeg",
        fullSize: "2023/IMG_8410.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8411.jpeg",
        fullSize: "2023/IMG_8411.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8412.jpeg",
        fullSize: "2023/IMG_8412.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8413.jpeg",
        fullSize: "2023/IMG_8413.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8414.jpeg",
        fullSize: "2023/IMG_8414.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8415.jpeg",
        fullSize: "2023/IMG_8415.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8416.jpeg",
        fullSize: "2023/IMG_8416.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8418.jpeg",
        fullSize: "2023/IMG_8418.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8420.jpeg",
        fullSize: "2023/IMG_8420.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8421.jpeg",
        fullSize: "2023/IMG_8421.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8422.jpeg",
        fullSize: "2023/IMG_8422.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8423.jpeg",
        fullSize: "2023/IMG_8423.jpeg"
    },
    {
        thumbnail:"thumbnails/2023/IMG_8424.jpeg",
        fullSize: "2023/IMG_8424.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8425.jpeg",
        fullSize: "2023/IMG_8425.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8426.jpeg",
        fullSize: "2023/IMG_8426.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8427.jpeg",
        fullSize: "2023/IMG_8427.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8428.jpeg",
        fullSize: "2023/IMG_8428.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8429.jpeg",
        fullSize: "2023/IMG_8429.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8430.jpeg",
        fullSize: "2023/IMG_8430.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8431.jpeg",
        fullSize: "2023/IMG_8431.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8432.jpeg",
        fullSize: "2023/IMG_8432.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8433.jpeg",
        fullSize: "2023/IMG_8433.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8434.jpeg",
        fullSize: "2023/IMG_8434.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8435.jpeg",
        fullSize: "2023/IMG_8435.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8436.jpeg",
        fullSize: "2023/IMG_8436.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8437.jpeg",
        fullSize: "2023/IMG_8437.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8438.jpeg",
        fullSize: "2023/IMG_8438.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8439.jpeg",
        fullSize: "2023/IMG_8439.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8440.jpeg",
        fullSize: "2023/IMG_8440.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8441.jpeg",
        fullSize: "2023/IMG_8441.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8442.jpeg",
        fullSize: "2023/IMG_8442.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8443.jpeg",
        fullSize: "2023/IMG_8443.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8444.jpeg",
        fullSize: "2023/IMG_8444.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8445.jpeg",
        fullSize: "2023/IMG_8445.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8446.jpeg",
        fullSize: "2023/IMG_8446.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8447.jpeg",
        fullSize: "2023/IMG_8447.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8448.jpeg",
        fullSize: "2023/IMG_8448.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8449.jpeg",
        fullSize: "2023/IMG_8449.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8450.jpeg",
        fullSize: "2023/IMG_8450.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8451.jpeg",
        fullSize: "2023/IMG_8451.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8452.jpeg",
        fullSize: "2023/IMG_8452.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8453.jpeg",
        fullSize: "2023/IMG_8453.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8454.jpeg",
        fullSize: "2023/IMG_8454.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8455.jpeg",
        fullSize: "2023/IMG_8455.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8456.jpeg",
        fullSize: "2023/IMG_8456.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8457.jpeg",
        fullSize: "2023/IMG_8457.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8458.jpeg",
        fullSize: "2023/IMG_8458.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8459.jpeg",
        fullSize: "2023/IMG_8459.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8460.jpeg",
        fullSize: "2023/IMG_8460.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8461.jpeg",
        fullSize: "2023/IMG_8461.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8462.jpeg",
        fullSize: "2023/IMG_8462.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8463.jpeg",
        fullSize: "2023/IMG_8463.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8464.jpeg",
        fullSize: "2023/IMG_8464.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8465.jpeg",
        fullSize: "2023/IMG_8465.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8466.jpeg",
        fullSize: "2023/IMG_8466.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8467.jpeg",
        fullSize: "2023/IMG_8467.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8468.jpeg",
        fullSize: "2023/IMG_8468.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8469.jpeg",
        fullSize: "2023/IMG_8469.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8470.jpeg",
        fullSize: "2023/IMG_8470.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8471.jpeg",
        fullSize: "2023/IMG_8471.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8472.jpeg",
        fullSize: "2023/IMG_8472.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8473.jpeg",
        fullSize: "2023/IMG_8473.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8474.jpeg",
        fullSize: "2023/IMG_8474.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8475.jpeg",
        fullSize: "2023/IMG_8475.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8476.jpeg",
        fullSize: "2023/IMG_8476.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8477.jpeg",
        fullSize: "2023/IMG_8477.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8479.jpeg",
        fullSize: "2023/IMG_8479.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8480.jpeg",
        fullSize: "2023/IMG_8480.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8482.jpeg",
        fullSize: "2023/IMG_8482.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8484.jpeg",
        fullSize: "2023/IMG_8484.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8486.jpeg",
        fullSize: "2023/IMG_8486.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_8487.jpeg",
        fullSize: "2023/IMG_8487.jpeg"
    }
];

// Contenedor de la galería
const galleryContainer = document.getElementById("gallery-container");

// Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// Botones de navegación del modal
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0; // Índice actual de la imagen en el modal

// Renderizar las imágenes en la galería
images.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image.thumbnail; // Usa la miniatura
    img.alt = "Foto de la galería";
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage(currentIndex);
    });
    galleryContainer.appendChild(img);
});

// Mostrar imagen en grande en el modal
function showImage(index) {
    modal.classList.remove("hidden");
    modalImg.src = images[index].fullSize; // Usa la imagen completa
}

// Cerrar el modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Navegación dentro del modal
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Circular
    showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Circular
    showImage(currentIndex);
});

// Teclas de navegación
document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("hidden")) {
        if (e.key === "ArrowLeft") {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        } else if (e.key === "ArrowRight") {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        } else if (e.key === "Escape") {
            modal.classList.add("hidden");
        }
    }
});
