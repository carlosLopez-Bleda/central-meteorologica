<?php
// Servicio para devolver la humedad actual
class HumedadServicio {
    public function obtenerHumedad() {
        return rand(0, 100) . '%';
    }
}

$options = ['uri' => 'http://localhost/humedadServicio'];
$server = new SoapServer(null, $options);
$server->setClass('HumedadServicio');
$server->handle();
?>
