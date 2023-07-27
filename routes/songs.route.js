import express from 'express';
import {
  getAllSongs,
  getSongByTitle,
  getSongById,
  postSong,
} from '../controllers/rest/playlist.controller.js';

const router = express.Router();

router.get('/', getAllSongs, getSongByTitle);

router.get('/:id', getSongById);

router.post('/', postSong);

export default router;
