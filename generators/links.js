import config from "../cfg/index.js";
import {nestedRender} from "../utils/commons.js";

//TODO: add animation
//TODO: make icons colored

export const Links = nestedRender(`
   <h3>My  links & socials</h3>
   <div>${config.portfolioCfg.socials.icons.map(({name, href, imgPath},i, arr) => 
        `<a href="${href}" target="_blank" style="${(i === 0 && 'padding-right: 20px') || (i === arr.length - 1 && 'padding-left: 20px') || 'padding: 0 20px'}">
            <img src="https://rshalman.github.io${imgPath}" alt="${name}" height="45" style="filter: drop-shadow(2px 4px 6px black)" />
        </a>`
    )}</div>
`)