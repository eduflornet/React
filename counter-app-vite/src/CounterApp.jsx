import PropTypes from "prop-types";
import { useState } from "react";


export const CounterApp = ( {value}) => {

    // las constantes no se pueden settear, es decir son inmutables
    const [counter, setCounter] = useState(value); 
    /*
    function handleAdd(event) {
        console.log(event)
    }
    */
    const handleAdd = () => {
        //console.log(event)
        setCounter(counter+1);
        console.log('handleAdd ',counter);
    }
    const handleSubstract = () => {
        //console.log(event)
        setCounter(counter-1);
        console.log('handleSubstract ',counter);
    }
    const handleReset = () => {
        //console.log(event)
        setCounter(value);
        console.log('handleReset ',value);
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> {counter}</h2>

        <button onClick={ handleAdd}>
            +1
        </button>

        <button onClick={ handleSubstract}>
            -1
        </button>
        <button onClick={ handleReset}>
            Reset
        </button>
    </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}



