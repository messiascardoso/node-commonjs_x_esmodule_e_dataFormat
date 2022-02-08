const date = new Date('2022-01-25 00:00');
const regex = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9] |1[0-9]|2[0-9]|3[0-1])/;
const [full, year, month, day] = regex.exec(date.toISOString());
const actual = `${day}/${month}/${year}`;

console.log('data: ', actual);
