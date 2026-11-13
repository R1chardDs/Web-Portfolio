# Richard Ampié · Data & AI Consulting

Portafolio bilingüe de consultoría independiente en datos, inteligencia de negocio, automatización e IA aplicada. Sitio estático compatible con GitHub Pages, servido desde la raíz del repositorio.

## Archivos

- `index.html`: contenido inicial en español, estructura accesible y metadatos.
- `content.js`: textos en español e inglés, servicios y ocho proyectos.
- `app.js`: idioma, filtros, detalles de proyectos y guía de consulta.
- `style.css`: identidad visual y estilos responsive.
- `assets/`: vistas previas, insignias, monograma y tarjeta social.
- `resume.md`: resumen profesional actualizado con el CV 2026 y el puesto actual indicado por Richard.

No requiere npm, un backend, variables de entorno ni credenciales de Power BI. El sitio no envía ni almacena consultas: los botones abren el correo o WhatsApp del visitante. La elección de idioma se guarda únicamente en su navegador. Google Fonts es un recurso externo, con fuentes de respaldo del sistema.

## Revisión local

Desde esta carpeta ejecutar `python -m http.server 8765 --bind 127.0.0.1` y abrir `http://127.0.0.1:8765`. También se puede abrir `index.html` directamente. Si el portapapeles no está disponible, la guía se selecciona para copiarla manualmente.

## Mantenimiento

En `content.js`, los valores en listas siguen el orden español, inglés. Los enlaces de Microsoft Community están en el campo `community` de cada proyecto. Actualizar también el HTML inicial cuando se cambie texto o enlaces visibles, para mantener la versión sin JavaScript y la vista traducida consistentes.

Las rutas de recursos son relativas para funcionar bajo `/Web-Portfolio/`. Los reportes se abren en otra pestaña; no se precargan iframes de Power BI.

## Publicación

El rediseño se prepara en `codex/consulting-brand-refresh`, basada en `e175820afdff87c144dc7e4eb2a597051ed33619`, la versión remota observada durante la revisión. Antes de publicar, revisar el diff con `origin/main` e integrar en la rama configurada en GitHub Pages cuando se decida reemplazar la web pública.

No se creó un Site en ChatGPT, no se cambió la configuración de GitHub Pages y no se configuró un dominio. Después de comprar el dominio, configurarlo en GitHub Pages y actualizar `og:image` y JSON-LD a la URL definitiva. No agregar un CNAME para un dominio todavía no adquirido/configurado.

## Criterio editorial

- Las cifras profesionales provienen del CV: 80+ migraciones directas y ~150 adicionales lideradas.
- El plazo aproximado de medio día es experiencia propia con requisitos definidos, no un compromiso universal.
- El reconocimiento enlaza al anuncio público de Judges’ Favorites. No se afirma haber ganado el campeonato ni se presenta un ranking específico sin una fuente que lo acredite.
- Hay cuatro certificaciones obtenidas y dos en preparación.
- Los reportes públicos son proyectos de portafolio y concurso. No se presentan como contratos de clientes ni como implementaciones productivas.
