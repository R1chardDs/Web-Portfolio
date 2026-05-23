# Próximos Pasos: Despliegue de tu Portafolio en GitHub Pages 🚀

Este documento te guiará paso a paso para subir los archivos locales de tu portafolio a **GitHub** y activar **GitHub Pages** para que tu sitio web sea visible públicamente en internet de forma **100% gratuita**.

---

## 📋 Requisitos Previos

1. Tener una cuenta en [GitHub](https://github.com/).
2. Tener instalado **Git** en tu computadora. Si no lo tienes, puedes descargarlo de [git-scm.com](https://git-scm.com/).

---

## 🛠️ Paso 1: Inicializar Git y realizar tu primer Commit local

Abre una terminal (PowerShell, Git Bash o el símbolo del sistema) en la raíz de tu proyecto (`C:\Users\richard.a.ampie\OneDrive\Proyects\DATA ANALYST\BI Portfolio`) y ejecuta los siguientes comandos:

```bash
# 1. Inicializar el repositorio Git local
git init

# 2. Agregar todos los archivos (HTML, CSS, JS, activos y badges de assets/) al área de preparación
git add .

# 3. Guardar el estado actual del proyecto con un mensaje
git commit -m "feat: versión final de portafolio con badges y demos vinculados"

# 4. Cambiar el nombre de la rama principal a 'main'
git branch -M main
```

---

## 🌐 Paso 2: Crear el repositorio en tu cuenta de GitHub

1. Inicia sesión en [GitHub.com](https://github.com/).
2. Haz clic en el botón **New** (Nuevo) en la esquina superior izquierda o ve a [github.com/new](https://github.com/new).
3. Llena la información del repositorio:
   * **Repository name:** `bi-portfolio` (o el nombre que prefieras).
   * **Public/Private:** Selecciona **Public** (Obligatorio para usar la versión gratuita de GitHub Pages).
   * **Initialize this repository with:** Deja todas las opciones sin marcar (no agregues README, .gitignore ni licencia desde aquí, ya que los archivos existen localmente).
4. Haz clic en el botón verde **Create repository**.

---

## 📤 Paso 3: Vincular tu repositorio local con GitHub y subir los archivos

Al crear el repositorio en GitHub, verás una página con instrucciones. Copia y ejecuta los siguientes comandos en tu terminal local para subir tu código:

```bash
# 1. Vincular el repositorio remoto de GitHub (Reemplaza 'tu-usuario' con tu nombre de usuario de GitHub)
git remote add origin https://github.com/tu-usuario/bi-portfolio.git

# 2. Subir tu rama principal a GitHub
git push -u origin main
```

---

## ⚡ Paso 4: Activar GitHub Pages (Hosting Gratuito)

Una vez que tus archivos se hayan subido con éxito a GitHub:

1. Entra a tu repositorio en el sitio web de GitHub.
2. Ve a la pestaña **Settings** (Configuración) en el menú superior del repositorio.
3. En la barra lateral izquierda, busca la sección **Code and automation** y haz clic en **Pages**.
4. En el apartado **Build and deployment**:
   * Bajo **Source**, asegúrate de que esté seleccionado **Deploy from a branch**.
   * Bajo **Branch**, selecciona la rama **main** y en la carpeta contigua selecciona `/ (root)`.
5. Haz clic en el botón **Save** (Guardar).

---

## 🎉 ¡Listo! Tu sitio está en línea

GitHub comenzará a construir y desplegar tu sitio. Esto toma entre **30 segundos y 2 minutos**.

* Para ver el estado del despliegue, puedes ir a la pestaña **Actions** en el repositorio.
* Una vez completado, en la misma pestaña **Settings -> Pages** verás un cuadro verde con el enlace público de tu portafolio:
  `https://tu-usuario.github.io/bi-portfolio/`

---

## 💡 Recomendaciones Posteriores

### 1. Actualizar Enlaces Relativos de tu CV
Si colocas tu archivo `Richard_Ampie_CV.pdf` dentro de la carpeta `assets/`, los usuarios podrán descargarlo directamente desde el sitio usando el botón de la web ya que las rutas relativas están perfectamente configuradas para buscar en `/assets/Richard_Ampie_CV.pdf`.

### 2. Hosting de Imágenes en Azure Blob Storage (Opcional)
Si en el futuro deseas prescindir de guardar las previsualizaciones de Power BI y badges localmente en el repositorio de Git para mantenerlo ligero:
1. Sube las imágenes a tu contenedor público de **Azure Blob Storage**.
2. Copia la URL pública del blob de cada archivo.
3. En tu archivo `index.html`, reemplaza las referencias locales (por ejemplo, `assets/DP700 Badge.png`) por la URL del blob de Azure (por ejemplo, `https://tucontainer.blob.core.windows.net/imagenes/DP700_Badge.png`).
4. Haz `git commit` y `git push` para desplegar el cambio automáticamente.
