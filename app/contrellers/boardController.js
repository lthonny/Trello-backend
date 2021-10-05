const { Board } = require('../models/index');

class BoardController {
  async board(req, res, next) {
    try {
      const { id } = req.params;
      const board = await Board.findOne({ where: { id } });

      return res.json(board);
    } catch (e) {
      next(e);
    }
  }

  async boards(req, res, next) {
    try {
      return res.json(await Board.findAll());
    } catch (e) {
      next(e);
    }
  }

  async createBoard(req, res, next) {
    try {
      const { name } = req.body;
      const board = (await Board.create({ title: name })).get();

      return res.status(200).send({ message: 'The table is created' });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new BoardController();
