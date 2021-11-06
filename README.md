# Client City API

### Install API
```bash
# Install dependencies
$ npm install

# Run Migrates
$ npm run db:make

# Start server
$ npm start
```

### Project anatomy

```
 src
    └ app
       └ contracts
       └ use-case
    └ domain
    └ infra
       └ adapters
       └ config
       └ orm
          └ knex
       └ repositories
    └ interfaces
       └ controllers
    └ main
       └ index.js
 └ node_modules (generated)
```
