var texto= `
antes de hacer git init (o en el caso de una clonación seria antes de un commit) hay que hacer
git config --global user.name <ingresar name> && user.email <ingresar email>
lo anterior en ocaciones no funciona en windows y es necesario ingresar la información
 manualmente en el archivo config dentro de la carpeta .git:

[user]

user.name = name
user.email= email

ojo esto no siempre es necesario en windows


lo anterior no parece ser importante en linux. a pesar de que la información no se añade
en el archivo config si fue ingresada en alguna base de datos

además de lo anterior se confirma que se necesita github-cli

`;


console.log(texto);
