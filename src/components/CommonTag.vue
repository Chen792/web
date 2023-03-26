<template>
  <div class="tabs">
    <el-tag
        v-for="(item,index) in tags"
        :key="item.label"
        :closable="item.name!=='home'"
        :effect="$route.name===item.name? 'dark':'plain'"
        @click="changeMenu(item)"
        @close="handerClose(item,index)"
        size:small
        >
        
        {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import{mapState,mapMutations} from 'vuex'
export default {
    name:'CommonTag',
    computed:{
        ...mapState({
            tags:state=>state.tab.tabsList
        }),
    },
    methods:{
        ...mapMutations(['closeTag']),
        //跳转
        changeMenu(item){
            this.$router.push({name:item.name})
        },

        //删除
        handerClose(item,index){
            this.closeTag(item)
            const length = this.tags.length
            if(item.name!==this.$route.name){return ;}
            if(index===length){this.$router.push({name:this.tags[index-1].name})}
            else{this.$router.push({name:this.tags[index].name})}
        
        }
    }
}
</script>

<style lang="less" scoped>
    .tabs {
        padding:20px;
        .el-tag {
            margin-right: 15px;
            cursor:pointer;
        }
    }
</style>