<template>
    <div class="my">
        <div class="mytitle">
            <img src="../assets/img/my_03.png" alt="">
        </div>
        <div class="main">
            <div class="mainleft">
                <img src="../assets/img/my_07.png" alt="">
            </div>
            <div class="mainright">
                <div class="maintop">
                    <ul>
                        <li>商品名称</li>
                        <li>单价（元）</li>
                        <li>商品数量</li>
                        <li>小计（元）</li>
                        <li>订单状态</li>
                        <li>编辑</li>
                    </ul>
                    <div class="card1">全部订单</div>
                    <div class="card2">取消订单</div>
                    <div class="card3">成功订单</div>
                </div>
                <div class="list">
                    <ul>
                        <li v-for="(item,ind) in hrr">
                            <div class="time">2018-5-27 09:30:10</div>
                            <router-link to="">
                                <ul>
                                    <li>
                                        <div class="first">
                                            <div class="listimg">
                                                <img :src="olol[ind]" alt="">
                                            </div>
                                            <h1><span>THE BIG</span> SHOW</h1>
                                            <h2>{{item.name}}</h2>
                                            <ul class="type">
                                                <li>{{item.color}}</li>
                                                <li>{{item.size}}</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>{{item.price}}</li>
                                    <li>{{item.count}}</li>
                                    <li>{{item.price*item.count}}</li>
                                    <li>已发货</li>
                                    <li>
                                        <div class="last">
                                            确认收货
                                        </div>
                                    </li>
                                </ul>
                            </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    export default{
        name: 'my',
        data(){
            return {
                arr:[],
                frr:[],
                hrr:[],
                olol:[],
            }
        },
        created(){
            let obj={user:sessionStorage.user}
            this.$http.post('/api/product/my',obj,{headers:"application/x-www-form-urlencoded"}).then(res=>{
                this.hrr = res.body;
                this.hrr.forEach((val, ind) => {
                    val.img.split('--').forEach((val, ind) => {
                        JSON.parse(val)
                        if (ind == 0) {
                            this.olol.push(JSON.parse(val).url)
                        }
                    })
                })
            })

        },
        mounted(){

        },
        methods:{

        }

    }
</script>
<style scoped lang="scss">
.my{
   .mytitle{
       margin: 40px auto 0;
       width: 1200px;
       img{
           width: 133px;
           height: 27px;
           margin-left: 27px;
       }
   }
    .main{
        width: 1200px;
        margin: 69px auto 0;
        display: flex;
        justify-content: space-between;
        .mainleft{
            width: 302px;
            height: 1132px;
            img{
                width: 100%;
            }
        }
        .mainright{
            width: 870px;
            position: relative;
            overflow: hidden;
            .maintop{
                width: 100%;
                height: 83px;
                overflow: hidden;
                ul{
                    width: 100%;
                    height: 59px;
                    background: #000;
                    display: flex;
                    justify-content: space-around;
                    border-radius: 8px;
                    margin-top: 24px;
                    z-index: 15;
                    li{
                        font-size: 16px;
                        text-align: center;
                        line-height: 80px;
                        color: #fff;
                    }
                }
                .card1,.card2,.card3{
                    width: 100px;
                    height: 38px;
                    background: #b4ff00;
                    color: #000;
                    border-radius: 5px;
                    line-height: 38px;
                    text-align: center;
                    font-size: 16px;
                    position: absolute;
                    top: 0;
                }
                .card1{
                    left: 19px;
                    z-index: 20;
                }
                .card2{
                    left: 130px;
                    z-index: 10;
                }
                .card3{
                    left: 240px;
                    z-index: 10;
                }
            }
            .list{
                width: 100%;
                ul{
                    width: 100%;
                    height: auto;
                    li{
                        width: 100%;
                        height: 200px;
                        .time{
                            width: 100%;
                            height: 22px;
                            background: #e5e1e1;
                            font-size: 12px;
                            text-align: right;
                            line-height: 22px;
                            padding-right: 20px;
                            box-sizing: border-box;
                            border-radius: 5px;
                        }
                        a{
                            display: flex;
                            height: 178px;
                            ul{
                                width: 100%;
                                height: 100%;
                                display: flex;
                                justify-content: space-around;
                                >li{
                                    float: left;
                                    height: 178px;
                                    font-size: 16px;
                                    color: #000;
                                    line-height: 178px;
                                    text-align: center;
                                }
                                li:first-child{
                                    .first{
                                        height: 178px;
                                        width: 100px;
                                        overflow: hidden;
                                        margin: 0 auto;
                                        .listimg{
                                            width: 85px;
                                            height: 85px;
                                            overflow: hidden;
                                            img{
                                                width: 100%;
                                            }
                                        }
                                        h1{
                                            font-size: 14px;
                                            color: #000;
                                            line-height: 24px;
                                            font-weight: normal;
                                            letter-spacing: -1px;
                                            span{
                                                font-weight: 600;
                                            }
                                        }
                                        h2{
                                            font-size: 14px;
                                            color: #000;
                                            line-height: 24px;
                                            text-align: left;
                                        }
                                        ul.type{
                                            display: flex;
                                            height: 24px;
                                            >li{
                                                height: 24px;
                                                border: 1px solid #bcbcbc;
                                                border-radius: 5px;
                                                text-align: center;
                                                line-height: 24px;
                                                color: #bcbcbc;
                                                background: #fff;
                                                box-sizing: border-box;
                                            }
                                        }
                                    }
                                }
                                li:last-child{
                                    .last{
                                        width: 74px;
                                        height: 27px;
                                        border-radius: 20px;
                                        border: 2px solid #000;
                                        box-sizing: border-box;
                                        text-align: center;
                                        line-height: 23px;
                                        color: #000;
                                        margin-top: 75px;
                                        margin-left: 60px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>