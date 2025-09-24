<?php

namespace Mereb;

use Spiral\GRPC;
use Mereb\PingRequest;
use Mereb\PingResponse;

class CommunicationService implements CommunicationServiceInterface
{
    public function ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse
    {
        $response = new PingResponse();
        $response->setMessage("Received: " . $in->getMessage());
        
        return $response;
    }
}