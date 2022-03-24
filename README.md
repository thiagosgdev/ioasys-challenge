# Squad 8 - Trem que voa 8 3/4

## API - Backend

### Routes

Users - (/users)

- /signin - Required Body: email: string, password: string - Returns a object {token: string, refreshToken: string}
- /signup - Require Body: firstName: string, lastName: string, email: string, password: string, passwordConfirmation: string
- Export documents as Markdown, HTML and PDF

### Infraestruture

- Deploy - AWS EC2
- Database - AWS RDS
- Mailing - AWS SES
