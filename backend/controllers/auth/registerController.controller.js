import { CustomErrorHandler } from '../../services';
import hehe from '../../models/aModel.model';

const registerController = {
      async registerUser(req, res, next) {
            try {
                  const data = await hehe.create({
                        hola: 'hola'
                  });
                  console.log(data);
                  res.json(data);
            } catch (err) {
                  return next(err);
            }
      },

      async registerLSP(req, res, next) {

      }
}

export default registerController;
