# information-security-ecommerce-project

This is a **secure e-commerce web application** developed as part of the Information Security Project. Users can log in using **Auth0 (OIDC)**, make product purchases, and view their orders securely.

---

## **Features**

- **User Authentication**
  - Secure login/logout using **OIDC with Auth0**.
  - Access token ensures only authorized users can make purchases or view their own orders.
- **Purchase Management**
  - Users can add new purchases with:
    - Product name
    - Quantity
    - Delivery date & time
    - Delivery location
    - Optional message
  - Users can view **all their past and upcoming purchases**.

- **Security**
  - Protected against **OWASP Top 10 vulnerabilities**:
    - SQL Injection
    - Cross-Site Scripting (XSS)
    - Cross-Site Request Forgery (CSRF)
  - Access control ensures users can only view their own orders.
## **Tech Stack**

- **Front-End:** React + Vite + Tailwind CSS
- **Back-End:** Spring Boot
- **Database:** MySQL
- **Authentication:** Auth0 (OIDC)
- **Security:** Spring Security + JWT validation

---

## **Setup Instructions**

## Front-End Setup
- The application's frontend is developed with React and Vite. Before running it, make sure to create a .env file in the frontend project’s root directory with the required environment variables.

## Back-End Setup

Create the MySQL database

```sql
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
AUTH0_ISSUER_URI=https://<your-auth0-domain>/
AUTH0_AUDIENCE=<your-auth0-audience>

```

```
domain={import.meta.env.VITE_AUTH0_DOMAIN}
clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}

```
https://github.com/user-attachments/assets/99de0489-3677-4133-bc92-499ac012b1f3







