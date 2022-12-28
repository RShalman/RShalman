import config from "../cfg/index.js";

export const Intro = `
<h3>Welcome to my profile!</h3>
<p>I'm ${config.cfg.name}, ${config.cfg.mainJobTitle} from <b>${config.cfg.from.city}, ${config.cfg.from.country}</b> <img src="${config.cfg.from.flagIconURL}" width="13" alt="${config.cfg.from.country}" />, currently living in <b>${config.cfg.currentlyLiving.city}, ${config.cfg.currentlyLiving.country}</b> <img src="${config.cfg.currentlyLiving.flagIconURL}" width="13" alt="${config.cfg.currentlyLiving.country}" /></p>

<p>Started my path as a professional Frontend Developer in 2015.
Currently working as <b>${config.cfg.currentJobTitle}</b> and passionately digging into the things to become a better professional day by day.</p>
`