const express = require('express')
const router = express.Router()
const Post = require ('../models/post')


router.get('/' , async(req , res) =>{
    const posts =  await Post.find()
    res.render("index", { posts: posts } )
})


router.get('/create' , async(req , res) =>{
    return res.render('create')
})

router.post('/create' , async(req , res)=>{
    const {title , content} = req.body
    let post = new Post({title , content})

try{
    post = await post.save()
} catch{
     return res.status(400).send(err)
}
    return res.redirect('/')
})


router.get('/delete/:id' , async(req,res)=>{
    const id = req.params.id
    const post = await Post.findByIdAndDelete(id)
    if (!post) return res.status(404).send('the post id not found')

   
    return res.redirect('/')
})


router.get('/edit/:id' , async(req , res)=>{
    const id = req.params.id
    const post = await Post.findById(id)
    return res.render('edit' , {post})
})


router.post('/edit/:id' , async(req , res)=>{
    const id = req.params.id
    const{title , content} = req.body

    const post = await Post.findByIdAndUpdate(id , {title , content} ,{new : true} )

    return res.redirect('/')
})


module.exports = router