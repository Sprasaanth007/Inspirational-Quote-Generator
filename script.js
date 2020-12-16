let Quote = document.getElementById('quote');
document.getElementById('butt').addEventListener('click', generateQuote);

function generateQuote(){
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
   let output = data[Math.floor(Math.random() * data.length)].text;
   Quote.innerHTML = output;
   Quote.style.fontSize = '3vmin';
   Quote.style.textAlign = 'center';
   Quote.style.margin = '5px';
   Quote.style.color = 'black';
   Quote.style.fontFamily = 'Roboto';
  });
}

