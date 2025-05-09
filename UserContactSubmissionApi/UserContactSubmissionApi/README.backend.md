# ASP.NET Core Web API - User Contact Submission

## Build & Run

### Docker
```bash
docker build -f Dockerfile.backend -t contact-backend .
docker run -p 5159:5159 contact-backend
```

### Docker Compose
```bash
docker-compose up --build
```