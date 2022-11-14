const kanyerest = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayShowKanye(data));
};
// kanyerest();
const displayShowKanye = (quote) => {
    const quoteEletement = document.getElementById('quote');
    quoteEletement.innerText = quote.quote;
};
