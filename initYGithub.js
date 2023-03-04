var texto = `1. lo primero es ejecutar el comando : git init

2. se puede comprobar si el repo es git con el comando git status

3. luego el primer git add .

4. ahora el o los archivos están en stagin (stage) area.

5. comandos interesantes a considerar:
'touch' para crear nuevos archivos
'mkdir' para crear nuevas carpetas
'rmdir' elimina un directorio
'rm' elimina un archivo aunque esto solo es efectivo cuando el directorio está vacio (de lo contrario hay que forzarlo)
'head' muestra las primeras lineas de un archivo. por defecto mostrara 10 con la opción -n se
 puede inicar el numero de lineas, por ejemplo: head -n 3 o simplemente head -3
'mv' sirve para mover un archivo o para cambiarle el nombre a este. mv /home/code.js /home/documentos/code.js o code.js code_1.js
al estar ya pocisionado en en el directorio se puede omitir la primera ruta, es decir  mv code.js /home/documentos/code.js
`

console.log(texto);
