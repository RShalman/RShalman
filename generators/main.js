import fs from 'fs'
import path from "path";

import {Intro} from "./intro.js";
import {Links} from "./links.js";
import {ExperiencedIn} from "./experiencedIn.js";
import {Learning} from "./learning.js";
import {leetCode} from "./leetCode.js";

const dirName = process.cwd();
const readmePath = path.join(dirName, '/README.MD')

async function buildMD() {
    try {
        await leetCode()
        const leetCodeMarkup = `<img src="generators/assets/leetCodeWidget.svg" />`
        fs.writeFileSync(readmePath, Intro + Links + ExperiencedIn + Learning + leetCodeMarkup,)
    } catch (e) {
        console.error('BUILD_INTRO', e)
    }

}

buildMD()