# Actualizar rama principal o main trabajando con ramas testing, ya sea en solitario o en grupo

## En solitario

### Para hacer un merge de una rama de **testing** a la rama principal (main), sigue estos pasos:

- Asegúrate de estar en la rama main:
Antes de realizar el merge, es importante estar en la rama main para fusionar la rama de **testing** en ella. Puedes hacerlo con el siguiente comando:

```bash
git checkout main
```
- Realiza el merge. Una vez que estés en la rama main, puedes fusionar la rama de **testing** en ella utilizando el comando git merge. El comando sería:

```bash
git merge testing
```
Este comando fusionará los cambios de la rama **testing** en la rama **main**.
Una de las mejores maneras de resolver conflictos es ocupar VS Code.

## Trabajo en equipo

En este caso normalmente se estará trabajando en un rama mucho más especifica como por ejemplo **AlertasLogin**. Cuando todo este listo se necesitara pedir una solicitud de pull request si se trabaja con GitHub. `En este caso considerando que la rama de desarrollo está en continua evolución es necesario traer los últimos cambios de esa rama de desarrollo`. Para Lograr esto hay al menos 2 alternativas.

En esto caso la rama **main** normalmente es muy protegida y se contará con una rama de desarrollo principal.

### Visualizando el avance general

```bash
git checkout ramaDeDesarrolloGeneral
git pull
```

- Realizar un merge. Una vez que se visualice la actualización general regresar a la rama de trabajo y traer los cambios. El comando sería:

```bash
git checkout AlertasLogin
git merge ramaDeDesarrolloGeneral
```

### Merge directamente en la rama de trabajo

- Actualizar la rama general de desarrollo y hacer un merge sin salir de la rama de trabajo. tara esto hay que estar en la rama de trabajo **AlertasLogin**
```bash
git pull origin ramaDeDesarrolloGeneral // eventualmente origin puede ser distinto eso depende de como este configurado el repo remoto
git merge ramaDeDesarrollo 
```
