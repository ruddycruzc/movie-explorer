# Movie Explorer

> Una aplicación web moderna para descubrir películas en tendencia. Porque desplazarse por catálogos infinitos es terapéutico.

---

## Badges

[![Angular](https://img.shields.io/badge/angular-17+-dd0031?style=flat-square&logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/typescript-5.0+-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Firebase](https://img.shields.io/badge/firebase-hosting-ffca28?style=flat-square&logo=firebase)](https://firebase.google.com)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Descripción

**Movie Explorer** es una app web donde las películas viven, respiran JSON y se organizan con cariño (y a veces con errores de CORS).

Construida con Angular y desplegada en Firebase, esta aplicación consume una API de películas para mostrar un catálogo dinámico que parece simple… hasta que el router decide poner orden en /movie/:id.

Es un proyecto de aprendizaje donde se combinan:

consumo de APIs REST sin llorar demasiado
rutas en Angular intentando no romperse
despliegue en Firebase con fe y paciencia

En resumen: un Netflix minimalista sin presupuesto, pero con dignidad.

**URL del proyecto en producción:** [(https://ruddy-lab.web.app/)]

---

## ✨ Características Principales

- 🎬 **Catálogo dinámico**: Visualización de películas en tendencia obtenidas en tiempo real
- 🔍 **Búsqueda y filtrado**: Localiza películas por título, género o año de lanzamiento
- 📱 **Diseño responsivo**: Experiencia optimizada para desktop, tablet y dispositivos móviles
- ⚡ **Navegación fluida**: Router de Angular configurado para transiciones suaves entre vistas
- 🎨 **Interfaz moderna**: Construida con Tailwind CSS para un diseño limpio y consistente
- 📊 **Detalles enriquecidos**: Información completa de cada película (sinopsis, calificación, cast, etc.)
- 🚀 **Deployado en Firebase**: Hosting rápido y confiable con certificado SSL incluido
- ♻️ **Manejo eficiente de datos**: Caching y optimización de llamadas API para mejor rendimiento

---

## 🛠️ Tecnologías Utilizadas

| Categoría | Tecnología |
|-----------|-----------|
| **Framework** | Angular 17+ |
| **Lenguaje** | TypeScript 5.0+ |
| **Estilos** | HTML5 + CSS + Tailwind CSS |
| **Routing** | Angular Router |
| **API** | TMDb API (The Movie Database) |
| **Despliegue** | Firebase Hosting |
| **Gestor de paquetes** | npm |

---

## 📦 Instalación

### Requisitos previos

- Node.js 18+ instalado en tu sistema
- npm 9+ (incluido con Node.js)
- Una cuenta en Firebase (para el despliegue)
- Una API key de TMDb ([obtenerla aquí](https://www.themoviedb.org/settings/api))

### Pasos de instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/[tu-usuario]/movie-explorer.git
cd movie-explorer
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_TMDB_API_KEY=tu_api_key_aqui
VITE_API_BASE_URL=https://api.themoviedb.org/3
```

Alternativamente, actualiza el archivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  tmdbApiKey: 'tu_api_key_aqui',
  apiBaseUrl: 'https://api.themoviedb.org/3'
};
```

4. **Inicia el servidor de desarrollo**

```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

5. **(Opcional) Desplegar en Firebase**

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
ng build --configuration production
firebase deploy
```

---

## 🚀 Uso

### Navegar por películas en tendencia

Al iniciar la aplicación, se cargan automáticamente las películas más populares. Desplázate por el catálogo para ver pósters y títulos.

### Ver detalles de una película

Haz clic en cualquier película para acceder a su página de detalles, donde encontrarás:
- Sinopsis completa
- Calificación promedio
- Fecha de lanzamiento
- Género(s)
- Cast principal
- URLs de tráilers (si están disponibles)

## 📁 Estructura del Proyecto
 
```
movie-explorer/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       ├── movie.service.ts        # Consumo de API TMDb
│   │   │       └── movie.service.spec.ts   # Tests del servicio
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.ts                 # Componente principal con listado
│   │   │   │   ├── home.html
│   │   │   │   ├── home.css
│   │   │   │   └── home.spec.ts
│   │   │   └── movie-detail/
│   │   │       ├── movie-detail.ts         # Vista de detalles de película
│   │   │       ├── movie-detail.html
│   │   │       ├── movie-detail.css
│   │   │       └── movie-detail.spec.ts
│   │   ├── shared/
│   │   │   ├── navbar/
│   │   │   │   ├── navbar.ts               # Encabezado de navegación
│   │   │   │   ├── navbar.html
│   │   │   │   ├── navbar.css
│   │   │   │   └── navbar.spec.ts
│   │   │   ├── movie-card/
│   │   │   │   ├── movie-card.ts           # Card reutilizable de película
│   │   │   │   ├── movie-card.html
│   │   │   │   ├── movie-card.css
│   │   │   │   └── movie-card.spec.ts
│   │   │   └── footer/
│   │   │       ├── footer.ts               # Pie de página
│   │   │       ├── footer.html
│   │   │       ├── footer.css
│   │   │       └── footer.spec.ts
│   │   ├── interfaces/
│   │   │   ├── movie.interface.ts          # Tipos de datos de película
│   │   │   └── movie-response.interface.ts # Respuesta de la API
│   │   ├── app.ts                          # Componente raíz (standalone)
│   │   ├── app.html
│   │   ├── app.css
│   │   ├── app.routes.ts                   # Configuración de rutas
│   │   ├── app.config.ts                   # Configuración global de Angular
│   │   └── app.spec.ts
│   ├── environments/
│   │   └── environment.ts                  # Variables de entorno
│   ├── styles.css                          # Estilos globales
│   ├── index.html
│   └── main.ts
├── public/
│   └── favicon.ico
├── .firebase/                      # Caché de Firebase Hosting
├── angular.json                    # Configuración de Angular CLI
├── firebase.json                   # Configuración de Firebase
├── tsconfig.json                   # Configuración de TypeScript
├── .prettierrc                     # Configuración de Prettier
├── .postcssrc.json                 # Configuración de PostCSS
├── package.json
├── package-lock.json
└── README.md
 
```
 

---

## 🔧 Scripts disponibles

En el archivo `package.json` encontrarás los siguientes comandos:

```bash
# Inicia el servidor de desarrollo
npm start

# Ejecuta el compilador en modo watch
npm run build

# Construye la aplicación para producción
npm run build:prod

# Ejecuta las pruebas unitarias
npm test

# Ejecuta el linter
npm run lint

# Formatea el código
npm run format
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar el proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

Por favor, asegúrate de que el código siga los estándares del proyecto y que todas las pruebas pasen antes de enviar un PR.

---

## 👨‍💻 Autor

**Ruddy Pamela**

- GitHub: [@ruddycruzc](https://github.com/ruddycruzc)
- Email: [ruddy391@gmail.com](mailto:ruddy391@gmail.com)
- LinkedIn: [ruddycruzc](https://www.linkedin.com/in/ruddycruzc/)

---

## 🙏 Agradecimientos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) por proporcionar una API excelente y bien documentada
- [Angular](https://angular.io) por el framework
- [Firebase](https://firebase.google.com) por el hosting
- [Tailwind CSS](https://tailwindcss.com) por hacer que el CSS sea tolerable

---

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

- Abre un [Issue](https://github.com/ruddycruzc/movie-explorer/issues) en el repositorio
- Revisa la [documentación de Angular](https://angular.io/docs)
- Consulta la [API de TMDb](https://developers.themoviedb.org/3)

---

**Hecho con café y TypeScript.** Porque JavaScript nunca fue suficiente.
