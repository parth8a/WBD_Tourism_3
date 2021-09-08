//COMMENTS
//For cleaner code, the following abbreviations have been used: Base Currency = BC, event = e, currency = curr
// The decimal limit has been placed at 3. So all values for the currencies will be rounded up to 3 decimal places.

//GLOBAL VARIABLES
const currenciesList = document.querySelector(".currencies");
const addCurrencyList = document.querySelector(".add-currency-list");
const addCurrencyButton = document.querySelector(".add-currency-btn");
const rateTable = document.querySelector(".rate-table");
const radioButtons = document.querySelector("input[type=radio]");
const dataURL = "http://api.exchangeratesapi.io/v1/latest?access_key=07702c0300e6b5d223cc9840fe7b8d1c";

//Initially displayed currencies and their currency info
const initiallyDisplayedCurrencies = ["INR", "USD", "JPY", "TRY", "CAD"];
const currencyInfo = {
    "INR": {
        name: "Indian Rupee",
        abbreviation: "INR",
        symbol: "\u20B9",
        flagURL: "http://www.geonames.org/flags/l/in.gif",
    },
    "USD": {
        name: "US Dollar",
        abbreviation: "USD",
        symbol: "\u0024",
        flagURL: "https://www.geonames.org/flags/l/us.gif",
    },
    "JPY": {
        name: "Japanese Yen",
        abbreviation: "JPY",
        symbol: "\u00A5",
        flagURL: "http://www.geonames.org/flags/l/jp.gif",
    },
    "TRY": {
        name: "Turkish Lira",
        abbreviation: "TRY",
        symbol: "\u20BA",
        flagURL: "http://www.geonames.org/flags/l/tr.gif"
    },
    "CAD": {
        name: "Canadian Dollar",
        abbreviation: "CAD",
        symbol: "\u0024",
        flagURL: "http://www.geonames.org/flags/l/ca.gif"
    }
}

//Base currency variable and currencies array with info for all currencies (to which rate will be added from the API)
let BC;
let BCAmount;
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

//EVENT LISTENERS

//Open add currency list event
addCurrencyButton.addEventListener('click', (e) => addCurrencyButton.classList.toggle("open"));

//Add currency event: To add a currency from the Add Currency List
addCurrencyList.addEventListener('click', addCurrency)

function addCurrency(e){
    const clickedItem = e.target.closest("li");
    //proceeding only if the item is not disabled
    if(!clickedItem.classList.contains("disabled")){
        const newCurrency = currencies.find(c => c.abbreviation === clickedItem.getAttribute("data-currency"));
        if(newCurrency) newCurrenciesListItem(newCurrency);
    }
};

//Currency list new input event: When there is a new input in the currency list
currenciesList.addEventListener('input', e => {
    const selectedCurrency = e.target.closest("li");
    //Checking if the input is in a new currency
    if(selectedCurrency.id!==BC){
        //Changing base currency
        currenciesList.querySelector(`#${BC}`).classList.remove("base-currency");
        setNewBC(selectedCurrency);
    }
    //Checking if the input is valid. If not, then the amount is 0, and if it is valid, then it is converted to number format.
    const newBCAmount = isNaN(e.target.value) ? 0 : Number(e.target.value);
    //Changes in values displayed
    if(BCAmount!==newBCAmount || selectedCurrency.id!==BC){
        BCAmount = newBCAmount;
        const BCRate = currencies.find(c => c.abbreviation === BC).rate;
        currenciesList.querySelectorAll(".currency").forEach(listedCurrency => {
            //We don't want the value of the active input field to be modified, hence the if condition.
            if(listedCurrency.id!==BC){
                const currRate = currencies.find(c => c.abbreviation===listedCurrency.id).rate;
                const exchRate = listedCurrency.id===BC ? 1 : (currRate/BCRate).toFixed(3);
                listedCurrency.querySelector("input").value = exchRate*BCAmount!==0 ? (exchRate*BCAmount).toFixed(3) : "";
            }
        });
    }
})

//Remove Currency event: When the cross button is clicked on the currency listed in the currencies' list.
currenciesList.addEventListener('click', e => {
    if(e.target.classList.contains("close")){
        //The parentnode of the close button is the list item (the listed currency)
        const listedCurrency = e.target.parentNode;
        if(listedCurrency.id!=="INR"){
            listedCurrency.remove();
            addCurrencyList.querySelector(`[data-currency=${listedCurrency.id}]`).classList.remove("disabled");
            //if the currency removed was the base currency (mainly Indian Rupee) then changing the base currency
            if(listedCurrency.classList.contains("base-currency")){
                const newBC = currenciesList.querySelector(".currency");
                if(newBC){
                    setNewBC(newBC);
                    BCAmount = Number(newBC.querySelector("input").value);
                }
            }
        }
        else{
            alert("Cannot remove the Indian currency.")
        }
    }
})

// Click FocusOut event: Adding a FocusOut event to the visible currencies list when the mouse is clicked outside
currenciesList.addEventListener('focusout', e => {
    const inputVal = e.target.value;
    if(isNaN(inputVal) || Number(inputVal)===0 ) e.target.value="";
    else {e.target.value = Number(inputVal).toFixed(3)};
})

// Enter FocusOut event: To make the FocusOut event work when the user presses enter
currenciesList.addEventListener('keydown', (e)=> {if(e.key==="Enter") e.target.blur()});

