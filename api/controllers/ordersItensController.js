import ordersItensService from '../services/ordersItensService'
import Util from '../utils/Utils'

const util = new Util()

class OrdersItensController {
  static async getAllOrdersItens(req, res) {
    try {
      const allOrdersItens = await ordersItensService.getAllOrdersItens()
      if (allOrdersItens.length > 0) {
        util.setSuccess(200, 'OrdersItens retrieved', allOrdersItens)
      } else {
        util.setSuccess(200, 'No OrdersItens found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addOrdersItens(req, res) {
    if (!req.body.productId || !req.body.orderId || !req.body.qtd) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newOrdersItens = req.body
    try {
      const createdOrdersItens = await ordersItensService.addOrdersItens(newOrdersItens)
      util.setSuccess(201, 'OrdersItens Added!', createdOrdersItens)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedOrdersItens(req, res) {
    const alteredOrdersItens = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateOrdersItens = await ordersItensService.updateOrdersItens(id, alteredOrdersItens)
      if (!updateOrdersItens) {
        util.setError(404, `Cannot find OrdersItens with the id: ${id}`)
      } else {
        util.setSuccess(200, 'OrdersItens updated', updateOrdersItens)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getOrdersItens(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theOrdersItens = await ordersItensService.getOrdersItens(id)

      if (!theOrdersItens) {
        util.setError(404, `Cannot find OrdersItens with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found OrdersItens', theOrdersItens)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrdersItens(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const OrdersItensToDelete = await ordersItensService.deleteOrdersItens(id)

      if (OrdersItensToDelete) {
        util.setSuccess(200, 'OrdersItens deleted')
      } else {
        util.setError(404, `OrdersItens with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}

export default OrdersItensController