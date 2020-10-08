const currencyOne = document.querySelector("#currency-one");
const currencyTwo = document.querySelector("#currency-two");

const amountOne = document.querySelector("#amount-one");
const amountTwo = document.querySelector("#amount-two");

const swapBtn = document.querySelector(".swap");
const rateEl = document.querySelector(".rate");

const calculate = () => {
  const currencyOneEl = currencyOne.value;
  const currencyTwoEl = currencyTwo.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneEl}`)
    .then((res) => res.json()) //response//format the response
    .then((data) => {
      console.log(data); //object
      // console.log(data.rates); //object
      const rate = data.rates[currencyTwoEl]; //object index with variable data.rates[key] indexing
      rateEl.textContent = `1${currencyOneEl} = ${rate} ${currencyTwoEl}`;
      amountTwo.value = (rate * amountOne.value).toFixed(2);
    });
};

//event listeners

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
amountTwo.addEventListener("input", calculate);

swapBtn.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();
