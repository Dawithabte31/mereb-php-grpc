FROM php:7.3-cli

# Install dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    wget

# Install protobuf compiler
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v3.15.8/protoc-3.15.8-linux-x86_64.zip \
    && unzip protoc-3.15.8-linux-x86_64.zip -d /usr/local \
    && rm protoc-3.15.8-linux-x86_64.zip

# Install protoc-gen-php-grpc
RUN wget https://github.com/spiral/php-grpc/releases/download/v1.4.0/protoc-gen-php-grpc-1.4.0-linux-amd64.tar.gz \
    && tar -xzf protoc-gen-php-grpc-1.4.0-linux-amd64.tar.gz -C /usr/local/bin/ \
    && chmod +x /usr/local/bin/protoc-gen-php-grpc \
    && rm protoc-gen-php-grpc-1.4.0-linux-amd64.tar.gz

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app

COPY . .

RUN composer install

EXPOSE 9001

CMD ["php", "grpc-server.php"]