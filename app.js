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

        const data = await response.json();
        console.log("🚀 ~ data:", data);
        return data;




    } catch (error) {
        console.error('Error fetching photos:', error)
    }




}

fetchPhotos();




