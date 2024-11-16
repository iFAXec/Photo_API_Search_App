let mykey = config.MY_KEY;
console.log(mykey)


const giphyList = document.getElementById('gif-list')

const fetchGiphy = async () => {

    const gifDiv = document.createElement('div')
    try {

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${mykey}&q=superman&limit=10`, {
            method: 'GET',
        });
        if (!response.ok) {
            throw new Error(`HTTP error:${response.status}`)
        }

        const giphyData = await response.json();
        console.log("🚀 ~ giphyData:", giphyData);


        giphyData.data.forEach(gif => {

            gifDiv.innerHTML += `
            <img src= ${gif.images.fixed_width.url} alt= 'gifs'>
        `
        });

        giphyList.appendChild(gifDiv)


    } catch (error) {
        console.error('Error fetching photos:', error)
    }
}
fetchGiphy();




