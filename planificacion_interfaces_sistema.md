# Planificación de Interfaces: Sistema de Gestión de Cambios

Con base en el flujo definido en el documento "G04-Flujo de Gestión de Cambios", se ha planificado el diseño de las interfaces de usuario (UI) para un sistema informático que automatice y gestione dicho proceso. El sistema debe soportar los diferentes roles y etapas del flujograma.

## 1. Roles del Sistema

Las interfaces deben adaptarse a los permisos y necesidades de los siguientes roles:
*   **Solicitante:** Usuario que reporta incidencias o mejoras.
*   **Director del Proyecto / Líder de Configuración (Ej. Sergio Colque):** Encargado de validar, clasificar y aprobar.
*   **Arquitecto de Software / Analista (Ej. Diego Castillo):** Encargado de analizar el impacto.
*   **Desarrollador / Implementador (Ej. Gregory Huanca):** Encargado de realizar los cambios en el código.
*   **Tester / Verificador de Calidad (Ej. Cesar Camac):** Encargado de probar los cambios.

## 2. Mapa de Interfaces Propuestas

A continuación se detallan las vistas principales que conformarán el sistema:

### 2.1. Autenticación y Dashboard
*   **UI-01: Pantalla de Login:** Acceso seguro al sistema mediante credenciales.
*   **UI-02: Dashboard Principal:** Panel de control adaptativo según el rol.
    *   *Métricas:* Solicitudes abiertas, en proceso, cerradas, rechazadas.
    *   *Bandeja de Tareas:* Notificaciones de acciones requeridas (ej. "Tienes 2 solicitudes pendientes de aprobación").

### 2.2. Módulo de Solicitudes (Solicitante)
*   **UI-03: Formulario de Nueva Solicitud de Cambio (SC):**
    *   Campos: Título, Tipo (Incidencia/Mejora), Descripción detallada, Justificación, ECS afectado (opcional para el solicitante), Archivos adjuntos.
*   **UI-04: Mis Solicitudes:** Vista de tabla donde el solicitante puede ver el estado actual de las solicitudes que ha registrado (Pendiente, En Análisis, Aprobada, Implementada, Rechazada).

### 2.3. Módulo de Gestión y Clasificación (Director del Proyecto)
*   **UI-05: Bandeja de Entrada de Solicitudes:** Lista de nuevas solicitudes esperando validación.
*   **UI-06: Detalle y Validación de SC:**
    *   Vista detallada de la solicitud.
    *   Controles para: Validar alineación con el proyecto, Asignar número de seguimiento formal, Clasificar y Derivar al Arquitecto, o Rechazar/Descartar notificando al solicitante.

### 2.4. Módulo de Análisis de Impacto (Arquitecto de Software)
*   **UI-07: Panel de Análisis de Impacto:**
    *   Vista de las solicitudes derivadas.
    *   Formulario para registrar el análisis: Identificación de ECS afectados, estimación de Costos, Riesgos y Beneficios.
    *   Control para categorizar: ¿Es un Cambio Mayor o Menor?

### 2.5. Módulo de Aprobación (Comité / Director)
*   **UI-08: Sala de Revisión (Aprobación):**
    *   Si es *Cambio Menor*: Botones de aprobación rápida por el Director.
    *   Si es *Cambio Mayor*: Interfaz para registrar la decisión del equipo (Acta de reunión, votos o consenso).
    *   Controles de decisión: Aprobar, Rechazar (con campo obligatorio de justificación).
    *   Sección para Asignar Responsables (Desarrollador y Tester) y recursos a los cambios aprobados.

### 2.6. Módulo de Implementación (Desarrollador)
*   **UI-09: Panel de Tareas de Desarrollo:**
    *   Lista de cambios aprobados y asignados al desarrollador.
*   **UI-10: Registro de Implementación:**
    *   Interfaz para que el desarrollador indique que el cambio se ha realizado.
    *   Campos para incluir: Rama de Git utilizada (ej. `fix/SC-01`), enlace al Pull Request (PR), comentarios técnicos.
    *   Botón para enviar a fase de Pruebas.

### 2.7. Módulo de Pruebas y QA (Tester)
*   **UI-11: Panel de Pruebas Pendientes:** Lista de implementaciones listas para ser verificadas.
*   **UI-12: Registro de Resultados de Pruebas:**
    *   Formulario para indicar si las pruebas fueron exitosas o fallidas.
    *   Si fallan: Campo para detallar los errores y botón para devolver la tarea al Desarrollador.
    *   Si son exitosas: Botón para aprobar la implementación y pasar a validación final.

### 2.8. Módulo de Despliegue y Cierre (Director del Proyecto)
*   **UI-13: Verificación y Versionado:**
    *   Vista para que el Director valide que el cambio cumple lo solicitado.
    *   Controles para aplicar el cambio de manera oficial (Merge a main).
    *   Formulario para registrar la nueva versión del sistema (ej. v1.1) y actualizar el Cuadro de Control de Configuración.
*   **UI-14: Cierre de Solicitud:**
    *   Confirmación final que dispara la notificación de éxito al Solicitante y marca la Solicitud como Completada/Cerrada.

## 3. Consideraciones de UX (Experiencia de Usuario)
*   **Trazabilidad Visual:** Incorporar en la vista de detalle de cada SC una barra de progreso o diagrama de línea de tiempo que muestre en qué paso del "Flujo de Gestión de Cambios" se encuentra actualmente.
*   **Notificaciones In-App y Email:** Alertas automáticas en cada transición de estado (ej. "La solicitud SC-05 ha sido aprobada y se te ha asignado su implementación").
*   **Accesibilidad y Diseño Responsivo:** El sistema debe ser utilizable tanto en monitores de escritorio como en dispositivos móviles (especialmente para consultas rápidas o aprobaciones menores).