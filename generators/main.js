import fs from 'fs'
import path from "path";

import {Intro} from "./intro.js";
import {Links} from "./links.js";
import {ExperiencedIn} from "./experiencedIn.js";
import {Learning} from "./learning.js";
import {leetCode} from "./leetCode.js";
import {mdBlockWithBottomSpace} from "../utils/commons.js";

const dirName = process.cwd();
const readmePath = path.join(dirName, '/README.MD')

async function buildMD() {
    try {
        const leetCodeMarkup =  await leetCode()
        const UpdateInfo = `<p align="center">Readme is autoupdated at: ${new Date().toGMTString()}</p>`

        fs.writeFileSync(readmePath, [Intro, Links, ExperiencedIn, Learning, leetCodeMarkup, UpdateInfo].reduce((md, part) => md += mdBlockWithBottomSpace(part), ''),)
    } catch (e) {
        console.error('BUILD_INTRO', e)
    }

}

buildMD()