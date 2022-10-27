//Creamos una variable que va a solicitar una dependencia
const axios = requiere ('axios');

//La función saludar toma un parámetro (name) que devuelve la concatenación de la palabra Hello y 
//un nombre que se este pasando.
const greet = name => 'Hello' + name;

//Se crea una función que devuelve una lista de usuarios, pedida desde otro servidor (petición  HTTP)
//La lista se puede obtener desde un archivo local, una BD, un servidor o API
//Jsonplaceholder es una página que devuelve datos de prueba
const users = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
//Solicitamos solo los datos de nuestro interes
    return res.data;
}
//Cuando devuelva la lista, se mostrara por consola solo la respuesta que se solicita
//users().then(res => console.log(res))

//Vamos a exportar las funciones
module.exports = {
    greet,
    users
}