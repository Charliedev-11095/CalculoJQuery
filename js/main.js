document.getElementById('calcularButton').addEventListener('click', function() {
    const form = document.getElementById('formCalculadora');
    const calcularRectangulo = form.calcularRectangulo.checked;
    const calcularTriangulo = form.calcularTriangulo.checked;
    const calcularPoligono = form.calcularPoligono.checked;

    if (calcularRectangulo) {
        const rectanguloLado1 = parseFloat(form.rectanguloLado1.value);
        const rectanguloLado2 = parseFloat(form.rectanguloLado2.value);
        const calcularAreaRectangulo = form.calcularAreaRectangulo.checked;
        const calcularPerimetroRectangulo = form.calcularPerimetroRectangulo.checked;

        if (rectanguloLado1 > 0 && rectanguloLado2 > 0) {
            if (calcularAreaRectangulo) {
                const areaRectangulo = rectanguloLado1 * rectanguloLado2;
                alert('Área del Rectángulo: ' + areaRectangulo);
            }
            if (calcularPerimetroRectangulo) {
                const perimetroRectangulo = 2 * (rectanguloLado1 + rectanguloLado2);
                alert('Perímetro del Rectángulo: ' + perimetroRectangulo);
            }
        } else {
            alert('Por favor, ingrese valores válidos para los lados del Rectángulo.');
        }
    }

    if (calcularTriangulo) {
        const trianguloBase = parseFloat(form.trianguloBase.value);
        const trianguloAltura = parseFloat(form.trianguloAltura.value);
        const calcularAreaTriangulo = form.calcularAreaTriangulo.checked;
        const calcularPerimetroTriangulo = form.calcularPerimetroTriangulo.checked;

        if (trianguloBase > 0 && trianguloAltura > 0) {
            if (calcularAreaTriangulo) {
                const areaTriangulo = (trianguloBase * trianguloAltura) / 2;
                alert('Área del Triángulo: ' + areaTriangulo);
            }
            if (calcularPerimetroTriangulo) {
                alert('El Triángulo no tiene perímetro. Solo se calcula el perímetro de polígonos regulares.');
            }
        } else {
            alert('Por favor, ingrese valores válidos para la base y altura del Triángulo.');
        }
    }

    if (calcularPoligono) {
        const poligonoLados = parseInt(form.poligonoLados.value);
        const poligonoMedidaLado = parseFloat(form.poligonoMedidaLado.value);
        const poligonoApotema = parseFloat(form.poligonoApotema.value);
        const calcularAreaPoligono = form.calcularAreaPoligono.checked;
        const calcularPerimetroPoligono = form.calcularPerimetroPoligono.checked;

        if (poligonoLados > 0 && poligonoMedidaLado > 0 && poligonoApotema > 0) {
            if (calcularAreaPoligono) {
                const areaPoligono = (poligonoLados * poligonoMedidaLado * poligonoApotema) / 2;
                alert('Área del Polígono Regular: ' + areaPoligono);
            }
            if (calcularPerimetroPoligono) {
                const perimetroPoligono = poligonoLados * poligonoMedidaLado;
                alert('Perímetro del Polígono Regular: ' + perimetroPoligono);
            }
        } else {
            alert('Por favor, ingrese valores válidos para el número de lados, medida de cada lado y apotema del Polígono Regular.');
        }
    }
});

document.getElementById('formCalculadora').addEventListener('change', function() {
    const form = document.getElementById('formCalculadora');
    const calcularRectangulo = form.calcularRectangulo.checked;
    const calcularTriangulo = form.calcularTriangulo.checked;
    const calcularPoligono = form.calcularPoligono.checked;

    document.getElementById('rectanguloFields').style.display = calcularRectangulo ? 'block' : 'none';
    document.getElementById('trianguloFields').style.display = calcularTriangulo ? 'block' : 'none';
    document.getElementById('poligonoFields').style.display = calcularPoligono ? 'block' : 'none';
});