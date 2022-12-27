import fs from "fs";
import path from "path";

const dirName = process.cwd();
const cfgPath = path.join(dirName, '/cfg/cfg.json')
const cfg = JSON.parse(fs.readFileSync(cfgPath))


export const INTRO = `
<h3>Welcome to my profile!</h3>
<p>I'm ${cfg.name}, ${cfg.jobTitle} from ${cfg.from.city}, ${cfg.from.country} <img src="${cfg.from.flagIconURL}" width="13" alt="${cfg.from.country}" />, currently living in ${cfg.currentlyLiving.city}, ${cfg.currentlyLiving.country} <img src="${cfg.currentlyLiving.flagIconURL}" width="13" alt="${cfg.currentlyLiving.country}" /></p>
`