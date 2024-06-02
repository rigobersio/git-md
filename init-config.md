# git init
agregar opciones de git init

# git config

    antes del primer commit:

        git config --global user.name <ingresar name> && user.email <ingresar email>

    lo anterior en ocasiones no funciona (sobretodo en windows) y es necesario ingresar la información
    manualmente en el archivo config dentro de la carpeta .git:

```bash
[user]

user.name = name
user.email= email
```

    <aca hay que considerar que normalmente hay 2 programas involucrados y los 2 son de empresas distintas, por ejemplo, si se utiliza GitHub, Microsoft proporcionara un proceso para vincular la cuenta GitHub con el repositorio **github-cli** y al mismo tiempo gestionará el usuario y el correo del repo a nivel de Git. No obstante en ocasiones esto no ocurre por diferentes circuncisas como que lo anterior no le vale a la nueva versión Git e igualmente hay que hacer el proceso de Git config. En otros caso es un error o un conflicto y hay que intentar buscar el ajuste>.