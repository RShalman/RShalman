import config from "../cfg/index.js";
import {nestedRender} from "../utils/commons.js";

//TODO: add animation
//TODO: make icons colored

export const Links = nestedRender(`
   <h3>My  links & socials</h3>
   <div>${config.portfolioCfg.socials.icons.map(({name, href, imgPath},i, arr) => 
        `<a href="${href}" target="_blank">
            <img src="https://rshalman.github.io${imgPath}" alt="${name}" height="65" width="45" />
        </a>`
    )}</div>
`, true)