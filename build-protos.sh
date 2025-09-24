#!/bin/bash

# Generate PHP gRPC code
protoc --php_out=backend/src --php-grpc_out=backend/src proto/service.proto

# Generate JavaScript gRPC code
protoc --js_out=import_style=commonjs,binary:frontend/src \
       --grpc-web_out=import_style=commonjs,mode=grpcwebtext:frontend/src \
       proto/service.proto