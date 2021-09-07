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

 function myFunction() {
   app.diego = '';
   app.diego = "https://www.open.online/wp-content/uploads/2020/11/Screenshot-from-2020-11-26-023509.png";
}

// function myFunction() {
//    app.diego = '';
//    app.diego = "img/Diego.jpg";
// }
