import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px
    margin: 0 auto
    height: 300px
`

export const HomeLeft = styled.div`
    width: 625px
    float: left
    margin-left: 15px
    margin-top: 30px
    .banner-img{
        width: 100%;
        height: 270px;
        background-color: hsla(0,0%,71%,.2)
    }

`

export const HomeRight = styled.div`
    float: right
    width: 280px
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0
    overflow: hidden
    margin-left: -18px
    border-bottom: 1px solid #DCDCDC
`
export const TopicItem = styled.div`
    float: left
    background: #f7f7f7
    margin-left: 18px
    margin-bottom: 18px
    height: 32px
    line-height: 32px
    font-size: 14px
    padding-right: 10px
    color: #000
    border: 1px solid #DCDCDC
    border-radius: 4px
    .topic-img{
        display: block
        float: left
        width: 32px
        height: 32px
        margin-right: 10px
    }
`

export const ListItem = styled.div`
    padding: 20px 0
    border-bottom: 1px solid #DCDCDC
    overflow: hidden
    .pic{
        width: 125px
        height: 100px
        display: block
        float: right
    }
`
export const ListInfo= styled.div`
    width: 500px
    float: left
    .title{
        line-height: 27px
        font-size: 18px
        font-weight: bold
        color: #333
    }
    .desc{
        line-height: 24px
        font-size: 15px
        color: #999

    }
`


export const RecommendWrapper = styled.div`
    margin: 30px 0
    width: 280px
`

export const RecommendItem = styled.div`
    width: 280px
    height: 50px
    background: url(${(props) => props.imgUrl} );
    background-size: contain
`