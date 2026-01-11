// firebase-config.js

// ¡Importante! Reemplaza los valores de este objeto con la configuración de tu propio proyecto de Firebase.
// Puedes encontrar esta configuración en la consola de Firebase de tu proyecto:
// 1. Ve a la consola de Firebase: https://console.firebase.google.com/
// 2. Selecciona tu proyecto.
// 3. Haz clic en el ícono de engranaje (Configuración del proyecto) junto a "Project Overview".
// 4. En la pestaña "General", desplázate hacia abajo hasta "Tus apps".
// 5. Deberías ver una app web. Si no, crea una.
// 6. Busca la sección "Configuración de Firebase SDK" y selecciona "Configuración".
// 7. Copia el objeto `firebaseConfig` y pégalo aquí, reemplazando el objeto de ejemplo de abajo.

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// No necesitas modificar nada debajo de esta línea.
// Hacemos que la configuración esté disponible globalmente para que index.html pueda usarla.
window.__firebase_config = JSON.stringify(firebaseConfig);
