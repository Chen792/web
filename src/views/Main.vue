<template>
    <div>
        <el-container>
            <el-aside width="auto"><CommonAside/></el-aside>
            <el-container>
                <el-header><HeaderTitle/></el-header>
                <CommonTag/>
                <el-main><router-view></router-view></el-main>


            </el-container>
        </el-container>
    </div>


  </template>
  
  <script>
  import CommonAside from '../components/CommonAside'
  import HeaderTitle from '../components/Header'
  import MyHome from './Home'
  import CommonTag from '../components/CommonTag'
  export default {
      name:'MyMain',
    components:{CommonAside,HeaderTitle,MyHome,CommonTag},
      data(){
          return {
  
          };
      },
  }
  </script>
  
  <style>
    .el-header {
        padding: 0;
    }
  </style>