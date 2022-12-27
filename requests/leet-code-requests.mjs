import {postRequest} from "../http/client.mjs";

const statsQuery = `
    query userProblemsSolved($username: String!) {
      allQuestionsCount {
        difficulty
        count
      }
      matchedUser(username: $username) {
        problemsSolvedBeatsStats {
          difficulty
          percentage
        }
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
`

const publicProfileQuery = `
    query userPublicProfile($username: String!) {
      matchedUser(username: $username) {
        contestBadge {
          name
          expired
          hoverText
          icon
        }
        username
        githubUrl
        twitterUrl
        linkedinUrl
        profile {
          ranking
          userAvatar
          realName
          aboutMe
          school
          websites
          countryName
          company
          jobTitle
          skillTags
          postViewCount
          postViewCountDiff
          reputation
          reputationDiff
          solutionCount
          solutionCountDiff
          categoryDiscussCount
          categoryDiscussCountDiff
        }
      }
    }
`

async function leetCodeDataRequest(username, query, errorTag) {
    return await postRequest('https://leetcode.com/graphql',
        {
            body: JSON.stringify({
                query,
                "variables": {
                    username
                }
            })
        }
    )
    .then(res => res.json())
    .catch(e => console.error(`${errorTag ?? 'LC_REQ_ATTEMPT'}: ${e.message}`))
}

export async function getLeetCodeStats(username) {
    return await leetCodeDataRequest(username, statsQuery, 'LC_STATS_REQ_ATTEMPT')
}

export async function getLeetCodeProfile(username) {
    return await leetCodeDataRequest(username, publicProfileQuery, 'LC_PROFILE_REQ_ATTEMPT')
}