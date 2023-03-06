async function getStore(){
    const storeSelect = document.getElementById('store-select');
    await fetch('http://localhost:3000/store')
      .then(response => response.json())
      .then(stores => {
        stores.forEach(store => {
            console.log(store)
            storeSelect.classList.add('tiendas');
            const storeOption = document.createElement('option');
            storeOption.textContent = store.name;
            storeOption.id = store._id;
            storeSelect.appendChild(storeOption);
        });
        })
}



        