let mykey = config.MY_KEY;
// console.log(mykey)


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('q');
// console.log("🚀 ~ searchTerm:", searchTerm);


const giphyList = document.getElementById('gif-list')

const fetchGiphy = async () => {


    try {

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${mykey}&q=${searchTerm}&limit=12`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`HTTP error:${response.status}`)
        }

        const giphyData = await response.json();
        // console.log("🚀 ~ giphyData:", giphyData);


        giphyData.data.forEach(gif => {
            const gifDiv = document.createElement('div');
            gifDiv.className = 'each-gif';

            gifDiv.innerHTML = `
            <img src= ${gif.images.fixed_width.url} alt= 'gifs'>
        `
        giphyList.appendChild(gifDiv)
        });

        // console.log(giphyList);


    } catch (error) {
        console.error('Error fetching photos:', error)
    }
}
fetchGiphy();




