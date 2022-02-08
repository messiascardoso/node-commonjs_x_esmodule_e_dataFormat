// run `node index.js` in the terminal
//console.log(`Hello Node.js v${process.versions.node}!`);

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date(2022, 02, 08);
const newDate = date.toLocaleDateString('pt-br', options);
console.log(newDate);

const newDate2 = date.toLocaleDateString('pt-br', {
  ...options,
  month: 'numeric',
});
console.log('date.toLocaleDateString:', newDate2);

//api Intl
// O objeto Intl é o namespace para a API de Internacionalização do ECMAScript
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl
{
  const actual = new Intl.DateTimeFormat('pt-br').format(date);
  console.log('Intl.DateTimeFormat:', actual);
}

{
  const actual = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
    timeStyle: 'long',
  }).format(date);
  console.log('Intl.DateTimeFormat options:', actual);
}
