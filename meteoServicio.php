<?php
// Servicio para generar predicciones meteorológicas
class MeteoServicio {
    public function obtenerPrediccion() {
        $dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
        $climas = ['Sol', 'Nublado', 'Lluvia'];
        $predicciones = [];

        foreach ($dias as $dia) {
            $predicciones[$dia] = $climas[array_rand($climas)];
        }

        return $predicciones;
    }
}

$options = ['uri' => 'http://localhost/meteoServicio'];
$server = new SoapServer(null, $options);
$server->setClass('MeteoServicio');
$server->handle();
?>
