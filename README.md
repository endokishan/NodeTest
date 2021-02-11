# NodeTest

## Run locally on your machine:
You need to have installed _npm_ _globally_.

Global Pacakage
``` shell
npm i -g nodemon ts-node typescript
```

Clone this repository
``` shell
git clone https://github.com/endokishan/NodeTest.git
```

Install dependencies
``` shell
npm install
```



Start NodeJS Server in development
``` shell
npm start
```

____

###  Signup



***Endpoint:***

```bash
Method: POST
Type: URLENCODED
URL: http://localhost:3636/api/user/signup
```



***Body:***


| Key | Value | Description |
| --- | ------|-------------|
| username | username |  |
| mobile | mobile |  |
| password | userpassword |  |
| firstName | firstName |  |
| lastName | lastName |  |


###  Login



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:3636/api/user/login
```



***Query params:***

| Key | Value | Description |
| --- | ------|-------------|
| username | username |  |
| password | userpassword |  |
