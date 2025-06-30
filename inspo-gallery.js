import {initGallery} from "./gallery-utils";

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

initGallery(images);
