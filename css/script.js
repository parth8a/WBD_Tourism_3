//For cleaner code, the following abbreviations have been used: Base Currency = BC

//Global variable

const addCurrencyButton = document.querySelector(".add-currency-btn");
const addCurrencyList = document.querySelector(".add-currency-list");
const currenciesList = document.querySelector(".currencies");
const dataURL = "http://api.exchangeratesapi.io/v1/latest?access_key=07702c0300e6b5d223cc9840fe7b8d1c";

const initiallyDisplayedCurrencies = ["INR", "USD", "JPY", "TRY", "CAD"];
let baseCurrency;
let baseCurrencyAmount;


let currencies = [
    {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "http://www.geonames.org/flags/l/in.gif",
    },
    {
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://www.geonames.org/flags/l/us.gif",
    },
    {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/jp.gif",
    },
    {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "http://www.geonames.org/flags/l/tr.gif"
    },
    {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/ca.gif"
    },
    {
        name: "British Pound",
        abbreviation: "GBP",
        symbol: "\u00A3",
        flagURL: "http://www.geonames.org/flags/l/uk.gif"
    },
    {
        name: "Euro",
        abbreviation: "EUR",
        symbol: "\u20AC",
        flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
    },
    {
        name: "Chinese Yuan Renminbi",
        abbreviation: "CNY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/cn.gif"
    },
    {
        name: "Australian Dollar",
        abbreviation: "AUD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/au.gif"
    },
    {
        name: "New Zealand Dollar",
        abbreviation: "NZD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/nz.gif"
    },
    {
        name: "Swiss Franc",
        abbreviation: "CHF",
        symbol: "\u0043\u0048\u0046",
        flagURL: "http://www.geonames.org/flags/l/ch.gif"
    },
    {
        name: "Swedish Krona",
        abbreviation: "SEK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/se.gif"
    },
    {
        name: "Mexican Peso",
        abbreviation: "MXN",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/mx.gif"
    },
    {
        name: "Norwegian Krone",
        abbreviation: "NOK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/no.gif"
    },
    {
        name: "Singapore Dollar",
        abbreviation: "SGD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/sg.gif"
    },
    {
        name: "Hong Kong Dollar",
        abbreviation: "HKD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/hk.gif"
    },
    {
        name: "Brazilian Real",
        abbreviation: "BRL",
        symbol: "\u0052\u0024",
        flagURL: "http://www.geonames.org/flags/l/br.gif"
    },
    {
        name: "South Korean Won",
        abbreviation: "KRW",
        symbol: "\u20A9",
        flagURL: "http://www.geonames.org/flags/l/kr.gif"
    },
    {
        name: "Russian Ruble",
        abbreviation: "RUB",
        symbol: "\u20BD",
        flagURL: "http://www.geonames.org/flags/l/ru.gif"
    },
    {
        name: "Czech Koruna",
        abbreviation: "CZK",
        symbol: "\u004B\u010D",
        flagURL: "http://www.geonames.org/flags/l/cz.gif"
    },
    {
        name: "South African Rand",
        abbreviation: "ZAR",
        symbol: "\u0052",
        flagURL: "http://www.geonames.org/flags/l/za.gif"
    },
    {
        name: "Philippine Peso",
        abbreviation: "PHP",
        symbol: "\u20B1",
        flagURL: "http://www.geonames.org/flags/l/ph.gif"
    },
    {
        name: "Hungarian Forint",
        abbreviation: "HUF",
        symbol: "\u0046\u0074",
        flagURL: "http://www.geonames.org/flags/l/hu.gif"
    },
    {
        name: "Indonesian Rupiah",
        abbreviation: "IDR",
        symbol: "\u0052\u0070",
        flagURL: "http://www.geonames.org/flags/l/id.gif"
    },
    {
        name: "Bulgarian Lev",
        abbreviation: "BGN",
        symbol: "\u043B\u0432",
        flagURL: "http://www.geonames.org/flags/l/bg.gif"
    },
    {
        name: "Malaysian Ringgit",
        abbreviation: "MYR",
        symbol: "\u0052\u004D",
        flagURL: "http://www.geonames.org/flags/l/my.gif"
    },
    {
        name: "Icelandic Krona",
        abbreviation: "ISK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/is.gif"
    },
    {
        name: "Croatian Kuna",
        abbreviation: "HRK",
        symbol: "\u006B\u006E",
        flagURL: "http://www.geonames.org/flags/l/hr.gif"
    },
    {
        name: "Romanian Leu",
        abbreviation: "RON",
        symbol: "\u006C\u0065\u0069",
        flagURL: "http://www.geonames.org/flags/l/ro.gif"
    },
    {
        name: "Polish Zloty",
        abbreviation: "PLN",
        symbol: "\u007A\u0142",
        flagURL: "http://www.geonames.org/flags/l/pl.gif"
    },
    {
        name: "Danish Krone",
        abbreviation: "DKK",
        symbol: "\u006B\u0072",
        flagURL: "http://www.geonames.org/flags/l/dk.gif"
    },
    {
        name: "Israeli Shekel",
        abbreviation: "ILS",
        symbol: "\u20AA",
        flagURL: "http://www.geonames.org/flags/l/il.gif"
    },
    {
        name: "Thai Baht",
        abbreviation: "THB",
        symbol: "\u0E3F",
        flagURL: "http://www.geonames.org/flags/l/th.gif"
    }
];

//Event Listeners

