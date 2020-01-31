import models from '../../models/index'

class TableService {
  static async getAllTable() {
    try {
      return await models.table.findAll()
    } catch (error) {
      throw error
    }
  }

  static async addTable(newTable) {
    try {
      return await models.table.create(newTable)
    } catch (error) {
      throw error
    }
  }

  static async updateTable(id, updateTable) {
    try {
      const TableToUpdate = await models.table.findOne({
        where: { id: Number(id) }
      })

      if (TableToUpdate) {
        await models.table.update(updateTable, { where: { id: Number(id) } })

        return updateTable
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getTable(id) {
    try {
      const theTable = await models.table.findOne({
        where: { id: Number(id) }
      })

      return theTable
    } catch (error) {
      throw error
    }
  }

  static async deleteTable(id) {
    try {
      const TableToDelete = await models.table.findOne({ where: { id: Number(id) } })

      if (TableToDelete) {
        const deletedTable = await models.table.destroy({
          where: { id: Number(id) }
        })
        return deletedTable
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default TableService