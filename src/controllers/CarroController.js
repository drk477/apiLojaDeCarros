import Carro from '../models/Carro';

class CarroController {
  async index(req, res) {
    const carros = await Carro.findAll({
      attributes: ['id', 'marca', 'modelo', 'ano', 'cor', 'carroceria', 'portas', 'transmissao', 'motor', 'quilometragem'],
      order: [['id', 'DESC']],
    });
    res.json(carros);
  }

  async store(req, res) {
    try {
      const carro = await Carro.create(req.body);

      return res.json(carro);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CarroController();
