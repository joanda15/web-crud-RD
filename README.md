# Metodología de Trabajo CRUD

- **Metodología:** Scrum
- **Herramienta:** Jira (JoanDa - Jira.work05W)
- **Daily Meeting:** Todos los días (Sprint Daily)
- **Sprint Review:** Martes (se habla de avance como tal)
- **Scrum Poker:** Martes (con el tablero)
- **Reuniones con el SENA:** Lunes a viernes de 2 a 4 PM
- **Bitácoras:** Firmar con anticipación
- **Herramienta Dev:** F12
- **Retroalimentación:** Todo se retroalimenta por feedback
- **Tareas en Jira:**
  - Agregar subtareas a las tareas
  - Mover tareas
- **Lean Six Sigma**
- **Pomodoro Effect**
- **Problema:** 3 personas con herramientas
- **Aplicación:** Crear una aplicación de hacer tareas con video de YouTube
- **Tecnologías:** React con Django para esta semana
- **Organización de Componentes:** Jerarquías, rol de componentes
- **Base de Datos:** NoSQL

## Documentación

1. **Verificación de versiones de Python y Node:**
   - Comando para Python: `python --version`
   - Comando para Node: `node --version`
2. **Creación del entorno de desarrollo para Python:**
   - Instalar virtualenv: `pip install virtualenv`
   - Crear el entorno: `python -m venv (nombre)`
   - Activar manualmente el entorno: `.\venv\Scripts\Activate`
3. **Instalación de Django:** 
   - Comando: `pip install django`
   - Para iniciar a trabajar con Django: `django-admin`
4. **Creación del proyecto Django:** 
   - Comando: `django-admin startproject django_crud_api .`
   - Para correr el servidor: `python manage.py runserver`
5. **Creación de la aplicación:** 
   - Comando: `python manage.py startapp tasks`
   - En `settings.py`, agregar `tasks` a `INSTALLED_APPS`
   - Crear tablas y migrar: `python manage.py migrate`
6. **Utilización de Django Rest Framework:**
   - Comando: `pip install djangorestframework`
   - Comunicación entre servidores: `pip install django-cors-headers`
7. **Configuración en `settings.py`:**
   - Agregar en `INSTALLED_APPS`:
     - `'corsheaders',`
     - `'rest_framework',`
   - En `MIDDLEWARE`:
     - `"corsheaders.middleware.CorsMiddleware",`
   - Configuración de servidores permitidos:
     - `CORS_ALLOWED_ORIGINS = []`
8. **Creación de modelos:**
   - En `models.py`
   - Crear migraciones: `python manage.py makemigrations tasks`
   - Migrar tablas: `python manage.py migrate tasks`
   - Crear superusuario: `python manage.py createsuperuser`
     - User: JoanDev
     - Email: [joan.dev.col@gmail.com]
     - Pass: Pru03py0015
9. **Acceso al admin:**
   - URL: `http://127.0.0.1:8000/admin/login/?next=/admin/`
   - Configurar admin en `admin.py` para tareas
10. **Creación de la API:**
    - En la carpeta `tasks`, crear `serializer.py`
    - Modificar `views.py` para las vistas de la API
    - Crear `urls.py` en `tasks` para las rutas en el archivo urls.py

### Pruebas y Configuración de la API

1. **Pruebas de la API:**
   - Verificar el funcionamiento del CRUD en cualquier herramienta de pruebas, como Postman.

2. **Actualización de Herramientas:**
   - Si el comando `pip install coreapi` no funciona, actualizar las herramientas de pip:
     ```bash
     pip install --upgrade setuptools
     ```
   - Configurar Django REST Framework en `settings.py`:
     ```python
     REST_FRAMEWORK = {
         ...: ...,
         "DEFAULT_SCHEMA_CLASS": "rest_framework.schemas.coreapi.AutoSchema",
     }
     ```

### Cliente con React

1. **Configuración del Entorno:**
   - Verificar la versión de Node.js con el comando:
     ```bash
     node --version
     ```
   - Crear una nueva aplicación con Vite:
     ```bash
     npm create vite
     ```
     - Elegir un nombre para la app del frontend y seleccionar React con JavaScript.
   - Ejecutar los siguientes comandos para el funcionamiento de Vite y React:
     ```bash
     cd client
     npm install
     npm run dev
     ```

2. **Enlace entre Frontend y Backend:**
   - Instalar las siguientes librerías:
     ```bash
     npm i react-router-dom react-hot-toast axios react-hook-form
     ```
   - Configurar el archivo `App.jsx` en la carpeta `src` según sea necesario.
   - Crear las carpetas `pages`, `components`, y `api`, y los archivos correspondientes para cada carpeta.

3. **Pruebas y Documentación:**
   - Obtener tareas (get tasks).
   - Recargar la página con la ruta `/tasks/docs/` para ver la nueva interfaz de documentación.

### Bases de Datos y Control de Versiones

1. **Bases de Datos:**
   - Utilizar PostgreSQL y SQLite según las necesidades del proyecto.

2. **Control de Versiones:**
   - Siempre utilizar GitLab para el control de versiones.

### Creación de Formularios

1. **CRUD:**
   - Implementar funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar).

2. **Interactividad:**
   - Agregar interactividad al formulario según sea necesario.

Tareas 11/09/2024

### Tareas y Planificación

1. **Mañana:**
   - Terminación de la app de tareas.

2. **Tareas Nuevas:**
   - Transcribir a TypeScript.

3. **Django:**
   - Implementar filtros.
   - Configurar Simple JWT (JSON Web Tokens).
   - Utilizar Django REST Framework.
   - Trabajar con señales de Django.
   - Crear modelos intermedios.

4. **Mejoras en la Aplicación:**
   - Implementar paginación mediante filtros.
   - Categorizar las tareas por:
     - Prioridad (Alta, Media, Baja).
     - Severidad (Urgente).
   - Agregar fecha de creación y modificación a las tareas.

5. **Pruebas:**
   - Utilizar Postman para probar las funcionalidades.
