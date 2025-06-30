export function initGallery(images) {
    //Contenedor de la galería
    const galleryContainer = document.getElementById("gallery-container");

    //Modals
    const modal = document.getElementById(containerID);
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.getElementById("close-modal");

    //Botones de navegación
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0; //indice actual de la imagen en el modal

    //Renderizar imagenes en la galeria
    images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image.thumbnail;  //usa la miniatura
        img.alt = "Foto de la galería";
        img.addEventListener("click", () => {
            currentIndex = index;
            showImage(currentIndex);
        });
        galleryContainer.appendChild(img);
    });

    //Mostrar imagen grande en el modal
    function showImage(index){
        console.log("Ruta de la imagen:", images[index].fullSize); // Muestra la ruta de la imagen
        modal.classList.remove("hidden");
        modalImg.src = images[index].fullSize; //usa la img completa
    }

    //Cerrar el modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    //Navegación dentro del modal
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; //Circular
        showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length; //Circular
        showImage(currentIndex);
    });

    //Teclas de navegación
    document.addEventListener("keydown", (e) => {
        if(!modal.classList.contains("hidden")) {
            if(e.key === "ArrowLeft") {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                showImage(currentIndex);
            }else if (e.key === "ArrowRight") {
                currentIndex = (currentIndex + 1) % images.length;
                showImage(currentIndex);
            }else if (e.key === "Escape") {
                modal.classList.remove("hidden");
            }
        }
    });
}