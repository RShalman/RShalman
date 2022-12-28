import fs from "fs";
import path from "path";
import {getPortfolioPageCfg} from "../requests/portfolio-page-cfg-requests.js";

const dirName = process.cwd();
const portfolioCfgPath = path.join(dirName, '/cfg/portfolioCfg.json')

export async function generatePortfolioCfg() {
    const cfg = await getPortfolioPageCfg()

    if(cfg) {
        fs.writeFileSync(portfolioCfgPath, JSON.stringify(cfg, null, 2))
    }
}

generatePortfolioCfg()