// const fs = require('fs');

// const crearArchivo = (base = 5) => {
//   let salida = '';

//   salida += `
//   =============================
//           Tabla del: ${base}
//   =============================\n`;

//   for (let i = 1; i<=10; i++) {
//     salida += `   ${base} x ${i} = ${base * i}\n`;
//   }

//   fs.writeFileSync(`tabla-${base}.txt`, salida);

//   console.log(salida);
//   console.log(`tabla-${base}.txt creado`);
// }

// module.exports = {
//   crearArchivo
// }

const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     let salida = '';

//     salida += '=============================\n';
//     salida += `Tabla del: ${base}\n`;
//     salida += '=============================\n';

//     for (let i = 1; i<=10; i++) {
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }

//     try {
//       fs.writeFileSync(`tabla-${base}.txt`, salida);
//       console.log(salida);
//       resolve(`tabla-${base}.txt`);
//     } catch (err) {
//       reject(err);
//     }
    
//   });
// }

const crearArchivo = async (base = 5, limit = 10, listar = false) => {
  try {
    let salida = '';
    let salidaColor = '';

    salida += '=============================\n';
    salida += `Tabla del: ${base}\n`;
    salida += '=============================\n';
    salidaColor += colors.bold(salida);

    for (let i = 1; i<=limit; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      salidaColor += `${colors.green(base)} ${colors.magenta('x')} ${colors.yellow(i)} = ${colors.blue(base * i)}\n`;
    }

    fs.writeFileSync(`salida/tabla-${base}.txt`, salida);

    if (listar) {
      console.log(salidaColor);
    }

    return `tabla-${base}.txt`;
    
  } catch (err) {
    throw err;
  }
}

module.exports = {
  crearArchivo
}