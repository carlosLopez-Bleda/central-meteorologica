<?php
// Servicio para devolver la velocidad y dirección del viento
class VientoServicio {
    public function obtenerViento() {
        $velocidad = rand(0, 100) . ' km/h';
        $direcciones = ['Norte', 'Sur', 'Este', 'Oeste', 'Noreste', 'Sureste', 'Noroeste', 'Suroeste'];
        $direccion = $direcciones[array_rand($direcciones)];

        return ['velocidad' => $velocidad, 'direccion' => $direccion];
    }
}

$options = ['uri' => 'http://localhost/vientoServicio'];
$server = new SoapServer(null, $options);
$server->setClass('VientoServicio');
$server->handle();
?>
