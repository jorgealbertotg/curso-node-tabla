const argv = require('yargs')
              .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
              })
              .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
              })
              .option('lm', {
                alias: 'limit',
                type: 'number',
                default: 10,
                describe: 'Limite a calcular'
              })
              .check((argv, options) => {
                if (isNaN(argv.b)) {
                  throw 'La base debe ser un número';
                }
                if (isNaN(argv.lm)) {
                  throw 'El limite debe ser un número';
                }
                return true;
              })
              .argv;

module.exports = argv;