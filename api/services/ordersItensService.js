import models from '../../models/index'

class OrdersItensService {
  static async getAllOrdersItens() {
    try {
      return await models.ordersItens.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addOrdersItens(newOrdersItens) {
    try {
      return await models.ordersItens.create(newOrdersItens)
    } catch (error) {
      throw error
    }
  }

  static async updateOrdersItens(id, updateOrdersItens) {
    try {
      const OrdersItensToUpdate = await models.ordersItens.findOne({
        where: { id: Number(id) }
      })

      if (OrdersItensToUpdate) {
        await models.ordersItens.update(updateOrdersItens, { where: { id: Number(id) } })

        return updateOrdersItens
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrdersItens(id) {
    try {
      const theOrdersItens = await models.ordersItens.findOne({
        where: { id: Number(id) }
      })

      return theOrdersItens
    } catch (error) {
      throw error
    }
  }

  static async deleteOrdersItens(id) {
    try {
      const OrdersItensToDelete = await models.ordersItens.findOne({ where: { id: Number(id) } })

      if (OrdersItensToDelete) {
        const deletedOrdersItens = await models.ordersItens.destroy({
          where: { id: Number(id) }
        })
        return deletedOrdersItens
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default OrdersItensService