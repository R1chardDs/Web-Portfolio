# Carpeta de Activos Multimedia (Assets)

Esta carpeta está reservada para organizar todos los activos multimedia que consume tu sitio web portafolio. A continuación, tienes las instrucciones detalladas de los archivos que debes agregar, sus formatos recomendados y sus nombres exactos para que la web los renderice automáticamente:

## 1. Capturas de Reportes de Power BI (Demos)
Toma capturas nítidas (de preferencia en resolución 16:9) de las portadas o páginas principales de tus dashboards. Guárdalas en esta carpeta con los siguientes nombres:
*   **`finance-opex.png`** (Captura del dashboard de Control OPEX y Presupuestos)
*   **`project-margin.png`** (Captura del dashboard de Rentabilidad de Proyectos)
*   **`fabric-capacity.png`** (Captura del dashboard de Consumo de Capacidad)

> *Nota:* El código de la web ya tiene preparados mockups vectoriales de alta fidelidad como respaldo visual, por lo que el sitio se verá profesional incluso antes de que agregues tus imágenes. Una vez que las agregues, el HTML las detectará de inmediato si actualizas las rutas del tag `<img>`.

## 2. Insignias de Certificaciones Microsoft
Descarga los badges oficiales de Microsoft (en formato PNG con fondo transparente o SVG) e incorpóralos aquí con los nombres:
*   **`cert-azure-engineer.png`**
*   **`cert-fabric-engineer.png`**
*   **`cert-powerbi-analyst.png`**

## 3. Tu Currículum Vitae (PDF)
Guarda la versión final en PDF de tu CV en esta carpeta para que los reclutadores puedan descargarlo:
*   **`Richard_Ampie_CV.pdf`**

---

### Opción de Hostear en Azure Blob Storage (El Flex Técnico)
Si decides subir estos mismos archivos a tu contenedor de **Azure Blob Storage** en lugar de guardarlos aquí de forma local, simplemente abre tu archivo `index.html` y reemplaza las rutas locales (ej: `assets/finance-opex.png`) por la URL pública de tu contenedor (ej: `https://tunombre.blob.core.windows.net/assets/finance-opex.png`).
