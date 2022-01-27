/* 
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
scomparire
passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!
Bonus:
1- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
2- quando il mouse va in hover sulle freccette o sui pallini l'autoplay si interrompe
3 - l'autoplay riparte quando il mouse lascia le freccette o i pallini
*/


var app = new Vue({
    el: "#root",
    data: {
        // creo un contatore per le immagini
        currentImg: 0,
        // creo un array di oggetti per le immagini
        images: [{
                img: "img/image1.jpg",
            },
            {
                img: "img/image2.jpg",
            },
            {
                img: "img/image3.jpg",
            },
            {
                img: "img/image4.jpg",
            },
        ],
    },
    methods: {
        // assegno a ogni immagine l'indice che ho dichiarato prima
        actualImg(i) {
            this.currentImg = i;
        },

        // creo una funzione che associ l'immagine all'indice , così da poter avere la singola immagine nello schermo
        isActive(i) {
            if (this.currentImg === i) {
                return true;
            }
            return false;
        },
        //creo una funzione che mi riporti all'immagine successiva
        followingImg() {
            if (this.currentImg === this.images.length - 1) {
                this.currentImg = 0;
            } else {
                this.currentImg++;
            }
        },
        // creo una funzione che mi porti all'immagine precedente
        previousImg() {
            if (this.currentImg === 0) {
                this.currentImg = this.images.length - 1;
            } else {
                this.currentImg--;
            }
        },
    },
})