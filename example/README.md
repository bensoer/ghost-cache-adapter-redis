# Docker Example Usage

Within this folder contains an example installation setup using docker-compose and a docker container. The docker container copies in the `dist` contents and thus installs the plugin into ghost. This allows you to then locally test a ghost setup that is running using redis.

# Setup
1. From the parent directory, compile the project for the example project by running:
   ```bash
   npm run build-example
   ```
   This will compile the project and then copy the `dist` folder into the example directory
2. `cd` into the `example` folder
3. Run the following command to start everything up:
   ```bash
   docker-compose up
   ```
   If you are tinkering with the project and thus need to rerun it multiple times, execute it as follows:
   ```bash
   docker-compose up --build
   ```
