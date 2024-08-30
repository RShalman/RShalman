import config from "../cfg/index.js";

export const Intro = `
<h3>Welcome to my profile!</h3>
<p>I'm <a href="${config.cfg.portfolioURL}" target="_blank">${config.cfg.name}</a>, ${config.cfg.mainJobTitle} from <b>${config.cfg.from.city}, ${config.cfg.from.country}</b> <img src="${config.cfg.from.flagIconURL}" width="13" alt="${config.cfg.from.country}" />.</p>

<p>Started my path as a professional Frontend Developer in 2015.
Currently working as <b>${config.cfg.currentJobTitle}</b> and passionately digging into the things to become a better professional day by day.</p>
`