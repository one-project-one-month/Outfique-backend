import { Router } from 'express';
import { bgRemovedImg, deleteImg, uploadImg } from './imageUploadControllers';
import { upload } from '../../middleware/file-upload-handler';

const router = Router();

router.post('/upload', upload.single('file'), uploadImg);
router.post('/background-removal-upload', upload.single('file'), bgRemovedImg);
router.delete('/delete', deleteImg);
export const imageUploadRoutes = router;
