import { API_CALL_GET_BUG_LIST, BUG_LIST_RECEIVED } from "./constants"

function reducerSwitch(state = {}, action) {
    switch (action.type) {
        case API_CALL_GET_BUG_LIST:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case BUG_LIST_RECEIVED:
            return {
                ...state,
                bugList: [
                    {
                        "url": "https://api.github.com/repos/vmg/redcarpet/issues/661",
                        "repository_url": "https://api.github.com/repos/vmg/redcarpet",
                        "labels_url": "https://api.github.com/repos/vmg/redcarpet/issues/661/labels{/name}",
                        "comments_url": "https://api.github.com/repos/vmg/redcarpet/issues/661/comments",
                        "events_url": "https://api.github.com/repos/vmg/redcarpet/issues/661/events",
                        "html_url": "https://github.com/vmg/redcarpet/issues/661",
                        "id": 360591779,
                        "node_id": "MDU6SXNzdWUzNjA1OTE3Nzk=",
                        "number": 661,
                        "title": "Allow '/' characters in email address when autolinking",
                        "user": {
                            "login": "vividtone",
                            "id": 114863,
                            "node_id": "MDQ6VXNlcjExNDg2Mw==",
                            "avatar_url": "https://avatars2.githubusercontent.com/u/114863?v=4",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/vividtone",
                            "html_url": "https://github.com/vividtone",
                            "followers_url": "https://api.github.com/users/vividtone/followers",
                            "following_url": "https://api.github.com/users/vividtone/following{/other_user}",
                            "gists_url": "https://api.github.com/users/vividtone/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/vividtone/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/vividtone/subscriptions",
                            "organizations_url": "https://api.github.com/users/vividtone/orgs",
                            "repos_url": "https://api.github.com/users/vividtone/repos",
                            "events_url": "https://api.github.com/users/vividtone/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/vividtone/received_events",
                            "type": "User",
                            "site_admin": false
                        },
                        "labels": [

                        ],
                        "state": "open",
                        "locked": false,
                        "assignee": null,
                        "assignees": [

                        ],
                        "milestone": null,
                        "comments": 0,
                        "created_at": "2018-09-16T01:35:57Z",
                        "updated_at": "2018-09-16T01:35:57Z",
                        "closed_at": null,
                        "author_association": "NONE",
                        "body": "Some people have an email address which contains '/' like this: `foo/bar@example.org`\r\n\r\nCurrently, redcarpet cannot autolink properly. It recognizes `foo/bar@example.org` as `bar@example.org`. Please don't ignore slashes when autolinking.\r\n\r\nSee also:\r\n* [Slash in email address???](http://mailman-users.python.narkive.com/hnKgpcSJ/slash-in-email-address \"Slash in email address???\")\r\n* [Defect #29496: Email addresses which includes slashes are wrongly linked - Redmine](https://www.redmine.org/issues/29496 \"Defect #29496: Email addresses which includes slashes are wrongly linked - Redmine\")\r\n"
                    }
                ]
            }


        default:
            return state
    }
}

export default reducerSwitch;