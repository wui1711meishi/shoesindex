<template>
    <div class="ordergive">
        <div class="ordergivetop">
            <div class="ordergivetop-l">
                <h3>订单支付</h3>
                <h4>SHOPPING <span style="font-weight: normal" class="etxt">CART</span></h4>
                <div class="zz">
                    <span class="hx"></span>
                    <span class="yd"></span>
                </div>
            </div>
            <div class="ordergivetop-r">
                <ul class="num">
                    <li>
                        <h1>01</h1>
                    </li>
                    <div class="hx"></div>
                    <li>
                        <h1>02</h1>
                    </li>
                    <div class="hx"></div>
                    <li class="active">
                        <h1>03</h1>
                    </li>
                    <div class="hx"></div>
                    <li>
                        <h1>04</h1>
                    </li>
                </ul>
                <ul class="txt">
                    <li>查看购物车</li>
                    <li>填写订单</li>
                    <li>订单支付</li>
                    <li>订单完成</li>
                </ul>
            </div>
        </div>
        <div class="distribution">
            <div class="distributiontop">
                <div class="yd"></div>
                <span class="txt">在线支付</span>
                <span class="etxt">OROERSIXW</span>
            </div>
        </div>
        <div class="p1">
            <div class="yd"></div>
            <span class="p1span1">您的订单已生成成功</span>
            <span class="p1span2">我们将为您保留订单 <b>30</b> 分钟，请及时付款，以免自动取消您的订单。</span>
        </div>
        <div class="p2">
            <div class="yd"></div>
            <span class="p2span1">订单编号： {{ordernub}}</span>
        </div>
        <div class="p3">
            <span class="p3span1">应付金额: {{allprice}}元</span>
            <span class="p3span2">支付方式: 在线方式</span>
            <span class="p3span2">配送方式: 默认快递</span>
        </div>
        <router-link :to="'/orderok?ordernub='+ordernub">
            <img class="zhifu" src="../assets/img/dddf.png" alt="">
        </router-link>

        <!--相关推荐html开始-->
        <div class="xgtj">
            <div class="xgtjimg"><img src="../assets/img/hgjghjyutj.png" alt=""></div>
            <div class="xgtjbanner">

                <div class="cate-swiper">
                    <template>
                        <swiper :options="swiperOption2">
                            <swiper-slide style="width: 300px">
                                <router-link to="">
                                    <img src="../assets/img/paihangbang-img2.png" alt="">
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="">
                                    <img src="../assets/img/paihangbang-img3.png" alt="">
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="">
                                    <img src="../assets/img/yellowshoes_05.png" alt="">
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="">
                                    <img src="../assets/img/paihangbang-img3.png" alt="">
                                </router-link>
                            </swiper-slide>
                            <swiper-slide style="width: 300px">
                                <router-link to="">
                                    <img src="../assets/img/paihangbang-img2.png" alt="">
                                </router-link>
                            </swiper-slide>
                            <swiper-slide>
                                <router-link to="">
                                    <img src="../assets/img/paihangbang-img3.png" alt="">
                                </router-link>
                            </swiper-slide>
                        </swiper>
                    </template>
                </div>
            </div>
        </div>
        <!--相关推荐html结束-->
    </div>
</template>
<script>
    export default{
        name: 'ordergive',
        data(){
            return {
                ordernumber:0,
                arr:[],
                swiperOption2: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: true
                },
                ordernub:0,
                allprice:0
            }
        },
        methods:{

        },
        mounted(){
//            相关推荐的数据
            this.$http.get('/api/product').then(res=>{
                this.arr=res.body;
            })
        },
        created(){
            this.ordernumber=this.$route.params.on;
            this.ordernub=this.$route.params.ordernub;
            this.allprice=this.$route.params.allprice;
        }
    }
</script>
<style scoped lang="scss">
    /*相关推荐css开始*/
    .cate-swiper{
        width: 100%;
        height: 156px;
        .swiper-container {
            height: 100%;
            a{
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
    }
    .xgtj{
        .xgtjbanner{
            height:300px;
            width:100%;
            box-sizing: border-box;
            padding-top: 70px;
            position: relative;
            overflow: hidden;
        }
        height:400px;
        width:100%;
        margin-bottom: 70px;
    }
    /*相关推荐css结束*/
    .ordergive{
        width: 1200px;
        margin: 0 auto;
    }
    .ordergivetop {
        width: 1200px;
        margin: 39px auto 73px;
    }
    .ordergivetop{
        height: 97px;
    }
    .ordergivetop-l {
        float: left;
        margin-left: 7px;
    }
    .ordergivetop-l h4{
        font-size: 16px;
    }
    .ordergivetop-l  h4 span.etxt{
        font-weight: normal;
    }
    .ordergivetop-l .zz span{
        display: block;
    }
    .ordergivetop-l .hx{
        width: 58px;
        height:3px;
        background: #000;
        float: left;
    }
    .ordergivetop-l .yd{
        width: 4px;
        height:4px;
        border-radius: 50%;
        background: #000;
        float: left;
        margin-left: 4px;
    }
    .ordergivetop-r{
        float: right;
        margin-left: 7px;
        width: 345px;
        height:50px;
    }
    .ordergivetop-r ul.num li.active {
        width: 26px;
        height:26px;
        border-radius: 50%;
        background: #ffff01;
        line-height: 26px;
        text-align: center;
    }
    .ordergivetop-r ul.num{
        display: flex;
        justify-content: space-around;
    }
    .ordergivetop-r ul.num li h1{
        font-size: 16px;
        font-weight: bold;
        font-style: italic;
    }
    .ordergivetop-r ul.num .hx{
        width: 65px;
        height:1px;
        background: #c9c9c9;
        margin-top: 6px;
    }
    .ordergivetop-r ul.txt{
        display: flex;
        justify-content: space-between;
    }
    .ordergivetop-r ul.txt li{
        color: #7b7b7b;
        font-size: 12px;
    }
    .distribution{
        margin-top: 70px;
    }
    .distributiontop{
        margin: 0 auto;
        width: 846px;
        height:44px;
        border-radius: 30px;
        background: #333;
        position: relative;
    }
    .distributiontop .yd{
        position: absolute;
        top:18px;
        left: 22px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #c1ff00;
    }
    .distributiontop span.txt{
        margin-left: 44px;
    }
    .distributiontop span{
        color: #fff;
        line-height: 44px;
        font-size: 14px;
    }

    p{
        display: block;
    }
    div.p1 .yd,div.p2 .yd,div.p3 .yd{
        width: 9px;
        height:9px;
        background: #b6ff00;
        border-radius: 50%;
        margin-left: 23px;
        margin-top: 4px;
        margin-right: 6px;
        float: left;
    }
    div.p1{
        width: 846px;
        margin: 0 auto;
        border-bottom: 1px solid #dadada;
        padding-bottom: 20px;
    }
    div.p1 .yd{
        margin-top: 90px;
    }
    div.p1 span{
        margin-top: 50px;

    }
    div span{
        display: inline-block;
        color: #262626;
    }
    div span b{
        font-size:50px;
    }


    div.p2{
        width: 846px;
        margin: 0 auto;
        padding-top: 25px;
    }
    div.p3{
        width: 772px;
        margin: 10px auto 38px;
    }
    div.p3 span{
        margin-right: 20px;
    }
    img.zhifu{
        width: 846px;
        margin: 0 auto 100px;
        display: block;
    }
</style>