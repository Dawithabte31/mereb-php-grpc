<?php

require __DIR__ . '/vendor/autoload.php';

use Spiral\Goridge\StreamRelay;
use Spiral\RoadRunner\Worker;
use Spiral\GRPC\Server;
use Mereb\CommunicationService;

$server = new Server();
$server->registerService(CommunicationService::class, new CommunicationService());

$worker = new Worker(new StreamRelay(STDIN, STDOUT));
$server->serve($worker);