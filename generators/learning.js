import config from "../cfg/index.js";
import {nestedRender} from "../utils/commons.js";

export const Learning = nestedRender(`
<h3>Things I'm learning</h3>  
<div style="display: flex; flex-flow: row wrap">${config.cfg.learning.map(({name, imageURL}) =>
    imageURL ?
        `<span style="padding: 20px">
            <img src="${imageURL}" alt="${name}" height="45" style="filter: drop-shadow(2px 4px 6px black)" />
        </span>`
        :
        `<p style="padding: 20px; font-size: 45px; line-height: 0.5">${name}</p>`
)}</div>
`)