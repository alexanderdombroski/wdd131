const pi = Math.PI;


function update() {
    const radius = parseFloat(document.getElementById("radius").value);
    
    let area = radius * radius * pi;
    let circumference = 2 * pi * radius

    document.getElementById("area").innerText = `Area: ${area.toFixed(3)}`;
    document.getElementById("circumference").innerText = `Circumference: ${circumference.toFixed(3)}`;
}

