// Array to store image file paths (assumes images are in a folder called 'images')
// Adjust the filenames to match different resolutions of your images
const imagePaths = [];
for (let i = 1; i <= 33; i++) {
  imagePaths.push(`images/${i}.jpg`); // Adjust filenames accordingly
}

// Get the container where images will be inserted
const photoGrid = document.getElementById("photo-grid");

// Loop through the array and create img elements for each image
imagePaths.forEach((path) => {
  const imgElement = document.createElement("img");
  imgElement.src = path;
  imgElement.srcset = `
    images/${path}-small.jpg 500w,  /* Low-resolution version for small screens */
    images/${path}-medium.jpg 1000w, /* Medium-resolution version */
    images/${path}-large.jpg 2000w  /* High-resolution version for larger screens */
  `;
  imgElement.sizes = `(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px`;
  imgElement.alt = `Photo ${path}`;
  photoGrid.appendChild(imgElement);
});
