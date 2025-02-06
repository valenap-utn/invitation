// Array con las rutas de las imágenes (miniaturas y originales)
const images = [
    {
        thumbnail:"thumbnails/inspo-2025/photo-1.png",
        fullSize: "inspo/2025/photo-1.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-2.png",
        fullSize: "inspo/2025/photo-2.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-3.png",
        fullSize: "inspo/2025/photo-3.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-4.png",
        fullSize: "inspo/2025/photo-4.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-5.png",
        fullSize: "inspo/2025/photo-5.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-6.png",
        fullSize: "inspo/2025/photo-6.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-7.png",
        fullSize: "inspo/2025/photo-7.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-8.png",
        fullSize: "inspo/2025/photo-8.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-9.png",
        fullSize: "inspo/2025/photo-9.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-10.png",
        fullSize: "inspo/2025/photo-10.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-11.png",
        fullSize: "inspo/2025/photo-11.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-12.png",
        fullSize: "inspo/2025/photo-12.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-13.png",
        fullSize: "inspo/2025/photo-13.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-14.png",
        fullSize: "inspo/2025/photo-14.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-15.png",
        fullSize: "inspo/2025/photo-15.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-16.png",
        fullSize: "inspo/2025/photo-16.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-17.png",
        fullSize: "inspo/2025/photo-17.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-18.png",
        fullSize: "inspo/2025/photo-18.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-19.png",
        fullSize: "inspo/2025/photo-19.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-20.png",
        fullSize: "inspo/2025/photo-20.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-21.png",
        fullSize: "inspo/2025/photo-21.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-22.png",
        fullSize: "inspo/2025/photo-22.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-23.png",
        fullSize: "inspo/2025/photo-23.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-24.png",
        fullSize: "inspo/2025/photo-24.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-25.png",
        fullSize: "inspo/2025/photo-25.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-26.png",
        fullSize: "inspo/2025/photo-26.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-27.png",
        fullSize: "inspo/2025/photo-27.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-28.png",
        fullSize: "inspo/2025/photo-28.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-29.png",
        fullSize: "inspo/2025/photo-29.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-30.png",
        fullSize: "inspo/2025/photo-30.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-31.png",
        fullSize: "inspo/2025/photo-31.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-32.png",
        fullSize: "inspo/2025/photo-32.png"
    },
    {
        thumbnail:"thumbnails/inspo-2025/photo-33.png",
        fullSize: "inspo/2025/photo-33.png"
    }, //ffffff
    // {
    //     thumbnail:"thumbnails/inspo-2025/",
    //     fullSize: "inspo/2025"
    // },
    // {
    //     thumbnail:"thumbnails/inspo-2025/",
    //     fullSize: "inspo/2025"
    // },
    // {
    //     thumbnail:"thumbnails/inspo-2025/",
    //     fullSize: "inspo/2025"
    // },
    // {
    //     thumbnail:"thumbnails/inspo-2025/",
    //     fullSize: "inspo/2025"
    // },
    // {
    //     thumbnail:"thumbnails/inspo-2025/",
    //     fullSize: "inspo/2025"
    // }
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
