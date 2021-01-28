<template>
  <div class="container">
    <button id="add-blog" @click="doAddBlog">发表文章</button>
    <div class="blog-list">
      <div class="blog" v-for="item in blogList" :key="item.blog_id">
        <h3 class="blog-title">
          <router-link :to="{ path: '/blog/detail/'+item.blog_id}">{{
            item.title
          }}</router-link>
        </h3>
        <p class="username">{{item.user_id}}</p>
        <span class="post-time">{{ item.post_time }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http
        .get("/blog/list")
        .then((res) => {
          let { state } = res.data;
          if (state == "auth-fail") {
            alert("请求未授权！");
          } else if (state == "success") {
            let { blogs } = res.data;
            this.blogList = blogs;
          }
        })
    },
    doAddBlog(){
       this.$router.push('/blog/addBlog');
    }
    
  },
};
</script>

<style scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}
.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}
.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>