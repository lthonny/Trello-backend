const assignedService = require('../services/assignedService');

class AssignedController {
  async assignedUsers(req, res, next) {
    try {
      const {userId, boardId} = req.body;
      const users = await assignedService.fetch(req.params.id, userId, boardId);
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }

  async createAssignedUser(req, res, next) {
    try {
      const { userId } = req.body;
      const user = await assignedService.create(userId, req.params.id);
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }

  // async updateAssignedUser(req, res, next) {
  //   try {
  //     const { userId, assigned } = req.body;
  //     console.log(userId, req.params.id, assigned);
  //     const users = await assignedService.update(userId, req.params.id, assigned);
  //     return res.json(users);
  //   } catch (e) {
  //     next(e);
  //   }
  // }

  async removeAssignedUser(req, res, next) {
    try {
      const { userId } = req.body;
      const users = await assignedService.update(userId, Number(req.params.id));
      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AssignedController();