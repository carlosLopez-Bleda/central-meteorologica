<?php
// Servicio para devolver la hora actual del servidor
class HoraServicio {
    public function obtenerHoraServidor() {
        $horaServidor = new DateTime();
        $horaServidor->modify('+3 hours'); // Ajusta según el requerimiento
        return $horaServidor->format('H:i:s');
    }
}

$options = ['uri' => 'http://localhost/horaServicio'];
$server = new SoapServer(null, $options);
$server->setClass('HoraServicio');
$server->handle();
?>
