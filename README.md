> [!NOTE]
> English version
# Collaborative Calendar
This project is a collaborative calendar application that allows users to share their schedules and quickly find common availability for group events.
[Live website](https://collaborative-calendar.vercel.app/auth/login)

## Key Features
- The project includes a user login where you can sign in with an email and password.
- It features a calendar view that can be switched to daily, monthly, weekly, or agenda views.
- Double-clicking on an event opens a modal to view more details about the event.
- In the detailed view modal of the event, you can modify its details or delete the event.
- To add a new event, you can click the floating button located in the bottom-right corner.

## Technologies Used
* **Frontend**: React, Bootstrap, sweetalert, react big calendar, react modal, react datepicker, Redux, React router v7
* **Backend**: Node.js, Express
* **Database**: MongoDB
* **Other Tools**: Vercel

## Installation
Follow these steps to set up the project locally:
1. Clone the repository:
    ```
    bashgit clone https://github.com/kanixdaniel/collaborative-calendar-react.git
    ```
2. Install dependencies:
    ```
   cd collaborative-calendar-react
   yarn
   ```
3. Set up environment variables. Create a *.env* file in the root of the project based on the *.env.template* file included in the project.

4. Start the project:
    ```
   yarn dev
   ```

## Usage
Once the server is running, you can access the application at [http://localhost:5173](http://localhost:5173/).
* **Step 1:** Log in or create a new user.
* **Step 2:** Choose the calendar view that best suits your needs to visualize events.
* **Step 3:** Double-click on an event to view more details. In this view, you can edit or delete the event (only if you are the owner of the event).
* **Step 4:** To add a new event, click the floating button in the bottom-right corner.
* **Step 5:** Fill out the form to create the new event, making sure to enter the start and end date and time, as well as the event title (these are mandatory fields).
* **Step 6:** Click "Save". If you don’t want to save the recently created event, simply click outside the modal.

## Contribution
Contributions are welcome! If you'd like to contribute, follow these steps:
1. Fork the repository.
2. Create a branch for your feature or fix: `git checkout -b your-branch-name`
3. Make your changes and commit them: `git commit -m "Description of your changes"`
4. Submit a pull request.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact
If you have any questions or suggestions, feel free to contact me:
* [**Email**](mailto:contact.isc.dpg@gmail.com)
* [**LinkedIn**](https://linkedin.com/in/kanix-daniel)


---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---
---

> [!NOTE]
> Versión en español
# Collaborative Calendar
Este proyecto es una aplicacion de un calendario colaborativo, para que los usuarios puedan compartir sus agendas y puedan encontrar rápidamente espacios en los que coincidir en grupo.
[Link del sitio en vivo](https://collaborative-calendar.vercel.app/auth/login)

## Características principales
- El proyecto cuenta con un login de usuario en el que puede inicar sesión con email y contraseña
- Contiene una vista de calendario que se puede modificar por la vista diaria, mensual, semanal y por agenda
- Al dar doble click a un evento se habre un modal para visualizar más información sobre el evento
- En el modal de la vista detallada del evento, se pueden modificar sus valores o eliminar el evento
- Para agregar una nueva evento se puede realizar dando click al boton flotante ubicado en la esquina inferior derecha

## Tecnologías utilizadas

- **Frontend**: React, Bootstrap, sweetalert, react big calendar, react modal, react datepicker, Redux, React router v7
- **Backend**: Node.js, Express
- **Base de datos**: MongoDB
- **Otras herramientas**: Vercel

## Instalación

Sigue estos pasos para configurar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kanixdaniel/collaborative-calendar-react.git
   ```
2. Instala las dependencias:
   ```bash
   cd collaborative-calendar-react
   yarn
   ```
3. Configura las variables de entorno. Crea un archivo *.env* en la raíz del proyecto tomando como base el archivo *.env.template* incluido en el proyecto.

4. Levanta el proyecto:
   ```bash
   yarn dev
   ```

## Uso

Una vez que el servidor esté en ejecución, puedes acceder a la aplicación en [http://localhost:5173](http://localhost:5173/).
- **Paso 1:** Iniciar seión o crear un nuevo usuario.
- **Paso 2:** Escoger la vista delcalendario que mejor se ajuste a sus necesidades para visualizar los eventos.
- **Paso 3:** Dar doble click a un evento para vuslaizar más información del mismo. Es posible editar en esta vista el evento o eliminarlo (solo si es dueño del evento)
- **Paso 4:** Para agregar un nuevo evento, se puede realizar dando click en el boton flotante de la esquinala inferior derecha.
- **Paso 5:** Llene el formulario para crear el nuevo evento cuidando ingresar la fecha y hora de inicio y fin y el título para el evento (son campos obligatorios)
- **Paso 6:** Dar click en guardar. En caso de no querer guardar el evento recientamente creado, solo de click fuera del modal.

## Contibución

¡Las contribuciones son bienvenidas! Si deseas contribuir, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama con tu feature o corrección: `git checkout -b nombre-de-tu-rama`
3. Realiza tus cambios y haz commit: `git commit -m "Descripción de tus cambios”`
4. Envía un pull request.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme:
* [**Email**](mailto:contact.isc.dpg@gmail.com)
* [**LinkedIn**](https://linkedin.com/in/kanix-daniel)
