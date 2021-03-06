import axios from 'axios';


class CryptocurrenciesService {
	static async getCryptoData(subreddit) {
		try  {
			if (subreddit === '/All') subreddit = 'all-crypto';
			else subreddit = subreddit.substring(3);
			const url = `https://apewisdom.io/api/v1.0/filter/${subreddit}/page/1`;
			const response = await axios.get(url);
			response.data.results.forEach(coin => {
                coin.ticker = coin.ticker.slice(0,-2)
            });
			return response.data.results;
		} catch (e) {
			throw Error(`CryptocurrenciesService getAll: ${e}`);
		}
	}
}

export { CryptocurrenciesService };