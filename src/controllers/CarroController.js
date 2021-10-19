import Carro from '../models/Carro';

class CarroController {
  async index(req, res) {
    const carros = await Carro.findAll({
      attributes: [
        'id',
        'marca',
        'modelo',
        'ano',
        'cor',
        'carroceria',
        'portas',
        'transmissao',
        'motor',
        'quilometragem',
        'status',
      ],
      order: [['id', 'DESC']],
    });

    const carrosDisponiveis = carros.filter(
      (carro) => carro.status === 'disponivel',
    );

    res.json(carrosDisponiveis);
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

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const carro = await Carro.findByPk(id);

      if (!carro) {
        return res.status(400).json({
          errors: ['Carro não encontrado'],
        });
      }

      return res.json(carro);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const carro = await Carro.findByPk(id);

      if (!carro) {
        return res.status(400).json({
          errors: ['Carro não existe'],
        });
      }
      await carro.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const carro = await Carro.findByPk(id);

      if (!carro) {
        return res.status(400).json({
          errors: ['Carro não existe'],
        });
      }

      const carroAtualizado = await carro.update(req.body);

      return res.json(carroAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new CarroController();
