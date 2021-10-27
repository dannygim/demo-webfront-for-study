
console.log('app2.js');
document.querySelectorAll('.output2').forEach((element, index) => {
    element.innerHTML = `<b>${index}</b> Hello World!!!!`;
});