# Tiramisu Microservices

A microservices-based backend architecture built with TypeScript and Express.js. The system consists of multiple independent services that work together to provide a complete solution.

## Architecture Overview
- Microservices architecture
- Will be deployed on AWS
- Will be using Kafka for event-based communication
- Built with TypeScript and Express.js
- Using PostgreSQL for database
- Using Docker for containerization

## Services

### Auth Service
- User authentication and authorization
- User registration and profile management
- JWT token handling
- Role-based access control
- Email/ID number login support

### Catalog Service (Planned)
- Product management
- Category management
- Product search and filtering
- Product inventory
- Price management

### Reservation Service (Planned)
- Booking management
- Availability checking
- Reservation status tracking
- Cancellation handling
- Booking history

## Technical Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Validation**: Zod
- **Documentation**: Swagger/OpenAPI

## Common Features Across Services

- TypeScript for type safety
- Consistent error handling
- Input validation
- Comprehensive logging
- Database migrations
- Environment-based configuration
- API documentation
- Unit and integration tests

## Development Guidelines

1. Each service should:
   - Be independently deployable
   - Have its own database
   - Handle its own authentication
   - Implement consistent error handling
   - Include comprehensive tests
   - Maintain its own documentation

2. Communication:
   - REST APIs for synchronous communication
   - Event-based for asynchronous operations
   - Consistent API response format

3. Code Structure:
   - Follow clean architecture principles
   - Implement repository pattern
   - Use dependency injection
   - Maintain consistent coding style
