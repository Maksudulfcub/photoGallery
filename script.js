function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

function displayPhotos(photos) {
    const photoContainer = document.getElementById('photo-container');
    for (const photo of photos) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>${photo.title}</h4>
            <img src="${photo.url}" alt="">
        `;
        photoContainer.appendChild(div);
    }
}

loadPhotos()