var testo;

texto = `
1. hacer un nuvo branch: git branch <nombrebranch>
2. ver todos: git branch
3. eliminarbranch: git branch -d <nombrebranch>
4. para hacer un merge:
	a. hacer commit para finalizar la branch experimental
	b. cambiar a la branch  madre con git checkout <branchmadre>
	c. merge: git merge <nombre.de.la.branch.experimental>
5. despues de un marge las 2 ramas son virtualmente iguales
incluso un git add no marca diferencia. la diferencia empieza con
un commit
6. de la misma forma cuando se crea una nueva branch es necesario
hacer un commit inmediatamente para marcar diferencia.
7. respecto a GitHub:
	a. luego de un merge se crea un commit en automatico
	b. entonces un git status no muestra cambios pendientes
	c. es recomendable hacer un git push -u origin main(o como
	se llame la rama)
8. luego de que se crea una nueva branch y se hace el primer commit
cualquier cambio pendiente (sin otro commit) impedira cambiar a otra
branch aun haciendo git checkout
9.es posible clonar especificamente una branch del repocitorio GitHub






`

console.log(texto);
