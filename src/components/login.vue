<template>
    <div class="biglogin">
        <form action="/api/login" method="post" class="login">
            <div class="logoimg">
                <img src="../assets/img/login-img_03.png" alt="">
            </div>
            <!--账号-->
            <label class="userlabel" for="user">
                <span class="err">账号格式有误</span>
                <span class="ok"><i class="iconfont icon-duigou"></i></span>
                <div class="userimg">
                    <img src="../assets/img/user.png" alt="">
                </div>
                <div class="txt">账号 <span v-if="flag1">账号不存在</span></div>
                <input type="text" name="user" ref="user" id="user" placeholder="请输入用户名 / 电话 / 邮箱" v-model="user">
            </label>
            <!--密码-->
            <label class="passlabel" for="pass">
                <span class="err">密码格式有误</span>
                <span class="ok"><i class="iconfont icon-duigou"></i></span>
                <div class="passimg">
                    <img src="../assets/img/pass.png" alt="">
                </div>
                <div class="txt">密码 <span v-if="flag2">密码错误</span></div>
                <input type="password" ref="pass" name="pass" id="pass" placeholder="请输入12位数字、字母组合" v-model="password">
            </label>
            <!--立即登录-->
            <div class="btn" @click="login">
                <img src="../assets/img/login-now_07.png" alt="">
            </div>
        </form>
        <div class="links">
            <i style="font-size:42px;" class="iconfont icon-weixin"></i>
            <i style="font-size:42px;" class="iconfont icon-qq"></i>
            <i style="font-size:36px;" class="iconfont icon-weibo-copy"></i>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'login',
        data(){
            return {
                user:'',
                password:'',
                flag1:false,
                flag2:false,
            }
        },
        methods: {
            login(){
                let obj={user:this.user,password:this.password};
                this.$http.post('/api/login/userlogin',obj,{
                    headers: {
                        "content-type": 'application/json'
                    }
                }).then(res=>{
                    console.log(res.body);
                    if(res.body==='0'){
                        this.flag1=true
                    }else if(res.body==='-1'){
                        this.flag2=true
                    }else {
                        sessionStorage.user=this.user;
                        this.$router.push({name:'myhf'})
                    }
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    .tishi {
        position: absolute;
        top: 75px;
        left: 0;
        right: 0;
        margin: auto;
        width: 180px;
        color: red;
        text-align: center;
    }

    * {
        margin: 0;
        padding: 0;
    }
    input{
        outline: none;
    }
    .iconfont {
        font-style: normal;
        font-family: 'iconfont';
    }

    .biglogin {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: #000;
    }
    form.login {
        width: 547px;
        height: 364px;
        border-radius: 5px;
        background: #fff;
        position: relative;
        margin: 100px auto 18px;
        > .logoimg {
            width: 174px;
            height: 86px;
            position: absolute;
            left: 190px;
            top: -55px;
            > img {
                display: block;
                width: 100%;
            }
        }
        > label[for=user], label[for=pass] {
            width: 404px;
            position: absolute;
            height: 75px;
            > span.err {
                display: none;
                width: 100px;
                position: absolute;
                right: 0px;
                top: 10px;
                z-index: 10;
                color: red;
                font-size: 12px;
            }
            > span.ok {
                display: none;
                position: absolute;
                right: -25px;
                top: 45px;
                z-index: 10;
                color: green;
                font-size: 12px;
            }
            > div {
                width: 345px;
                position: absolute;
                top: 0px;
                left: 0px;
                z-index: 10;
                >span{
                   color: red;
                    float: right;
                }
            }
            > .txt {
                position: absolute;
                left: 58px;
                top: 7px;
                font-size: 12px;
                color: #000;
            }
            > input {
                width: 375px;
                height: 46px;
                border: 1px solid #e2e2e2;
                border-radius: 3px;
                text-indent: 28px;
                position: absolute;
                top: 28px;
                left: 29px;
            }
        }
        > .userlabel {
            top: 106px;
            left: 65px;
        }
        > .passlabel {
            top: 194px;
            left: 65px;
        }
        .checkbox {
            position: absolute;
            top: 278px;
            left: 96px;
            font-size: 12px;
            > input {
                margin-top: 2px;
                float: left;
            }
            > .txt {
                display: block;
                line-height: 12px;
                float: left;
                margin: 2px 0 0 5px;
                color: #242424;
            }
        }
        .wjpass {
            position: absolute;
            left: 412px;
            top: 275px;
            font-size: 12px;
            color: #242424;
            > .wjimg {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                border: 1px solid #242424;
                font-size: 12px;
                color: #242424;
                text-align: center;
                line-height: 12px;
                position: absolute;
                right: 55px;
                bottom: 0px;
            }
        }
        div.btn{
            display: block;
            position: absolute;
            bottom: -13px;
            left: 82px;
        }
    }

    .register {
        display: block;
        font-size: 14px;
        font-style: italic;
        color: #eee;
        text-align: center;
        text-decoration: none;
        font-weight: bold;
    }

    .links {
        width: 165px;
        justify-content: space-around;
        color: #fff;
        font-size: 50px;
        margin: 40px auto 50px;
        display: flex;
        line-height: 42px;
        > .links i {
            font-size: 52px;
            color: #fff;
        }
    }
</style>