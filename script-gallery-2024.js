// Array con las rutas de las imágenes
const images = [
    "2024/IMG_7159.jpeg",
    "2024/IMG_7160.jpeg",
    "2024/IMG_7161.jpeg",
    "2024/IMG_7162.jpeg",
    "2024/IMG_7163.jpeg",
    "2024/IMG_7164.jpeg",
    "2024/IMG_7165.jpeg",
    "2024/IMG_7166.jpeg",
    "2024/IMG_7167.jpeg",
    "2024/IMG_7168.jpeg",
    "2024/IMG_7169.jpeg",
    "2024/IMG_7170.jpeg",
    "2024/IMG_7171.jpeg",
    "2024/IMG_7172.jpeg",
    "2024/IMG_7173.jpeg",
    "2024/IMG_7174.jpeg",
    "2024/IMG_7175.jpeg",
    "2024/IMG_7176.jpeg",
    "2024/IMG_7177.jpeg",
    "2024/IMG_7178.jpeg",
    "2024/IMG_7179.jpeg",
    "2024/IMG_7180.jpeg",
    "2024/IMG_7181.jpeg",
    "2024/IMG_7182.jpeg",
    "2024/IMG_7183.jpeg",
    "2024/IMG_7184.jpeg",
    "2024/IMG_7185.jpeg",
    "2024/IMG_7186.jpeg",
    "2024/IMG_7187.jpeg",
    "2024/IMG_7188.jpeg",
    "2024/IMG_7189.jpeg",
    "2024/IMG_7190.jpeg",
    "2024/IMG_7191.jpeg",
    "2024/IMG_7192.jpeg",
    "2024/IMG_7193.jpeg",
    "2024/IMG_7194.jpeg",
    "2024/IMG_7195.jpeg",
    "2024/IMG_7196.jpeg",
    "2024/IMG_7197.jpeg",
    "2024/IMG_7198.jpeg",
    "2024/IMG_7199.jpeg",
    "2024/IMG_7200.jpeg",
    "2024/IMG_7201.jpeg",
    "2024/IMG_7202.jpeg",
    "2024/IMG_7203.jpeg",
    "2024/IMG_7204.jpeg",
    "2024/IMG_7205.jpeg",
    "2024/IMG_7206.jpeg",
    "2024/IMG_7207.jpeg",
    "2024/IMG_7208.jpeg",
    "2024/IMG_7209.jpeg",
    "2024/IMG_7210.jpeg",
    "2024/IMG_7211.jpeg",
    "2024/IMG_7212.jpeg",
    "2024/IMG_7213.jpeg",
    "2024/IMG_7214.jpeg",
    "2024/IMG_7215.jpeg",
    "2024/IMG_7216.jpeg",
    "2024/IMG_7217.jpeg",
    "2024/IMG_7218.jpeg",
    "2024/IMG_7219.jpeg",
    "2024/IMG_7220.jpeg",
    "2024/IMG_7221.jpeg",
    "2024/IMG_7222.jpeg",
    "2024/IMG_7223.jpeg",
    "2024/IMG_7224.jpeg",
    "2024/IMG_7227.jpeg",
    "2024/IMG_7228.jpeg",
    "2024/IMG_7229.jpeg",
    "2024/IMG_7230.jpeg",
    "2024/IMG_7231.jpeg",
    "2024/IMG_7232.jpeg",
    "2024/IMG_7233.jpeg",
    "2024/IMG_7234.jpeg",
    "2024/IMG_7235.jpeg",
    "2024/IMG_7236.jpeg",
    "2024/IMG_7238.jpeg",
    "2024/IMG_7239.jpeg",
    "2024/IMG_7240.jpeg",
    "2024/IMG_7243.jpeg",
    "2024/IMG_7244.jpeg",
    "2024/IMG_7245.jpeg",
    "2024/IMG_7246.jpeg",
    "2024/IMG_7247.jpeg",
    "2024/IMG_7248.jpeg",
    "2024/IMG_7249.jpeg",
    "2024/IMG_7250.jpeg",
    "2024/IMG_7251.jpeg",
    "2024/IMG_7252.jpeg",
    "2024/IMG_7253.jpeg",
    "2024/IMG_7254.jpeg",
    "2024/IMG_7255.jpeg",
    "2024/IMG_7256.jpeg",
    "2024/IMG_7257.jpeg",
    "2024/IMG_7258.jpeg",
    "2024/IMG_7259.jpeg",
    "2024/IMG_7260.jpeg",
    "2024/IMG_7261.jpeg",
    "2024/IMG_7262.jpeg",
    "2024/IMG_7263.jpeg",
    "2024/IMG_7264.jpeg",
    "2024/IMG_7265.jpeg",
    "2024/IMG_7266.jpeg",
    "2024/IMG_7267.jpeg",
    "2024/IMG_7268.jpeg",
    "2024/IMG_7269.jpeg",
    "2024/IMG_7270.jpeg",
    "2024/IMG_7271.jpeg",
    "2024/IMG_7272.jpeg",
    "2024/IMG_7273.jpeg",
    "2024/IMG_7274.jpeg",
    "2024/IMG_7275.jpeg",
    "2024/IMG_7276.jpeg",
    "2024/IMG_7277.jpeg",
    "2024/IMG_7278.jpeg",
    "2024/IMG_7279.jpeg",
    "2024/IMG_7280.jpeg",
    "2024/IMG_7281.jpeg",
    "2024/IMG_7282.jpeg",
    "2024/IMG_7283.jpeg",
    "2024/IMG_7284.jpeg",
    "2024/IMG_7285.jpeg",
    "2024/IMG_7286.jpeg",
    "2024/IMG_7287.jpeg",
    "2024/IMG_7288.jpeg",
    "2024/IMG_7289.jpeg",
    "2024/IMG_7290.jpeg",
    "2024/IMG_7291.jpeg",
    "2024/IMG_7292.jpeg",
    "2024/IMG_7293.jpeg",
    "2024/IMG_7294.jpeg",
    "2024/IMG_7295.jpeg",
    "2024/IMG_7296.jpeg",
    "2024/IMG_7297.jpeg",
    "2024/IMG_7298.jpeg",
    "2024/IMG_7299.jpeg",
    "2024/IMG_7300.jpeg",
    "2024/IMG_7301.jpeg",
    "2024/IMG_7302.jpeg",
    "2024/IMG_7303.jpeg",
    "2024/IMG_7304.jpeg",
    "2024/IMG_7305.jpeg",
    "2024/IMG_7306.jpeg",
    "2024/IMG_7307.jpeg",
    "2024/IMG_7308.jpeg",
    "2024/IMG_7309.jpeg",
    "2024/IMG_7310.jpeg",
    "2024/IMG_7311.jpeg",
    "2024/IMG_7312.jpeg",
    "2024/IMG_7313.jpeg",
    "2024/IMG_7314.jpeg",
    "2024/IMG_7315.jpeg",
    "2024/IMG_7316.jpeg",
    "2024/IMG_7317.jpeg",
    "2024/IMG_7318.jpeg",
    "2024/IMG_7320.jpeg",
    "2024/IMG_7321.jpeg",
    "2024/IMG_7323.jpeg",
    "2024/IMG_7324.jpeg",
    "2024/IMG_7325.jpeg",
    "2024/IMG_7326.jpeg",
    "2024/IMG_7327.jpeg",
    "2024/IMG_7328.jpeg",
    "2024/IMG_7329.jpeg",
    "2024/IMG_7330.jpeg",
    "2024/IMG_7331.jpeg",
    "2024/IMG_7332.jpeg",
    "2024/IMG_7334.jpeg",
    "2024/IMG_7335.jpeg",
    "2024/IMG_7336.jpeg",
    "2024/IMG_7337.jpeg",
    "2024/IMG_7338.jpeg",
    "2024/IMG_7339.jpeg",
    "2024/IMG_7340.jpeg",
    "2024/IMG_7341.jpeg",
    "2024/IMG_7342.jpeg",
    "2024/IMG_7343.jpeg",
    "2024/IMG_7344.jpeg",
    "2024/IMG_7345.jpeg",
    "2024/IMG_7346.jpeg",
    "2024/IMG_7347.jpeg",
    "2024/IMG_7348.jpeg",
    "2024/IMG_7349.jpeg",
    "2024/IMG_7350.jpeg",
    "2024/IMG_7351.jpeg",
    "2024/IMG_7352.jpeg",
    "2024/IMG_7353.jpeg",
    "2024/IMG_7354.jpeg",
    "2024/IMG_7355.jpeg",
    "2024/IMG_7356.jpeg",
    "2024/IMG_7357.jpeg",
    "2024/IMG_7358.jpeg",
    "2024/IMG_7359.jpeg",
    "2024/IMG_7360.jpeg",
    "2024/IMG_7361.jpeg",
    "2024/IMG_7362.jpeg",
    "2024/IMG_7363.jpeg",
    "2024/IMG_7364.jpeg",
    "2024/IMG_7365.jpeg",
    "2024/IMG_7366.jpeg",
    "2024/IMG_7367.jpeg",
    "2024/IMG_7368.jpeg",
    "2024/IMG_7369.jpeg",
    "2024/IMG_7370.jpeg",
    "2024/IMG_7371.jpeg",
    "2024/IMG_7372.jpeg",
    "2024/IMG_7373.jpeg",
    "2024/IMG_7374.jpeg",
    "2024/IMG_7375.jpeg",
    "2024/IMG_7376.jpeg",
    "2024/IMG_7377.jpeg",
    "2024/IMG_7378.jpeg",
    "2024/IMG_7379.jpeg",
    "2024/IMG_7380.jpeg",
    "2024/IMG_7381.jpeg",
    "2024/IMG_7382.jpeg",
    "2024/IMG_7383.jpeg",
    "2024/IMG_7384.jpeg",
    "2024/IMG_7386.jpeg",
    "2024/IMG_7432.jpeg",
    "2024/IMG_7433.jpeg",
    "2024/1f2de230-28a6-45d5-993f-6939414f7066.jpeg",
    "2024/15d06afa-6935-4a64-84bc-339a2da01c5e.jpeg",
    "2024/580db5f6-af55-4ef3-b6b8-225e8c338634.jpeg",
    "2024/c394d190-77b5-4414-a5ea-7383b9b221a7.jpeg",
    "2024/da65724a-c33f-475e-ab40-7a59af8788b5.jpeg",
    "2024/dc63a2f3-396c-421b-a977-d2a50aacca52.jpeg",
    "2024/e75efe3a-3085-4a6d-98dc-3f9c56eccbae.jpeg",
    "2024/e84dd9c2-daba-48d2-ba8e-2646ead83a54.jpeg",
    "2024/e91e5e3b-ccd3-4e15-8f29-5d4a9df773c9.jpeg",
    "2024/e666a155-4767-4e3c-94e1-5335d5acb893.jpeg",
    "2024/efe40650-ee5b-473a-a59a-4e4872df5173.jpeg",
    "2024/fbf3eef4-65ed-47c2-8a4a-1e2efe0b85cf.jpeg",
    "2024/0cb84fcb-dae5-42fc-89a0-eee590dd902b.jpeg",
    "2024/083e5b78-47ae-4216-8baf-45bb3a63fd0e.jpeg",
    "2024/fcb4c607-9dfa-44ed-9ce1-7d98c8ebaf1e.jpeg"
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