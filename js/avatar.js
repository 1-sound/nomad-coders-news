const images = ["0.png", "1.png", "2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const avatarImage = document.createElement("img");

avatarImage.src = `img/${chosenImage}`
avatarImage.id = "avatar"

document.body.appendChild(avatarImage);