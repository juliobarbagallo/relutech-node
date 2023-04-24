# ACME
This is a Node application to handle resources management by RESTful API.

## Features
User authentication: It protect endpoint using JWT.
Developers: This model handle the developers of the company and allows CRUD actions at /api/developers.
Assets: This model handle the assets of the company and allows CRUD actions at /api/developers.
Licenses: This model handle the licenses of the company and allows CRUD actions at /api/developers.


## Technologies Used
Express framework.
mongoDB (with mongoose).
Babel.


## Setup and Installation
We assume docker is installed and running.
- Check docker is installed and running.
```bash
 dcoker ps
```

- Deploy mongoDB using Docker
```bash
 docker run -d -p 27017:27017 --name mongo mongo:latest
```

- Clone the project.

```bash
git clone https://github.com/juliobarbagallo/relutech-node.git
```
- Go to the new created directory.

- Install dependencies.

```bash
npm  install

```
- Run project.

```bash
npm run dev
```

  
Usage
- Once project is running perform a POST request to: http://localhost:3000/api/v1/users/signup/


the body request should looks like this:


{
    "username": "root",
    "email" :"root@acme.com",
    "password": "new14you",
    "isActive": true,
    "roles": ["admin"]
}


It will create and admin user. The application check for roles to allow CRUD operations.


it also will give you a jwt in the response, save it to use it later.



- To use the JWT in the headers you should send "x-access-token" and as value the JWT previously received. You need for each HTTP request.


- End point list:


- /api/v1/assets
  - POST /api/v1/assets
  - GET /api/v1/assets
  - GET /api/v1/assets/:assetId
  - PUT /api/v1/assets/:assetId
  - DELETE /api/v1/assets/:assetId
- /api/v1/licenses
  - POST /api/v1/licenses
  - GET /api/v1/licenses
  - GET /api/v1/licenses/:licenseId
  - PUT /api/v1/licenses/:licenseId
  - DELETE /api/v1/licenses/:licenseId
- /api/v1/users
  - POST /api/v1/users/signup
  - POST /api/v1/users/signin
- /api/users
  - POST /api/users
  - GET /api/users
  - GET /api/users/:userId
  - PUT /api/users/:userId
  - DELETE /api/users/:userId