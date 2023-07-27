$(document).ready(function () {
    $('#calcularButton').on('click', function () {
      const form = $('#formCalculadora')[0];
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
            $('#areaRectanguloResultado').text(areaRectangulo);
            $('#resultadosRectangulo').css('display', 'block');
          } else {
            $('#areaRectanguloResultado').text('');
          }

          if (calcularPerimetroRectangulo) {
            const perimetroRectangulo = 2 * (rectanguloLado1 + rectanguloLado2);
            $('#perimetroRectanguloResultado').text(perimetroRectangulo);
            $('#resultadosRectangulo').css('display', 'block');
          } else {
            $('#perimetroRectanguloResultado').text('');
          }
        } else {
          $('#resultadosRectangulo').css('display', 'none');
        }
      } else {
        $('#resultadosRectangulo').css('display', 'none');
      }

      if (calcularTriangulo) {
        const trianguloBase = parseFloat(form.trianguloBase.value);
        const trianguloAltura = parseFloat(form.trianguloAltura.value);
        const calcularAreaTriangulo = form.calcularAreaTriangulo.checked;

        if (trianguloBase > 0 && trianguloAltura > 0) {
          if (calcularAreaTriangulo) {
            const areaTriangulo = (trianguloBase * trianguloAltura) / 2;
            $('#areaTrianguloResultado').text(areaTriangulo);
            $('#resultadosTriangulo').css('display', 'block');
          } else {
            $('#areaTrianguloResultado').text('');
          }
        } else {
          $('#resultadosTriangulo').css('display', 'none');
        }
      } else {
        $('#resultadosTriangulo').css('display', 'none');
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
            $('#areaPoligonoResultado').text(areaPoligono);
            $('#resultadosPoligono').css('display', 'block');
          } else {
            $('#areaPoligonoResultado').text('');
          }

          if (calcularPerimetroPoligono) {
            const perimetroPoligono = poligonoLados * poligonoMedidaLado;
            $('#perimetroPoligonoResultado').text(perimetroPoligono);
            $('#resultadosPoligono').css('display', 'block');
          } else {
            $('#perimetroPoligonoResultado').text('');
          }
        } else {
          $('#resultadosPoligono').css('display', 'none');
        }
      } else {
        $('#resultadosPoligono').css('display', 'none');
      }
    });

    $('#formCalculadora').on('change', function () {
      const form = $('#formCalculadora')[0];
      const calcularRectangulo = form.calcularRectangulo.checked;
      const calcularTriangulo = form.calcularTriangulo.checked;
      const calcularPoligono = form.calcularPoligono.checked;

      $('#rectanguloFields').css('display', calcularRectangulo ? 'block' : 'none');
      $('#trianguloFields').css('display', calcularTriangulo ? 'block' : 'none');
      $('#poligonoFields').css('display', calcularPoligono ? 'block' : 'none');

      // Ocultar los resultados cuando se cambia la selección de figura
      $('#resultadosRectangulo').css('display', 'none');
      $('#resultadosTriangulo').css('display', 'none');
      $('#resultadosPoligono').css('display', 'none');
    });
  });