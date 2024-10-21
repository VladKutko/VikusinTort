// Array to store image file paths (assumes images are in a folder called 'images')
const imagePaths = [];
const countImage = 26;
for (let i = 1; i <= countImage; i++) {
  imagePaths.push(`images/${i}.jpg`); // Adjust filenames accordingly
}

// Get the container where images will be inserted
const photoGrid = document.getElementById("photo-grid");

// Loop through the array and create img elements for each image
imagePaths.forEach((path) => {
  const imgElement = document.createElement("img");
  imgElement.src = path;
  imgElement.alt = `Photo ${path}`;
  photoGrid.appendChild(imgElement);
});
