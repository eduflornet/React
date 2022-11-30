import PropTypes from "prop-types";

// es correcto dejarlo afuera del scope
const newMessage = {
  message: 'Hola Mundo',
  title: 'Edu'
}

// se recomienda que se coloque fuera del functional component
const getResult = (a,b) =>{
  return a * b;
}

export const FirstApp = ({title, subtitle}) => {
console.log('title ', title);
console.log('subtitle ', subtitle);
  return (
    (
      <>
        {/*
          <h1>{getResult(2,5)}</h1>
        */}
        
        <h1>{title}</h1>

        {/*
          comentario en jsx
          <code>{JSON.stringify(newMessage)}</code>
        */}
    
        <h2>Sustitulo</h2>
      </>
    )

  )

}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  name: 'Edu Flores',
  title : 'No hay titulo',
  subtitle: 'No hay subtitulo'
  
}




