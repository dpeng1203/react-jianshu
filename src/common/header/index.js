import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import  {actionCreators}  from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'

class Header extends Component {

    render() {
        return (
            <HeaderWrapper>
                <Logo href = '/' />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载app</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused?'focused':''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlue}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused?'focused iconfont':'iconfont'}>&#xe614;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting"><i className="iconfont">&#xe615;</i>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.header.get('focused')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlue() {
            dispatch(actionCreators.searchBlue())
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header)