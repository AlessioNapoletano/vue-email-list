/*
//INSERISCO NELL'ELEMENTO HEADER, L'ELEMENTO CREATO IN JS h1
const header = document.querySelector("header");
const h1 = document.createElement("h1");
h1.classList.add("text-center")
h1.innerHTML = "Lista di Mail";
header.append(h1);

//INSERISCO NELL'ELEMENTO BODY, L'ELEMENTO CREATO IN JS unOrderList
const body = document.querySelector("body");
const unOrderList = document.createElement("ul");
body.append(unOrderList);

//LITERAL array (lista di mail), VARIABILE result (in cui salviamo il risultato della chiamata axios)
const mailList = [];
let result;

for (i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(function (response) {
        result = response.data.response;
        mailList.push(result);

        const listItem = document.createElement("li");
        listItem.innerHTML = result;
        unOrderList.append(listItem);

    });
}

console.log(mailList);
*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Lista di Mail",
            randomMail: [],
        }
    },

    methods: {
        getRandomMail: function() {
            //let result = [];
            for (i = 0; i < 10; i++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then( (response) => {                    
                    //result.push(response.data.response);
                    this.randomMail.push(response.data.response);
                     
                })
            }
            //return result;
        }
    },

    created() {
        /*
        -PROVA: CASO DI UTILIZZO CON FUNZIONE CHE RITORNA UN ARRAY DI STRINGHE
        this.randomMail = this.getRandomMail();
        console.log(this.randomMail)
        */
       this.getRandomMail();


    }
}).mount('#app')
