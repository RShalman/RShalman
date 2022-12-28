import path from "path";
import fs from "fs";

const dirName = process.cwd();
const fileNames = fs.readdirSync(path.join(dirName, '/cfg')).filter(fileName => fileName.includes('.json'))

const config = fileNames?.reduce((acc, file) => {
    const [fileName] = file.split('.')
    const cfgPath = path.join(dirName, `/cfg/${file}`)
    const cfg = JSON.parse(fs.readFileSync(cfgPath))

    acc[fileName] = cfg
    return acc
}, {})

export default config