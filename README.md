# Construye el futuro.

Experiencia vocacional de Ingeniería Civil para estudiantes de 5.º de preparatoria y 6.º de Área 1. Universidad Anáhuac México, Campus Norte.

## Qué incluye

- Portada animada con cuatro señales y acceso directo a misiones.
- Atlas con cuatro territorios. Ciudad, Campo y montaña, Industria y energía, Costa y puertos.
- Doce misiones ilustrativas. Cada misión tiene un equipo ficticio, un incidente con antes y después y un reto distinto por nivel.
- Simulador de lluvia, comparador con Arquitectura, fichas de las áreas, sección del Campus Norte y guía vocacional.
- Avance y nivel guardados en el navegador durante la sesión. Cada misión suma 60 XP una sola vez por turno y tiene música original de fondo con pausa.

[Licenciatura en Ingeniería Civil de Anáhuac México](https://mexico.anahuac.mx/licenciaturas/ingenieria-civil) · [Licenciatura en Arquitectura](https://mexico.anahuac.mx/licenciaturas/arquitectura)

## Abrir en Google AI Studio

En un proyecto web, abre **Code → File explorer → + → Upload Zip file** y selecciona el ZIP completo. Guarda con **Save** y abre **Preview**. El atlas debe mostrar cuatro territorios. Puedes usar **Build → + → Import from GitHub** si el código está en un repositorio accesible para la integración.

El ZIP incluye el código y los recursos visuales de la app. En GitHub, conserva `package.json`, `src/` y `public/` en el primer nivel.

## Guía vocacional

La vista previa incluye respuestas editoriales. La conexión opcional con OpenAI usa el código de Apps Script entregado por separado y los secretos `APPS_SCRIPT_URL` y `APPS_SCRIPT_TOKEN` en el servidor. El endpoint `POST /api/orientacion` recibe `{tema, grado}`. Apps Script devuelve `{ok:true,texto}` cuando puede responder. Las misiones funcionan con el contenido incluido en el ZIP.

## Desarrollo local

Con un entorno Node.js compatible con las dependencias, ejecuta `npm install` y `npm run dev`. Para compilar la interfaz, ejecuta `npm run build`.

## Mitos, contacto y privacidad

Mitos y realidades tiene diez tarjetas y seis testimonios ficticios en un carrusel con pausa. Civil y Arquitectura compara seis casos de distintos sectores. En Universidad Anáhuac ofrece el plan, Promoción y el acceso a coordinación. Conecta ofrece otros dos accesos al mismo formulario. La app no recibe los campos personales del registro. Los botones abren el formulario institucional para enviar una pregunta a coordinación y recibir respuesta por correo. Si la vista previa no puede cargar la liga, permite preparar un borrador en la aplicación de correo del visitante.

La aplicación usa la liga publicada de Apps Script de Anáhuac. `CIVIL_CONTACT_FORM_URL` y `CIVIL_CONTACT_PRIVACY_URL` son opciones para reemplazar la liga y el aviso cuando se actualice el formulario.
