<template>
  <div id="box">
    <div id="headMenu" class="headMenu">
      <div id="headButton" class="headButton">
        <img src="@/../static/logo.jpg" @click="jumpToMovieList"/>
        <el-button type="text" @click="jumpToMovieList" size="large">首页</el-button>
        <el-button type="text" @click="jumpToMoviePage" size="large">电影</el-button>
        <el-button type="text" @click="jumpToMovieNews" size="large">影讯</el-button>
      </div>
    <div class="headSearch" @keyup.enter="query()">
      <el-input placeholder="请输入输入电影名称"
                icon="search" v-model="searchMessage"
                @click="query()">
      </el-input>
    </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  import userApi from '@/user/api'
  import api from '@/api'
  export default {
    data() {
      return {
        searchMessage:'',

      }
    },
    methods: {
      query(){
        if (this.searchMessage != null && this.searchMessage!= ''){
          this.jumpToMovieDetail(this.searchMessage);
        }
        this.searchMessage = '';
      },
      //电影
      jumpToMoviePage(){
        this.$router.push({path:'/movie/movie-page'});
      },
      //影讯
      jumpToMovieNews(){

      },
      //首页
      jumpToMovieList(){
        this.$router.push({path:'/movie/movie-list'});
      },
      jumpToMovieDetail(param){
        this.$router.push({path:'/movie/movie-detail', query: {'movieName':param}});
        window.location.reload();
      }
    },
    mounted(){

    }
  }

</script>

<style lang="less">
  .headMenu {
    display: inline-block;
    background-color: floralwhite;
    top:0;
    width: 100%;
    height: 80px;
    .logo {
      margin-top: 10px;
      margin-left: 60px;
      margin-right: 10px;
      float:left;
    }
    .headButton {
      margin-left: 10px;
      position: relative;
      top: -10%;
      float:left;
      img {
        height: 55px;
        width: 55px;
      }
    }
    .headSearch {
      width: 35%;
      height: 100%;
      display: inline-block;
      margin-left: 5em;
      .el-input {
        margin-top: 5px;
        width:100%;
      }
    }

  }
</style>
