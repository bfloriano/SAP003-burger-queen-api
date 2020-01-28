import { Router } from 'express'
import productController from '../controllers/productController'

const router = Router()
router.get('/', productController.getAll)
//router.post('/', AuthorController.addAuthor)
//router.get('/:id', AuthorController.getAuthor)
// router.put('/:id', AuthorController.updatedAuthor)
// router.delete('/:id', AuthorController.deleteAuthor)
export default router