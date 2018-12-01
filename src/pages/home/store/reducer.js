import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '是会热点',
        imgUrl: '//cdn2.jianshu.io/assets/default_avatar/3-9a2bcc21a5d89e21dafc73b39dc5f582.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
    },{
        id: 2,
        title: '手绘',
        imgUrl: '//cdn2.jianshu.io/assets/default_avatar/3-9a2bcc21a5d89e21dafc73b39dc5f582.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120'
        
    }],
    articleList: [{
        id: 1,
        imgUrl: '//upload-images.jianshu.io/upload_images/1439852-bd5693f4f0591331?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: '朴树：终于可以坦然地，与这个世界格格不入了',
        desc: '知乎上有人这样评价朴树的歌： 那些安静地坐在办公室里的人们 那些在厨房为三岁的女儿调辅食的人们 那些在陌生的机场等着延误航班的人们 那些悄悄走到...'
    },{
        id: 2,
        imgUrl: '//upload-images.jianshu.io/upload_images/1439852-bd5693f4f0591331?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: '朴树：终于可以坦然地，与这个世界格格不入了',
        desc: '知乎上有人这样评价朴树的歌： 那些安静地坐在办公室里的人们 那些在厨房为三岁的女儿调辅食的人们 那些在陌生的机场等着延误航班的人们 那些悄悄走到...'
    },{
        id: 3,
        imgUrl: '//upload-images.jianshu.io/upload_images/1439852-bd5693f4f0591331?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        title: '朴树：终于可以坦然地，与这个世界格格不入了',
        desc: '知乎上有人这样评价朴树的歌： 那些安静地坐在办公室里的人们 那些在厨房为三岁的女儿调辅食的人们 那些在陌生的机场等着延误航班的人们 那些悄悄走到...'
    }],
    recommendList: [{
        id: 1,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
    },{
        id: 2,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
    },{
        id: 3,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id: 4,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id: 5,
        imgUrl: 'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
})

export default ( state = defaultState, action) => {
    switch(action.type) {
        default:
            return state
    }
    
}