import allCountries from './data.js';

const my_main_div = document.getElementById('main_div');



for (let i = 0; i < 250; i++) {
    
    const naujas_divas = document.createElement('div');
    naujas_divas.setAttribute('class', 'naujas_div')
    my_main_div.appendChild(naujas_divas);
    const my_country_name = document.createElement('h2');
    my_country_name.innerText = `Country: ${allCountries[i].name.common}`;
    
    naujas_divas.appendChild(my_country_name);
    

    if (allCountries[i].capital === undefined) {

        const capital = document.createElement('h2');
        capital.innerText = `Capital: data not found`;
        naujas_divas.appendChild(capital);
        const my_img = document.createElement('img');
        naujas_divas.appendChild(my_img);
        my_img.setAttribute('src', allCountries[i].flags.png);

    } else {

        const capital = document.createElement('h2');
        capital.innerText = `Capital: ${allCountries[i].capital[0]}`;
        naujas_divas.appendChild(capital);
        const my_img = document.createElement('img');
        naujas_divas.appendChild(my_img);
        my_img.setAttribute('src', allCountries[i].flags.png);

    }

    let region = document.createElement('h2');
    region.innerText = `Region: ${allCountries[i].region}`
    naujas_divas.appendChild(region);

    
    let currencies = document.createElement('h2');
    naujas_divas.appendChild(currencies);

    for (let j in allCountries[i].currencies) {
        console.log(allCountries[i].currencies[j].name)
        currencies.innerText = `Currencies: ${allCountries[i].currencies[j].name}`
        if (i % 2 == 0) {
            currencies.style.color = 'red';
        } else {
            currencies.style.color = 'green';
        }
    }
}
    

