let mykey = config.MY_KEY;

const photoList = document.getElementById('photo-list')
console.log("🚀 ~ photoList:", photoList);



const fetchPhotos = async () => {
    const token = 'your-auth-token';

    const response = await fetch('https://api.pexels.com/v1/search?query=nature&per_page=1', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${mykey}`,
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    return data;
}