import models from '../../models/index'

class OrdersService {
  static async getAllOrders() {
    try {
      return await models.orders.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addOrder(newOrders) {
    try {
      return await models.orders.create(newOrders)
    } catch (error) {
      throw error
    }
  }

  static async updateOrder(id, updateOrders) {
    try {
      const OrdersToUpdate = await models.orders.findOne({
        where: { id: Number(id) }
      })

      if (OrdersToUpdate) {
        await models.orders.update(updateOrders, { where: { id: Number(id) } })

        return updateOrders
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrder(id) {
    try {
      const theOrders = await models.orders.findOne({
        where: { id: Number(id) }
      })

      return theOrders
    } catch (error) {
      throw error
    }
  }

  static async deleteOrder(id) {
    try {
      const OrdersToDelete = await models.orders.findOne({ where: { id: Number(id) } })

      if (OrdersToDelete) {
        const deletedOrders = await models.orders.destroy({
          where: { id: Number(id) }
        })
        return deletedOrders
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default OrdersService