addCurrencyButton.addEventListener('click', (event) => addCurrencyButton.classList.toggle("open"));

//---To add a currency from the Add Currency List
addCurrencyList.addEventListener('click', (event) =>{
    const clickedItem = event.target.closest("li");
    //proceeding only if the item is not disabled
    if(!clickedItem.classList.contains("disabled")){
        const newCurrency = currencies.find(c => c.abbreviation === clickedItem.getAttribute("data-currency"));
        if(newCurrency) newCurrenciesListItem(newCurrency);
    }
});

currenciesList.addEventListener('click', currenciesListClick);

function currenciesListClick(event){
    if(event.target.classList.contains("close")){
        //The parentnode of the close button is the list item (the listed currency)
        const listedCurrency = event.target.parentNode;
        listedCurrency.remove();
        addCurrencyList.querySelector(`[data-currency=${listedCurrency.id}]`).classList.remove("disabled");
        //if the currency removed was the base currency (mainly Indian Rupee) then changing the base currency
        if(listedCurrency.classList.contains("base-currency")){
            const newBaseCurrency = currenciesList.querySelector(".currency");
            if(newBaseCurrency){
                setNewBaseCurrency(newBaseCurrency);
                baseCurrencyAmount = Number(newBaseCurrency.querySelector("input").value);
            }
        }
    }
}

//setting new base currency

function setNewBaseCurrency(newBaseCurrency){
    newBaseCurrency.classList.add("base-currency");
    baseCurrency = newBaseCurrency.id;
    const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(listedCurrency => {
        const currencyRate = currencies.find(c => c.abbreviation===listedCurrency.id).rate;
        const exchangeRate = listedCurrency.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
        listedCurrency.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${listedCurrency.id}`;
    });
}

currenciesList.addEventListener('input', currenciesListNewInput);

function currenciesListNewInput(event){
    const selectedCurrency = event.target.closest("li");
    //Checking if the input is in a new currency
    if(selectedCurrency.id!==baseCurrency){
        //Changing base currency
        currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
        setNewBaseCurrency(selectedCurrency);
    }
    //Checking if the input is valid and converting it to number
    const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value);
    //Changes in values displayed
    if(baseCurrencyAmount!==newBaseCurrencyAmount || selectedCurrency.id!==baseCurrency){
        baseCurrencyAmount = newBaseCurrencyAmount;
        const baseCurrencyRate = currencies.find(c => c.abbreviation === baseCurrency).rate;
        currenciesList.querySelectorAll(".currency").forEach(listedCurrency => {
            //We don't want the value of the active input field to be modified, hence the if condition
            if(listedCurrency.id!==baseCurrency){
                const currencyRate = currencies.find(c => c.abbreviation===listedCurrency.id).rate;
                const exchangeRate = listedCurrency.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
                listedCurrency.querySelector("input").value = exchangeRate*baseCurrencyAmount!==0 ? (exchangeRate*baseCurrencyAmount).toFixed(3) : "";
            }
        });
    }
}

currenciesList.addEventListener('focusout',currenciesListFocusOut);

function currenciesListFocusOut(event){
    const inputVal = event.target.value;
    if(Number(inputVal)===0 || isNaN(inputVal)) event.target.value="";
    else {event.target.value = Number(inputVal).toFixed(3)};
}
// To make the FocusOut event work when the user presses enter
currenciesList.addEventListener('keydown', (event)=> {if(event.key==="Enter") event.target.blur()});

// Auxiliary Functions

//Function to populate the Add Currencies List
function populateAddCurrencyList(){
    currencies.forEach(function(currency){
        addCurrencyList.insertAdjacentHTML(
            "beforeend", 
            `<li data-currency=${currency.abbreviation}>
                <img src=${currency.flagURL} class="flag"><span>${currency.abbreviation} - ${currency.name}</span>
            </li>`
        )
    });
}


//Function to populate the inital currency list visible to the user
function populateCurrenciesList(){
    initiallyDisplayedCurrencies.forEach(function(cur){
        const currency = currencies.find(c => c.abbreviation===cur);
        if(currency) newCurrenciesListItem(currency);
    });
}

//Function that will add currencies to the currency list
function newCurrenciesListItem(currency){
    if(currenciesList.childElementCount===0){
        baseCurrency = currency.abbreviation
        baseCurrencyAmount = 0;
    }
    addCurrencyList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
    const baseCurrencyRate = currencies.find(c => c.abbreviation===baseCurrency).rate;
    const exchangeRate = currency.abbreviation===baseCurrency ? 1 : (currency.rate/baseCurrencyRate).toFixed(3);
    const inputValue = baseCurrencyAmount ? (baseCurrencyAmount*exchangeRate).toFixed(3) : "";

    currenciesList.insertAdjacentHTML(
        "beforeend",
        `<li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
            <img src=${currency.flagURL} class="flag">
            <div class="info">
                <p class="input"><span class="currency-symbol">${currency.symbol}</span><input placeholder="0.000" value=${inputValue}></p>
                <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
                <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
            </div>
            <span class="close">&times;</span>
        </li>`
    );
}

// Fetching the currency data using exchange rates API
fetch(dataURL)
    .then(res=> res.json())
    .then(data => {
        document.querySelector(".date").textContent = data.date.split("-").reverse().join("/");
        data.rates["EUR"] = 1;
        currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
        currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);
        populateAddCurrencyList();
        populateCurrenciesList();
    })
    .catch(err => console.log(err));