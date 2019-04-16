<template>
    <div>
        <div class="login-wrap" v-show="showLogin">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <el-input type="text" placeholder="请输入用户名" v-model="username"></el-input>
            <el-input type="password" placeholder="请输入密码" v-model="password"></el-input>
            <el-button type="primary" v-on:click="login" v-bind:disabled="disabledbtn">登录</el-button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </div>

        <div class="register-wrap" v-show="showRegister">
            <h3>注册</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <el-button type="primary" v-on:click="register">注册</el-button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
        </div>
        <!-- <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip> -->
    </div>
</template>

<style>
    .login-wrap{text-align:center;}
    .el-input__inner{width: 50%;margin-bottom: 10px;}
    p{color:red;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>

<script>
    //import TipMsg from '@/components/alertTip.vue'
    //import alertTip from '@/components/alertTip.vue'

    export default{

        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: '',
                showAlert:true,
                disabledbtn:false,
            }
        },

        methods:{
            ToRegister(){
                alert(localStorage.oid)
                //this.showRegister = true
                //this.showLogin = false
            },
            ToLogin(){
                this.showRegister = false
                this.showLogin = true
            },
            register(){
                // var params = new URLSearchParams();
                // var username = this.username
                // var pwd = this.password
                // params.append('username', username);
                // params.append('oid', pwd);
                // this.$axios.post('/m/php/action.php?action=getmessage',params).then(res=>{
                //     console.log(res)
                // })
            },
            login(){
                var params = new URLSearchParams();
                var username = this.username
                var pwd = this.password
                if(username.trim() == '' || pwd.trim() == ''){
                    this.$message({
                        type: 'error',
                        message: '用户名和密码不能为空！！！',
                        center: true,
                        duration: 2000,
                    });
                    return false;
                    //alert('用户名和密码不能为空！！！');
                }
                this.disabledbtn = true
                params.append('username', username);
                params.append('password', pwd);
                this.$axios.post('/m/php/action.php?action=login',params).then(res=>{
                    this.disabledbtn = false
                    this.password = ''
                    if(res.data.code == '201001'){
                        //alert(res.data)
                        localStorage.setItem("mobile", res.data.data.mobile);
                        localStorage.setItem("loginip", res.data.data.loginip);
                        localStorage.setItem("last_login_time", res.data.data.last_login_time);
                        localStorage.setItem("oid", res.data.data.oid);
                        localStorage.setItem("realname", res.data.data.realname);
                        localStorage.setItem("nickname", res.data.data.nickname);
                        localStorage.setItem("username", res.data.data.username);
                        localStorage.setItem("id", res.data.data.id);
                        localStorage.setItem("user_type", res.data.data.user_type);
                        this.$message({
                            type: 'success',
                            message: '登录成功',
                            center: true,
                            duration: 1000,
                        });
                        this.$router.push({path:'/test'});
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.data.errMsg,
                            center: true,
                            duration: 1000,
                        });
                    }
                })

            },
        }


    }
</script>