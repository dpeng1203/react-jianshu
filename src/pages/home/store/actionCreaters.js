import axios from 'axios'
import * as constances from './constances' 
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: constances.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList
})

const moreArticleData = (result) => ({
    type: constances.ADD_ARTICLE_LIST,
    result: fromJS(result)
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then( res => {
            const result = res.data.data
            dispatch(changeHomeData(result))
        })
    }
}

export const getMoreListInfo = () =>{
    return (dispatch) => {
        axios.get('/api/homeList.json').then( res => {
            const result = res.data.data
            dispatch(moreArticleData(result))
        })
    }
}