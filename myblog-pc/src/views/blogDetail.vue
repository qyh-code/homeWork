<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog.title }}</h3>
        <span>{{ blog.post_time }}</span>
      </div>
      <div class="blog-content">{{blog.content}}</div>
      <div class="comments">
        <h3>评论:</h3>
        <div class="comment" v-for="(item,index) in blog.comments" :key="item.comm_id">
          <!-- <span>{{index +1}}</span> -->
          <div class="comment-content">{{index +1}}.{{item.comm_content}}</div>
          <div class="comment-info">
            <span class="userinfo">{{item.username}}</span>
            <span class="post-time">{{item.comm_post_time}}</span>
          </div>
        </div>
        <div class="add-comment">
          <input class="add-info" name="inpVal" type="text" v-model="inpVal"> 
          <button class="add-btn" @click="addComm()">添加评论</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog:'',
      inpVal:'',
    
    };
  },
  created() {
    this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      this.$http.get("/blog/detail/",{
        params: {
          blogId: blogId,
        },
      })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "success") {
            this.blog = blog;
          }
        })
    },
    addComm(){
      console.log(this.blog);
      this.$http
        .post("/blog/addComm",{
          inpVal:this.inpVal,
          blogId:this.blog.blog_id    
        }).then((res)=>{
          console.log(res);
          this.getBlogDetail()
        });
    
    }
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>
