const blogModel = require("../models/blogModels")

module.exports = {
    async getBlogList(ctx, next) {
        let results = await blogModel.getBlogs();
        ctx.body = {
            state: 'success',
            blogs: results
        };
    },
    async getBlogById(ctx, next) {

        let { blogId } = ctx.query;
        let results = await blogModel.getBlogById(blogId);
        if (results.length > 0) {
            let { blog_id, title, content, post_time } = results[0];
            let blogInfo = {
                blog_id,
                title,
                content,
                post_time
            };
            blogInfo.comments = [];
            for (let i = 0; i < results.length; i++) {
                let obj = results[i];
                if (obj.comm_id) {
                    blogInfo.comments.push({
                        username: obj.username,
                        comm_id: obj.comm_id,
                        comm_content: obj.comm_content,
                        comm_post_time: obj.comm_post_time,
                    });
                }
            }
            ctx.body = {
                state: "success",
                blog: blogInfo
            };

        }
    },
    addComm(ctx, next) {

        let { inpVal, blogId } = ctx.request.body;
        if (inpVal) {
            blogModel.saveComm(inpVal, blogId);
            ctx.body = {
                state: 'success',
            }
        }
    },
    saveBlog(ctx, next) {
        let { blogTitle, blogContent } = ctx.request.body;
        if (blogTitle && blogContent) {
            blogModel.saveBlog(blogTitle, blogContent);
            ctx.body = {
                state: 'success',
            }
        }
    }
}