<template>
  <div class="manage tc">
    <router-link to="/login">登录</router-link>
    <button v-on:click="add">新增</button>
    <div  v-show="showAdd" class="input-area">
      <input type="text" v-model="nameValue" placeholder="请输入姓名" />
      <button v-on:click="comfirm">确定</button>
    </div>
    <table>
      <tr>
        <th></th>
        <th></th>
      </tr>
      <tr v-for="item in peoples">
        <td>
          {{item.name}}
        </td>
        <td>
          <span v-on:click="edit">编辑</span> <span v-on:click="del">删除</span>
        </td>
      </tr>
    </table>

    <div class="wrap" v-show="showEdit">
      <div class="content">
        <input type="text" placeholder="请输入新姓名" v-model="newName">
        <button v-on:click="cancel">取消</button>
        <button v-on:click="editName">确定</button>
      </div>
    </div>

    <footer-nav  v-bind:class="{'isManage':IsNowManage}"></footer-nav>

  </div>
  
</template>

<style scoped>
  .manage{padding-bottom:50px;}
  .manage >button{width:200px; height:40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
  table{width:100%; max-width:500px; margin:0 auto; margin-top:20px;}
  .input-area input{width: 200px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
  .input-area button{ width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
  th,td{width:100px;}
  tr input{width:100px; height:30px; padding-left:10px; outline:none; border:1px solid #333;}
  .wrap{display:table; position:fixed; top:0; left:0; height:100%; width:100%; background:rgba(0,0,0,.8); z-index: 10;}
  .wrap .content{display:table-cell; vertical-align:middle;}
  .wrap .content input{height: 40px; line-height: 40px; display:block; margin:0 auto; margin-bottom:10px; font-size:16px;}
  .wrap .content button{width:100px; height: 30px; line-height: 30px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
</style>

<script>
  import FooterNav from '../../components/footer.vue'
  export default{

    components:{
      FooterNav
    },

    data(){
      return {
        IsNowManage:true,
        showAdd:false,
        peoples:[{'name':'xiaowang'},{'name':'xiaozhang'}],
        nameValue:'',
        showEdit:false,
        editingId : '',//正在编辑的元素id
        newName : '',//修改后的名字
      }
    },

    methods:{

      add(){
        this.showAdd = true
      },

      comfirm (){
        if(this.nameValue.trim() == ''){
          this.$message.error({message: 'name不能为空'});
          return false;
        }
        var a = {};
        a.name = this.nameValue
        this.peoples.push(a); 
        this.nameValue = '';
      },

      del(e){
        var index = e.target.offsetParent.id
        alert(index);
        this.peoples.splice(index,1)
      },

      edit(e){
        var id = e.target.offsetParent.cellIndex
        this.showEdit = true;
        this.editingId = id
        this.newName = this.peoples[id].name;
      },

      cancel(){
        this.showEdit = false;
      },

      editName(){
        var newName = this.newName;
        //alert(newName)
        if(newName.trim() == ''){
          alert('newName不能为空');
          return false;
        }
        //console.log(this.peoples);
        this.peoples[this.editingId].name = newName;
        this.showEdit = false
      },

    }

  }
</script>
