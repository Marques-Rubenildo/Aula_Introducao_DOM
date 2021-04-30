// Praticando arrays

let totalItems = 11;

let itemsPar = [];
let itemsImpar = [];

for (let i = 0; i < totalItems; i++) {
  let item = parseInt(prompt());
  if (item % 2 == 0) {
    itemsPar.push(item);
  } else {
    itemsImpar.push(item);
  }
}


itemsPar.sort(function(a, b){
  return a - b;
});

itemsImpar.sort(function(a, b){
  return b - a;
});

itemsPar.forEach(function(elemento) {
  alert(elemento);
})

itemsImpar.forEach(function(elemento) {
  alert(elemento);
})