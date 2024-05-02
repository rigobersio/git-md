1. lo primero es ejecutar el comando : git init

    1.1  acá hay 2 cosas a señalar:
        1.1.1 la primera es que al hacer un git init se creara por defecto la rama master y esto puede generar conflictos ya que en el estándar actual se utiliza la rama main

	    1.1.2 específicamente en windows para agregar los datos de usuario en proyecto el comando git config --global user.name && user.email no funciona. lo que se puede hacer es editar el archivo config y agregar directamente la información:

		```bash
    [user]
		name = nombre-de-usuario
		email = correo@mail.cl
    ```

    1.2 `La información anterior ya no es tan util: Actualmente al instalar Git se puede elegir como rama por defecto a **main**, así mismo, GitHub ya cuenta con un programa para gestionar la autenticación.`


2. se puede comprobar si el repo es git con el comando git status (con gitbash se indica si un repositorio tiene seguimiento git, igualmente la presencia de .git es una señal importante aunque no definitiva).

3. luego de git add . los archivos pasan a estar en la stagin (stage) area.

4. Los archivos pueden salir de la stage area con el comando git restore (tengo que verificar esto), con haciendo un commit, lo que hacer que el cambio pase al historial git y pueda ser localizado con git log

5. comandos bash interesantes a considerar:

  * 'touch' para crear nuevos archivos
  * 'mkdir' para crear nuevas carpetas
  * 'rmdir' elimina un directorio
  * 'rm' elimina un archivo aunque esto solo es efectivo cuando el directorio está vacío (de lo contrario hay que forzarlo)
  * 'head' muestra las primeras lineas de un archivo. por defecto mostrara 10 con la opción -n se puede indicar el número de lineas, por ejemplo: head -n 3 o simplemente head -3
  * 'mv' sirve para mover un archivo o para cambiarle el nombre a este. mv /home/code.js /home/documentos/code.js o code.js code_1.js al estar ya posicionado en en el directorio se puede omitir la primera ruta, es decir  mv code.js /home/documentos/code.js
