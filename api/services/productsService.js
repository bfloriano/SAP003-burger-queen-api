import models from '../../models/index'

class ProductsService {
  static async getAllProducts() {
    try {
      return await models.products.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addProduct(newProducts) {
    try {
      return await models.products.create(newProducts)
    } catch (error) {
      throw error
    }
  }

  static async updateProduct(id, updateProducts) {
    try {
      const ProductsToUpdate = await models.products.findOne({
        where: { id: Number(id) }
      })

      if (ProductsToUpdate) {
        await models.products.update(updateProducts, { where: { id: Number(id) } })

        return updateProducts
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProduct(id) {
    try {
      const theProducts = await models.products.findOne({
        where: { id: Number(id) }
      })

      return theProducts
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const ProductsToDelete = await models.products.findOne({ where: { id: Number(id) } })

      if (ProductsToDelete) {
        const deletedProducts = await models.products.destroy({
          where: { id: Number(id) }
        })
        return deletedProducts
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProductsService