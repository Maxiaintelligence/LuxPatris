// Este evento se asegura de que nuestro código se ejecute solo cuando
// todo el documento HTML se haya cargado por completo.
document.addEventListener('DOMContentLoaded', () => {

    // Obtenemos la cadena de texto "User Agent" del navegador.
    // Esta cadena actúa como una tarjeta de identificación del dispositivo y navegador.
    // Ejemplos: "Mozilla/5.0 (Linux; Android 11;...) " o "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0...)"
    const userAgent = navigator.userAgent;

    // Buscamos y "agarramos" los tres contenedores de instrucciones que creamos en el HTML por su ID.
    const androidInstructions = document.getElementById('android-instructions');
    const iosInstructions = document.getElementById('ios-instructions');
    const desktopInstructions = document.getElementById('desktop-instructions');

    // Ahora, evaluamos la cadena 'userAgent' para decidir qué hacer.
    // Usamos .includes() para ver si un texto contiene una palabra clave.

    if (userAgent.includes('Android')) {
        // Si el texto contiene "Android", entonces es un dispositivo Android.
        // Le quitamos la clase "hidden" a su contenedor para hacerlo visible.
        androidInstructions.classList.remove('hidden');

    } else if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
        // Si no era Android, comprobamos si es un iPhone, iPad o iPod.
        // Si es cualquiera de estos, mostramos las instrucciones de iOS.
        iosInstructions.classList.remove('hidden');

    } else {
        // Si no es ni Android ni un dispositivo móvil de Apple,
        // asumimos que es un sistema de escritorio (Windows, Mac, Linux).
        // Mostramos las instrucciones para escritorio.
        desktopInstructions.classList.remove('hidden');
    }
});