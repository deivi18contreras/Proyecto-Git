# 🔐 Módulo de Autenticación - Equipo GitProjectDevs

## 🎯 Objetivo
Implementar un sistema de autenticación robusto y seguro siguiendo principios de **Clean Code**. Este módulo permite gestionar el ciclo de acceso del usuario, desde el registro inicial hasta la visualización de un panel de control protegido, utilizando **GitHub Projects** para la planificación y seguimiento ágil.

## 👥 Integrantes
* **@deivi18contreras** - Deivi Contreras 
* **@mikeAbril** - Jaime Carreño 
* **@Brahian0W** - Brahiam Ramirez 

---

## 🛠️ Tareas Técnicas 
| ID | Tarea del Proyecto | Criterios de Aceptación |
| :--- | :--- | :--- |
| **TS01** | **Base de Datos:** Diseño de modelos y esquemas. | Esquema Mongoose  y conexión establecida. |
| **TS02** | **Interfaz UI:** Maquetación de componentes responsivos. | Vistas funcionales (Vue/Quasar) con validaciones activas. |
| **TS03** | **Servidor:** Setup de API Rest y lógica de negocio. | Rutas configuradas y controladores de autenticación operativos. |
| **TS04** | **Testing:** Creación de suite de pruebas unitarias. | Cobertura de tests para lógica de login y registro. |
| **TS05** | **Documentación:** Elaboración de manual técnico. | README completo con guía de instalación y variables .env. |

---

## 📋 Historias de Usuario 
| ID | Historia de Usuario | Criterios de Aceptación |
| :--- | :--- | :--- |
| **HU01** | **Login:** Como usuario registrado quiero iniciar sesión con mi correo y contraseña para acceder al panel de control. | Validación de campos, manejo de tokens (JWT) y redirección exitosa. |
| **HU02** | **Registro:** Como nuevo usuario quiero crear una cuenta con mis datos básicos para poder utilizar el sistema. | Almacenamiento seguro de datos y cifrado de contraseñas (bcrypt). |
| **HU03** | **Dashboard:** Como usuario autenticado quiero ver mi panel de bienvenida para gestionar mi información. | Protección de ruta (Router Guard) y persistencia de sesión. |

---

## 🚀 Tecnologías Utilizadas
* **Frontend:** Vue.js 3 / Quasar Framework
* **Backend:** Node.js / Express
* **Base de Datos:** MongoDB (Mongoose) 
* **Seguridad:** JSON Web Tokens (JWT) & Bcrypt para cifrado.

---

## 📊 Gestión del Proyecto
Para el seguimiento de tareas, utilizamos **GitHub Projects** aplicando metodologías ágiles (Kanban). 

* **Enlace al Tablero:** (https://github.com/deivi18contreras/Proyecto-Git.git)
* **Flujo de Trabajo:** `Pendiente` ➔ `En Proceso` ➔ `En Revisión` ➔ `Finalizado`.
* **Métricas del Sprint:** * **Tiempo Estimado Total:** 30 Horas.
    * **Complejidad:** Media - Alta.
    * **Priorización:** Uso de etiquetas (High, Medium, Low).

---
