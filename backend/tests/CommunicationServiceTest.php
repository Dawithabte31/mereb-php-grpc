<?php

namespace Mereb\Test;

use PHPUnit\Framework\TestCase;
use Mereb\CommunicationService;
use Mereb\PingRequest;
use Spiral\GRPC\Context;

class CommunicationServiceTest extends TestCase
{
    public function testPingReturnsCorrectMessage()
    {
        $service = new CommunicationService();
        $request = new PingRequest();
        $request->setMessage('Hello Mereb');
        
        $response = $service->ping(new Context([]), $request);
        
        $this->assertEquals('Received: Hello Mereb', $response->getMessage());
    }
}