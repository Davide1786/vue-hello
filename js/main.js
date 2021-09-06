// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Vue.config.devtools =  true;

const app = new Vue({
   el: '#root',
   data: {
      message: 'BOOLEAN - Classe #39!',
      benvenuto: 'Buongiorno a tutti',
      diego: 'img/Diego.jpg'
   }
 })


//  var icon = L.icon({
//    iconUrl: require('./img/Diego.jpg'),   // was iconUrl: './assets/img.png',
// //  iconUrl: require('@/assets/img.png'), // use @ as alternative, depending on the path
//    // ...
// });