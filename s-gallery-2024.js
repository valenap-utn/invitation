import {initGallery} from "./gallery-utils.js";

// Array con las rutas de las imágenes (miniaturas y originales)
const images = [
    {
        thumbnail: "thumbnails/2024/IMG_7159.jpeg",
        fullSize: "2024/IMG_7159.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7160.jpeg",
        fullSize: "2024/IMG_7160.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7161.jpeg",
        fullSize: "2024/IMG_7161.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7162.jpeg",
        fullSize: "2024/IMG_7162.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7163.jpeg",
        fullSize: "2024/IMG_7163.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7164.jpeg",
        fullSize: "2024/IMG_7164.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7165.jpeg",
        fullSize: "2024/IMG_7165.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7166.jpeg",
        fullSize: "2024/IMG_7166.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7167.jpeg",
        fullSize: "2024/IMG_7167.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7168.jpeg",
        fullSize: "2024/IMG_7168.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7169.jpeg",
        fullSize: "2024/IMG_7169.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7170.jpeg",
        fullSize: "2024/IMG_7170.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7171.jpeg",
        fullSize: "2024/IMG_7171.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7172.jpeg",
        fullSize: "2024/IMG_7172.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7173.jpeg",
        fullSize: "2024/IMG_7173.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7174.jpeg",
        fullSize: "2024/IMG_7174.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7175.jpeg",
        fullSize: "2024/IMG_7175.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7176.jpeg",
        fullSize: "2024/IMG_7176.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7177.jpeg",
        fullSize: "2024/IMG_7177.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7178.jpeg",
        fullSize: "2024/IMG_7178.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7179.jpeg",
        fullSize: "2024/IMG_7179.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7180.jpeg",
        fullSize: "2024/IMG_7180.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7181.jpeg",
        fullSize: "2024/IMG_7181.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7182.jpeg",
        fullSize: "2024/IMG_7182.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7183.jpeg",
        fullSize: "2024/IMG_7183.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7184.jpeg",
        fullSize: "2024/IMG_7184.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7185.jpeg",
        fullSize: "2024/IMG_7185.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7186.jpeg",
        fullSize: "2024/IMG_7186.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7187.jpeg",
        fullSize: "2024/IMG_7187.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7188.jpeg",
        fullSize: "2024/IMG_7188.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7189.jpeg",
        fullSize: "2024/IMG_7189.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7190.jpeg",
        fullSize: "2024/IMG_7190.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7191.jpeg",
        fullSize: "2024/IMG_7191.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7192.jpeg",
        fullSize: "2024/IMG_7192.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7193.jpeg",
        fullSize: "2024/IMG_7193.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7194.jpeg",
        fullSize: "2024/IMG_7194.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7195.jpeg",
        fullSize: "2024/IMG_7195.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7196.jpeg",
        fullSize: "2024/IMG_7196.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7197.jpeg",
        fullSize: "2024/IMG_7197.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7198.jpeg",
        fullSize: "2024/IMG_7198.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7199.jpeg",
        fullSize: "2024/IMG_7199.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7200.jpeg",
        fullSize: "2024/IMG_7200.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7201.jpeg",
        fullSize: "2024/IMG_7201.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7202.jpeg",
        fullSize: "2024/IMG_7202.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7203.jpeg",
        fullSize: "2024/IMG_7203.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7204.jpeg",
        fullSize: "2024/IMG_7204.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7205.jpeg",
        fullSize: "2024/IMG_7205.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7206.jpeg",
        fullSize: "2024/IMG_7206.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7207.jpeg",
        fullSize: "2024/IMG_7207.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7208.jpeg",
        fullSize: "2024/IMG_7208.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7209.jpeg",
        fullSize: "2024/IMG_7209.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7210.jpeg",
        fullSize: "2024/IMG_7210.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7211.jpeg",
        fullSize: "2024/IMG_7211.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7212.jpeg",
        fullSize: "2024/IMG_7212.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7213.jpeg",
        fullSize: "2024/IMG_7213.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7214.jpeg",
        fullSize: "2024/IMG_7214.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7215.jpeg",
        fullSize: "2024/IMG_7215.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7216.jpeg",
        fullSize: "2024/IMG_7216.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7217.jpeg",
        fullSize: "2024/IMG_7217.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7218.jpeg",
        fullSize: "2024/IMG_7218.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7219.jpeg",
        fullSize: "2024/IMG_7219.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7220.jpeg",
        fullSize: "2024/IMG_7220.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7221.jpeg",
        fullSize: "2024/IMG_7221.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7222.jpeg",
        fullSize: "2024/IMG_7222.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7223.jpeg",
        fullSize: "2024/IMG_7223.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7224.jpeg",
        fullSize: "2024/IMG_7224.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7227.jpeg",
        fullSize: "2024/IMG_7227.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7228.jpeg",
        fullSize: "2024/IMG_7228.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7229.jpeg",
        fullSize: "2024/IMG_7229.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7230.jpeg",
        fullSize: "2024/IMG_7230.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7231.jpeg",
        fullSize: "2024/IMG_7231.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7232.jpeg",
        fullSize: "2024/IMG_7232.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7233.jpeg",
        fullSize: "2024/IMG_7233.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7234.jpeg",
        fullSize: "2024/IMG_7234.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7235.jpeg",
        fullSize: "2024/IMG_7235.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7236.jpeg",
        fullSize: "2024/IMG_7236.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7238.jpeg",
        fullSize: "2024/IMG_7238.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7239.jpeg",
        fullSize: "2024/IMG_7239.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7240.jpeg",
        fullSize: "2024/IMG_7240.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7243.jpeg",
        fullSize: "2024/IMG_7243.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7244.jpeg",
        fullSize: "2024/IMG_7244.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7245.jpeg",
        fullSize: "2024/IMG_7245.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7246.jpeg",
        fullSize: "2024/IMG_7246.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7247.jpeg",
        fullSize: "2024/IMG_7247.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7248.jpeg",
        fullSize: "2024/IMG_7248.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7249.jpeg",
        fullSize: "2024/IMG_7249.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7250.jpeg",
        fullSize: "2024/IMG_7250.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7251.jpeg",
        fullSize: "2024/IMG_7251.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7252.jpeg",
        fullSize: "2024/IMG_7252.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7253.jpeg",
        fullSize: "2024/IMG_7253.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7254.jpeg",
        fullSize: "2024/IMG_7254.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7255.jpeg",
        fullSize: "2024/IMG_7255.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7256.jpeg",
        fullSize: "2024/IMG_7256.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7257.jpeg",
        fullSize: "2024/IMG_7257.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7258.jpeg",
        fullSize: "2024/IMG_7258.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7259.jpeg",
        fullSize: "2024/IMG_7259.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7260.jpeg",
        fullSize: "2024/IMG_7260.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7261.jpeg",
        fullSize: "2024/IMG_7261.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7262.jpeg",
        fullSize: "2024/IMG_7262.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7263.jpeg",
        fullSize: "2024/IMG_7263.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7264.jpeg",
        fullSize: "2024/IMG_7264.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7265.jpeg",
        fullSize: "2024/IMG_7265.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7266.jpeg",
        fullSize: "2024/IMG_7266.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7267.jpeg",
        fullSize: "2024/IMG_7267.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7268.jpeg",
        fullSize: "2024/IMG_7268.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7269.jpeg",
        fullSize: "2024/IMG_7269.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7270.jpeg",
        fullSize: "2024/IMG_7270.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7271.jpeg",
        fullSize: "2024/IMG_7271.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7273.jpeg",
        fullSize: "2024/IMG_7273.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7274.jpeg",
        fullSize: "2024/IMG_7274.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7272.jpeg",
        fullSize: "2024/IMG_7272.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7275.jpeg",
        fullSize: "2024/IMG_7275.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7276.jpeg",
        fullSize: "2024/IMG_7276.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7277.jpeg",
        fullSize: "2024/IMG_7277.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7278.jpeg",
        fullSize: "2024/IMG_7278.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7279.jpeg",
        fullSize: "2024/IMG_7279.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7280.jpeg",
        fullSize: "2024/IMG_7280.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7281.jpeg",
        fullSize: "2024/IMG_7281.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7282.jpeg",
        fullSize: "2024/IMG_7282.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7283.jpeg",
        fullSize: "2024/IMG_7283.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7284.jpeg",
        fullSize: "2024/IMG_7284.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7285.jpeg",
        fullSize: "2024/IMG_7285.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7286.jpeg",
        fullSize: "2024/IMG_7286.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7287.jpeg",
        fullSize: "2024/IMG_7287.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7288.jpeg",
        fullSize: "2024/IMG_7288.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7289.jpeg",
        fullSize: "2024/IMG_7289.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7290.jpeg",
        fullSize: "2024/IMG_7290.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7291.jpeg",
        fullSize: "2024/IMG_7291.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7292.jpeg",
        fullSize: "2024/IMG_7292.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7293.jpeg",
        fullSize: "2024/IMG_7293.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7294.jpeg",
        fullSize: "2024/IMG_7294.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7295.jpeg",
        fullSize: "2024/IMG_7295.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7296.jpeg",
        fullSize: "2024/IMG_7296.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7297.jpeg",
        fullSize: "2024/IMG_7297.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7298.jpeg",
        fullSize: "2024/IMG_7298.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7299.jpeg",
        fullSize: "2024/IMG_7299.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7300.jpeg",
        fullSize: "2024/IMG_7300.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7301.jpeg",
        fullSize: "2024/IMG_7301.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7302.jpeg",
        fullSize: "2024/IMG_7302.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7303.jpeg",
        fullSize: "2024/IMG_7303.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7304.jpeg",
        fullSize: "2024/IMG_7304.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7305.jpeg",
        fullSize: "2024/IMG_7305.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7306.jpeg",
        fullSize: "2024/IMG_7306.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7307.jpeg",
        fullSize: "2024/IMG_7307.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7308.jpeg",
        fullSize: "2024/IMG_7308.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7309.jpeg",
        fullSize: "2024/IMG_7309.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7310.jpeg",
        fullSize: "2024/IMG_7310.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7311.jpeg",
        fullSize: "2024/IMG_7311.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7312.jpeg",
        fullSize: "2024/IMG_7312.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7313.jpeg",
        fullSize: "2024/IMG_7313.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7314.jpeg",
        fullSize: "2024/IMG_7314.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7315.jpeg",
        fullSize: "2024/IMG_7316.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7316.jpeg",
        fullSize: "2024/IMG_7316.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7317.jpeg",
        fullSize: "2024/IMG_7317.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7318.jpeg",
        fullSize: "2024/IMG_7318.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7320.jpeg",
        fullSize: "2024/IMG_7320.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7321.jpeg",
        fullSize: "2024/IMG_7321.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7323.jpeg",
        fullSize: "2024/IMG_7323.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7324.jpeg",
        fullSize: "2024/IMG_7324.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7325.jpeg",
        fullSize: "2024/IMG_7325.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7326.jpeg",
        fullSize: "2024/IMG_7326.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7327.jpeg",
        fullSize: "2024/IMG_7327.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7328.jpeg",
        fullSize: "2024/IMG_7328.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7329.jpeg",
        fullSize: "2024/IMG_7329.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7330.jpeg",
        fullSize: "2024/IMG_7330.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7331.jpeg",
        fullSize: "2024/IMG_7331.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7332.jpeg",
        fullSize: "2024/IMG_7332.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7334.jpeg",
        fullSize: "2024/IMG_7334.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7335.jpeg",
        fullSize: "2024/IMG_7335.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7336.jpeg",
        fullSize: "2024/IMG_7336.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7337.jpeg",
        fullSize: "2024/IMG_7337.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7338.jpeg",
        fullSize: "2024/IMG_7338.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7339.jpeg",
        fullSize: "2024/IMG_7339.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7340.jpeg",
        fullSize: "2024/IMG_7340.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7341.jpeg",
        fullSize: "2024/IMG_7341.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7342.jpeg",
        fullSize: "2024/IMG_7342.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7343.jpeg",
        fullSize: "2024/IMG_7343.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7344.jpeg",
        fullSize: "2024/IMG_7344.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7345.jpeg",
        fullSize: "2024/IMG_7345.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7346.jpeg",
        fullSize: "2024/IMG_7346.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7347.jpeg",
        fullSize: "2024/IMG_7347.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7348.jpeg",
        fullSize: "2024/IMG_7348.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7349.jpeg",
        fullSize: "2024/IMG_7349.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7350.jpeg",
        fullSize: "2024/IMG_7350.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7351.jpeg",
        fullSize: "2024/IMG_7351.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7352.jpeg",
        fullSize: "2024/IMG_7352.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7353.jpeg",
        fullSize: "2024/IMG_7353.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7354.jpeg",
        fullSize: "2024/IMG_7354.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7355.jpeg",
        fullSize: "2024/IMG_7355.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7356.jpeg",
        fullSize: "2024/IMG_7356.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7357.jpeg",
        fullSize: "2024/IMG_7357.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7358.jpeg",
        fullSize: "2024/IMG_7358.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7359.jpeg",
        fullSize: "2024/IMG_7359.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7360.jpeg",
        fullSize: "2024/IMG_7360.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7361.jpeg",
        fullSize: "2024/IMG_7361.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7362.jpeg",
        fullSize: "2024/IMG_7362.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7363.jpeg",
        fullSize: "2024/IMG_7363.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7364.jpeg",
        fullSize: "2024/IMG_7364.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7365.jpeg",
        fullSize: "2024/IMG_7365.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7366.jpeg",
        fullSize: "2024/IMG_7366.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7367.jpeg",
        fullSize: "2024/IMG_7367.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7368.jpeg",
        fullSize: "2024/IMG_7368.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7369.jpeg",
        fullSize: "2024/IMG_7369.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7370.jpeg",
        fullSize: "2024/IMG_7370.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7371.jpeg",
        fullSize: "2024/IMG_7371.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7372.jpeg",
        fullSize: "2024/IMG_7372.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7373.jpeg",
        fullSize: "2024/IMG_7373.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7374.jpeg",
        fullSize: "2024/IMG_7374.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7375.jpeg",
        fullSize: "2024/IMG_7375.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7376.jpeg",
        fullSize: "2024/IMG_7376.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7377.jpeg",
        fullSize: "2024/IMG_7377.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7378.jpeg",
        fullSize: "2024/IMG_7378.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7379.jpeg",
        fullSize: "2024/IMG_7379.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7380.jpeg",
        fullSize: "2024/IMG_7380.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7381.jpeg",
        fullSize: "2024/IMG_7381.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7382.jpeg",
        fullSize: "2024/IMG_7382.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7383.jpeg",
        fullSize: "2024/IMG_7383.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7384.jpeg",
        fullSize: "2024/IMG_7384.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7386.jpeg",
        fullSize: "2024/IMG_7386.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7432.jpeg",
        fullSize: "2024/IMG_7432.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7433.jpeg",
        fullSize: "2024/IMG_7433.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_7530.jpeg",
        fullSize: "2024/IMG_7530.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/0bbea947-686d-419d-a3ec-109bb3d2ba3c.jpeg",
        fullSize: "2024/0bbea947-686d-419d-a3ec-109bb3d2ba3c.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/0cb84fcb-dae5-42fc-89a0-eee590dd902b.jpeg",
        fullSize: "2024/0cb84fcb-dae5-42fc-89a0-eee590dd902b.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/0fab5b30-ef2e-4a4e-a325-230dbc20b08b.jpeg",
        fullSize: "2024/0fab5b30-ef2e-4a4e-a325-230dbc20b08b.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/1f2de230-28a6-45d5-993f-6939414f7066.jpeg",
        fullSize: "2024/1f2de230-28a6-45d5-993f-6939414f7066.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/2a666705-de01-4b63-80a9-36d3f35fd262.jpeg",
        fullSize: "2024/2a666705-de01-4b63-80a9-36d3f35fd262.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/2ede30fa-dfab-4b58-b851-7439fe92e178.jpeg",
        fullSize: "2024/2ede30fa-dfab-4b58-b851-7439fe92e178.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/4b1c43ae-6625-48d7-b7af-d8173cf375e5.jpeg",
        fullSize: "2024/4b1c43ae-6625-48d7-b7af-d8173cf375e5.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/5e7bda50-3b50-4376-90d2-08a7d0adcbe7.jpeg",
        fullSize: "2024/5e7bda50-3b50-4376-90d2-08a7d0adcbe7.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/6b9bba90-2511-44cd-ab05-fc8e47fe8041.jpeg",
        fullSize: "2024/6b9bba90-2511-44cd-ab05-fc8e47fe8041.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/7ede33a1-539c-40b5-ba24-6f469bc03a8c.jpeg",
        fullSize: "2024/7ede33a1-539c-40b5-ba24-6f469bc03a8c.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/8b15425e-c1dc-4826-9e45-a8ab6831b0f6.jpeg",
        fullSize: "2024/8b15425e-c1dc-4826-9e45-a8ab6831b0f6.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/8c3de8d0-5b54-4a69-ae78-253b8da69c40.jpeg",
        fullSize: "2024/8c3de8d0-5b54-4a69-ae78-253b8da69c40.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/15d06afa-6935-4a64-84bc-339a2da01c5e.jpeg",
        fullSize: "2024/15d06afa-6935-4a64-84bc-339a2da01c5e.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/17aedf2c-4c00-4fdc-91d0-2e81c988cb2f.jpeg",
        fullSize: "2024/17aedf2c-4c00-4fdc-91d0-2e81c988cb2f.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/38eeb00e-59d9-45b5-98ed-f14ae817314c.jpeg",
        fullSize: "2024/38eeb00e-59d9-45b5-98ed-f14ae817314c.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/56ef0c53-7dea-45bd-83a4-e3827a6ec141.jpeg",
        fullSize: "2024/56ef0c53-7dea-45bd-83a4-e3827a6ec141.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/064a7540-5262-4692-b0e6-c07aea5e17d1.jpeg",
        fullSize: "2024/064a7540-5262-4692-b0e6-c07aea5e17d1.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/70eafe51-3c99-496f-92b1-e0e92e192b32.jpeg",
        fullSize: "2024/70eafe51-3c99-496f-92b1-e0e92e192b32.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/74cd63be-b706-4534-bc22-7c5693c6b3c1.jpeg",
        fullSize: "2024/74cd63be-b706-4534-bc22-7c5693c6b3c1.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/083e5b78-47ae-4216-8baf-45bb3a63fd0e.jpeg",
        fullSize: "2024/083e5b78-47ae-4216-8baf-45bb3a63fd0e.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/85dac703-770a-44ca-a16c-2616ac848cc8.jpeg",
        fullSize: "2024/85dac703-770a-44ca-a16c-2616ac848cc8.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/253c58c9-c192-46ec-9865-795304ae7229.jpeg",
        fullSize: "2024/253c58c9-c192-46ec-9865-795304ae7229.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/528e1c44-ff38-41f1-9304-95532772ff44.jpeg",
        fullSize: "2024/528e1c44-ff38-41f1-9304-95532772ff44.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/580db5f6-af55-4ef3-b6b8-225e8c338634.jpeg",
        fullSize: "2024/580db5f6-af55-4ef3-b6b8-225e8c338634.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/773d2b46-29cb-4817-b18e-e9768c168217.jpeg",
        fullSize: "2024/773d2b46-29cb-4817-b18e-e9768c168217.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/960d524d-a1b3-4ffb-97e0-3a4fafc3b54f.jpeg",
        fullSize: "2024/960d524d-a1b3-4ffb-97e0-3a4fafc3b54f.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/7757a73d-1773-4717-bd4f-6642032d4379.jpeg",
        fullSize: "2024/7757a73d-1773-4717-bd4f-6642032d4379.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/136243a1-2cca-479e-9555-dd29412377d7.jpeg",
        fullSize: "2024/136243a1-2cca-479e-9555-dd29412377d7.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/461090e1-ea89-494a-a649-5b208b77769a.jpeg",
        fullSize: "2024/461090e1-ea89-494a-a649-5b208b77769a.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/992571de-07e1-4242-ada1-22cbf5a1a993.jpeg",
        fullSize: "2024/992571de-07e1-4242-ada1-22cbf5a1a993.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/1317534e-5fca-463c-a93a-51c00abd67f7.jpeg",
        fullSize: "2024/1317534e-5fca-463c-a93a-51c00abd67f7.jpeg"
    },
    {
        thumbnail: "thumbnails/2023/a698c51a-09fc-445a-aab5-91576d453b4c.jpeg",
        fullSize: "2023/a698c51a-09fc-445a-aab5-91576d453b4c.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/4968783a-ac47-400e-93e8-91f35879e199.jpeg",
        fullSize: "2024/4968783a-ac47-400e-93e8-91f35879e199.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/6438303e-15b9-4cf8-9158-e20cb2430922.jpeg",
        fullSize: "2024/6438303e-15b9-4cf8-9158-e20cb2430922.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/59207400-2d07-4e77-972c-60280cb598b1.jpeg",
        fullSize: "2024/59207400-2d07-4e77-972c-60280cb598b1.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/a3aa3cca-71f8-452d-a794-041aa7d9eeac.jpeg",
        fullSize: "2024/a3aa3cca-71f8-452d-a794-041aa7d9eeac.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/a81fb3d6-162d-4901-8844-858ee5da1092.jpeg",
        fullSize: "2024/a81fb3d6-162d-4901-8844-858ee5da1092.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/ab5abeab-51b3-48d5-91b4-d065a39d686a.jpeg",
        fullSize: "2024/ab5abeab-51b3-48d5-91b4-d065a39d686a.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/accf80cf-80ac-40b0-a37c-bcfa1050808d.jpeg",
        fullSize: "2024/accf80cf-80ac-40b0-a37c-bcfa1050808d.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/aec37232-7830-4d45-afca-8b0c4faed9e0.jpeg",
        fullSize: "2024/aec37232-7830-4d45-afca-8b0c4faed9e0.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/b3d8bf67-82e5-4d0f-b53b-4cd754962b24.jpeg",
        fullSize: "2024/b3d8bf67-82e5-4d0f-b53b-4cd754962b24.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/b79dc1aa-ff58-492a-8d9e-03cebd5dd96e.jpeg",
        fullSize: "2024/b79dc1aa-ff58-492a-8d9e-03cebd5dd96e.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/bcfa7d97-57a4-4bdf-927b-7fa611855a2b.jpeg",
        fullSize: "2024/bcfa7d97-57a4-4bdf-927b-7fa611855a2b.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/be706315-0305-4cd2-a0a9-46f91c058659.jpeg",
        fullSize: "2024/be706315-0305-4cd2-a0a9-46f91c058659.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/c8bf2f81-2fd8-49bf-84df-420ad446d3c6.jpeg",
        fullSize: "2024/c8bf2f81-2fd8-49bf-84df-420ad446d3c6.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/c394d190-77b5-4414-a5ea-7383b9b221a7.jpeg",
        fullSize: "2024/c394d190-77b5-4414-a5ea-7383b9b221a7.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/c750ac8a-d063-49e2-aab0-a341ee86d4ff.jpeg",
        fullSize: "2024/c750ac8a-d063-49e2-aab0-a341ee86d4ff.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/c456019f-b71a-4824-af36-04bd7588dffb.jpeg",
        fullSize: "2024/c456019f-b71a-4824-af36-04bd7588dffb.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/ce1fbf79-6e49-4def-a6ea-7c90ee29f412.jpeg",
        fullSize: "2024/ce1fbf79-6e49-4def-a6ea-7c90ee29f412.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/cff08f54-e983-4263-956d-8bdac3047149.jpeg",
        fullSize: "2024/cff08f54-e983-4263-956d-8bdac3047149.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/d3a66366-cda2-4591-b481-9ec618843cc2.jpeg",
        fullSize: "2024/d3a66366-cda2-4591-b481-9ec618843cc2.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/d46d4b3a-236b-4310-a2f4-698146855cf7.jpeg",
        fullSize: "2024/d46d4b3a-236b-4310-a2f4-698146855cf7.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/d60bfb27-984d-4aba-aabb-716238708bc0.jpeg",
        fullSize: "2024/d60bfb27-984d-4aba-aabb-716238708bc0.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/d107e88b-b1f7-4645-a375-e92b71311368.jpeg",
        fullSize: "2024/d107e88b-b1f7-4645-a375-e92b71311368.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/d8845183-1b30-4e8a-95fd-a18a65572921.jpeg",
        fullSize: "2024/d8845183-1b30-4e8a-95fd-a18a65572921.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/da65724a-c33f-475e-ab40-7a59af8788b5.jpeg",
        fullSize: "2024/da65724a-c33f-475e-ab40-7a59af8788b5.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/dc63a2f3-396c-421b-a977-d2a50aacca52.jpeg",
        fullSize: "2024/dc63a2f3-396c-421b-a977-d2a50aacca52.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/dffcb1a6-5630-4ec2-9aae-12f393406b4a.jpeg",
        fullSize: "2024/dffcb1a6-5630-4ec2-9aae-12f393406b4a.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/e6e55c43-7772-4489-afd1-5b62bb9e8565.jpeg",
        fullSize: "2024/e6e55c43-7772-4489-afd1-5b62bb9e8565.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/e75efe3a-3085-4a6d-98dc-3f9c56eccbae.jpeg",
        fullSize: "2024/e75efe3a-3085-4a6d-98dc-3f9c56eccbae.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/e84dd9c2-daba-48d2-ba8e-2646ead83a54.jpeg",
        fullSize: "2024/e84dd9c2-daba-48d2-ba8e-2646ead83a54.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/e91e5e3b-ccd3-4e15-8f29-5d4a9df773c9.jpeg",
        fullSize: "2024/e91e5e3b-ccd3-4e15-8f29-5d4a9df773c9.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/e666a155-4767-4e3c-94e1-5335d5acb893.jpeg",
        fullSize: "2024/e666a155-4767-4e3c-94e1-5335d5acb893.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/eb1c84bf-6360-4a6c-b26c-d7b3e5d11968.jpeg",
        fullSize: "2024/eb1c84bf-6360-4a6c-b26c-d7b3e5d11968.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/ed6725eb-89a0-492c-a82a-5c3d697b7af4.jpeg",
        fullSize: "2024/ed6725eb-89a0-492c-a82a-5c3d697b7af4.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/efe40650-ee5b-473a-a59a-4e4872df5173.jpeg",
        fullSize: "2024/efe40650-ee5b-473a-a59a-4e4872df5173.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/f44c3c22-25ee-4888-af5f-d280a440c72d.jpeg",
        fullSize: "2024/f44c3c22-25ee-4888-af5f-d280a440c72d.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/f113b25b-b6dc-482e-b658-b9290427c02d.jpeg",
        fullSize: "2024/f113b25b-b6dc-482e-b658-b9290427c02d.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/fa259da9-ae8f-46f5-91c8-03e4e48616ee.jpeg",
        fullSize: "2024/fa259da9-ae8f-46f5-91c8-03e4e48616ee.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/fbf3eef4-65ed-47c2-8a4a-1e2efe0b85cf.jpeg",
        fullSize: "2024/fbf3eef4-65ed-47c2-8a4a-1e2efe0b85cf.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/fcb4c607-9dfa-44ed-9ce1-7d98c8ebaf1e.jpeg",
        fullSize: "2024/fcb4c607-9dfa-44ed-9ce1-7d98c8ebaf1e.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4166.jpeg",
        fullSize: "2024/IMG_4166.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4167.jpeg",
        fullSize: "2024/IMG_4167.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4168.jpeg",
        fullSize: "2024/IMG_4168.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4169.jpeg",
        fullSize: "2024/IMG_4169.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4170.jpeg",
        fullSize: "2024/IMG_4170.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4171.jpeg",
        fullSize: "2024/IMG_4171.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4172.jpeg",
        fullSize: "2024/IMG_4172.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4173.jpeg",
        fullSize: "2024/IMG_4173.jpeg"
    },
    {
        thumbnail: "thumbnails/2024/IMG_4174.jpeg",
        fullSize: "2024/IMG_4174.jpeg"
    }
];

initGallery(images);