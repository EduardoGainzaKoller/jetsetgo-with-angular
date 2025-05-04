# ✈ JetSetGo.com

## Integrantes:
  - Álvaro Rodríguez Miranda
  - Eduardo Gainza Koller
  - Alberto Redondo Álvarez de Sotomayor

JetSetGo es un proyecto pensado para facilitar las vacaciones a nuestros clientes hasta el punto que se les ofrece vuelos, hoteles y transporte. Todo esto pensado para que los clientes no se tengan que preocupar por nada más que elegir el distino y la fecha. También ofrecemos las mejores ofertas del mercado en nuestra web y por último tambien incorporamos muchos de los mejores precios de viajes y hoteles para que nuestro cliente los pueda comparar y elegir el que más se ajuste a su presupuesto.

# 📁 Estructura del Código - Proyecto JetSetGo (Angular)

```plaintext
jetsetgo-with-angular/
├── public/
│   └── assets/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── car/
│   │   │   ├── carousel/
│   │   │   ├── filter/
│   │   │   ├── flight/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   ├── header-session-start/
│   │   │   ├── hotel/
│   │   │   ├── offert/
│   │   │   ├── search-car-bar/
│   │   │   ├── search-flight-bar/
│   │   │   ├── search-hotel-bar/
│   │   │   ├── support-form/
│   │   ├── models/
│   │   │   ├── car.ts
│   │   │   ├── flight.ts
│   │   │   ├── hotel.ts
│   │   ├── pages/
│   │   │   ├── about-us/
│   │   │   ├── car-search/
│   │   │   ├── flight-search/
│   │   │   ├── frecuency-questions/
│   │   │   ├── home-cars/
│   │   │   ├── home-flights/
│   │   │   ├── home-hotels/
│   │   │   ├── hotel-search/
│   │   │   ├── information/
│   │   │   ├── login/
│   │   │   ├── privacy/
│   │   │   ├── registrer/
│   │   │   ├── support/
│   │   │   ├── terms-and-conditions/
│   │   ├── services/
│   │   │   ├── cars.service.ts
│   │   │   ├── flights.service.ts
│   │   │   ├── hotels.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.component.spec.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── environments/
│   │   └── environments.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── firebase.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.spec.json
```
Este proyecto web desarrollado con Angular representa una plataforma de reservas de viajes. A continuación, se explica la estructura de carpetas y los componentes creados, junto con su funcionalidad.

---

## 📂 public/assets/
Contiene recursos estáticos como imágenes utilizadas en la interfaz de usuario, por ejemplo fotos de destinos turísticos o íconos.

---

## 📂 src/

### 📂 app/
Contiene toda la lógica principal de la aplicación, incluyendo componentes, modelos, páginas y servicios.

#### 📂 components/
Componentes reutilizables para distintas partes del sistema:

