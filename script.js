const SOAP_URLS = {
    hora: "http://localhost/horaServicio.php",
    meteo: "http://localhost/meteoServicio.php",
    humedad: "http://localhost/humedadServicio.php",
    viento: "http://localhost/vientoServicio.php"
};

async function consultarServicio(url, action) {
    const soapMessage = `
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
            <soapenv:Body>
                <${action}/>
            </soapenv:Body>
        </soapenv:Envelope>`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "text/xml; charset=utf-8",
            "SOAPAction": action
        },
        body: soapMessage
    });
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    return xmlDoc.getElementsByTagName(action + "Response")[0].textContent;
}

async function recargarHora() {
    const hora = await consultarServicio(SOAP_URLS.hora, "obtenerHoraServidor");
    document.getElementById("hora-valor").innerText = hora;
}

async function recargarPrediccion() {
    const prediccion = await consultarServicio(SOAP_URLS.meteo, "obtenerPrediccion");
    const lista = document.getElementById("prediccion-lista");
    lista.innerHTML = "";
    const dias = JSON.parse(prediccion);
    for (const [dia, clima] of Object.entries(dias)) {
        const item = document.createElement("li");
        item.textContent = `${dia}: ${clima}`;
        lista.appendChild(item);
    }
}

async function recargarHumedad() {
    const humedad = await consultarServicio(SOAP_URLS.humedad, "obtenerHumedad");
    document.getElementById("humedad-valor").innerText = humedad;
}

async function recargarViento() {
    const viento = await consultarServicio(SOAP_URLS.viento, "obtenerViento");
    document.getElementById("viento-valor").innerText = viento;
}

// Carga inicial
window.onload = () => {
    recargarHora();
    recargarPrediccion();
    recargarHumedad();
    recargarViento();
};
