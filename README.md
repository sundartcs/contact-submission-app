# User Contact Submission App

This project is a full-stack contact submission system built with:

- **Frontend**: React.js
- **Backend**: ASP.NET Core Web API
- **Containerized** using Docker and Docker Compose

---

## 📁 Project Structure

```
UserContactSubmissionApp/
├── UserContactSubmissionFrontEnd/
│   └── contactsubmissionfrontend/       # React App
├── UserContactSubmissionApi/
│   └── UserContactSubmissionApi/        # .NET Core Web API
└── docker-compose.yml
```

---

## 🧰 Requirements

- Docker & Docker Compose installed
- Node.js (for local frontend testing)
- .NET 6 SDK (for local backend testing)

---

## 🚀 Getting Started

### Option 1: Run using Docker Compose

```bash
docker-compose up --build
```

- React frontend will be available at: [http://localhost:3000](http://localhost:3000)
- ASP.NET Web API will be running at: [http://localhost:5159](http://localhost:5159)

### Option 2: Run Frontend and Backend Locally

#### Frontend

```bash
cd UserContactSubmissionFrontEnd/contactsubmissionfrontend
npm install
npm start
```

#### Backend

```bash
cd UserContactSubmissionApi/UserContactSubmissionApi
dotnet build
dotnet run
```

---

## 📨 Contact Form Fields and Validation

The form includes the following fields with basic validation:

| Field     | Type   | Validation                                  |
|-----------|--------|---------------------------------------------|
| Name      | Text   | Required, min 2 characters                  |
| Email     | Email  | Required, valid email format                |
| Phone     | Text   | Required, digits only, min 10 characters    |

On submit, data is sent to the API and saved or handled on the server.

---

## 🧪 API Testing (Optional)

You can test the API endpoint using tools like `curl` or Postman.

```http
POST http://localhost:5159/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## 🧱 Docker Commands (Optional)

### Frontend

```bash
docker build -f Dockerfile.frontend -t contact-frontend .
docker run -p 3000:80 contact-frontend
```

### Backend

```bash
docker build -f Dockerfile.backend -t contact-backend .
docker run -p 5159:5159 contact-backend
```

---

## 📚 Learn More

- [React Documentation](https://reactjs.org/)
- [ASP.NET Core Docs](https://learn.microsoft.com/en-us/aspnet/core/)
- [Docker Docs](https://docs.docker.com/)