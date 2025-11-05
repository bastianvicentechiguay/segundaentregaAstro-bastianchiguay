# 🕊️ Funeraria Pluma

Sitio web de Funeraria Pluma, desarrollado con Astro. Muestra información sobre la empresa, servicios funerarios, obituarios y datos de contacto en Chiloé.

## 📂 Estructura del Proyecto

Dentro del proyecto Astro encontrarás la siguiente estructura de carpetas y archivos:
## 🚀 Tecnologías

Este proyecto fue construido utilizando:

Astro-
Tailwind CSS-
TypeScript-
FontAwesome-

```
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   
│   ├── components/
│   │   └── tarjetas/           #tarjetas de los obituarios y de los servicios
│   │   └── index_components/   #componentes del inicio
│   │   └── footer.astro/       
│   │   └── header.astro/
│   │   
│   ├── data/                    # Datos de la pagina
│   │   └── servicios/           
│   │   └── tarjetas/             
│   │   └── linksrapidos/       
│   │   └── PorqueElegir.ts      # datos de tarjetas de ¿Por que elegir funeraria pluma?
│   │   
│   │   
│   ├── layouts
│   │   └── Layout.astro
│   │ 
│   │ 
│   └── pages/           # Rutas/Paginas principales
│   │   └── servicios/
│   │   │   └── ¨[slug].astro - plantilla de creacion de los 6 servicios funebres
│   │   │ 
│   │   └── index.astro - Inicio
│   │   │ 
│   │   └── contacto.astro - Contacto
│   │   │ 
│   │   └── nuestraempresa.astro - Nosotros
│   │   │ 
│   │   └── obituarios.astro - obituarios
│   │   │ 
│   │   └── servicios.astro - servicios


##  Comandos del Proyecto

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala todas las dependencias. |
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build` | Genera la versión final del sitio estático en la carpeta `dist/`. |
| `npm run preview`| Inicia un servidor local para ver el sitio después de hacer `build`. |

## 🚀 Instalación y configuración de Astro

### Requisitos previos
* Tener **Node.js** instalado (incluye npm automáticamente).
* Verifica con: `node --version`
* Si no lo tienes, descárgalo de [nodejs.org](https://nodejs.org/)

### 1. Pegar ruta de cd
```bash
cd nombre-del-proyecto
```
Es necesario ingresar a la carpeta del proyecto para cargar los archivos y el proyecto.

### 2. Crear proyecto Astro
```bash
npm create astro@latest
```
* Este comando indica que se instale la última versión.

