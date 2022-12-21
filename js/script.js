const header = document.querySelector("h1");
header.classList.add("text-center")
header.innerHTML = "Lista di Mail";
const mailList = [];
let result;

for (index = 0; index < 10; index++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(function (response) {
        result = response.data.response;
        mailList.push(result);
       

    });
}

console.log(mailList)