// Radio Button Click event: Making the currency that is selected in the Rates Table as the base currency in the converter
function radio(currencyId) {
    if(document.getElementById(currencyId).checked){
        if(!currenciesList.querySelector(`#${currencyId}`)){
            const curr = currencies.find(c => c.abbreviation==currencyId)
            newCurrenciesListItem(curr)
        }
        const listedCurrency = currenciesList.querySelector(`#${currencyId}`);
        if(!listedCurrency.classList.contains("prev")){
            const prevBC = currenciesList.querySelector(".base-currency");
            prevBC.classList.remove("prev");
            prevBC.classList.remove("base-currency");
            setNewBC(listedCurrency);
            listedCurrency.classList.add("prev")
        }
    }
};

// MAIN FUNCTIONS (Creating and Populating the Rate Table and the two lists, adding a currency, setting a new base currency and fetching data from API.)

//Creating Rate table: Adding row elements
function radio2() {
    for(let currencyId in currencyInfo){
        const newtr = document.createElement("tr");
        const radioInput = document.createElement("input");
        const tdCurrency = document.createElement("td");
        const tdCurrencyAbb = document.createElement("td");
        const tdExchangeRate = document.createElement("td");
        radioInput.type = "radio";
        radioInput.name = "currency";
        radioInput.id= currencyId;
        radioInput.onchange = () => radio(currencyId);
        const currencyName = document.createTextNode(currencyInfo[currencyId].name);
        tdCurrencyAbb.textContent=currencyId;
        tdCurrency.append(radioInput, currencyName);
        newtr.append(tdCurrency, tdCurrencyAbb, tdExchangeRate);
        rateTable.append(newtr);
    }
}

radio2();

// Populating the Rate table of the exchange rates
function populateRateTable() {
    const INRRate = currencies.find(c => c.abbreviation==="INR").rate;
    for(var i = 1; i < rateTable.rows.length ; i++){
        const curr = currencies.find(c => c.abbreviation=== rateTable.rows[i].cells[1].innerHTML);
        const exchangeRate = (curr.rate/INRRate).toFixed(3);
        rateTable.rows[i].cells[2].innerHTML = `1 INR = ${exchangeRate} ${curr.abbreviation}`;
    }
}

//Function to populate the inital currency list visible to the user
function populateCurrenciesList(){
    initiallyDisplayedCurrencies.forEach(function(cur){
        const curr = currencies.find(c => c.abbreviation===cur);
        if(curr) newCurrenciesListItem(curr);
    });
}

//Function to populate the Add Currencies List

function populateAddCurrencyList(){
    currencies.forEach(function(curr){
        addCurrencyList.insertAdjacentHTML(
            "beforeend", 
            `<li data-currency=${curr.abbreviation}>
            <img src=${curr.flagURL} class="flag"><span>${curr.abbreviation} - ${curr.name}</span>
            </li>`
        )
    });
}
    
//Setting new base currency (BC)

function setNewBC(newBC){
    newBC.classList.add("base-currency");
    BC = newBC.id;
    const BCRate = currencies.find(c => c.abbreviation === BC).rate;
    currenciesList.querySelectorAll(".currency").forEach(listedCurrency => {
        const currencyRate = currencies.find(c => c.abbreviation===listedCurrency.id).rate;
        const exchangeRate = listedCurrency.id===BC ? 1 : (currencyRate/BCRate).toFixed(3);
        listedCurrency.querySelector(".base-currency-rate").textContent = `1 ${BC} = ${exchangeRate} ${listedCurrency.id}`;
    });
}

//Function that will add currencies to the currency list

function newCurrenciesListItem(curr){
    //If the currency is the first currency in the currencies list
    if(currenciesList.childElementCount===0){
        BC = curr.abbreviation
        BCAmount = 0;
    }
    addCurrencyList.querySelector(`[data-currency=${curr.abbreviation}]`).classList.add("disabled");
    const BCRate = currencies.find(c => c.abbreviation===BC).rate;
    const exchangeRate = curr.abbreviation===BC ? 1 : (curr.rate/BCRate).toFixed(3);
    const inputValue = BCAmount ? (BCAmount*exchangeRate).toFixed(3) : "";
    //Adding HTML (using insertAdjacentHTML to avoid possible corruption)
    currenciesList.insertAdjacentHTML(
        "beforeend",
        `<li class="currency ${curr.abbreviation===BC ? "base-currency" : ""}" id=${curr.abbreviation}>
        <img src=${curr.flagURL} class="flag">
        <div class="info">
        <p class="input"><span class="currency-symbol">${curr.symbol}</span><input placeholder="0.000" value=${inputValue}></p>
        <p class="currency-name">${curr.abbreviation} - ${curr.name}</p>
        <p class="base-currency-rate">1 ${BC} = ${exchangeRate} ${curr.abbreviation}</p>
        </div>
        <span class="close">&times;</span>
        </li>`
    );
}


// Fetching the currency data using exchange rates API
fetch(dataURL)
.then(res=> res.json())
.then(data => {
    //converting date to day/month/year format
    document.querySelector(".date").textContent = data.date.split("-").reverse().join("/");
    //EUR is the base currency of the API
    data.rates["EUR"] = 1;
    //fetching data only for currencies that are in our list
    currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
    currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);
    //Calling the populate list functions
    populateAddCurrencyList();
    populateCurrenciesList();
    populateRateTable();
})
// To log error
.catch(err => console.log(err));