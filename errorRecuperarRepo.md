## Tutorial errata

* Todo lo descrito en este tutorial en última instancia provoco uno u otro error.
* por este motivo la recomendación más practica es hacer un `git clone`.

### Preliminares

* Instalar programa para logueo **GitHub**.
* Ejecutar  `gh auth login` y seguir las instrucciones en una terminal.

### Git Status

* Analizar la situación retornada por **Git**.
* Ejecutar la recomendación.
    * example:

```bash
fatal: detected dubious ownership in repository at 'E:/codeo/git-md'
'E:/codeo/git-md' is owned by:
        'S-1-5-21-1899710490-1852305866-2612595576-1001'
but the current user is:
        'S-1-5-21-1899710490-1852305866-2612595576-1003'
To add an exception for this directory, call:

```

> translate

```bash
fatal: se detectó propiedad dudosa en el repositorio en 'E:/codeo/git-md'
'E:/codeo/git-md' es propiedad de:
         'S-1-5-21-1899710490-1852305866-2612595576-1001'
pero el usuario actual es:
         'S-1-5-21-1899710490-1852305866-2612595576-1003'
Para agregar una excepción para este directorio, llame a:

         git config --global --add directorio.seguro E:/codeo/git-md
```
_________________________________________________________________________________________________________________________


### Error inesperado push

* Al hacer un ***git Push***, el output es el siguiente:

```bash
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'manager@DESKTOP-JV80KNK.(none)')

## castellano

Identidad del autor desconocida

*** Por favor dime quién eres.

Correr

   git config --global usuario.correo electrónico "usted@ejemplo.com"
   git config --global user.name "Su nombre"

para configurar la identidad predeterminada de su cuenta.
Omita --global para establecer la identidad solo en este repositorio.

fatal: no se puede detectar automáticamente la dirección de correo electrónico (obtuve 'manager@DESKTOP-JV80KNK.(none)')
```

* Al hacer un git add. hay un output de advertencia pero add se ejecuta igualmente
```bash
git agregar.
Advertencia: en la copia de trabajo de 'recuperarRepo.md', LF será reemplazado por CRLF la próxima vez que Git lo toque
```

*  Ejecutar nuevamente `gh auth login` no funciona
*  intentare hacer el commit (que ahora también produce error) desde VS Code legeado con microsoft

