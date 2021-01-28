<template>
  <div class="container">
    <div class="blog">
      <h3 class="title">发表文章</h3>

      <div class="blog-title">
        <h4>文章标题</h4>
        <input id="title-info" type="text" name="blogTitle" v-model="blogTitle"/>
      </div>
      <div class="blog-content">
        <h4>文章内容</h4>
        <input id="content-info" type="text" name="blogContent" v-model="blogContent"/>
      </div>

      <div class="footer">
        <button class="submit" @click="addBlog()">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        blogTitle:'',
        blogContent:''
    };
  },
  methods: {
      addBlog(){
      this.$http
        .post("/blog/addBlog",{
          blogTitle:this.blogTitle,
          blogContent:this.blogContent
        }).then((res)=>{
          console.log(res);
          alert('提交成功！');
          this.$router.push('/');
        });
    
    }
  },
};
</script>

<style  scoped>
.blog {
  width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.title {
  text-align: center;
}

#title-info {
  width: 1000px;
  height: 20px;
}
#content-info {
  width: 1000px;
  height: 200px;
  line-height: 200px;
}
.footer{
    margin-top: 10px;
    text-align: center;
}
.submit {

    padding: 10px;

}
</style>