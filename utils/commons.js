export function nestedRender(str) {
    return str?.replaceAll(/\>(\s+|),(\s+|)\</gi, '>\n<')
}

export function numberWithCommas(num) {
    return `${num}`.split('').reduce((acc, cur, idx, arr) => acc += (arr.length - idx - 1) % 3 === 0 && idx !== arr.length - 1 ? cur + ',' : cur, '')
}