var texto;
texto = `el comando para crear el primer commit es: 

git 		commit 		-m 		'mensaje del comit'
comando		opcion		argumento


git commit -m "first commit"
git branch -M main // esto creara una branch con el nombre de main 
es decir el repo local ya no será master (la master tecnicamente 
seguira existiendo), por lo tanto, la rama local será 
la branch main (main principal)

otra alternativa seria iniciar el repo en el servidor remoto y luego clonarlo
en lo personal esto me ha causado menos errores en este punto

independiente del metodo hay que tener especial cuidado en el logueo al
momento de pushear: puede ser  necesario al menos en Linux instalar 
github-cli y luego ejecutar gh auth login y segir las instruciones

si se hace primero el repo local, el remoto se agrega con

git remote add origin urlgithub

de lo contrario antes del commit es necesario clonar

git clon urlgithub o  gh repo clone usuario/namedelrepo
(hay que tener instalado github-cli)


`;


console.log(texto);
