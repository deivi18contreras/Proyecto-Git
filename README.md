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
|### **[HUS-01] Autenticación (Login) - 3.0h**|
| :--- | :--- | :--- |
| **[HUS-01-T1]**| Formulario Login Quasar (Frontend | UI | Alta | 0.5h )
> C1: Validar formato de correo y dominio @sanjose.edu.co.
| **[HUS-01-T2]**|Errores Genéricos y Recuperación (Frontend | UI | Media | 0.5h )
> C2: Mostrar mensaje genérico de error y enlace de recuperación.
|**[HUS-01-T4]**| Lógica de Bloqueo 15 min (Backend | Auth | Alta | 1.0h)
> Cuidado: Mantener sesión funcional tras recargar navegador.
|**[HUS-01-T4] Lógica de Bloqueo C4 (Backend | Auth | Alta | 1.0h)**
> Bloquear cuenta por 15 minutos tras 3 intentos fallidos.|
---

## 🌳 Estrategia de Ramas
* **`main`**: Código estable de producción.
* **`MikeAbril`** **`Brahian0w`**: Desarrollo de componentes Frontend.
* **`deivi18contreras`**: Desarrollo de Modelos y API Backend.

## ✅ Estado de Ejecución Actual

 - []Estructura base Backend/Frontend (ESM, Quasar, Vite).
 - []Modelo de datos Usuario.js y conexión MongoDB.
 - []Vistas funcionales: Login, Dashboard y Registro.
 - []Persistencia local configurada.
 - []Gitignore profesional.