
# example.

git add . && GIT_AUTHOR_DATE="2024-08-11T00:00:00" GIT_COMMITTER_DATE="2024-08-11T00:00:00" git commit -m "(atlas)delete:part1copy()" && git push -u origin main

- Git permite hacer commit con fechas que no sean cronologicamente lineales
- Existen algunos repositorios con proteciones, como por ejemplo, GitHub que por defecto no permite retroceder cronologicamente
## en caso de cometer este error

git log --oneline para optener los hash del los commit de manera abrebiada

Mantener los cambios en el área de trabajo (working directory):

conservar los cambios realizados después del commit seleccionado en tu directorio de trabajo para revisarlos o modificarlos, utiliza:

bash

git reset --mixed <commit-hash>


Este comando restablece la rama actual al commit especificado y deja los cambios posteriores sin confirmar en el área de trabajo.


