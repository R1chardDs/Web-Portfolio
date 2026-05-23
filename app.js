/* 
   RICHARD AMPIE CHAMORRO - PROFESSIONAL PORTFOLIO LOGIC
   Features: Bilingual Engine, Multi-Carousel System, Category Toggles, Stat Counters, Form Handling
   Author: Antigravity AI
   Version: 4.0
*/

/* --- BILINGUAL TRANSLATION DICTIONARY --- */
const translations = {
    es: {
        // Navigation
        nav_about: "Sobre Mí",
        nav_services: "Especialidades",
        nav_projects: "Portafolio",
        nav_demos: "Demos Power BI",
        nav_certs: "Certificaciones",
        nav_exp: "Experiencia",
        nav_contact: "Contacto",
        
        // Hero Section
        hero_badge: "LA SÍNTESIS PERFECTA ENTRE INGENIERÍA, ANALÍTICA Y NEGOCIO",
        hero_title: 'Diseñando arquitecturas de datos que impulsan la <span class="text-gradient">salud financiera</span> de tu negocio',
        hero_subtitle: "Richard Ampie Chamorro | Senior Data Analyst & Data Engineer",
        hero_description: "Especialista certificado por Microsoft en Data Engineering y Analytics Engineer. Diseño y despliego soluciones integrales en Azure, Fabric y Power BI que automatizan flujos complejos, reducen costos de cómputo y estandarizan la gobernanza analítica con un entendimiento financiero nativo.",
        hero_cta_primary: "Explorar Casos de Éxito",
        hero_cta_secondary: "Ver Demos Power BI",
        hero_certs_label: "Certificaciones Oficiales Microsoft:",
        hero_roi_title: "Optimización Financiera",

        // About Me Section
        about_tag: "VISIÓN GENERAL",
        about_title: "La Ventaja de un Perfil Híbrido",
        about_lead: "Muchas organizaciones sufren el mismo problema: sus ingenieros de datos no entienden los estados financieros que procesan, y sus financieros no saben cómo optimizar una base de datos. Mi propuesta de valor cierra esa brecha por completo.",
        about_p1: "Mi carrera comenzó en el núcleo de las finanzas y la contabilidad empresarial. Comprendo de forma nativa la lógica del negocio, los desvíos presupuestarios (OPEX/CAPEX) y la importancia crítica de la consistencia fiscal. Posteriormente, traduje esta visión comercial al campo técnico, convirtiéndome en Especialista Certificado por Microsoft en el diseño de infraestructuras analíticas avanzadas.",
        about_p2: "Ya sea migrando reportes analíticos a entornos gobernados, reduciendo a la mitad los costos de capacidad en Microsoft Fabric o estructurando bases de datos desde cero sobre SQL Server y PySpark, mi enfoque siempre es el mismo: crear valor tangible, ahorrar tiempo operativo y asegurar una única versión de la verdad comercial.",

        // Outcomes / Metrics
        out_time_title: "Tiempo de Despliegue",
        out_time_desc: "Gobernanza de BI estandarizada mediante Git DevOps y pipelines Dev/Test/Prod (de 72h a ~30h).",
        out_mig_title: "Reportes Modernizados",
        out_mig_desc: "Migración hands-on de Tableau/Excel a Power BI con 90% menos incidencias.",
        out_ing_title: "Tiempo de Ingesta",
        out_ing_desc: "Migración SSIS a Fabric Lakehouse, acelerando flujos de carga de 3h a 1h.",
        out_cap_title: "Costo de Capacidad",
        out_cap_desc: "Optimización en Microsoft Fabric mediante cargas incrementales y tuneo de DAX/SQL.",

        // Services Section
        serv_tag: "QUÉ HAGO",
        serv_title: "Especialidades & Soluciones Estratégicas",
        serv_eng_title: "1. Arquitectura & Data Engineering",
        serv_eng_desc: "Construcción de cimientos sólidos, seguros y escalables para el flujo de información corporativa.",
        serv_eng_b1: "<strong>Gobernanza y DevOps:</strong> Control de versiones con Git (Azure DevOps), despliegue continuo de reportes (.pbip) y administración de workspaces.",
        serv_eng_b2: "<strong>Orquestación de Pipelines:</strong> Reemplazo de SSIS tradicionales por flujos modernos y rápidos en Fabric Data Factory.",
        serv_eng_b3: "<strong>Procesamiento Escalable:</strong> Transformación de datos usando PySpark / Notebooks de Python y SQL.",
        serv_bi_title: "2. Visualización e Inteligencia de Negocio",
        serv_bi_desc: "Modelado y reportería avanzada para traducir millones de filas de datos en decisiones inmediatas.",
        serv_bi_b1: "<strong>Modelado Estrella:</strong> Arquitectura de modelos robustos en SQL Server con lógica DAX optimizada para refrescos rápidos (5-20 min).",
        serv_bi_b2: "<strong>Dashboards de Alto Impacto:</strong> Desarrollo en Power BI consumiendo APIs REST y base de datos locales/nube.",
        serv_bi_b3: "<strong>Gobernanza de Capacidades:</strong> Monitoreo de recursos Fabric para evitar throttling y gestionar licencias eficientemente.",
        serv_fin_title: "3. Inteligencia Financiera & Automatización",
        serv_fin_desc: "Optimización de la contabilidad analítica, auditoría automática del dato y aceleración contable.",
        serv_fin_b1: "<strong>Cierres Mensuales Acelerados:</strong> Reducción del tiempo de cierre del mes en un 50% (de 5 a 2.5 días hábiles).",
        serv_fin_b2: "<strong>Reportería Fiscal & OPEX:</strong> Automatización de reportes de retenciones fiscales y análisis OPEX vinculados al ERP Softland.",
        serv_fin_b3: "<strong>Productividad RPA:</strong> Desarrollo con Power Apps y Power Automate para eliminar procesos manuales administrativos.",

        // Projects Section
        proj_tag: "CASOS REALES",
        proj_title: "Ingeniería & Analítica Aplicada",
        tab_corp: "Casos Corporativos",
        tab_pers: "Laboratorio y Prácticas",
        proj_view_git: "Ver Código en Git",
        proj_view_doc: "Ver Documentación",
        
        proj_c1_title: "Gobernanza de BI y Git Integration en Fabric",
        proj_c1_desc: "Implementación de un flujo de desarrollo ordenado integrando archivos .pbip con Git en Azure DevOps y despliegues pipelines separados (Dev/Test/Prod) en Fabric.",
        proj_c1_imp_lbl: "Impacto:",
        proj_c1_imp_val: "Ciclo de lanzamiento reducido de 72h a ~30h promedio con total trazabilidad y control de fallos en producción.",
        
        proj_c2_title: "Migración Masiva de DWH y Reportería",
        proj_c2_desc: "Migración estructural de un DWH obsoleto en SSIS a un Microsoft Fabric Lakehouse. Migración hands-on de 80 reportes de Tableau/Excel a un entorno centralizado de Power BI.",
        proj_c2_imp_lbl: "Impacto:",
        proj_c2_imp_val: "Reducción del procesamiento de ingesta de 3h a 1h e incidencias post-actualización reducidas en un 90%.",
        
        proj_c3_title: "Reportería de Márgenes y OPEX Automatizado",
        proj_c3_desc: "Conexión directa de APIs REST y el ERP Softland con SQL Server para generar dashboards automatizados en Power BI, eliminando conciliaciones manuales de OPEX.",
        proj_c3_imp_lbl: "Impacto:",
        proj_c3_imp_val: "Ahorro de 24h mensuales por director de proyecto, margen bruto actualizado diario y cierre mensual 50% más rápido.",

        proj_c4_title: "Optimización en Fabric y Reducción de Costos Azure",
        proj_c4_desc: "Reducción sustancial del consumo de unidades de cómputo en Fabric aplicando cargas incrementales, particionamiento lógico, y robustos controles pre/post carga en Azure.",
        proj_c4_imp_lbl: "Impacto:",
        proj_c4_imp_val: "Evitación total de throttling de capacidades, reducción del 50% de uso redundante y control del presupuesto nube.",
        
        proj_p1_title: "Framework de Optimización DAX & Fabric Capacity",
        proj_p1_desc: "Conjunto de scripts de diagnóstico y mejores prácticas documentadas para auditar modelos de Power BI grandes, reduciendo el consumo de Capacity Units (CU).",
        
        proj_p2_title: "Ingesta y ETL Automático de APIs REST Públicas",
        proj_p2_desc: "Proyecto en Python para ingestar, formatear y almacenar datos transaccionales de APIs externas a base de datos relacionales SQL Server, controlando logs de fallas.",

        proj_p3_title: "Proyecto ETL de Formula 1 (Fabric & Scrape)",
        proj_p3_desc: "Extracción masiva de datos (carreras, qualys, prácticas) usando web scraping con PySpark y Pandas, implementada en Fabric bajo arquitectura Medallion (Bronze/Silver/Gold).",

        proj_p4_title: "Clasificación de Transacciones con ML",
        proj_p4_desc: "Modelo entrenado con descripciones y referencias contables para clasificar automáticamente estados de cuenta bancarios. Desarrollado en Streamlit y orquestado con Apache Airflow.",

        // Power BI Showcases & Restructured Tabs
        demo_tag: "GALERÍA ANALÍTICA",
        demo_title: "Portafolio de Reportes Power BI",
        tab_demos_practices: "Demos de Práctica Activas",
        tab_demos_corporate: "Implementaciones Corporativas (Confidenciales)",
        pbi_practices_disclaimer: "<strong>Aviso de Nivel Senior:</strong> Aunque mis implementaciones corporativas directas permanecen bajo estricta confidencialidad comercial, los siguientes tableros públicos demuestran mis capacidades de análisis de datos a nivel SENIOR, incorporando modelados complejos y lógicas analíticas avanzadas que desarrollo ordinariamente para juntas directivas de grandes empresas.",
        pbi_corporate_disclaimer: "<strong>Aviso de Privacidad Comercial:</strong> Con el fin de salvaguardar los datos confidenciales de las corporaciones donde he laborado, los siguientes reportes no pueden ser visualizados de forma pública interactiva. A continuación, presento capturas de interfaz representativas (mockups) y los detalles funcionales, la audiencia gerencial y las decisiones reales de negocio que estas soluciones de inteligencia empresarial habilitan.",
        demo_cta_interact: "Interactuar con Reporte",
        demo_btn_open: "Abrir Reporte Interactivo ↗",
        confidential_badge: "🔒 Confidencial",

        demo_f1_area: "Inteligencia Deportiva & ETL",
        demo_f1_title: "F1 Analytics: Dashboard del Campeonato",
        demo_f1_desc: "Reporte interactivo alimentado directamente del Lakehouse de Formula 1 en Fabric, analizando tiempos de vuelta, posiciones históricas y ratios de pits.",
        
        demo_c1_area: "World Championship 2026 - Ronda 1",
        demo_c1_title: "Visualización y Storytelling de Datos",
        demo_c1_desc: "Mi primera participación destacada en el Campeonato Mundial oficial de Microsoft, logrando mención de honor en optimización y modelado semántico de alta complejidad.",
        
        demo_c2_area: "World Championship 2026 - Ronda 2",
        demo_c2_title: "Analítica Corporativa & Dashboards Ejecutivos",
        demo_c2_desc: "Desarrollo interactivo enfocado en la conversión de negocio y agilidad operativa. Proyecto calificado por jueces expertos de la comunidad de Microsoft.",
        
        demo_c3_area: "World Championship 2026 - Ronda 3",
        demo_c3_title: "UI/UX Avanzado & UX de Consumo Ejecutivo",
        demo_c3_desc: "Dashboard centrado en jerarquías visuales limpias, con distribución armónica de gráficos de dispersión y navegación personalizada sin fricción.",

        demo_c_opex_area: "Finanzas & Dirección",
        demo_c_opex_title: "Reporte OPEX (Presupuesto vs. Real)",
        demo_c_opex_desc: "Auditoría automática de desviaciones operacionales y contables por departamento para directores financieros y gerencia general.",
        
        demo_c_prod_area: "Operaciones Industriales",
        demo_c_prod_title: "Monitoreo de Costo Unitario de Producción",
        demo_c_prod_desc: "Evaluación en tiempo real del costo de insumos y eficiencia de mano de obra en planta, midiendo la ejecución del plan diario de producción.",
        
        demo_c_pl_area: "Contabilidad Analítica",
        demo_c_pl_title: "P&L (Pérdidas y Ganancias) y Ratios Contables",
        demo_c_pl_desc: "Consolidación del Balance General, Estado de Resultados, y métricas financieras como Liquidez, Solvencia y Capital de Trabajo.",
        
        demo_c_sup_area: "Logística & Compras",
        demo_c_sup_title: "Salud del Inventario y Punto de Reorden",
        demo_c_sup_desc: "Control de stock disponible, alertas predictivas de agotamiento, análisis de velocidad de rotación de inventarios y reorden automático.",

        // Certifications Section
        cert_tag: "RESPALDO PROFESIONAL",
        cert_title: "Certificaciones Oficiales Microsoft",
        cert_subtitle: "Credenciales oficiales emitidas por Microsoft que respaldan mis habilidades en ingeniería de datos, analítica e inteligencia artificial.",
        cert_c1_title: "Azure Data Engineer Associate",
        cert_c1_issuer: "Microsoft Certified",
        cert_c2_title: "Fabric Analytics Engineer Associate",
        cert_c2_issuer: "Microsoft Certified",
        cert_c3_title: "Power BI Data Analyst Associate",
        cert_c3_issuer: "Microsoft Certified",
        cert_c4_title: "Azure AI Fundamentals",
        cert_c4_issuer: "Microsoft Certified",
        cert_btn_verify: "Verificar Credencial ↗",
        cert_comment_label: "Aplicación Laboral:",
        cert_c1_comment: "Uso esta credencial para optimizar pipelines en la nube, diseñar Lakehouses escalables y migrar entornos inestables SSIS locales hacia flujos Azure eficientes.",
        cert_c2_comment: "Me capacita para integrar almacenes de datos y Lakehouses en Microsoft Fabric, unificando flujos masivos de finanzas y ventas en una única verdad.",
        cert_c3_comment: "Modelado avanzado de datos y creación de cuadros de mando ejecutivos. Con ella lideré la migración de más de 230 reportes manuales a entornos gobernados.",
        cert_c4_comment: "Me brinda fundamentos sólidos para integrar inteligencia artificial en pipelines, automatizando la clasificación y lectura predictiva de datos contables.",
        stack_title: "Ecosistema & Stack Tecnológico",

        // Education Section (NEW)
        edu_tag: "CONOCIMIENTO RESPALDADO",
        edu_title: "Formación Académica",
        edu_badge_grad: "Último Año Cursado",
        edu_badge_active: "Cursando Activamente",
        edu_badge_compl: "Título Técnico",
        edu_badge_special: "Especialidades",
        edu_ac1_title: "Contaduría Pública y Finanzas",
        edu_ac1_school: "Universidad de Nicaragua",
        edu_ac1_desc: "Sólida formación en auditoría contable, estructuración fiscal nacional, conciliaciones bancarias complejas, estados financieros P&L e indicadores de OPEX.",
        edu_ac2_title: "Ingeniería en Computación",
        edu_ac2_school: "Universidad de Nicaragua",
        edu_ac2_desc: "Enfoque centrado en algoritmos avanzados de programación, bases de datos relacionales y no relacionales, análisis estructurado de sistemas y arquitectura de computadoras.",
        edu_ac3_title: "Técnico Medio en Contabilidad",
        edu_ac3_school: "Instituto Técnico de Nicaragua",
        edu_ac3_desc: "Formación técnica inicial en principios de contabilidad generalmente aceptados, registro diario de transacciones fiscales, inventarios y nóminas.",
        edu_ac4_title: "Certificaciones Técnicas Complementarias",
        edu_ac4_school: "Instituciones Oficiales & Microsoft Learn",

        // Experience Section (NEW)
        exp_tag: "HISTORIAL PROFESIONAL",
        exp_title: "Experiencia Laboral",
        exp_x1_title: "SQL & BI Developer Lead",
        exp_x1_desc: "Lidero el desarrollo de modelados semánticos de datos complejos y optimización de capacidades analíticas. Responsable directo de garantizar la consistencia analítica corporativa.",
        exp_x1_b1: "Implementación completa de Git Integration con Azure DevOps para versionado ordenado y despliegues pipelines Dev/Test/Prod de Power BI (.pbip).",
        exp_x1_b2: "Monitoreo y optimización diaria de la capacidad de Microsoft Fabric, bajando en un 50% incidentes de throttling sin degradar servicios para 350+ usuarios.",
        exp_x1_b3: "Diseño coordinado de KPIs contables de ventas y logística, erradicando discrepancias operativas y acelerando reportes de facturación de 72h a ~30h.",
        
        exp_x2_title: "Senior Data Analyst (Departamento de TI)",
        exp_x2_desc: "Lideré la modernización del área de Business Intelligence del holding corporativo (subsidiarias industriales, farmacéuticas y distribuidoras).",
        exp_x2_b1: "Migración exitosa hands-on de más de 80 reportes de Tableau y Excel manuales a Power BI, mejorando la usabilidad y gobernanza de datos analíticos.",
        exp_x2_b2: "Estructuración desde cero del Microsoft Fabric Lakehouse/Warehouse unificado, reemplazando un SSIS obsoleto e inestable.",
        exp_x2_b3: "Implementación de cargas incrementales de datos SQL, logrando acelerar las ingestas un 67% (procesamientos de 3h a 1h) con verificaciones automatizadas de errores.",
        
        exp_x3_title: "Asistente Contable & Analista Financiero",
        exp_x3_desc: "Encargado del registro, control y análisis contable para la toma de decisiones presupuestarias y de rentabilidad del grupo industrial.",
        exp_x3_b1: "Diseño de plantillas inteligentes en Excel que automatizaron cálculos de impuestos, retenciones nacionales y declaraciones fiscales (VET), ahorrando 1.5 días de carga operativa mensual.",
        exp_x3_b2: "Automatización y estandarización del control OPEX, OPEX variances, conciliaciones bancarias y de cuentas por cobrar/pagar, reduciendo el cierre contable mensual de 5 a 2.5 días hábiles.",
        exp_x3_b3: "Registros de amortizaciones, gastos financieros de subsidiarias y reportes de variaciones presupuestarias mensuales.",

        // Contact & Panel
        cont_tag: "HABLEMOS",
        cont_title: "Alineemos tu Infraestructura con tus Objetivos Comerciales",
        cont_desc: "¿Buscas automatizar tus reportes contables, migrar a la nube sin cargos de cómputo redundantes o construir una arquitectura escalable en Fabric? Agenda una conversación rápida.",
        cont_lbl_email: "Correo Electrónico Directo",
        cont_lbl_phone: "WhatsApp Directo",
        cont_lbl_loc: "Ubicación Actual",
        cont_btn_cv: "Descargar CV (Markdown)",
        
        frm_lbl_name: "Nombre Completo",
        frm_lbl_email: "Correo Electrónico Corporativo",
        frm_lbl_subj: "Asunto",
        frm_lbl_msg: "Mensaje",
        frm_btn_send: "Enviar Mensaje / Conectar",
        frm_success_msg: "¡Mensaje enviado con éxito! Me pondré en contacto contigo en menos de 24 horas hábiles.",
        foot_copyright: "© 2026 Richard Ampie Chamorro. Arquitectura e Inteligencia de Negocio con Impacto Financiero."
    },
    en: {
        // Navigation
        nav_about: "About Me",
        nav_services: "Specialties",
        nav_projects: "Portfolio",
        nav_demos: "Power BI Demos",
        nav_certs: "Certifications",
        nav_exp: "Experience",
        nav_contact: "Contact",
        
        // Hero Section
        hero_badge: "THE PERFECT SYNTHESIS OF DATA ENGINEERING, ANALYTICS, AND BUSINESS LOGIC",
        hero_title: 'Designing data architectures that drive your business\'s <span class="text-gradient">financial health</span>',
        hero_subtitle: "Richard Ampie Chamorro | Senior Data Analyst & Data Engineer",
        hero_description: "Microsoft Certified Data Engineer & Analytics Engineer. I design and deploy end-to-end solutions in Azure, Fabric, and Power BI that automate complex pipelines, cut capacity costs, and standardize analytics governance with a native financial perspective.",
        hero_cta_primary: "Explore Success Cases",
        hero_cta_secondary: "View Power BI Demos",
        hero_certs_label: "Official Microsoft Certifications:",
        hero_roi_title: "Financial Optimization",

        // About Me Section
        about_tag: "OVERVIEW",
        about_title: "The Edge of a Hybrid Profile",
        about_lead: "Many organizations suffer from the same problem: their data engineers don't understand the financial statements they process, and their financial teams don't know how to optimize a database. My value proposition closes that gap entirely.",
        about_p1: "My career began at the core of finance and business accounting. I natively understand business logic, budget variances (OPEX/CAPEX), and the critical importance of fiscal consistency. I later translated this commercial insight into the technical field, becoming a Microsoft Certified Specialist in advanced analytical infrastructure.",
        about_p2: "Whether migrating analytics reports to governed environments, cutting Microsoft Fabric capacity costs in half, or structuring databases from scratch on SQL Server and PySpark, my focus is always the same: creating tangible value, saving operational time, and ensuring a single version of commercial truth.",

        // Outcomes / Metrics
        out_time_title: "Release Lead Time",
        out_time_desc: "Standardized BI DevOps using Git (Azure DevOps) and Dev/Test/Prod pipelines (cut cycle from 72h to ~30h).",
        out_mig_title: "Reports Migrated",
        out_mig_desc: "Hands-on migration from Tableau and Excel to Power BI, reducing post-update incidents by 90%.",
        out_ing_title: "Ingestion Time",
        out_ing_desc: "Migrated to Fabric Lakehouse/Warehouse from unstable SSIS, speeding up data ingestion from 3h to 1h.",
        out_cap_title: "Capacity Costs",
        out_cap_desc: "Optimized Microsoft Fabric capacity consumption through incremental loads and DAX/SQL query tuning.",

        // Services Section
        serv_tag: "WHAT I DO",
        serv_title: "Specialties & Strategic Solutions",
        serv_eng_title: "1. Architecture & Data Engineering",
        serv_eng_desc: "Building solid, secure, and scalable foundations for enterprise data pipelines.",
        serv_eng_b1: "<strong>Governance & DevOps:</strong> Git version control (Azure DevOps), continuous deployment of reports (.pbip), and workspace administration.",
        serv_eng_b2: "<strong>Pipeline Orchestration:</strong> Replacing traditional SSIS workloads with agile pipelines in Fabric Data Factory.",
        serv_eng_b3: "<strong>Scalable Processing:</strong> Ingestion and data transformation using PySpark / Python Notebooks and SQL.",
        serv_bi_title: "2. Visualization & Business Intelligence",
        serv_bi_desc: "Advanced modeling and reporting to translate millions of rows of data into immediate decisions.",
        serv_bi_b1: "<strong>Star Schema Modeling:</strong> Architecture of robust models in SQL Server with DAX logic optimized for fast updates (5-20 min).",
        serv_bi_b2: "<strong>High-Impact Dashboards:</strong> Power BI development consuming REST APIs and local/cloud databases.",
        serv_bi_b3: "<strong>Capacity Governance:</strong> Monitoring Fabric resources to mitigate throttling and manage licenses efficiently.",
        serv_fin_title: "3. Financial Intelligence & Automation",
        serv_fin_desc: "Optimizing managerial accounting, data integrity auditing, and closing acceleration.",
        serv_fin_b1: "<strong>Automated Month-End Close:</strong> Cutting monthly accounting close times by 50% (from 5 to 2.5 business days).",
        serv_fin_b2: "<strong>Tax & OPEX Reporting:</strong> Automation of tax withholding reports and OPEX analysis connected directly to Softland ERP.",
        serv_fin_b3: "<strong>RPA Productivity:</strong> Development with Power Apps and Power Automate to eliminate manual admin processes.",

        // Projects Section
        proj_tag: "REAL CASES",
        proj_title: "Applied Engineering & Analytics",
        tab_corp: "Corporate Cases",
        tab_pers: "Labs & Practices",
        proj_view_git: "View Code on Git",
        proj_view_doc: "View Documentation",
        
        proj_c1_title: "BI DevOps and Git Integration in Fabric",
        proj_c1_desc: "Implementation of a governed development cycle integrating .pbip files with Git in Azure DevOps and deploying via separated Fabric deployment pipelines (Dev/Test/Prod).",
        proj_c1_imp_lbl: "Impact:",
        proj_c1_imp_val: "Release cycle reduced from 72h to ~30h average with full auditability and zero production failures.",
        
        proj_c2_title: "Massive DWH and Reporting Migration",
        proj_c2_desc: "Structural migration of an legacy DWH in SSIS to Microsoft Fabric Lakehouse. Hands-on migration of 80 reports from Tableau/Excel to Power BI.",
        proj_c2_imp_lbl: "Impact:",
        proj_c2_imp_val: "Ingestion time cut from 3 hours to 1 hour, and post-update reporting incidents down by 90%.",
        
        proj_c3_title: "Margin Reporting & Automated OPEX Monitor",
        proj_c3_desc: "Direct connection of REST APIs and Softland ERP with SQL Server to generate fully automated margins and OPEX dashboards in Power BI, replacing manual steps.",
        proj_c3_imp_lbl: "Impact:",
        proj_c3_imp_val: "Saved 24h monthly per project director, gross margins updated daily, and month-end close 50% faster.",

        proj_c4_title: "Fabric Tuning & Azure Cloud Cost Control",
        proj_c4_desc: "Substantial reduction in Fabric compute consumption using incremental logic, semantic partitioning, and proactive validation scripts in Azure.",
        proj_c4_imp_lbl: "Impact:",
        proj_c4_imp_val: "Complete prevention of compute capacity throttling, eliminating 50% of redundant workloads and optimizing clouds costs.",
        
        proj_p1_title: "DAX Optimization Framework & Fabric Capacity Lab",
        proj_p1_desc: "A collection of diagnostic scripts and documented best practices to profile large Power BI models, reducing Fabric Capacity Unit (CU) spikes.",
        
        proj_p2_title: "REST APIs Automated Ingestion & ETL Pipeline",
        proj_p2_desc: "Python-based project to fetch, clean, and write transactional data from public REST APIs to SQL Server relational databases with automated error logs.",

        proj_p3_title: "Formula 1 Medallion ETL Pipeline Project",
        proj_p3_desc: "Massive web scraping and data processing within Microsoft Fabric using Medallion Architecture (Bronze/Silver/Gold). Automated using PySpark and Pandas.",

        proj_p4_title: "ML Financial Transaction Classifier",
        proj_p4_desc: "Data Science laboratory. Categorizes bank statement transactions using a Machine Learning model trained on reference text descriptions. Automated via Airflow on Streamlit.",

        // Power BI Showcases & Restructured Tabs
        demo_tag: "ANALYTICS SHOWCASE",
        demo_title: "Power BI Reporting Portfolio",
        tab_demos_practices: "Active Practice Demos",
        tab_demos_corporate: "Corporate Implementations (Confidential)",
        pbi_practices_disclaimer: "<strong>Senior Level Disclaimer:</strong> While my direct corporate work remains protected under strict NDA, these public dashboards demonstrate advanced, SENIOR-level Business Intelligence capabilities, complex modeling, and robust analytical layouts that I ordinarily design for executive boards of enterprise clients.",
        pbi_corporate_disclaimer: "<strong>Corporate Privacy Notice:</strong> To safeguard corporate data confidentiality, these reports cannot be interacted with publicly. Below, I present representative UI mockups showing real business capabilities, target audiences, and operational decisions enabled.",
        demo_cta_interact: "Interact with Dashboard",
        demo_btn_open: "Open Live Report ↗",
        confidential_badge: "🔒 Confidential",

        demo_f1_area: "Sports Intelligence & ETL",
        demo_f1_title: "F1 Analytics: Championship Dashboard",
        demo_f1_desc: "Interactive dashboard fed directly from the Formula 1 Lakehouse in Fabric, analyzing lap times, pitstop speeds, and drivers head-to-head metrics.",
        
        demo_c1_area: "World Championship 2026 - Round 1",
        demo_c1_title: "Data Visualization & Executive Storytelling",
        demo_c1_desc: "My first outstanding participation in Microsoft's official World Championship, achieving an honorable mention for semantics modeling and visuals.",
        
        demo_c2_area: "World Championship 2026 - Round 2",
        demo_c2_title: "Corporate Analytics & Dynamic UI",
        demo_c2_desc: "Dashboard focused on business metrics and operational agility. Certified and reviewed by community experts and Microsoft judges.",
        
        demo_c3_area: "World Championship 2026 - Round 3",
        demo_c3_title: "Advanced UX/UI & Executive Interaction",
        demo_c3_desc: "Dashboard centered on clean visual layouts, integrating scatter charts, custom slicers, and seamless navigation states.",

        demo_c_opex_area: "Finance & Executive",
        demo_c_opex_title: "OPEX Financial Performance Report",
        demo_c_opex_desc: "Automated auditing of cost variances against budget per department, designed for Chief Financial Officers and General Directors.",
        
        demo_c_prod_area: "Industrial Operations",
        demo_c_prod_title: "Unit Cost Production Monitoring",
        demo_c_prod_desc: "Real-time evaluation of raw materials costs and plant labor efficiency, measuring performance against the master production schedule.",
        
        demo_c_pl_area: "Managerial Accounting",
        demo_c_pl_title: "P&L (Profit & Loss) and Ratios Report",
        demo_c_pl_desc: "Consolidation of Balance Sheet, Income Statement, and financial ratios such as EBITDA, working capital, and leverage indicators.",
        
        demo_c_sup_area: "Logistics & Purchasing",
        demo_c_sup_title: "Inventory Health & Reorder Point Control",
        demo_c_sup_desc: "Inventory audits, automatic reorder warnings, stock turnover velocity, and obsolete inventory cash impact analysis.",

        // Certifications Section
        cert_tag: "TECHNICAL CREDIBILITY",
        cert_title: "Official Microsoft Certifications",
        cert_subtitle: "Credentials issued directly by Microsoft validating my advanced data engineering, AI and analytics capabilities.",
        cert_c1_title: "Azure Data Engineer Associate",
        cert_c1_issuer: "Microsoft Certified",
        cert_c2_title: "Fabric Analytics Engineer Associate",
        cert_c2_issuer: "Microsoft Certified",
        cert_c3_title: "Power BI Data Analyst Associate",
        cert_c3_issuer: "Microsoft Certified",
        cert_c4_title: "Azure AI Fundamentals",
        cert_c4_issuer: "Microsoft Certified",
        cert_btn_verify: "Verify Credential ↗",
        cert_comment_label: "Practical Work Use:",
        cert_c1_comment: "I leverage this certification to orchestrate cloud data pipelines, design scalable Lakehouses, and migrate unstable local SSIS jobs to Azure cloud workloads.",
        cert_c2_comment: "Empowers me to unificate business warehouses and databases into Fabric, consolidating mass transaction fields into a single version of truth.",
        cert_c3_comment: "Advanced data modeling and dashboarding. Enabled me to lead the governed migration of over 230 manual worksheets into structured environments.",
        cert_c4_comment: "Provides a solid framework to integrate machine learning within cloud pipelines, enabling smart transaction categorization and OCR text processing.",
        stack_title: "Ecosystem & Technical Stack",

        // Education Section (NEW)
        edu_tag: "ACCREDITED KNOWLEDGE",
        edu_title: "Academic Background",
        edu_badge_grad: "Final Year Completed",
        edu_badge_active: "Active Studies",
        edu_badge_compl: "Technical Degree",
        edu_badge_special: "Specializations",
        edu_ac1_title: "Public Accounting and Finance",
        edu_ac1_school: "University of Nicaragua",
        edu_ac1_desc: "In-depth training in financial auditing, tax compliance, corporate statement structures, P&L cash flow and budget variance controls.",
        edu_ac2_title: "Computer Engineering",
        edu_ac2_school: "University of Nicaragua",
        edu_ac2_desc: "Focus on algorithms, databases structures (SQL/NoSQL), object-oriented programming, systems analysis and computers logic.",
        edu_ac3_title: "Accounting Technician",
        edu_ac3_school: "Technical Institute of Nicaragua",
        edu_ac3_desc: "Technical diploma covering general accounting principles, fiscal ledgers, ledger registry, inventory controls and basic payrolls.",
        edu_ac4_title: "Technical Specializations",
        edu_ac4_school: "Official Entities & Microsoft Learn Training",

        // Experience Section (NEW)
        exp_tag: "PROFESSIONAL HISTORY",
        exp_title: "Work Experience",
        exp_x1_title: "SQL & BI Developer Lead",
        exp_x1_desc: "Lead complex semantic data modeling and capacity performance tuning. Directly responsible for maintaining business intelligence governance.",
        exp_x1_b1: "Deploied Git Integration with Azure DevOps for structured branch control and continuous delivery pipelines of Power BI development files (.pbip).",
        exp_x1_b2: "Proactively optimized Microsoft Fabric capacity compute utilization, decreasing throttling alerts by 50% for over 350 active dashboard consumers.",
        exp_x1_b3: "Standardized sales and inventory KPIs with executives, eliminating database discrepancies and accelerating billing load latency from 72h to ~30h.",
        
        exp_x2_title: "Senior Data Analyst (IT Department)",
        exp_x2_desc: "Orchestrated the modernization of reporting and cloud analytics across the group (industrial, logistics, and pharmaceutical subsidiaries).",
        exp_x2_b1: "Migrated 80+ legacy reports hands-on from Tableau, Excel, and PDFs into Power BI, improving security and performance.",
        exp_x2_b2: "Engineered from scratch Grupo Monisa's unified Microsoft Fabric Lakehouse, decommissioning unstable SSIS jobs.",
        exp_x2_b3: "Designed incremental loading routines for transactional servers, speeding up ETL execution by 67% (from 3h down to 1h) with strict quality audits.",
        
        exp_x3_title: "Accounting Assistant & Financial Analyst",
        exp_x3_desc: "Responsible for posting, reconciling, and auditing managerial accounting transactions to support budget control and costs variance analysis.",
        exp_x3_b1: "Designed advanced Excel spreadsheets that automated national tax withholding calculations and VET tax forms, saving 1.5 days of manual tasks per cycle.",
        exp_x3_b2: "Automated monthly cash reconciliations, OPEX variance analysis, and AP/AR postings, cutting month-end closing times from 5 down to 2.5 business days.",
        exp_x3_b3: "Managed expense ledgers, depreciation postings, cost-benefit allocations, and monthly budget comparisons.",

        // Contact & Panel
        cont_tag: "CONTACT ME",
        cont_title: "Aligning your Infrastructure with your Business Goals",
        cont_desc: "Looking to automate accounting tasks, migrate to a cost-effective cloud DWH, or scale your Fabric ecosystem? Let's connect and discuss.",
        cont_lbl_email: "Direct Email Address",
        cont_lbl_phone: "Direct WhatsApp",
        cont_lbl_loc: "Current Location",
        cont_btn_cv: "Download CV (Markdown)",
        
        frm_lbl_name: "Full Name",
        frm_lbl_email: "Corporate Email Address",
        frm_lbl_subj: "Subject",
        frm_lbl_msg: "Message",
        frm_btn_send: "Send Message / Connect",
        frm_success_msg: "Message sent successfully! I will reach out to you within 24 business hours.",
        foot_copyright: "© 2026 Richard Ampie Chamorro. Data Architecture & Business Intelligence with Financial Impact."
    }
};

