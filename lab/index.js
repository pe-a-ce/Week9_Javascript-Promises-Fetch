console.log("HI!")

const list = document.querySelector("ul");
const item = document.querySelector("section");


const getCountryByName = (countryName) => {
fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(response => {
    return response.json();
}).then(country => {

    const newCountryName = document.createElement("li");
    newCountryName.innerText = country[0].name.common;
    list.appendChild(newCountryName)

}).catch(err => {
    console.log(err);
}) 
}

getCountryByName("France")
getCountryByName("Peru")

