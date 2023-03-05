var texto;

texto = `

git push -u origin main // se puchiara o empujara a origin 
(origin  estará en github desde la rama main)
es posible que que esto no funcione en cuyo caso puede fuencionar
sobre todo en el caso de haber clonado antes:

git push

luego de esto Git pedira el nombre de usuario y la contraseña
al menos en Linux esto puede causar error: entre las posibles soluciones
se menciona ocupar una clave alternativa que se crea en github 
o ocupar el protocolo SSH...

existe un programa de github que se llama GitHub CLI que permite clonar
y y gestionar los usuarios de repos github


 `;

console.log(texto);
