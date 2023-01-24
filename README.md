# **Proyecto NODE-EXPRESS**

## **About**

The project is about a bike finder by shops. That is, create bikes that are linked to a specific store (one to many), and you can change the availability of bikes to know which ones are rented and which ones are not. Also, it is possible to remove all bikes that are linked to the store that we want to delete. You can create bikes, shops, upgrade your values. . .



-------
## **Start**
- Install dependencies: `npm install`

- Execute project: `npm run start`

-------

## **Technologies used**

| Characteristics    | Technologies     |
| ------------------ | ---------------- |
| Languages          | JavaScript       |
| Framework          | Express          |
| Data base      | MongoDb          |
| Tests              | SuperTest, Jes   |
| HTTP Tools         | PostMan - Rest Client|

--------------

## **Methodology**
For this project I have used the incremental methodology, which tries to write the code progressively. I've always worked on the **main** branch, and I was making commits as I solved user stories. Other user stories include:

- Connect to the database.
- Create a store.
- Create a bike.
- Update some store or bike value.
- When deleting a store, delete all bikes linked to the store.
- Get all bikes with true/false availability from X shop.

----------

## **Postman and REST-Client**
I use both [postman](https://www.postman.com/downloads/) and **rest-client** to test and develop each endpoint.

Rest-Client allows you, by creating a . http file, to send http requests and view their result. In my case it is the file: *requests. http*.


### POSTMAN:

 - ##### **POST**:
 ![create](/storage/imgs/createPostman.png)

  - ##### **GET**:
 ![read](/storage/imgs/readPostman.png)

  - ##### **PUT**:
 ![update](/storage/imgs/updatePostman.png)

  - ##### **DELETE**:
 ![delete](/storage/imgs/deletePostman.png)


### REST-CLIENT:

 - ##### **POST**:
 ![create](/storage/imgs/createREST.png)

  - ##### **GET**:
 ![read](/storage/imgs/readRest.png)

  - ##### **PUT**:
 ![update](/storage/imgs/updateRest.png)

  - ##### **DELETE**:
 ![delete](/storage/imgs/deleteRest.png)

--------------

## **Directory structure**
 ![estructuraDirectorios](/storage/imgs/estructuraDirectorios.png)


## **Case of Use**
1. In the file */availability. repository. js* I create a global variable:
```js
const isAvailable = true
```

This variable is used in the *getByAvailability* function to get the type of availability we want to get, the available (true) or the non-available (false).

Then, I export this variable so that it can be used anywhere in the api, in this case, in the file */availability. controllers. js*, where I use it to display on screen what kind of availability is being displayed.

2. Also, I use logical structures on almost all drivers:
```js
try{
    //code
} catch (err) {
    //code
}
```

```js
if (condición){
    //code
} else{
    //code
}
```

3. The **. length** function in the */availability.controllers.js* controller and the **arrow function ( *=>{}* )**, that's used in the middleware */loggerMiddleware.js*