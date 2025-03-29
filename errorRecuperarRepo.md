# Solución de Problemas Comunes con Repositorios Git

## Introducción

Este documento describe problemas comunes que pueden surgir al trabajar con repositorios Git y cómo solucionarlos. Aunque se presentan varias soluciones, en algunos casos la opción más práctica puede ser simplemente hacer un `git clone` del repositorio nuevamente.

## Preliminares

Antes de intentar solucionar problemas con repositorios Git, asegúrate de tener configurado correctamente tu entorno:

* Instala la CLI de GitHub (`gh`) para facilitar la autenticación
* Ejecuta `gh auth login` y sigue las instrucciones en la terminal para autenticarte
* Verifica que tu configuración de Git esté correcta con `git config --list`

## Problemas Comunes y Soluciones

### 1. Error de Propiedad Dudosa del Repositorio

#### Síntoma

Al ejecutar comandos Git, aparece un error similar a este:

```bash
fatal: detected dubious ownership in repository at 'E:/codeo/git-md'
'E:/codeo/git-md' is owned by:
        'S-1-5-21-1899710490-1852305866-2612595576-1001'
but the current user is:
        'S-1-5-21-1899710490-1852305866-2612595576-1003'
To add an exception for this directory, call:

        git config --global --add safe.directory E:/codeo/git-md
```

#### Explicación

Este error ocurre cuando Git detecta que el usuario actual no es el propietario del repositorio. Esto puede suceder cuando:

* Has clonado un repositorio con un usuario y estás intentando acceder con otro
* Has movido o copiado un repositorio entre diferentes cuentas de usuario
* Estás trabajando en un entorno compartido o con permisos cambiados

#### Solución

Sigue la recomendación que Git proporciona en el mensaje de error:

```bash
git config --global --add safe.directory E:/codeo/git-md
```

Esto le indica a Git que confíe en este directorio aunque el propietario sea diferente. Si prefieres aplicar esta configuración solo para este repositorio (no globalmente), omite la opción `--global`.

### 2. Error de Identidad de Autor Desconocida

#### Síntoma

Al intentar hacer un commit o push, aparece un error como este:

```bash
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'manager@DESKTOP-JV80KNK.(none)')
```

#### Explicación

Git necesita saber quién eres para registrar correctamente la autoría de los commits. Este error aparece cuando no has configurado tu nombre de usuario y correo electrónico en Git.

#### Solución

Configura tu identidad en Git siguiendo las instrucciones del mensaje:

```bash
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"
```

Si solo quieres configurar esta identidad para el repositorio actual (no globalmente), omite la opción `--global`.

### 3. Advertencia sobre Conversión de Saltos de Línea (LF/CRLF)

#### Síntoma

Al ejecutar `git add`, aparece una advertencia como esta:

```bash
Advertencia: en la copia de trabajo de 'recuperarRepo.md', LF será reemplazado por CRLF la próxima vez que Git lo toque
```

#### Explicación

Esta advertencia se debe a las diferencias en cómo los distintos sistemas operativos manejan los saltos de línea:

* Unix/Linux/macOS usan LF (Line Feed, `\n`)
* Windows usa CRLF (Carriage Return + Line Feed, `\r\n`)

Git está indicando que convertirá automáticamente entre estos formatos.

#### Solución

Esta advertencia no impide que Git funcione correctamente. Sin embargo, si deseas configurar cómo Git maneja los saltos de línea, puedes usar uno de estos comandos:

```bash
# Para mantener los saltos de línea tal como están en el repositorio
git config --global core.autocrlf false

# Para convertir a CRLF al extraer y a LF al confirmar (recomendado para Windows)
git config --global core.autocrlf true

# Para convertir a LF al confirmar, pero no al extraer (recomendado para Linux/Mac)
git config --global core.autocrlf input
```

## Soluciones Alternativas

Si los métodos anteriores no resuelven tu problema:

1. Intenta autenticarte nuevamente con `gh auth login`
2. Prueba hacer commit desde un IDE como VS Code que esté autenticado con tu cuenta de Microsoft/GitHub
3. Como último recurso, clona nuevamente el repositorio con `git clone`

## Notas Adicionales

* Siempre verifica el estado de tu repositorio con `git status` antes de intentar solucionar problemas
* Mantén actualizada tu instalación de Git y GitHub CLI
* Considera usar herramientas gráficas como GitHub Desktop si encuentras dificultades con la línea de comandos

