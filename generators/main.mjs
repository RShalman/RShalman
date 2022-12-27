import fs from 'fs'
import path from "path";

import {INTRO} from "./intro.mjs";

const dirName = process.cwd();
const readmePath = path.join(dirName, '/README.MD')

function buildMD() {
try {
    fs.writeFileSync(readmePath, INTRO, )
} catch (e) {
    console.error('BUILD_INTRO', e)
}

}

buildMD()