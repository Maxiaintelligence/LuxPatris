document.addEventListener('DOMContentLoaded', () => {

    const userAgent = navigator.userAgent;

    const androidInstructions = document.getElementById('android-instructions');
    const iosInstructions = document.getElementById('ios-instructions');
    const desktopInstructions = document.getElementById('desktop-instructions');

    if (userAgent.includes('Android')) {
        androidInstructions.classList.remove('hidden');
    } else if (userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iPod')) {
        iosInstructions.classList.remove('hidden');
    } else {
        desktopInstructions.classList.remove('hidden');
    }
});