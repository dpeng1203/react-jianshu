import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative
    height: 56px
    border-bottom: 1px soild #F0F0F0
`

export const Logo = styled.div`
    position: absolute
    top: 0
    left: 0
    display: block
    width: 100px
    height: 56px;
    background: url(${logoPic});
    background-size: contain
`

export const Nav = styled.div`
    width: 960px
    height: 100%
    margin: 0 auto
`

export const NavItem = styled.div`
    line-height: 56px
    font-size: 17px
    padding: 0 15px
    color: #333
    &.left {
        float: left
    }
    &.right {
        float: right
        color: #969696
    }
    &.active {
        color: #ea6f5a
    }
`

export const SearchWrapper = styled.div`
    position: relative
    float: left
    .slide-enter{
        transition: all .2s ease-out
    }
    .slide-enter-active{
        width: 240px
    }
    .slide-exit{
        transition: all .2s ease-out
    }
    .slide-exit-active{
        width: 160px
    }
    .iconfont {
        position: absolute
        right: 5px
        bottom: 5px
        width: 30px
        line-height: 30px
        text-align: center
        border-radius: 50%
        &.focused {
            background: #777
            color: #fff
        }
    }
    
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px
    height: 38px
    margin-top: 9px
    padding: 0 30px 0 20px
    margin-left: 20px
    box-sizing: border-box
    border: none
    outline: none
    border-radius: 19px
    background: #eee
    color: #666
    font-size: 14px
    &::placeholder{
        color: #999
    } 
    &.focused {
        width: 240px

    }
`

export const Addition = styled.div`
    position: absolute
    right: 0
    top: 0
    height: 56px
`

export const Button = styled.div`
    float: right
    margin-top: 9px
    line-height: 38px
    margin-right: 20px
    padding: 0 20px
    border-radius: 19px
    border: 1px solid #ec6149
    &.reg {
        color: #ec6149
    }
    &.writting {
        background: #ec6149
        color: #fff
    }
`