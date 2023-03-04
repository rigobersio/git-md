var texto = `1. lo primero es ejecutar el comando : git init

1.1  acá hay 3 cosas a señala:
	a. la primera es que al hacer un git init se creara por defecto
 la rama master y esto puede generar conflictos ya que en el estandar actual 
 se utiliza la rama main

	b. especificamente en windows para agregar los datos de usuario 
	en proyecto el comando git config global --user.name && --user.mail
	no funciona. lo que se puede hacer es editar el archivo config y agregar
	directamente la información:

		[user]
		name = nombre-de-usuario
		email = correo@mail.cl

	c. el otro asunto consiste en que es posible que existan problemas
	a la hora de subir el repo al servidor remoto por error en logeo

1.2 por todo lo anterior: rama master en vez de main, usuario y correo,
y logueo con el servidor remoto puede ser más conveniente crear primero
el repo en el servidor remoto y luego clonar el mismo: en automatico
se creara la rama main en vez de master

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
