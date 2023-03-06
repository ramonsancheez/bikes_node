async function reserveBike(boton){
  const botonId = boton.id;
  const respuesta = await fetch(`http://localhost:3000/availability/${botonId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      availability: false
    })
  });

  if (respuesta.ok) {
    console.log('Bicicleta reservada');
  } else {
    console.error('No se pudo reservar la bicicleta');
  }
}

function setupButtons(){
  const reservarBotones = document.querySelectorAll('.reservar');
  reservarBotones.forEach((boton) => {
    console.log('adios');
    boton.addEventListener('click',
      reserveBike.bind(null, boton)
    )
  });
}