import getHeroesById from "./bases/08-import-export";

const getHeroeByIdAsync = (id) => {
    return new Promise ((resolve, reject)=> {
        setTimeout( () => {
            const heroe = getHeroesById(id);
            //console.log('heroe ',heroe);
            // resolve envia el objeto heroe al then de la promise
            
            if(heroe === undefined)
                reject('no se pudo encontrar el heroe');
            else     
                resolve(heroe);
           // console.log(' 2 segundos despues')
        }, 2000 )
    
    });

}

getHeroeByIdAsync(1)
.then(heroe => console.log(heroe))
.catch(err =>  console.warn(err));


/*
promesa.then( (heroe) => {
    console.log('Then de la promesa, recibo objeto heroe atravez del metodo resolve() ', heroe);
})
.catch(err =>  console.warn(err));

*/