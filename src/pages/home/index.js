import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { actionCreaters, constances } from './store'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt='' src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
                {
                    this.props.scrollTop ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null
                }
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
        this.bindEvents()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScroll)
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeScroll)
    }
}

const mapState = (state) => ({
    scrollTop: state.home.get('scrollTop')
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreaters.getHomeInfo()
        dispatch(action)
    },
    changeScroll() {
        // console.log(document.documentElement.scrollTop)
        let action = {}
        if(document.documentElement.scrollTop > 150) {
            action = {
                type: constances.CHANGE_SCROLL_TOP,
                scrollTop: true
            }
        } else {
            action = {
                type: constances.CHANGE_SCROLL_TOP,
                scrollTop: false
            }
        }
        dispatch(action)
    }   
})

export default connect(mapState, mapDispatch)(Home)