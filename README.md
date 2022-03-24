# Squad 8 - Trem que voa 8 3/4

## API - Backend

### Routes

Users - (/users)

- /signin - Request Body: email: string, password: string - Returns a object {token: string, refreshToken: string}
- /signup - Request Body: firstName: string, lastName: string, email: string, password: string, passwordConfirmation: string
- /resetpassword - Request Body: email: string - If the user exists, will be sent an email
- /logout - Request Headers Authorization Bearer Token - The token will be added to a blacklist. Validation of blacklist not implemented yet.

### Infraestruture

- Deploy - AWS EC2
- Database - AWS RDS - To be implemented
- Mailing - AWS SES
- Caching - Redis
