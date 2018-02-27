import Express from 'express';
import {responseClient} from '../common/util';
import Article from '../models/article';

const router=Express.Router();

// 新增文章
router.post('/addArticle',function (req, res) {
    const {
        title,
        content,
        time,
        tags,
        isPublish
    }=req.body;
    const author=req.session.userInfo.username;
    const coverImg=`/${Math.round(Math.random()*9+1)}.jpg`;
    const viewCount=0;
    const commentCount=0;
    let tempArticle=new Article({
        title,
        content,
        isPublish,
        viewCount,
        commentCount,
        time,
        author,
        coverImg,
        tags:tags.split(',')
    });
    tempArticle.save().then(data=>{
        responseClient(res,200,0,'文章保存成功',data);
    }).catch(err=>{
        responseClient(res);
    });
});

// 修改文章
router.post('/updateArticle',function (req, res) {
    const {
        title,
        content,
        time,
        tags,
        isPublish,
        id
    }=req.body;
    Article.update({_id:id},{title,content,time,tags:tags.split(','),isPublish})
        .then(result=>{
            responseClient(res,200,0,'文章更新成功',result);
        }).catch(err=>{
            responseClient(res);
    })
});

// 删除文章
router.get('/delArticle',function (req, res) {
    let id=req.query.id;
    Article.remove({_id:id})
        .then(result=>{
            if(result.result.n===1){
                responseClient(res,200,0,'文章删除成功');
            }else{
                responseClient(res,200,1,'文章不存在');
            }
        }).catch(err=>{
        responseClient(res);
    })
});


module.exports=router;