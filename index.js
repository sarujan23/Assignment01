//Q6
const carouselImage = document.querySelector(".carousel-image");

let currentImageIndex = 0;
const images = ["/section4/cosmetic moco.jpg", "/1st.jpg",  ];

setInterval(function() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  carouselImage.src = images[currentImageIndex];

}, 9000);


//error messages
