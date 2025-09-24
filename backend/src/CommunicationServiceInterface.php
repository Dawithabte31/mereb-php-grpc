<?php

namespace Mereb;

use Spiral\GRPC;

interface CommunicationServiceInterface extends GRPC\ServiceInterface
{
    public const NAME = 'mereb.CommunicationService';

    public function ping(GRPC\ContextInterface $ctx, PingRequest $in): PingResponse;
}