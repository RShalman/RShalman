import config from "../cfg/index.js";
import {nestedRender} from "../utils/commons.js";

export const Learning = nestedRender(`
<h3>Things I'm learning or curious about</h3>  
<div>${config.cfg.learning.map(({name, imageURL}) =>
    imageURL ?
        `<span>
            <img src="${imageURL}" alt="${name}" height="45" />
        </span>`
        :
        `<span>
            <p>${name}</p>
        </span>`
)}</div>
`, true)