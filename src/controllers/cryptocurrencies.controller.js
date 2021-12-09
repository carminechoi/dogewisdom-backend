import { CryptocurrenciesService } from '../services';

class CryptocurrenciesController {
    static getAll = async function (req, res, next) {
        try {
            let result = await CryptocurrenciesService.getAll()
            return res.status(200).json({ status: 200, data: result, message: "Succesfully Retrieved" });

        } catch (e) {
            return res.status(400).json({ status: 400, message: e.message });
        }
    }
}



export { CryptocurrenciesController };