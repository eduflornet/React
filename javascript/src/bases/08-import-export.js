//import {heroes} from './data/heroes'

import heroes, {owners} from "../data/heroes";
// heroes es exportacion por defecto
// owners es exportación individual

//console.log('owners: ',owners);

const getHeroesById = (id) => {
    let obj = heroes.find(heroe => heroe.id === id);
  return obj;
};

//console.table('getHeroesById: ', getHeroesById(2));
//console.table('getHeroesById: ', getHeroesById(3));

const getHeroesByOwnerFind = (owner) =>{
    let obj = heroes.find(heroe => heroe.owner === owner);
    return obj;
} 

//console.log('getHeroesByOwnerFind: ',getHeroesByOwnerFind('DC'));

const getHeroesByOwnerFilter = (owner) =>{
  let obj = heroes.filter(heroe => heroe.owner === owner);
  return obj;
} 

//console.log('getHeroesByOwnerFilter: ',getHeroesByOwnerFilter('DC'));

export default getHeroesById;

