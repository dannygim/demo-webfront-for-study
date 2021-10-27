window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.output').forEach((element, index) => {
        element.innerHTML = `<b>${index}</b> Hello World!!`;
    });
});