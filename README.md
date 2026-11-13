# Richard Ampié · Data & AI Consulting

Portafolio bilingüe de consultoría independiente en datos, inteligencia de negocio, automatización e IA aplicada. Sitio estático compatible con GitHub Pages, servido desde la raíz del repositorio.

## Archivos

- `index.html`: contenido inicial en inglés, estructura accesible y metadatos.
- `content.js`: textos en español e inglés, servicios, ocho reportes y ocho casos de ingeniería / laboratorios.
- `theme-init.js`: aplica la preferencia de tema antes de cargar los estilos.
- `app.js`: idioma, filtros, detalles de proyectos y guía de consulta.
- `style.css`: identidad visual y estilos responsive.
- `assets/`: vistas previas, insignias, monograma y tarjeta social.
- `resume.md`: resumen profesional actualizado con el CV 2026 y el puesto actual indicado por Richard.

No requiere npm, un backend, variables de entorno ni credenciales de Power BI. El sitio no envía ni almacena consultas: los botones abren el correo o WhatsApp del visitante. Comienza en inglés y modo claro. El encabezado permite elegir español y modo oscuro; esas elecciones se guardan únicamente en el navegador. Esta revisión usa preferencias v2 para aplicar el nuevo inicio a visitantes anteriores. Google Fonts es un recurso externo, con fuentes de respaldo del sistema.

## Revisión local

Desde esta carpeta ejecutar `python -m http.server 8765 --bind 127.0.0.1` y abrir `http://127.0.0.1:8765`. También se puede abrir `index.html` directamente. Si el portapapeles no está disponible, la guía se selecciona para copiarla manualmente.

## Mantenimiento

En `content.js`, los valores en listas siguen el orden español, inglés. Los enlaces de Microsoft Community están en el campo `community` de cada proyecto. Actualizar también el HTML inicial cuando se cambie texto o enlaces visibles, para mantener la versión sin JavaScript y la vista traducida consistentes.

Las rutas de recursos son relativas para funcionar bajo `/Web-Portfolio/`. Los reportes se abren en otra pestaña; no se precargan iframes de Power BI.

## Publicación

El sitio se publica en la rama `main` de este repositorio y se despliega con la configuración existente de GitHub Pages. La revisión incluye temas navy blue claro y oscuro, ocho casos de ingeniería y ocho reportes públicos.

No se creó un Site en ChatGPT ni se configuró un dominio. Después de comprar el dominio, configurarlo en GitHub Pages y actualizar `og:image` y JSON-LD a la URL definitiva. No agregar un CNAME para un dominio todavía no adquirido/configurado.

## Criterio editorial

- Las cifras profesionales provienen del CV: 80+ migraciones directas y ~150 adicionales lideradas.
- El plazo aproximado de medio día es experiencia propia con requisitos definidos, no un compromiso universal.
- El reconocimiento enlaza al anuncio público de Judges’ Favorites. No se afirma haber ganado el campeonato ni se presenta un ranking específico sin una fuente que lo acredite.
- Hay cuatro certificaciones obtenidas y dos en preparación.
- Los reportes públicos son proyectos de portafolio y concurso. No se presentan como contratos de clientes ni como implementaciones productivas.

## Ingeniería y laboratorios

La sección de ingeniería conserva cuatro casos profesionales y cuatro laboratorios del portafolio previo. Los casos tienen resúmenes técnicos y resultados con contexto, sin datos internos. El laboratorio de Fórmula 1 enlaza al repositorio público verificado `R1chardDs/Formula1`. Los antiguos enlaces de ejemplo no se reutilizan.

## Interacción y lectura

Los casos se presentan como filas compactas con un titular, una frase breve y un resultado o alcance visible. El detalle técnico usa elementos `details` nativos y conserva la navegación por teclado. En móvil las herramientas se muestran dentro del detalle para mantener la vista inicial breve.

La portada y la sección de ingeniería incluyen ilustraciones conceptuales generadas con ImageGen: una muestra el recorrido desde las fuentes hasta el análisis y otra, las capas de una plataforma de datos. No son capturas de sistemas de clientes. Los títulos de los casos usan 21 px en escritorio y 19 px en móvil; los resúmenes usan 17 y 16 px respectivamente. Ambos temas tienen texto secundario de alto contraste.

La página incorpora entradas suaves al desplazarse, respuestas visuales al pasar el cursor, un indicador de lectura y el resaltado de la sección activa. Las animaciones respetan la preferencia de movimiento reducido del navegador. No se añadieron dependencias de JavaScript.
