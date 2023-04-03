// Función para obtener las bicicletas de una tienda seleccionada
async function getBikesbyStore() {
  const bikeList = document.getElementById('bike-list');
  const selectElement = document.getElementById('select-id');
  const selectedValue = selectElement.value;

  // Limpiar lista de bicicletas
  bikeList.innerHTML = '';

  // Hacer petición al servidor
  const response = await fetch(`http://localhost:3000/store/${selectedValue}/bikes`);
  const bikes = await response.json();

  if (Array.isArray(bikes)) {
    // Si hay bicicletas disponibles, agregarlas a la lista
    bikes.forEach(bike => {
      if (bike.availability) {
        const bikeItem = document.createElement('div');
        bikeItem.classList.add('bike__item');

        const bikePhoto = document.createElement('div');
        bikePhoto.classList.add('bike__photo');

        const bikeImg = document.createElement('img');
        bikeImg.src = 'https://fakeimg.pl/400/';
        bikeImg.alt = 'Bicicleta en venta';

        bikePhoto.appendChild(bikeImg);

        const bikeContent = document.createElement('div');
        bikeContent.classList.add('bike__content');

        const bikeTitle = document.createElement('h2');
        bikeTitle.classList.add('bike__title');
        bikeTitle.textContent = bike.name;

        const bikeInfo = document.createElement('ul');
        bikeInfo.innerHTML = `
          <li class="bike__wyswyg"><strong>Marca:</strong> ${bike.brand}</li>
          <li class="bike__wyswyg"><strong>Modelo:</strong> ${bike.model}</li>
          <li class="bike__wyswyg"><strong>Categoría:</strong> ${bike.category}</li>
          <li class="bike__wyswyg"><strong>Precio:</strong> ${bike.price}</li>
        `;

        const bikeButton = document.createElement('button');
        bikeButton.textContent = 'Reservar';
        bikeButton.value = "reservar"

        bikeContent.appendChild(bikeTitle);
        bikeContent.appendChild(bikeInfo);
        bikeContent.appendChild(bikeButton);

        bikeItem.appendChild(bikePhoto);
        bikeItem.appendChild(bikeContent);

        bikeList.appendChild(bikeItem);
      }
    });
  } else {
    console.error('La respuesta del servidor no es un array:', bikes);
  }
}

// Manejador de eventos para el botón de búsqueda
const searchButton = document.getElementById('fetch-button');
searchButton.addEventListener('click', getBikesbyStore);
