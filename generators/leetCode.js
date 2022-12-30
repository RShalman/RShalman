import {getLeetCodeProfile, getLeetCodeStats} from "../requests/leet-code-requests.js";
import {nestedRender, numberWithCommas} from "../utils/commons.js";
import path from "path";
import fs from "fs";

const COLORS = {
    'All': {
        bg: 'rgb(74,74,74)',
        covered: 'rgb(255,166,22)'
    },
    'Easy': {
        bg: 'rgba(44,187,93,.25)',
        covered: 'rgb(0,184,163)'
    },
    'Medium': {
        bg: 'rgba(255,192,30,.25)',
        covered: 'rgb(255, 192, 30)'
    },
    'Hard': {
        bg: 'rgba(239,71,67,.25)',
        covered: 'rgb(239, 71, 67)'
    }
}

const leetCodeSvg = async () => {
    const profileData = await getLeetCodeProfile('Kursor')
    const {username = '', profile = {}} = profileData?.data?.matchedUser ?? {}
    const stats = await getLeetCodeStats('Kursor')
    const {allQuestionsCount = [], matchedUser = {}} = stats?.data ?? {}
    const {problemsSolvedBeatsStats, submitStatsGlobal} = matchedUser
    const [AllTotal] = allQuestionsCount
    const [AllSolved] = submitStatsGlobal?.acSubmissionNum ?? []

    const BarsData = allQuestionsCount.filter(q => q.difficulty !== 'All').reduce((bars, bar) => (
        [...bars, {
             ...bar,
                solved:submitStatsGlobal.acSubmissionNum.find(s => s.difficulty === bar.difficulty).count,
                beats: problemsSolvedBeatsStats.find(s => s.difficulty === bar.difficulty).percentage
            }
        ]), [])

    const styles = fs.readFileSync(path.join(process.cwd(), '/generators/assets/leetCode.css'))

    return nestedRender(`
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
            <foreignObject width="100%" height="100%">
                <div xmlns="http://www.w3.org/1999/xhtml">
                    <style>
                           ${styles}
                           
                           .circle {
                                border: 5px solid ${COLORS['All'].bg};
                            }
                            
                            .circle:after {
                                background: radial-gradient(farthest-side, ${COLORS['All'].covered} 98%, #0000) top/5px 5px no-repeat, conic-gradient(${COLORS['All'].covered} calc(${AllSolved.count / (AllTotal.count / 100)} * 1%), #0000 0);
                            }
                    </style>
                        
                    <div class="container">
                        <div class="profile">
                            <span class="name">${profile.realName} a.k.a <a href="https://leetcode.com/${username}" target="_blank">${username}</a></span>
                            <span class="profileInfo"><p>Ranking:</p><b>${numberWithCommas(profile.ranking)}</b></span>
                            <span class="profileInfo"><p>Views:</p> <b>${profile.postViewCount}</b> <p class="highlight">+${profile.postViewCountDiff}</p></span>
                            <span class="profileInfo"><p>Solutions:</p> <b>${profile.solutionCount}</b> <p class="highlight">+${profile.solutionCountDiff}</p></span>
                            <span class="profileInfo"><p>Reputation:</p> <b>${profile.reputation}</b></span>
                        </div>
                        <div class="stats">
                            <p>Solved problems</p>
                            <div class="allCounter">
                                <div class="allCounterInner">
                                        <span class="circle">
                                            ${AllSolved?.count}
                                            <br/>
                                            Solved
                                        </span>
                                    </div>
                            </div>
                            <div class="detailedCounter">
                                ${BarsData.map(({difficulty, count, solved, beats}) =>
                                `
                                    <div class="detail">
                                        <div class="detailInfo">
                                            <p>${difficulty}</p>
                                            <p>${solved} / ${count}</p>
                                            <p>${beats !== null ? 'Beats ' + beats + '%' : 'Not enough data'}</p>
                                        </div>
                                        <div style="background-color: ${COLORS[difficulty].bg};" class="detailBar">
                                            <span style="background-color: ${COLORS[difficulty].covered}; width: ${solved / (count / 100)}%;" class="progress" />
                                        </div>
                                    </div> 
                                    `)}
                            </div>
                        </div>
                    </div>
                </div>
            </foreignObject>
        </svg>
    `)
}

export async function leetCode() {
    try {
        const markup = await leetCodeSvg()
        const assetsDir = path.join(process.cwd(), '/generators/assets')

        if(!fs.existsSync(assetsDir)) {
            fs.mkdirSync(assetsDir)
        }

        fs.writeFileSync(assetsDir + '/leetCodeWidget.svg', markup)

        return nestedRender(`<h3>My LeetCode achievements</h3><img src="generators/assets/leetCodeWidget.svg" />`)
    } catch (e) {
        console.error("LEET_CODE_WIDGET:", e.message)
    }
}