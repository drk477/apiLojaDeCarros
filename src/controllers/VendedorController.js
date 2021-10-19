import Vendedor from '../models/Vendedor';

class VendedorController {
  async store(req, res) {
    try {
      const novoVendedor = await Vendedor.create(req.body);
      const { id, nome, email } = novoVendedor;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const vendedores = await Vendedor.findAll({ attributes: ['id', 'nome', 'email'] });

      return res.json(vendedores);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const vendedor = await Vendedor.findByPk(req.params.id);
      const { id, nome, email } = vendedor;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const vendedor = await Vendedor.findByPk(req.params.id);

      if (!vendedor) {
        res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await Vendedor.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new VendedorController();
