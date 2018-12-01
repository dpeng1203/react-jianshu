import { fromJS } from 'immutable'
import * as constances from './constances' 

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    scrollTop: false
})

export default ( state = defaultState, action) => {
    switch(action.type) {
        case constances.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case constances.ADD_ARTICLE_LIST:
            return state.set('articleList',state.get('articleList').concat(action.result))
        case constances.CHANGE_SCROLL_TOP:
            return state.set('scrollTop',action.scrollTop)
        default:
            return state
    }
    
}