# Git Init

El comando `git init` se utiliza para inicializar un nuevo repositorio Git en un directorio. Algunas opciones útiles:

- `git init`: Inicializa un repositorio Git en el directorio actual
- `git init --bare`: Crea un repositorio sin directorio de trabajo (útil para repositorios remotos)
- `git init <nombre-directorio>`: Crea un nuevo directorio e inicializa un repositorio Git en él
- `git init --template=<plantilla>`: Inicializa usando una plantilla específica

# Git Config

Antes del primer commit es necesario configurar la identidad del usuario:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```
> Las comillas son obligatorias (sobre todo si el nombre o correo contienen espacios).

Lo anterior en ocasiones no funciona (sobre todo en Windows) y es necesario ingresar la información manualmente en el archivo config dentro de la carpeta .git:

```bash
[user]
    name = Tu Nombre
    email = tu.email@ejemplo.com
```

Otras configuraciones útiles:

```bash
# Configurar editor predeterminado
git config --global core.editor "code --wait"

# Configurar herramienta de merge
git config --global merge.tool "kdiff3"

# Ver todas las configuraciones actuales
git config --list
```

# GitHub

Acá hay que considerar que normalmente hay 2 programas involucrados y los 2 son de empresas distintas. Por ejemplo, si se utiliza GitHub, Microsoft proporciona un proceso para vincular la cuenta GitHub con el repositorio a través de **GitHub CLI** y al mismo tiempo **en ocasiones** gestionará el usuario y el correo del repo a nivel de Git. No obstante, en otras ocasiones **esto no ocurre** debido a diferentes circunstancias.

# GitHub CLI

GitHub CLI (gh) es una herramienta oficial que permite gestionar credenciales de GitHub y ayuda a clonar y enviar cambios a repositorios desde la línea de comandos.

## Instalación de GitHub CLI

Para diferentes sistemas operativos:

```bash
# Fedora (verificar ya que Fedora está haciendo la transición a dnf 5)
sudo dnf install gh

# Arch Linux
sudo pacman -S github-cli

# instalación Debian, Ubuntu y derivados

verificar wget

```bash
(type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
```
crear el directorio de keyrings

```bash
sudo mkdir -p -m 755 /etc/apt/keyrings
```

descargar la clave GPG de GitHub CLI

```bash
out=$(mktemp) && wget -nv -O$out https://cli.github.com/packages/githubcli-archive-keyring.gpg
```


sudo apt install gh

# Windows (con Chocolatey)
choco install gh

# macOS (con Homebrew)
brew install gh
```

## Autenticación con GitHub CLI

Luego de instalar GitHub CLI, ejecutar:

```bash
gh auth login
```

Y seguir las instrucciones:
- Presionar Enter si el proceso no avanza
- Con las flechas seleccionar protocolo HTTPS
- Elegir autentificar en Git con GitHub (y)

## Alternativas

- En Windows existe GitHub Desktop que proporciona una interfaz gráfica para gestionar repositorios
- También se puede usar la autenticación por token de acceso personal (PAT) configurando las credenciales manualmente

## Solución a problemas de autenticación

Si aparece error de usuario y contraseña al intentar hacer push, la autenticación con GitHub CLI puede resolver el problema, ya que gestiona las credenciales de forma segura y compatible con los cambios en la política de autenticación de GitHub.
