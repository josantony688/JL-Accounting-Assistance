function procesarPregunta() {
    const pregunta = document.getElementById("userInput").value.toLowerCase();
    const respuesta = document.getElementById("respuesta");
    let respuestaTexto = "Lo siento, no tengo información sobre esa pregunta.";
    // Contabilidad
    if (pregunta.includes("iva") || pregunta.includes("impuesto")) {
        respuestaTexto = "El IVA (Impuesto al Valor Agregado) es un tributo que se aplica sobre el consumo de bienes y servicios.";
    } else if (pregunta.includes("balance general") || pregunta.includes("estado financiero")) {
        respuestaTexto = "El balance general es un informe financiero que muestra los activos, pasivos y patrimonio de una empresa.";
    } else if (pregunta.includes("activos") || pregunta.includes("pasivos")) {
        respuestaTexto = "Los activos son los bienes y derechos de una empresa, mientras que los pasivos son sus obligaciones.";
    } 
    // Industria del Vestido
    else if (pregunta.includes("tendencias") || pregunta.includes("moda")) {
        respuestaTexto = "Las tendencias de moda cambian cada temporada, influenciadas por diseñadores y eventos globales.";
    } else if (pregunta.includes("textiles") || pregunta.includes("tela")) {
        respuestaTexto = "Los textiles más usados en la moda incluyen algodón, poliéster, lana y seda.";
    } else if (pregunta.includes("medidas") || pregunta.includes("tallas")) {
        respuestaTexto = "Las medidas estándar varían por región. Por ejemplo, en México, la talla M equivale a 38-40 en pantalón.";
    }
    // Matemáticas Básicas y Avanzadas
    else if (pregunta.match(/\d+[\+\-\*\/]\d+/)) {
        try {
            respuestaTexto = "El resultado es: " + eval(pregunta);
        } catch (error) {
            respuestaTexto = "No pude calcular esa operación.";
        }
    } else if (pregunta.includes("integral de")) {
        respuestaTexto = "Para calcular una integral, puedes usar herramientas como Wolfram Alpha o software especializado.";
    } else if (pregunta.includes("ecuación cuadrática")) {
        respuestaTexto = "La ecuación cuadrática tiene la forma ax² + bx + c = 0. Se resuelve con la fórmula general: x = (-b ± √(b² - 4ac)) / 2a.";
    }
    respuesta.innerHTML = respuestaTexto;
}