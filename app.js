let mykey = config.MY_KEY;


const photoList = document.getElementById('photo-list')

const fetchPhotos = async () => {

    const photoDiv = document.createElement('div')
    try {

        const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mykey}`,
                'Content-Type': 'application/json'
            }

        });
        if (!response.ok) {
            throw new Error(`HTTP error:${response.status}`)
        }

        const pexelsData = await response.json();
        console.log("🚀 ~ pexelsData:", pexelsData);

        pexelsData.photos.forEach(photo => {
            console.log(photo.src.small)
            photoDiv.innerHTML += `
            <img src= ${photo.src.small} alt= 'photos'>
        `
        });

        photoList.appendChild(photoDiv)


    } catch (error) {
        console.error('Error fetching photos:', error)
    }




}

fetchPhotos();




