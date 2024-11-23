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

# GitHub

Acá hay que considerar que normalmente hay 2 programas involucrados y los 2 son de empresas distintas, por ejemplo, si se utiliza GitHub, Microsoft proporcionara un proceso para vincular la cuenta GitHub con el repositorio **github-cli** y al mismo tiempo **en ocasiones** gestionará el usuario y el correo del repo a nivel de Git. No obstante en otras ocasiones **esto no ocurre** debido a diferentes circuncisas.

# github-cli

la siguiente instrucción es para fedora pero hay que verificar ya que por ejemplo en este caso en particular Fedora está haciendo la transición a dnf 5
```bash
sudo dnf install gh
```
luego de instalar github-cli ejecutar: 

```bash
gh auth login
```
y seguir las instrucciones
