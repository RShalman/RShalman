export const markdownInlineFourTabSpace = () => [...Array(4).keys()].reduce((space) => space + '<span>&nbsp;</span>', '')

export function nestedRender(str, withSpace = false) {
    return str?.replaceAll(/\>(\s+|),(\s+|)\</gi, `>${withSpace ? markdownInlineFourTabSpace() : ''}\n<`)
}

export function numberWithCommas(num) {
    return `${num}`.split('').reduce((acc, cur, idx, arr) => acc += (arr.length - idx - 1) % 3 === 0 && idx !== arr.length - 1 ? cur + ',' : cur, '')
}

export function mdBlockWithBottomSpace(str) {
    return str + '<br/>'
}