Para hacer un merge de una rama de testeo a la rama principal (main), sigue estos pasos:

Asegúrate de estar en la rama main:
Antes de realizar el merge, es importante estar en la rama main para fusionar la rama de testeo en ella. Puedes hacerlo con el siguiente comando:

```bash
git checkout main
```
Realiza el merge:
Una vez que estés en la rama main, puedes fusionar la rama de testeo en ella utilizando el comando git merge. Si la rama de testeo se llama, por ejemplo, testing, el comando sería:

```bash
git merge testing
```
Este comando fusionará los cambios de la rama testing en la rama main.
Una de las mejores maneras de resolver conflictos es ocupar VS Code.

si se quiere seguir utilizando la rama testing es necesario cambiarse a la rama testing y hacer el merge.

```bash
git checkout testing
git merge main
```
En caso de haber conflictos, lo lógico es aceptar todo lo resuelto en main



# Trabajo en equipo
En este caso se estará trabajando en un rama especifica como por ejemplo AlertasLogin. cuando todo este listo se necesitara pedir una solicitud de pull request si se trabaja con GitHub por lo cual en esta caso para evitar conflictos. `En este caso considerando que la rama de desarrollo está en continua evolución es necesario traer los últimos cambios de esa rama de desarrollo`

```bash
git checkout alertLogin
git pull origin ramaDeDesarrollo
```

una vez resueltos los conflictos se hace el push y la solicitud PF

otra forma tal vez más conveniente puede ser la siguiente:

```bash
git pull // esto en la ramaDeDesarrollo
git checkout alertLogin
git merge ramaDeDesarrollo // resolver conflictos
git push -u origin alerLogin // solicitar PF en GitHub
git checkout ramaDeDesarrollo
git pull
```
