document.getElementById('retiro').addEventListener('click', function () {

    const cantidad = parseInt(document.getElementById('cantidad').value);

    

    const nombre = document.getElementById('nombre').value;
    document.getElementById("mensaje").textContent = `Bienvenide ${nombre}, retiro exitoso`
    
    
    const billete100 = Math.floor(cantidad / 100);
    const billete50 = Math.floor((cantidad % 100) / 50);
    const billete20 = Math.floor(((cantidad % 100) % 50) / 20);
    const billete10 = Math.floor((((cantidad % 100) % 50) % 20) / 10);
    const billete5 = Math.floor(((((cantidad % 100) % 50) % 20) % 10) / 5);
    const billete1 = Math.floor(((cantidad % 100) % 50) % 20) % 10 % 5;

    document.getElementById('billete100').textContent = billete100;
    document.getElementById('billete50').textContent = billete50;
    document.getElementById('billete20').textContent = billete20;
    document.getElementById('billete10').textContent = billete10;
    document.getElementById('billete5').textContent = billete5;
    document.getElementById('billete1').textContent = billete1;

    
});