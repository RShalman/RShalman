import config from "../cfg/index.js";
import {nestedRender} from "../utils/commons.js";

export const ExperiencedIn = nestedRender(`
<h3>Technologies & tools I'm experienced in</h3>  
<div>${config.portfolioCfg.skills.map(({name, imageURL}) =>
`<span>
        <img src="https://rshalman.github.io${imageURL}" alt="${name}" height="65" width="45"/>
    </span>`
)}</div>
`, true)