- **car/**: Tarjetas de los coches se usa en la pagina: car-search.
- **carousel/**: Carruseles para mostrar destinos destacados se usa en casi todas las páginas menos: about-us, information, login, registrer, privacy, support, terms-and-conditions.
- **filter/**: Filtros para refinar búsquedas de autos, vuelos o hoteles por precio y valoracion se usa en: car-search, hotel-search, flight-search.
- **flight/**: Tarjetas de los aviones se usa en la pagina: flight-search.
- **footer/**: Pie de página de la aplicación se usa en todas las páginas.
- **header/**: Encabezado principal del sitio se usa en todas las páginas si el usuario no está registrado.
- **header-session-start/**: Encabezado con sesión iniciada (usuario logueado) se usa en todas las páginas si el usuario está logueado.
- **hotel/**: Tarjetas de los hoteles se usa en la pagina: hotel-search.
- **offert/**: Ofertas destacadas de viajes se usa en las páginas: home-cars, home-flights, home-hotels.
- **search-car-bar/**: Barra de búsqueda de autos se usa en la página: home-cars, car-search.
- **search-flight-bar/**: Barra de búsqueda de vuelos se usa en la página: home-flight, flight-search.
- **search-hotel-bar/**: Barra de búsqueda de hoteles se usa en la página: home-hotel, hotel-search.
- **support-form/**: Formulario de contacto o soporte se usa en la pagina: support.

#### 📂 models/
Modelos de datos en TypeScript que representan las entidades principales del sistema:

- `car.ts`: Modelo de autos.
- `flight.ts`: Modelo de vuelos.
- `hotel.ts`: Modelo de hoteles.

#### 📂 pages/
Vistas completas de la aplicación, cada carpeta representa una página o sección:

- **about-us/**: Página "Sobre nosotros".
- **car-search/**: Resultados de búsqueda de autos.
- **flight-search/**: Resultados de búsqueda de vuelos.
- **frecuency-questions/**: Preguntas frecuentes.
- **home-cars/**, **home-flights/**, **home-hotels/**: Páginas principales por tipo de servicio, el home de nuestro servicio web es: **home-hotels/**.
- **hotel-search/**: Resultados de búsqueda de hoteles.
- **information/**: Información general de la plataforma.
- **login/**: Página de inicio de sesión.
- **privacy/**: Políticas de privacidad.
- **registrer/**: Página de registro de usuarios.
- **support/**: Centro de ayuda o contacto.
- **terms-and-conditions/**: Términos y condiciones del servicio.

#### 📂 services/
Servicios que gestionan la lógica de negocio:

- `cars.service.ts`: Servicio para gestión de datos de autos.
- `flights.service.ts`: Servicio para gestión de vuelos.
- `hotels.service.ts`: Servicio para gestión de hoteles.

#### Archivos raíz en `app/`
- `app.component.ts`: Componente principal de la aplicación.
- `app.component.html`: Plantilla HTML del componente principal.
- `app.component.css`: Estilos CSS del componente principal.
- `app.component.spec.ts`: Pruebas unitarias del componente principal.
- `app.config.ts`: Configuraciones globales de la aplicación.
- `app.routes.ts`: Configuración de rutas para navegación entre páginas.

---

### 📂 environments/
Configuración para diferentes entornos (desarrollo, producción, etc.):

- `environment.ts`: Variables de entorno utilizadas durante el desarrollo.

---

### 📄 index.html
HTML principal donde Angular monta toda la aplicación (`<app-root>`).

### 📄 main.ts
Archivo de arranque de Angular. Carga el módulo principal.

### 📄 styles.css
Estilos globales de la aplicación.

---

## ⚙️ Archivos de Configuración

- `angular.json`: Configuración de la CLI de Angular (build, assets, etc.).
- `firebase.json`: Configuración de despliegue en Firebase.
- `package.json`: Lista de dependencias y scripts npm.
- `package-lock.json`: Registro exacto de las dependencias instaladas.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.spec.json`: Configuración de TypeScript para el proyecto, aplicación y pruebas respectivamente.
- `.gitignore`: Archivos y carpetas ignorados por Git.
- `README.md`: Documentación del proyecto.

---

# 🧩 Estructura de Datos en Firebase

La aplicación JetSetGo utiliza Firebase para almacenar y gestionar la información de usuarios y servicios ofrecidos (vuelos, hoteles, autos). A continuación se describe la estructura de los datos almacenados en Firebase.

### Colección coches:

"cars": [
    {
      "descripcion": string,
      "imagen": string,
      "marca": string,
      "modelo": string,
      "precio": number,
      "valoracion": number
    }
    
### Colección hoteles:

"hotels"[
    {
      "nombre": string,
      "localizacion": string,
      "inicio_disponibilidad": string,
      "fin_disponibilidad": string,
      "imagen_hotel": string,
      "precio": number,
      "valoracion": number,
      "estrellas": number
    }

### Colección vuelos:

"flights"[
    {
      "destino": string,
      "duracion": string,
      "fecha_de_llegada": string,
      "fecha_de_salida": string,
      "hora_de_llegada": string,
      "hora_de_salida": string,
      "imagen_destino": string,
      "origen": string,
      "precio": number
    }

# 🌐 Tour por la Página Web - JetSetGo ✈️

## 🏠 Página de Inicio

- Presentación visual con carrusel de ofertas destacadas.
- Accesos rápidos a la búsqueda de vuelos, hoteles y autos.
- Diseño responsivo, compatible con dispositivos móviles.

---

## 🔍 Búsqueda de Servicios

### ✈️ Vuelos

- Campos: origen, destino, fecha de salida, número de pasajeros.
- Botón de búsqueda que redirige a `/flight-search`.

### 🏨 Hoteles

- Campos: ciudad, fecha de entrada/salida, cantidad de habitaciones.
- Botón de búsqueda que redirige a `/hotel-search`.

### 🚗 Autos

- Campos: ciudad, fecha de recogida y entrega, tipo de auto.
- Botón de búsqueda que redirige a `/car-search`.

---

## 📄 Catálogos de Resultados

Tras realizar una búsqueda, el usuario es dirigido a una página con los resultados correspondientes:

- **/flight-search**: muestra una lista de vuelos disponibles.
- **/hotel-search**: listado de hoteles según los filtros.
- **/car-search**: autos disponibles en la ciudad seleccionada.

Cada resultado incluye:
- Nombre o empresa
- Imagen representativa
- Precio
- Características principales
- Botón para reservar o ver más detalles

---

Por otra parte querría destacar que además de cargar los datos del firestore y también hemos hecho funcional las barras de búsqueda. Además de que todo es responsive y tiene una muy buena mantenibilidad ya que hemos intentado hacer casi todo con la librería boostrap.

En el pptx se implementa el ejemplo de introducción de datos así como su posterior visualización en el catálogo que corresponda.

# Enlace a Trello
[Trello][https://trello.com/b/vSQwAi7S/pwm-sprint-3]
