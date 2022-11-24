# Cudos Token Minter UI

- `set up .env file according to the example.env.file`*
  >  *If  `DEFAULT_NETWORK` is 'LOCAL' or 'PRIVATE', you only need the respective section filled out. If 'PUBLIC', it will require proper configurations for 'PUBLIC' and 'MAINNET' sections in order to have the ability to switch between the networks from within the app when running, without the need of additional deployments.

## Running in Docker
 - `$ export PROJECT_NAME=cudos-token-minter-ui VERSION=<prefered_version> PORT=<prefered_port>`
 - `$ docker build -t ${PROJECT_NAME}:${VERSION} . --no-cache`
 - `$ docker run -d -p ${PORT}:80 --name ${PROJECT_NAME} ${PROJECT_NAME}:${VERSION}`

## Running locally
 - `$ yarn`
 - `$ yarn build`
 - `$ yarn start`
