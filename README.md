# gRPC Challenge

## Setup Instructions

1. Clone the repository
2. Run `chmod +x build-protos.sh && ./build-protos.sh`
3. Run `docker-compose up --build`
4. Access frontend at http://localhost:3000
5. gRPC endpoint available at http://localhost:8080

## Testing
- Backend: `cd backend && composer test`
- Frontend: `cd frontend && npm test`