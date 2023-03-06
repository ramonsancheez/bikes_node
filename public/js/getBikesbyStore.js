async function getBikesbyStore(){
    
    const bikeList = document.getElementById('bike-list');
    const storeSelect = document.getElementById('store-select');
    const selectedOption = storeSelect.options[storeSelect.selectedIndex];
    console.log(selectedOption);
    const selectedValue = selectedOption.value;
    console.log(selectedValue);

    await fetch(`http://localhost:3000/store/${storeId}/bikes`)
        .then(response => response.json())
        .then(bikes => {
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
      
                    bikeContent.appendChild(bikeTitle);
                    bikeContent.appendChild(bikeInfo);
                    bikeContent.appendChild(bikeButton);
      
                    bikeItem.appendChild(bikePhoto);
                    bikeItem.appendChild(bikeContent);
      
                    bikeList.appendChild(bikeItem);
                }
            })
        })
    
}


