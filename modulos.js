// importar dados do arquivo 'pessoas'
/*const executePessoas = require('./pessoas');

//console.log(executePessoas);

console.log(executePessoas.pessoas, executePessoas.idades);
*/

//desestruturação
const{pessoas, idade} = require('./pessoas');
console.log(pessoas, idades);
