import {getRequest} from "../http/client.js";

export async function getPortfolioPageCfg() {
    return await getRequest('https://raw.githubusercontent.com/RShalman/rshalman.github.io/master/config/config.json')
}