# Animflow

Animflow is a powerful animation library for web developers that simplifies the process of creating complex animations with ease. It provides a simple API to create, control, and manage animations in your web applications.

## Requirements
- [Node.js](https://nodejs.org/en) v22 or higher
- [npm](https://www.npmjs.com/) v6 or higher

## Installation

### Clone the repository
```bash
git clone https://github.com/SachaBouk/Animflow.git
```

### Install dependencies

For both the web and API local servers, navigate to the `animflow` directory and run the following command to install the required dependencies:

```bash
cd animflow
npm install
```
### Start the web local server

To start the web local server, run the following command:

```bash
npm run dev
```
### Start the API local server

First to start the API local server you have to clone 
the .env_sample file to .env and set the environment variables.

This API use MongoDB database, so you have to set the MONGODB_URI variable in the .env file.

Then run the following command:

```bash
node server.cjs
```
### Connect to the local server

Once both servers are running, you can connect to the web local server by navigating to `http://localhost:5173` in your web browser. The web application will communicate with the API local server running at `http://localhost:3000`.

You can still change the ports if needed in the respective configuration files :
- Web server port: `vite.config.js`
- API server port: `server.cjs`
