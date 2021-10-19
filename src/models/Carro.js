import Sequelize, { Model } from 'sequelize';

export default class Carro extends Model {
  static init(sequelize) {
    super.init({
      marca: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome da marca precisa ter de 3 a 255 caracteres',
          },
        },
      },
      modelo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O modelo do carro precisa ter de 3 a 255 caracteres',
          },
        },
      },
      ano: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 4],
            msg: 'O ano do carro precisa ter 4 números',
          },
          isInt: {
            msg: 'O ano do carro precisa ser um número inteiro',
          },
        },
      },
      cor: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'A cor do carro precisa ter de 3 a 255 caracteres',
          },
        },
      },
      carroceria: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'O tipo da carroceria do carro precisa ter de 3 a 255 caracteres',
          },
        },
      },
      portas: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 1],
            msg: 'Defina o número de portas com a apenas um caractere',
          },
          isInt: {
            msg: 'O número de portas tem que ser do tipo inteiro',
          },
        },
      },
      transmissao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Utilize de 3 a 255 caracteres para definir a transmissão do carro',
          },
        },
      },
      motor: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 10],
            msg: 'Utilize apenas um número decimal para descrever o motor do carro',
          },
          isFloat: {
            msg: 'Descreva o motor do carro como um número decimal',
          },
        },
      },
      quilometragem: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 50],
            msg: 'Utilize de 1 a 50 números para definir a kilometragem do carro',
          },
          isInt: {
            msg: 'A quilometragem do carro deve ser definida por um número inteiro',
          },
        },
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: 'disponivel',
      },
    }, {
      sequelize,
    });
    return this;
  }
}
