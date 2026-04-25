# GestioCambios: Sistema de Gestión de Cambios (G04)

**GestioCambios** es una plataforma web diseñada para automatizar y gestionar el ciclo de vida completo de las solicitudes de cambio (SC) en proyectos de software. Basado en un flujo de trabajo estructurado y auditable, el sistema garantiza la trazabilidad desde el reporte inicial hasta el despliegue final y cierre de la solicitud.

## 🚀 Funcionalidades Principales

El sistema se organiza en módulos especializados que responden a las etapas del flujo de gestión de cambios:

### 1. Control de Acceso y Dashboard Adaptativo
*   **Autenticación Segura:** Acceso restringido mediante credenciales.
*   **Panel de Control Centralizado:** Visualización de métricas críticas (solicitudes abiertas, en proceso, cerradas y rechazadas) y una bandeja de acciones pendientes personalizada según el rol del usuario.

### 2. Gestión de Solicitudes (Solicitante)
*   **Registro de SC:** Formulario detallado para reportar incidencias o mejoras, incluyendo justificación técnica y elementos de configuración (ECS) afectados.
*   **Seguimiento en Tiempo Real:** Historial personal donde el solicitante puede verificar el estado actual de sus peticiones (Pendiente, En Análisis, Aprobada, etc.).

### 3. Validación y Clasificación (Director del Proyecto)
*   **Bandeja de Entrada Administrativa:** Centralización de nuevas solicitudes para su validación inicial.
*   **Categorización:** Clasificación de cambios (Correctivo, Evolutivo, etc.) y asignación formal de números de seguimiento.

### 4. Análisis de Impacto (Arquitecto de Software)
*   **Evaluación Técnica:** Identificación precisa de ECS afectados, estimación de costos en horas-hombre y evaluación de riesgos/beneficios.
*   **Categorización de Impacto:** Determinación de si el cambio es "Mayor" (requiere comité) o "Menor" (aprobación rápida).

### 5. Flujo de Aprobación (Comité / Director)
*   **Sala de Revisión:** Interfaz para registrar decisiones del comité, justificaciones de aprobación o rechazo, y asignación de responsables para la ejecución (Desarrollador y Tester).

### 6. Implementación y Registro (Desarrollador)
*   **Gestión de Tareas:** Panel con los cambios aprobados listos para desarrollo.
*   **Evidencia Técnica:** Registro de ramas de Git, Pull Requests y comentarios técnicos antes del envío a QA.

### 7. Control de Calidad y Pruebas (QA / Tester)
*   **Verificación Formal:** Registro de resultados de pruebas (exitosas o fallidas) con carga de evidencias para asegurar el cumplimiento de los requisitos.

### 8. Despliegue, Versionado y Cierre (Director)
*   **Control de Configuración:** Verificación final previa al merge a la rama principal.
*   **Gestión de Versiones:** Registro de la nueva versión del sistema (ej. v1.2.0) y cierre formal con notificación al solicitante.

## 👥 Roles del Sistema
El sistema soporta permisos y vistas diferenciadas para 5 roles clave:
*   **Solicitante:** Reporta y hace seguimiento.
*   **Director del Proyecto:** Valida, aprueba cambios menores y coordina el despliegue.
*   **Arquitecto de Software:** Evalúa el impacto técnico.
*   **Desarrollador:** Implementa los cambios aprobados.
*   **Tester (QA):** Verifica la calidad de la implementación.

## 🛠️ Tecnologías Utilizadas
*   **Frontend:** HTML5, JavaScript Vanilla.
*   **Estilos:** CSS3 con un **Design System** personalizado (Premium Dark Mode).
*   **Diagramación:** PlantUML para el modelado de procesos y arquitectura.
*   **CI/CD:** GitHub Actions para el despliegue automatizado en GitHub Pages.

## 📂 Estructura del Proyecto
*   `/index.html`: Punto de entrada e índice de interfaces.
*   `/styles.css`: Sistema de diseño global.
*   `/sidebar.js`: Componente de navegación dinámica.
*   `/diagramas/`: Contiene la documentación técnica en PlantUML (Procesos AS-IS/TO-BE y Arquitectura de Paquetes).
*   `/.github/workflows/`: Configuración de despliegue automatizado.

---
*Desarrollado para la gestión eficiente del ciclo de vida de software - 2026*
