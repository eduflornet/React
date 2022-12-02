import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
     
    test('getHeroeById debe retornar un heroe por ID', () => { 
        
        const id = 1;
        const hero = getHeroeById(id);
        console.log(hero);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    })

    test('getHeroeById NO debe retornar undefined si no existe el ID ', () => { 
        
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);
        // toBeFalsy puede ser null, undefined, false
        expect(hero).toBeFalsy();
    })

    // Tarea
    // getHeroesByOwner

    test('getHeroesByOwner debe retornar un heroe por owner "DC"', () => { 
        
        const owner = 'DC';
        const heroesResult = getHeroesByOwner(owner);
        expect(heroesResult.length).toBe(3);
        expect(heroesResult).toEqual(
            [
                {id: 1,name: 'Batman',owner: 'DC'}, 
                {id: 3, name: 'Superman',owner: 'DC'},
                {id: 4,name: 'Flash',owner: 'DC'}
            ])
        console.log(heroes);
        //expect(heroesResult).toEqual(heroes.filter( (heroe) => heroe.owner === owner)
    })

    test('getHeroesByOwner debe retornar un heroe por owner "Marvel"', () => { 
        
        const owner = 'Marvel';
        const heroesResult = getHeroesByOwner(owner);
        expect(heroesResult.length).toBe(2);
        console.log(heroesResult);
        expect(heroesResult).toEqual
        (
            [
            {id: 2,name: 'Spiderman',owner: 'Marvel'},
            {id: 5,name: 'Wolverine',owner: 'Marvel'}  
            ]
        );
    })

    test('getHeroesByOwner debe retornar undefined', () => { 
        
        const owner = 'EDU';
        const heroesResult = getHeroesByOwner(owner);
        console.log(heroesResult);
        expect(heroesResult).not.toEqual
        (
            [{id: 1,name: 'Batman',owner: 'DC'}, 
            {id: 3,name: 'Superman',owner: 'DC'},
            {id: 4,name: 'Flash',owner: 'DC'}]
        );
    })

})