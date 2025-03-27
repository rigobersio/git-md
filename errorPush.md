# Errores comunes al hacer Git Push

Este documento describe los errores más frecuentes al intentar hacer `git push` y cómo solucionarlos.

## Problemas de autenticación

### Error de identidad desconocida

```bash
Author identity unknown

*** Please tell me who you are.

Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address
```

**Solución:**

1. Configura tu identidad en Git:
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   ```

2. Si solo quieres configurarlo para el repositorio actual, omite `--global`:
   ```bash
   git config user.name "Tu Nombre"
   git config user.email "tu@email.com"
   ```

3. Alternativamente, puedes editar manualmente el archivo de configuración en `.git/config`:
   ```
   [user]
       name = Tu Nombre
       email = tu@email.com
   ```

### Error de credenciales

```bash
remote: Permission to usuario/repo.git denied to usuario.
fatal: unable to access 'https://github.com/usuario/repo.git/': The requested URL returned error: 403
```

**Solución:**

1. **Usar GitHub CLI**:
   * Instala GitHub CLI:
     * Windows: `winget install --id GitHub.cli`
     * Fedora: `sudo dnf install gh`
     * Arch: `sudo pacman -S github-cli`
   * Autentícate con:
     ```bash
     gh auth login
     ```
   * Sigue las instrucciones (selecciona HTTPS y autenticación con GitHub)

2. **Actualizar credenciales en el Administrador de Credenciales**:
   * En Windows, busca "Administrador de credenciales" y actualiza o elimina las credenciales de GitHub
   * Luego intenta nuevamente el push para que solicite nuevas credenciales

3. **Usar token de acceso personal**:
   * Crea un token en GitHub: Perfil > Settings > Developer settings > Personal access tokens
   * Usa el token como contraseña al hacer push

## Errores de referencia

### Error de referencias desactualizadas

```bash
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/usuario/repo.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
```

**Solución:**

1. Actualiza tu repositorio local:
   ```bash
   git pull origin main
   ```

2. Si hay conflictos, resuélvelos y luego haz commit:
   ```bash
   git add .
   git commit -m "Resuelve conflictos de merge"
   ```

3. Intenta hacer push nuevamente:
   ```bash
   git push origin main
   ```

4. Si prefieres sobrescribir los cambios remotos (¡usar con precaución!):
   ```bash
   git push -f origin main
   ```

## Problemas con el sistema operativo

### Error de propiedad dudosa del repositorio

```bash
fatal: detected dubious ownership in repository at 'C:/ruta/al/repo'
'C:/ruta/al/repo' is owned by: 'S-1-5-21-XXXX'
but the current user is: 'S-1-5-21-YYYY'
```

**Solución:**

1. Agregar una excepción para el directorio:
   ```bash
   git config --global --add safe.directory C:/ruta/al/repo
   ```

2. Alternativamente, clonar nuevamente el repositorio con el usuario correcto

## Consejos generales

1. **Mantén Git actualizado**: Las versiones más recientes suelen tener mejores mecanismos de autenticación y menos errores.

2. **Usa herramientas gráficas**: Clientes como GitHub Desktop o GitKraken pueden facilitar la gestión de credenciales.

3. **Verifica la URL remota**: Asegúrate de que la URL del repositorio remoto sea correcta:
   ```bash
   git remote -v
   ```

4. **Configura SSH en lugar de HTTPS**: Para evitar problemas de credenciales, considera usar SSH:
   ```bash
   git remote set-url origin git@github.com:usuario/repo.git
   ```

5. **Revisa los logs**: Si tienes problemas persistentes, revisa los logs para obtener más información:
   ```bash
   git log --oneline
   ```