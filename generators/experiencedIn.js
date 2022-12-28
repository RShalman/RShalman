import config from "../cfg/index.js";

export const ExperiencedIn = `
<h3>Technologies & tools I'm experienced at</h3>  
<div style="display: flex; flex-flow: row wrap">${config.portfolioCfg.skills.map(({name, imageURL},i, arr) =>
`<span style="padding: 20px">
        <img src="https://rshalman.github.io${imageURL}" alt="${name}" height="45" style="filter: drop-shadow(2px 4px 6px black)" />
    </span>`
)}</div>
`.replaceAll(/\,/gi, '')