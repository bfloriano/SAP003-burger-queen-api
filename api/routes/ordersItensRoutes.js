import { Router } from 'express'
import OrdersItensController from '../controllers/ordersItensController'

const router = Router()
router.get('/', OrdersItensController.getAllOrdersItens)
router.post('/', OrdersItensController.addOrdersItens)
router.get('/:id', OrdersItensController.getOrdersItens)
router.put('/:id', OrdersItensController.updatedOrdersItens)
router.delete('/:id', OrdersItensController.deleteOrdersItens)
export default router