/* --- LANGUAGE ENGINE LOGIC --- */
let currentLanguage = 'es';

function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem('lang', lang);
    
    // Toggle active state on buttons
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element is an input placeholder
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Recalculate carousels after lang change as heights/widths might shift text
    resetCarousels();
}

// Auto Initialize Language
function initLanguage() {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    } else {
        // Detect browser language
        const userLang = navigator.language || navigator.userLanguage;
        const defaultLang = userLang.startsWith('en') ? 'en' : 'es';
        changeLanguage(defaultLang);
    }
}

/* --- MOBILE NAVIGATION PANEL --- */
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

/* --- PROJECT/PORTFOLIO CATEGORY TOGGLE SYSTEM (V4 Carruseles) --- */
function togglePortfolioCategory(category) {
    document.querySelectorAll('#projects .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${category}`).classList.add('active');
    
    const corpContainer = document.getElementById('carousel-corporate-container');
    const persContainer = document.getElementById('carousel-personal-container');
    
    if (category === 'corporate') {
        persContainer.classList.add('d-none');
        corpContainer.classList.remove('d-none');
        carouselPositions.corp = 0;
        updateCarouselTrack('corp');
    } else {
        corpContainer.classList.add('d-none');
        persContainer.classList.remove('d-none');
        carouselPositions.pers = 0;
        updateCarouselTrack('pers');
    }
}

/* --- POWER BI GALLERY DEMOS TOGGLE SYSTEM (V4) --- */
function toggleDemosCategory(category) {
    document.querySelectorAll('#demos .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-pbi-${category}`).classList.add('active');
    
    const practicesContainer = document.getElementById('demos-practices-container');
    const corpContainer = document.getElementById('carousel-pbi-corporate-container');
    const practicesDisclaimer = document.getElementById('pbi-practices-disclaimer');
    const corpDisclaimer = document.getElementById('pbi-corporate-disclaimer');
    
    if (category === 'practices') {
        corpContainer.classList.add('d-none');
        corpDisclaimer.classList.add('d-none');
        practicesContainer.classList.remove('d-none');
        practicesDisclaimer.classList.remove('d-none');
        carouselPositions.pbipract = 0;
        updateCarouselTrack('pbipract');
    } else {
        practicesContainer.classList.add('d-none');
        practicesDisclaimer.classList.add('d-none');
        corpContainer.classList.remove('d-none');
        corpDisclaimer.classList.remove('d-none');
        carouselPositions.pbicorp = 0;
        updateCarouselTrack('pbicorp');
    }
}

/* --- MULTI-CAROUSEL SYSTEM LOGIC (V4) --- */
const carouselPositions = {
    corp: 0,
    pers: 0,
    pbipract: 0,
    pbicorp: 0,
    certs: 0
};

const carouselTracks = {
    corp: 'carousel-corp-track',
    pers: 'carousel-pers-track',
    pbipract: 'carousel-pbipract-track',
    pbicorp: 'carousel-pbicorp-track',
    certs: 'carousel-certs-track'
};

function getVisibleSlidesCount() {
    const width = window.innerWidth;
    if (width <= 768) return 1; // 1 slide on mobile
    if (width <= 1200) return 2; // 2 slides on tablet/small laptops
    return 3; // 3 slides on large viewports
}

function moveCarousel(carouselId, direction) {
    const trackId = carouselTracks[carouselId];
    const track = document.getElementById(trackId);
    if (!track) return;
    
    const totalSlides = track.children.length;
    const visibleSlides = carouselId === 'certs' && window.innerWidth > 1200 ? 3 : getVisibleSlidesCount();
    const maxIndex = Math.max(0, totalSlides - visibleSlides);
    
    let currentIndex = carouselPositions[carouselId] + direction;
    
    // Bounds check
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }
    
    carouselPositions[carouselId] = currentIndex;
    updateCarouselTrack(carouselId);
}

function updateCarouselTrack(carouselId) {
    const trackId = carouselTracks[carouselId];
    const track = document.getElementById(trackId);
    if (!track) return;
    
    const index = carouselPositions[carouselId];
    const slide = track.querySelector('.carousel-slide');
    if (!slide) return;
    
    const slideWidth = slide.getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

function resetCarousels() {
    // Reset positions to 0 and re-calculate offsets
    Object.keys(carouselPositions).forEach(key => {
        carouselPositions[key] = 0;
        updateCarouselTrack(key);
    });
}

// Re-calculate carousel positions on window resizing (for responsivity)
window.addEventListener('resize', () => {
    resetCarousels();
});

/* --- METRICS / COUNTERS ANIMATOR --- */
const outcomeNumbers = document.querySelectorAll('.outcome-num');
let startedCounters = false;

function startCounters() {
    if (startedCounters) return;
    startedCounters = true;
    
    outcomeNumbers.forEach(counter => {
        const targetValue = parseInt(counter.getAttribute('data-target'), 10);
        const originalText = counter.innerText; // Holds "-" or "+" sign
        const isNegative = originalText.startsWith('-');
        const isPositive = originalText.startsWith('+');
        
        let currentValue = 0;
        const duration = 1500; // 1.5 seconds animation
        const steps = 60;
        const increment = targetValue / steps;
        const stepTime = duration / steps;
        
        let currentStep = 0;
        const timer = setInterval(() => {
            currentStep++;
            currentValue += increment;
            
            if (currentStep >= steps) {
                clearInterval(timer);
                counter.innerText = (isNegative ? '-' : isPositive ? '+' : '') + targetValue + (counter.innerText.endsWith('%') ? '%' : isNegative ? '%' : '');
            } else {
                counter.innerText = (isNegative ? '-' : isPositive ? '+' : '') + Math.floor(currentValue) + (originalText.endsWith('%') ? '%' : '');
            }
        }, stepTime);
    });
}

// Intersection Observer to trigger metrics counters when scrolled into viewport
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounters();
        }
    });
}, { threshold: 0.1 });

const statsSection = document.querySelector('.outcomes-sidebar');
if (statsSection) {
    statsObserver.observe(statsSection);
}

/* --- FORM SUBMISSION SIMULATION --- */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const submitBtn = document.getElementById('btn-submit-form');
    
    if (!form || !successMsg || !submitBtn) return;
    
    // Add loading state
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerText = currentLanguage === 'es' ? 'Enviando...' : 'Sending...';
    
    // Simulate API POST / Form submission latency
    setTimeout(() => {
        form.classList.add('d-none');
        successMsg.classList.remove('d-none');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        // Reset form inputs
        form.reset();
    }, 1500);
}

// Initialize components on load
window.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    resetCarousels();
});
