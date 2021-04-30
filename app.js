// const fs = require('fs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


// const argv = require('yargs').argv;

// const base = 3;
// let salida = '';

// salida += `
// =============================
//       Tabla del: ${base}
// =============================
// `;

// for (let i = 1; i<=10; i++) {
//   salida += `${base} x ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tabla-${base}.txt`, salida, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`tabla-${base}.txt creado`);
// });

// console.log(salida);

// fs.writeFileSync(`tabla-${base}.txt`, salida);

// console.log(`tabla-${base}.txt creado`);

console.clear();
// crearArchivo(base);
// crearArchivo(base)
//   .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
//   .catch(err => console.log(err));

// Manejo de argumentos de la terminal
// console.log(process.argv);
// const [ , , arg3] = process.argv;
// const [ , base] = arg3.split('=');
// console.log(base);

// Manejo de argumentos mediante YARGS
// console.log(process.argv);
console.log(argv);

// console.log('base: yargs', argv.base);

const base = argv.base;
const listar = argv.listar;
const limit = argv.limit;

crearArchivo(base, limit, listar)
  .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
  .catch(err => console.log(err));

