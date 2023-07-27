import express from 'express';
import songsRouter from '../routes/songs.route.js';

function startRest() {
  const app = express();

  app.use(express.json());

  app.listen(3000, () => {
    console.log('server listening on port 3000');
  });

  app.use('/songs', songsRouter);
}

export default startRest;
