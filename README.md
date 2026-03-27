# 🏫 Sistema de Gestión de Asistencia "Colegio San José"

**Equipo de Desarrollo:** **@deivi18contreras**- Deivi Contreras | **@mikeAbril** - Jaime Carreño | **@Brahian0W** - Brahiam Ramirez 
**Estado:** 🚀 Fase de Cimentación y Autenticación  

Proyecto de digitalización diseñado para optimizar el control de asistencia de **1.200 estudiantes** y **60 docentes**. La solución permite registros en **menos de 2 minutos** desde cualquier dispositivo, eliminando la carga administrativa manual del 30% y garantizando disponibilidad de datos en tiempo real.

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

---

### Parte 3: El Plan de Trabajo (Las HUS y Tareas)
```markdown
## 📋 Planificación de Sprint (Tasks & Hours)

### **[HUS-01] Autenticación (Login) - 3.0h**
* **[HUS-01-T1]** Formulario Login Quasar (Frontend | UI | Alta | 0.5h )
* **[HUS-01-T2]** Errores Genéricos y Recuperación (Frontend | UI | Media | 0.5h )
* **[HUS-01-T4]** Lógica de Bloqueo 15 min (Backend | Auth | Alta | 1.0h)

### **[HUS-02] Registro de Usuarios - 2.5h**
* **[HUS-02-T1]** Formulario de Registro C1 (Frontend | UI | Alta | 0.5h )
* **[HUS-02-T2]** Esquema Usuario Mongoose C3 (Backend | Database | Alta | 1.0h `)
* **[HUS-02-T3]** Política Seguridad C2 (Backend | Security | Media | 0.5h`)

### **[HUS-03] Dashboard Principal - 2.5h**
* **[HUS-03-T1]** Horario Docente y Clase Actual (Frontend | UI | Media | 1.0h)
* **[HUS-03-T3]** Alertas Críticas y Acceso Rápido (Frontend | UI | Alta | 1.0h)


## 🌳 Estrategia de Ramas
* **`main`**: Código estable de producción.
* **``**: Desarrollo de componentes Frontend.
* **``**: Desarrollo de Modelos y API Backend.

## ✅ Estado de Ejecución Actual
- [x] Estructura base Backend/Frontend (ESM, Quasar, Vite).
- [x] Gitignore profesional configurado.
- [ ] Implementación de Modelos y Controladores.
- [ ] Vistas funcionales: Login, Dashboard y Registro.
