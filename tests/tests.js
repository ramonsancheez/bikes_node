const request = require('supertest');
const app = require('../index.js');

// 201
  test('creando bici correctamente', async (t) => {
    const response = await request(app)
      .post('/bikes')
      .send({name:"name", category:"category", brand: "brand", model: "model", price: 1, store:"store"})
      .expect(201);
    
    t.is(response.body.error, 'Creado correctamente');
  });

  test('creando store correcatmente', async (t) => {
    const response = await request(app)
      .post('/store')
      .send({name:"name", address:"adress"})
      .expect(201);
    
    t.is(response.body.error, 'Se creó la tienda correctamente');
  });

//500
  test('creando bici con un valor de precio incorrecto', async (t) => {
    const response = await request(app)
      .post('/bikes')
      .send({name:"name", category:"category", brand: "brand", model: "model", price: "price", store:"store"})
      .expect(500);
    
    t.is(response.body.error, 'El precio debería ser un numero');
  });

  test('creando bici con un schema incorrecto (falta un atributo)', async (t) => {
    const response = await request(app)
      .post('/bikes')
      .send({name:"name", category:"category", model: "model", price: "price", store:"store"})
      .expect(500);
    
    t.is(response.body.error, 'Falta un atributo');
  });