const loadCountries=()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>displayCountries(data))
}

loadCountries();

const displayCountries=countries=>{
        console.log(countries)

        // for(const country of countries){
        //         console.log(country.name)
        // }
        // const countriesDiv=document.getElementById('countries');
        // countries.forEach(country=>{
        //         console.log(country)
        //         const h3=document.createElement('h3');
        //         h3.innerText=country.name;
        //         countriesDiv.appendChild(h3)
        // })
 const countriesDiv=document.getElementById('countries');
        countries.forEach(country=>{
                console.log(country.name.common)
                const div =document.createElement('div');
                div.classList.add('country')
const h3=document.createElement('h3');
const p=document.createElement('p');

h3.innerText=country.name.common;

if(country.capital===undefined){
        return false
}
else{
        p.innerText=country.capital
}


div.appendChild(h3)
div.appendChild(p);
countriesDiv.appendChild(div);


        })
}