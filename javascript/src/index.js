const getImagenPromesa = () => {
    return new Promise( (resolve, reject) => resolve('https://ajs.com'))
    }

getImagenPromesa().then('getImagenPromesa', console.log());

const getImage = async() => {
    const apiKey = 'IioLkIg6RxCUWJF62rmUEtRJm9Vo9zg8';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    console.log(data);

    const {url} = data.images.original;
    console.log('url', url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImage()
.then(console.log())



