# Custom Activity UI Demo

Este proyecto contiene un ejemplo de interfaz gráfica (UI) para una Custom Activity en Salesforce Marketing Cloud (SFMC), diseñada para enviar mensajes RCS a través de un proveedor externo (TGG-RCS).

## 📦 Requisitos

- Node.js (v14 o superior recomendado)
- npm
- Ngrok (opcional, para exponer localmente el servicio)

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/custom-activity-ui-demo.git
cd custom-activity-ui-demo
```

2. Inicializa el proyecto y instala las dependencias:

```bash
npm init -y
npm install express
```

3. Ejecuta el servidor:

```bash
node server.js
```

> Este comando levantará un servidor Express en el puerto `3000` por defecto (puedes cambiarlo en `server.js`).

## 🌐 Exponer localmente con Ngrok (opcional)

Si deseas exponer tu UI de forma pública para pruebas en SFMC:

1. Instala Ngrok si no lo tienes:

```bash
brew install ngrok  # En MacOS
```

2. Inicia Ngrok en el puerto 3000:

```bash
ngrok http 3000
```

3. Copia la URL pública que te proporciona Ngrok, por ejemplo:

```
https://fancy-name.ngrok.io
```

4. Usa esa URL en la configuración del archivo `config.json` de tu Custom Activity para que SFMC pueda acceder a tu UI pública.

## 📁 Estructura del Proyecto

```
custom-activity-ui-demo/
├── public/
│   └── index.html          # Interfaz gráfica de la Custom Activity
├── server.js               # Servidor Express que expone los endpoints requeridos
├── config.json             # Archivo de configuración para la actividad
├── README.md
└── package.json
```

## 🧪 Uso

Esta UI permite configurar mensajes con:

- Título y subtítulo
- Imagen
- Botón con URL
- Envío al número MSISDN

La plantilla está diseñada para adaptarse a la integración RCS definida con el proveedor TGG-RCS.

## 🔧 Notas

- Asegúrate de que tu instancia de Ngrok esté activa antes de probar la integración en SFMC.
- Los parámetros configurables están definidos en `config.json` y deben coincidir con los atributos del payload del endpoint `/execute`.