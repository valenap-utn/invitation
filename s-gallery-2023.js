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
    },
    {
        thumbnail: "thumbnails/2023/0c3a59c0-3153-45f4-888e-fde95f79b17d.jpeg",
        fullSize: "2023/0c3a59c0-3153-45f4-888e-fde95f79b17d.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/0f4e6c03-39ea-48cc-973e-a5542f9a1361.jpeg",
        fullSize: "2023/0f4e6c03-39ea-48cc-973e-a5542f9a1361.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/01c82348-d174-45ba-90fa-d552693fa380.jpeg",
        fullSize: "2023/01c82348-d174-45ba-90fa-d552693fa380.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/01dd1fac-9ea6-4659-8c55-a63af913c967.jpeg",
        fullSize: "2023/01dd1fac-9ea6-4659-8c55-a63af913c967.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/2d58cf97-d862-4801-bc18-709a2d1d36b0.jpeg",
        fullSize: "2023/2d58cf97-d862-4801-bc18-709a2d1d36b0.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/2d697355-62cb-4039-bc87-609a4e269d11.jpeg",
        fullSize: "2023/2d697355-62cb-4039-bc87-609a4e269d11.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/2e2c9d2e-04b5-486b-9370-e14a820a6592.jpeg",
        fullSize: "2023/2e2c9d2e-04b5-486b-9370-e14a820a6592.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/2E78EC2D-86E4-44B6-B332-7529911E8ABD.jpeg",
        fullSize: "2023/2E78EC2D-86E4-44B6-B332-7529911E8ABD.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/3e0e9c5d-6f19-419e-934c-a8e98dd5b9f7.jpeg",
        fullSize: "2023/3e0e9c5d-6f19-419e-934c-a8e98dd5b9f7.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/6a3e57c5-ef40-4ccd-86ab-1906020dd161.jpeg",
        fullSize: "2023/6a3e57c5-ef40-4ccd-86ab-1906020dd161.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/6b0e5b43-1420-45cd-944e-70088be5b638.jpeg",
        fullSize: "2023/6b0e5b43-1420-45cd-944e-70088be5b638.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/6bdd804b-e46f-4977-ac80-995b9f74ef6a.jpeg",
        fullSize: "2023/6bdd804b-e46f-4977-ac80-995b9f74ef6a.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/7fdd9333-50b8-4361-8e8a-1c1bce3dcb68.jpeg",
        fullSize: "2023/7fdd9333-50b8-4361-8e8a-1c1bce3dcb68.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/007afe5d-b64f-4c13-a17f-b447850cb437.jpeg",
        fullSize: "2023/007afe5d-b64f-4c13-a17f-b447850cb437.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/9e4bce6a-b460-4dba-9ccc-1f39ec43cae5.jpeg",
        fullSize: "2023/9e4bce6a-b460-4dba-9ccc-1f39ec43cae5.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/09ebaab4-0483-4a5a-8fca-3ae3fa53c96c.jpeg",
        fullSize: "2023/09ebaab4-0483-4a5a-8fca-3ae3fa53c96c.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/18fdded6-8a5f-4b85-bc21-847bbc24bb55.jpeg",
        fullSize: "2023/18fdded6-8a5f-4b85-bc21-847bbc24bb55.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/32bd7132-7e67-4123-a0c4-1273a133fa7b.jpeg",
        fullSize: "2023/32bd7132-7e67-4123-a0c4-1273a133fa7b.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/40f96f0d-f8cb-43cd-b401-84f1406414f6.jpeg",
        fullSize: "2023/40f96f0d-f8cb-43cd-b401-84f1406414f6.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/0066cd76-5380-40fa-9e9f-ff2df0806796.jpeg",
        fullSize: "2023/0066cd76-5380-40fa-9e9f-ff2df0806796.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/68a2b791-2f98-4abf-b239-74d9e3c3676e.jpeg",
        fullSize: "2023/68a2b791-2f98-4abf-b239-74d9e3c3676e.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/86d8cc54-4131-486d-bd6a-ea47e4542831.jpeg",
        fullSize: "2023/86d8cc54-4131-486d-bd6a-ea47e4542831.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/93a9d1b5-c9a1-4c6c-890b-812bf9061723.jpeg",
        fullSize: "2023/93a9d1b5-c9a1-4c6c-890b-812bf9061723.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/134edd29-ac4b-4f36-a9f2-7b107b5264a7.jpeg",
        fullSize: "2023/134edd29-ac4b-4f36-a9f2-7b107b5264a7.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/407deacf-aab5-4cba-bc3e-62193fa35f81.jpeg",
        fullSize: "2023/407deacf-aab5-4cba-bc3e-62193fa35f81.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/1203a753-1024-430f-b802-6365a602dc4d.jpeg",
        fullSize: "2023/1203a753-1024-430f-b802-6365a602dc4d.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/96772ada-9adc-4079-ad95-e9108f18cfd8.jpeg",
        fullSize: "2023/96772ada-9adc-4079-ad95-e9108f18cfd8.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/99516f60-453f-4c66-a0b5-a193c75bb098.jpeg",
        fullSize: "2023/99516f60-453f-4c66-a0b5-a193c75bb098.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/1302274b-ba93-431b-8bee-d719395d357d.jpeg",
        fullSize: "2023/1302274b-ba93-431b-8bee-d719395d357d.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/a2b7b4bb-9d48-4479-bba2-302215fb83bf.jpeg",
        fullSize: "2023/a2b7b4bb-9d48-4479-bba2-302215fb83bf.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/a6d65552-16ba-46df-b8a6-c3bfca8a4204.jpeg",
        fullSize: "2023/a6d65552-16ba-46df-b8a6-c3bfca8a4204.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/a698c51a-09fc-445a-aab5-91576d453b4c.jpeg",
        fullSize: "2023/a698c51a-09fc-445a-aab5-91576d453b4c.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/ad1a32aa-bd9d-43fc-b90a-c1e1a56e3123.jpeg",
        fullSize: "2023/ad1a32aa-bd9d-43fc-b90a-c1e1a56e3123.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/af6dc2ab-8590-4900-8bcc-40c00bfb97ea.jpeg",
        fullSize: "2023/af6dc2ab-8590-4900-8bcc-40c00bfb97ea.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/b53a2ef7-bde0-4999-8baa-5d465a10a6fc.jpeg",
        fullSize: "2023/b53a2ef7-bde0-4999-8baa-5d465a10a6fc.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/b629e25f-a862-4017-b707-48b1ed95a3ef.jpeg",
        fullSize: "2023/b629e25f-a862-4017-b707-48b1ed95a3ef.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/b9975902-81da-4dc2-8acc-0258daeb8d3a.jpeg",
        fullSize: "2023/b9975902-81da-4dc2-8acc-0258daeb8d3a.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/bbcaef0d-47c5-4b36-b7fb-d2d1b9e88433.jpeg",
        fullSize: "2023/bbcaef0d-47c5-4b36-b7fb-d2d1b9e88433.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/bce87f69-216e-4fb8-85ff-8b09264d1b67.jpeg",
        fullSize: "2023/bce87f69-216e-4fb8-85ff-8b09264d1b67.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/c0b318ca-dca1-467b-95b5-68a6f94d0bed.jpeg",
        fullSize: "2023/c0b318ca-dca1-467b-95b5-68a6f94d0bed.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/c0c1947f-cedf-414d-b7a9-384af9e3ab39.jpeg",
        fullSize: "2023/c0c1947f-cedf-414d-b7a9-384af9e3ab39.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/c146bcec-39f8-49d0-88f3-e5405a3f5c42.jpeg",
        fullSize: "2023/c146bcec-39f8-49d0-88f3-e5405a3f5c42.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/ced66c52-cec5-447a-bf07-7ff4bacc14b9.jpeg",
        fullSize: "2023/ced66c52-cec5-447a-bf07-7ff4bacc14b9.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/d6c5bd4d-970d-41ce-ab3c-a19851fdcb22.jpeg",
        fullSize: "2023/d6c5bd4d-970d-41ce-ab3c-a19851fdcb22.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/d316d4f4-e201-4b17-ad64-825f1df950e8.jpeg",
        fullSize: "2023/d316d4f4-e201-4b17-ad64-825f1df950e8.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/df68092e-b595-4796-9100-3187773bd5c7.jpeg",
        fullSize: "2023/df68092e-b595-4796-9100-3187773bd5c7.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/dfa502ea-a161-4e97-b463-003ab3b68205.jpeg",
        fullSize: "2023/dfa502ea-a161-4e97-b463-003ab3b68205.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/e65ad196-d0a7-452e-9d49-73d9f8205511.jpeg",
        fullSize: "2023/e65ad196-d0a7-452e-9d49-73d9f8205511.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/ea7ef172-af92-40bb-a22d-03b950099484.jpeg",
        fullSize: "2023/ea7ef172-af92-40bb-a22d-03b950099484.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/eaebd3cb-2fb4-4176-b878-116bac4f0ca1.jpeg",
        fullSize: "2023/eaebd3cb-2fb4-4176-b878-116bac4f0ca1.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/eed6b658-c277-40f4-93c8-e6568854c46c.jpeg",
        fullSize: "2023/eed6b658-c277-40f4-93c8-e6568854c46c.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/fb7d4b21-3031-4a70-8e86-1ac57622b744.jpeg",
        fullSize: "2023/fb7d4b21-3031-4a70-8e86-1ac57622b744.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/705086448.298091.jpeg",
        fullSize: "2023/705086448.298091.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9127.jpeg",
        fullSize: "2023/IMG_9127.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9128.jpeg",
        fullSize: "2023/IMG_9128.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9129.jpeg",
        fullSize: "2023/IMG_9129.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9130.jpeg",
        fullSize: "2023/IMG_9130.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9131.jpeg",
        fullSize: "2023/IMG_9131.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9133.jpeg",
        fullSize: "2023/IMG_9133.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9135.jpeg",
        fullSize: "2023/IMG_9135.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9137.jpeg",
        fullSize: "2023/IMG_9137.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9139.jpeg",
        fullSize: "2023/IMG_9139.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9141.jpeg",
        fullSize: "2023/IMG_9141.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9143.jpeg",
        fullSize: "2023/IMG_9143.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/IMG_9145.jpeg",
        fullSize: "2023/IMG_9145.jpeg"
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
