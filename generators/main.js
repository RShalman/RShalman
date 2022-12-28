import fs from 'fs'
import path from "path";

import {Intro} from "./intro.js";
import {Links} from "./links.js";
import {ExperiencedIn} from "./experiencedIn.js";

const dirName = process.cwd();
const readmePath = path.join(dirName, '/README.MD')

function buildMD() {
    try {
        fs.writeFileSync(readmePath, Intro + Links + ExperiencedIn,)
    } catch (e) {
        console.error('BUILD_INTRO', e)
    }

}

buildMD()