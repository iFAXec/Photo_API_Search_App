let mykey = config.MY_KEY;
// console.log(mykey)


const searchForm = document.getElementById('search-container');
const searchInput = document.getElementsByClassName('search-input')[0];
const giphyList = document.getElementById('gif-list');


const fetchGiphy = async (searchValue) => {
    // console.log(searchValue)

    try {

        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${mykey}&q=${searchValue}&limit=12`, {
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



searchForm.addEventListener('submit', (e) => {

    e.preventDefault();
    const searchValue = searchInput.value.trim();
    // console.log("🚀 ~ searchValue:", searchValue);
    fetchGiphy(searchValue);
    searchInput.value = '';
    giphyList.innerHTML = '';
    
    const newURL = new URL(window.location);
    newURL.searchParams.set('q', searchValue);
    window.history.pushState({}, '', newURL);

});




