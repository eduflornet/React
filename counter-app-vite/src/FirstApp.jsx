
// es correcto dejarlo afuera del scope
const newMessage = {
  message: 'Hola Mundo',
  title: 'Edu'
}

// se recomienda que se coloque fuera del functional component
const getResult = (a,b) =>{
  return a * b;
}

export const FirstApp = () => {

  return (
    (
      <>
        <h1>{getResult(2,5)}</h1>

        {/*
          comentario en jsx
          <code>{JSON.stringify(newMessage)}</code>
        */}
    
        <h2>Sustitulo</h2>
      </>
    )

  )

}


