import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem,ListInfo,LoadMore } from '../style'
import {actionCreaters} from '../store'
import { Link } from 'react-router-dom'

class List extends Component {
    render() {
        return(
            <div>
                {
                    this.props.list.map( (item,index) => {
                        return (
                            <Link key={index} to = '/detail'>
                                <ListItem >
                                    <img className="pic" src={item.get('imgUrl')} alt='' />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                            
                        )
                    })
                }
                <LoadMore onClick={this.props.getMoreList}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.home.get('articleList')
})

const mapDispatch = (dispatch) => ({
    getMoreList() {
        const action = actionCreaters.getMoreListInfo()
        dispatch(action)
    }
})

export default connect(mapState,mapDispatch)(List)