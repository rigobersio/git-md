
# example.

git add . && GIT_AUTHOR_DATE="2025-03-01T17:33:00" GIT_COMMITTER_DATE="2025-03-01T17:33:00" git commit -m "mensaje" && git push -u origin main

- Git permite hacer commit con fechas que no sean cronológicamente lineales
- Existen algunos repositorios con proteciones, como por ejemplo, GitHub que por defecto no permite retroceder cronológicamente
## en caso de cometer este error

git log --oneline para obtener los hash del los commit de manera abreviada

Mantener los cambios en el área de trabajo (working directory):

conservar los cambios realizados después del commit seleccionado en tu directorio de trabajo para revisarlos o modificarlos, utiliza:

bash

git reset --mixed <commit-hash>


Este comando restablece la rama actual al commit especificado y deja los cambios posteriores sin confirmar en el área de trabajo.


