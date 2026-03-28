# 🔐 SISTEMA DE GESTIÓN DE ASISTENCIA "COLEGIO SAN JOSÉ"

## 🎯 Objetivo
Diseñar y desarrollar un ecosistema  orientado a la transformación del Colegio San José, con el objetivo de automatizar el control de asistencia para 1.200 estudiantes y 60 docentes. La solución debe reducir el tiempo de registro a menos de 2 minutos mediante una arquitectura responsive (Mobile/PC), eliminando el 30% de la carga administrativa manual y garantizando la disponibilidad de datos en tiempo real para la toma de decisiones inmediata de la coordinación académica.


## 👥 Integrantes
* **@deivi18contreras** - Deivi Contreras 
* **@mikeAbril** - Jaime Carreño 
* **@Brahian0W** - Brahiam Ramirez 

## 🛠️ Stack Tecnológico (Estándares)

### **Backend (backend)**
* **Runtime:** Node.js (LTS) con arquitectura de **Módulos ECMAScript (ESM)**.
* **Framework:** Express.js con manejo de errores centralizado.
* **Persistencia:** MongoDB + Mongoose (Modelos **PascalCase**).
* **Estructura:** Arquitectura directa por carpetas de funcionalidad (Sin carpeta `/src`).

### **Frontend (Num-Front)**
* **Framework:** Vue 3 (Composition API) + Vite.
* **UI Library:** Quasar Framework (Optimizado para Móvil/PC).
* **Gestión de Estado:** LocalStorage para persistencia funcional de sesión.
## 📂 Arquitectura de Carpetas
```text
backend/                     front/
├── controllers/              ├── src/
├── database/                 │   ├── layouts/
├── models/                   │   ├── router/
├── routes/                   │   ├── services/
└── middlewares/              │   └── views/
```
## 📋 Configuración de Git Project (Tasks & Hours)

---

### **[HUS-01] Autenticación (Login) - 3.0h Totales**

| Tarea | Descripción Técnica y Criterios de Aceptación | Responsable | Esfuerzo |
| :--- | :--- | :--- | :--- |
| **[HUS-01-T1]** | **Formulario Login Quasar:** (C1) Validar que el correo tenga formato válido y dominio obligatorio `@sanjose.edu.co`. | @mikeAbril | 0.5h |
| **[HUS-01-T2]** | **Errores y Recuperación:** (C2) Mostrar mensaje genérico de error y (C3) habilitar enlace de recuperación de contraseña. | @Brahian0W | 0.5h |
| **[HUS-01-T3]** | **Persistencia LocalStorage:** Implementación de seguridad para mantener la sesión funcional tras recargar el navegador. | @mikeAbril | 1.0h |
| **[HUS-01-T4]** | **Lógica de Bloqueo (Backend):** (C4) Bloquear cuenta temporalmente por 15 minutos tras 3 intentos fallidos. | @deivi18contreras | 1.0h |

---

### **[HUS-02] Registro de Usuarios - 2.5h Totales**

| Tarea | Descripción Técnica y Criterios de Aceptación | Responsable | Esfuerzo |
| :--- | :--- | :--- | :--- |
| **[HUS-02-T1]** | **Formulario de Registro:** (C1) Captura de Nombre completo, Documento, Correo, Rol (Docente/Admin) y Contraseña. | @Brahian0W | 0.5h |
| **[HUS-02-T2]** | **Esquema Mongoose (Backend):** (C3) Verificar en la DB que el correo o documento de identidad no existan previamente. | @deivi18contreras | 1.0h |
| **[HUS-02-T3]** | **Política de Seguridad:** (C2) Validar contraseña: mín 8 carac, una mayúscula, un número y un carácter especial. | @deivi18contreras | 0.5h |
| **[HUS-02-T4]** | **Correo de Bienvenida:** (C4) Simular envío de instrucciones iniciales de uso al finalizar el registro exitoso. | @deivi18contreras | 0.5h |

---

### **[HUS-03] Dashboard Principal - 2.5h Totales**

| Tarea | Descripción Técnica y Criterios de Aceptación | Responsable | Esfuerzo |
| :--- | :--- | :--- | :--- |
| **[HUS-03-T1]** | **Horario Docente (UI):** (C1) Mostrar el horario del día destacando la clase en curso o la próxima a iniciar. | @mikeAbril | 1.0h |
| **[HUS-03-T2]** | **Indicador de Asistencia:** (C2) Incluir gráfico visual con el porcentaje de asistencia semanal acumulado del grupo. | @Brahian0W | 0.5h |
| **[HUS-03-T3]** | **Alertas y Acceso Rápido:** (C3) Listar estudiantes con >3 fallas y (C4) botón de un solo clic para toma de asistencia. | @mikeAbril | 1.0h |
--- 

## 🌳 Estrategia de Ramas
* **`main`**: Código estable de producción.
* **`MikeAbril`** **`Brahian0w`**: Desarrollo de componentes Frontend.
* **`deivi18contreras`**: Desarrollo de Modelos y API Backend.

## ✅ Estado de Ejecución Actual

 - [x] Estructura base Backend/Frontend (ESM, Quasar, Vite).
 - [x] Modelo de datos Usuario.js y conexión MongoDB.
 - [x] Lógica de Autenticación (JWT, Bcrypt, Bloqueo de cuenta).
 - [ ] Vistas funcionales: Login, Dashboard y Registro.
 - [ ] Persistencia local configurada.
 - [x] Gitignore profesional.