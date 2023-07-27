import startRest from './app/rest.js';

if (process?.argv && process.argv[2] === 'rest') {
  startRest();
}
