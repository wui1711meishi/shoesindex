<template>
    <div class="head">
        <header>
            <div class="black">
                <div class="bl-n">
                    <div class="lb-l">
                        <div class="lbimg">
                            <img src="../assets/img/EWGd.png" alt="">
                        </div>
                        <router-link v-if="flagss" to="/login">登录</router-link>
                        <router-link v-else to="" >{{user}}</router-link>
                    </div>
                    <div class="lb-r">
                        <router-link to="" class="lbr-e">
                            <i class="iconfont icon-rili"></i>
                            <span>订单</span>
                        </router-link>
                        <router-link to="" class="lbr-e">
                            <i class="iconfont icon-xin"></i>
                            <span>收藏</span>
                        </router-link>
                        <router-link to="" class="lbr-e">
                            <i class="iconfont icon-yanjing"></i>
                            <span>个人中心</span>
                        </router-link>
                        <router-link to="" class="lbr-e">
                            <i class="iconfont icon-jiantouarrow591"></i>
                            <span>购物车（{{car}}）</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="white">
                <div class="wh-n">
                    <ul class="nav">
                        <li @click="active=ind" :ref="ind" v-for="(item,ind) in whitearr"><router-link :to="item.to" :class="{active:active==ind}">{{item.name}}</router-link></li>
                        <div class="slide" :style="{left:whitearr[active].left+'px'}"></div>
                    </ul>
                    <div class="inp">
                        <form action="">
                            <input type="text" placeholder="寻找你喜欢的">
                            <i class="iconfont icon-iconss"></i>
                        </form>
                    </div>
                </div>
            </div>
            <div class="himg">
                <img src="../assets/img/imggg.png" alt="">
            </div>
        </header>
        <router-view></router-view>
        <div class="foot">
            <div class="foot-n">
                <div class="information">
                    <img src="../assets/img/bbbbbbb_03.png" alt="">
                </div>
                <div class="logo">
                    <img src="../assets/img/jhsd.png" alt="">
                </div>
                <div class="bkimg">
                    <img src="../assets/img/jjjj.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    export default{
        name: 'myhead',
        data(){
            return {
                car:0,
                active:0,
                blacktoarr:[],
                whitearr:[
                    {to:'/',left:'',name:'商品首页'},
                    {to:'/productlist',left:'',name:'商品列表'}
                ],
                flagss:true,
                user:""
            }
        },
        mounted(){
            this.whitearr.forEach((val,ind)=>{
                val.left=this.$refs[ind][0].offsetLeft
            })
        },
        created(){
            if(sessionStorage.user){
                this.user=sessionStorage.user;
                this.whitearr.push({to:'/my',left:'',name:'个人中心'});
            }else{
                this.flagss=true;
            }
        }
    }
</script>
<style scoped lang='scss'>
    .head{

    }
    header{
        .himg{
            img{
                width:100%;
            }
            position: absolute;
            top:0;
            left:0;
            right:0;
            margin:auto;
            width:86px;
            height:126px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .white{
            .wh-n{
                .inp{
                    form{
                        i{
                            margin-left: -10px;
                            font-size: 30px;
                            color:#1cf92b;
                            position: absolute;
                            right:37px;
                            top:2px;
                        }
                        input{
                            outline: none;
                            width:250px;
                            height:100%;
                            border-radius: 10px;
                            border:1px solid #62d26a;
                            box-sizing: border-box;
                            padding-left: 10px;
                        }
                        width:120%;
                        height:100%;
                        position: relative;
                    }
                    width:250px;
                    height:31px;
                }
                .nav{
                    li{
                        a{
                            font-size: 17px;
                            color:#797979;
                        }
                    }
                    .active{
                        color:black;
                        font-weight: bold;
                    }
                    .slide{
                        width:68px;
                        height:4px;
                        background: #b4ff00;
                        position: absolute;
                        bottom:0;
                        left:0;
                        transition: 0.5s;
                    }
                    position: relative;
                    display: flex;
                    width:550px;
                    justify-content: space-between;
                }
                width:1200px;
                margin:0 auto;
                display: flex;
                height:40px;
                justify-content: space-between;
            }
            height:180px;
            width:100%;
            box-sizing: border-box;
            padding-top: 100px;
            border-bottom: 16px solid #b4ff00;
        }
        .black{
            .bl-n{
                .lb-r{
                    .lbr-e{
                        i{
                            display: inline-block;
                            border-radius: 50%;
                            height:17px;
                            width:17px;
                            border:1px solid #74a200;
                            font-size: 9px;
                            color:#74a200;
                            text-align: center;
                            line-height: 17px;
                        }
                        span{
                            font-size: 14px;
                            color:#5b5b5b;
                            margin-left: -3px;
                        }
                        margin-right: 10px;
                        height:25px;
                    }
                    width:330px;
                    display: flex;
                    height:100%;
                    align-items: center;
                }
                .lb-l{
                    a{
                        display: inline-block;
                        width:74px;
                        height:21px;
                        border-radius: 10px;
                        text-align: center;
                        line-height: 21px;
                        font-size: 11px;
                        margin-right: 20px;
                    }
                    a:nth-child(2){
                        background: -webkit-linear-gradient(left,#e6ef17,#2aaf36);
                        color:black;
                    }
                    a:last-child{
                        border:1px solid #2aaf36;
                        color:#8c7055;
                    }
                    .lbimg{
                        width:38px;
                        height:20px;
                        margin-right: 28px;
                        img{
                            width:100%;
                        }
                    }
                    display: flex;
                    align-items: center;
                    width:250px;
                    height:100%;
                }
                width:1200px;
                height:60px;
                margin:0 auto;
                display: flex;
                justify-content: space-between;
            }
            height:60px;
            width:100%;
            background: black;
        }
        width:100%;

    }
    .iconfont{
        font-style: normal;
        font-family: 'iconfont';
    }
    *{
        margin:0;
        padding:0;
        text-decoration: none;
        list-style: none;
    }
    .foot{
        .foot-n{
            .information{
                img{
                    width:100%;
                    height:100%;
                }
                width:640px;
                height:100%;
            }
            .logo{
                width:205px;
                height:90px;
                position: absolute;
                top:-33px;
                right:280px;
                img{
                    width:100%;
                }
            }
            .bkimg{
                width:350px;
                height:350px;
                position: absolute;
                bottom:0;
                right:0;
                img{
                    height:100%;
                }
            }
            width:1200px;
            height:100%;
            margin:0 auto;
            position: relative;
        }
        height:440px;
        width:100%;
        background: black;
    }
</style>