<template>
    <div class="car">
        <div class="cartop">
            <div class="cartop-l">
                <h3>购物车</h3>
                <h4>SHOPPING <span style="font-weight: normal" class="etxt">CART</span></h4>
                <div class="zz">
                    <span class="hx"></span>
                    <span class="yd"></span>
                </div>
            </div>
            <div class="cartop-r">
                <ul class="num">
                    <li class="active">
                        <h1>01</h1>
                    </li>
                    <div class="hx"></div>
                    <li>
                        <h1>02</h1>
                    </li>
                    <div class="hx"></div>
                    <li>
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
        <ul class="carlist">
            <li>
                <div class="allcheck">
                    <input type="checkbox"> 全选
                </div>
                <div class="topinfo">
                    <div class="proimg">商品图片</div>
                    <div class="proname">商品名称</div>
                    <div class="proprice">单价 (元)</div>
                    <div class="pronum">商品数量</div>
                    <div class="plan">小计 (元)</div>
                    <div class="proset">编辑</div>
                </div>
            </li>
            <li>
                <div class="che">
                    <input type="checkbox">
                </div>
                <img style="width:116px;height:101px" class="thumb" :src="product.img" alt="">
                <div class="proinfo">
                    <span class="ename">THE BIG</span>
                    <span class="ename2">BANG SHOW</span>
                    <div class="name">{{product.name}}</div>
                    <div class="procolor">{{product.color}}</div>
                    <div class="cm">{{product.size}}</div>
                </div>
                <div class="price">{{product.price}}</div>
                <div class="nums">
                    <div class="num">{{product.num}}</div>
                </div>
                <div class="allprice">{{product.price*product.num}}</div>
                <div class="set">
                    <button>删除宝贝</button>
                    <button>收藏宝贝</button>
                </div>
            </li>

            <li>
                <div class="allcheck2">
                    <input type="checkbox"> 全选
                </div>
                <button class="alldelete">删除选中的宝贝</button>
                <button class="allcollection">收藏宝贝</button>
            </li>
        </ul>
        <div class="total">
            <div class="discount">
                <div class="discounttop">
                    <img src="../assets/img/qqq.png" alt="">
                    <span>优惠特权 </span>
                    <span class="ename">PRIVILEGE</span>
                </div>
                <div class="discountcon">
                    <ul>
                        <li>
                            <input type="checkbox">
                            <div class="name">
                                <span>优惠卷</span>
                                <div class="hx"></div>
                                <div class="yd"></div>
                            </div>
                            <span class="yh">满300减200</span>
                        </li>
                        <li>
                            <input type="checkbox">
                            <div class="name">
                                <span>优惠卷</span>
                                <div class="hx"></div>
                                <div class="yd"></div>
                            </div>
                            <span class="yh">满300减200</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="totalprice">
                <div class="allt">
                    <div class="payable">
                        应付款 {{product.price}}
                    </div>
                    <div class="payment">
                        实付款 <span>{{product.price}}</span>
                        <span class="rmb">RMB</span>
                    </div>
                    <button @click="toto">
                        <img src="../assets/img/zxcv.png" alt="">
                    </button>
                </div>
            </div>
        </div>
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
        name: 'car',
        data(){
            return {
                product:{},
                imgurl:'',
                toid:0,
                arr:[],
                swiperOption2: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: true
                },
            }
        },
        mounted(){
//            相关推荐的数据
            this.$http.get('/api/product').then(res=>{
                this.arr=res.body;
            })
        },
        methods:{
            toto(){
                this.$router.push({name:'writeorder',params:{id:this.toid}})
            }
        },
        created(){
            let id=this.$route.params.id;
            this.toid=id;
            let index=0;
            this.$http.get('/api/product/car').then(res=>{
                res.body.forEach((val,ind)=>{

                    if(val.sid==id){

                        index=ind;
                    };
                })
                this.product=res.body[index];
            })

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
    button {
        cursor: pointer;
    }
    .car{
        width: 1200px;
        margin: 0 auto;
    }
    .cartop{
        width: 100%;
        margin: 37PX auto 89PX;
    }
    .cartop{
        height: 97px;
    }
    .cartop-l {
        float: left;
        margin-left: 7px;
    }
    .cartop-l h4{
        font-size: 16px;
    }
    .cartop-l  h4 span.etxt{
        font-weight: normal;
    }
    .cartop-l .zz span{
        display: block;
    }
    .cartop-l .hx{
        width: 58px;
        height:3px;
        background: #000;
        float: left;
    }
    .cartop-l .yd{
        width: 4px;
        height:4px;
        border-radius: 50%;
        background: #000;
        float: left;
        margin-left: 4px;
    }
    .cartop-r{
        float: right;
        margin-left: 7px;
        width: 345px;
        height:50px;
    }
    .cartop-r ul.num li.active {
        width: 26px;
        height:26px;
        border-radius: 50%;
        background: #ffff01;
        line-height: 26px;
        text-align: center;
    }
    .cartop-r ul.num{
        display: flex;
        justify-content: space-around;
    }
    .cartop-r ul.num li h1{
        font-size: 16px;
        font-weight: bold;
        font-style: italic;
    }
    .cartop-r ul.num .hx{
        width: 65px;
        height:1px;
        background: #c9c9c9;
        margin-top: 6px;
    }
    .cartop-r ul.txt{
        display: flex;
        justify-content: space-between;
    }
    .cartop-r ul.txt li{
        color: #7b7b7b;
        font-size: 12px;
    }
    .carlist{
        width: 100%;
        margin: 0 auto 50px;
        >li{
            margin: 0 auto;
        }
    }
    .carlist li:first-child{
        position: relative;
    }
    .carlist .allcheck{
        position: absolute;
        top:0;
        left:0;
        width: 73px;
        height:43px;
        background: #000;
        color: #fff;
        border-radius: 30px;
        text-align: center;
        line-height: 43px;
    }
    .carlist .topinfo{
        position: absolute;
        top:0;
        left:88px;
        width: 766px;
        height:45px;
        border-radius: 30px;
        background: #000;
        display: flex;
        justify-content: space-around;
    }
    .carlist .topinfo > div{
        color: #fff;
        line-height: 45px;
    }
    .carlist li:first-child{
        height:45px;
        border:none;
    }
    .carlist li{
        width: 854px;
        height: 140px;
        border-bottom: 1px solid #000;
    }
    .carlist li .che{
        float: left;
        margin: 75px 0  0 36px;
    }
    .carlist li .thumb{
        float: left;
        margin-left: 40px;
        margin-top: 35px;
    }
    .carlist li .proinfo{
        margin: 40px 0px 0 10px;
        width: 130px;
        height:68px;
        float: left;
        margin-left: 30px;
        font-size: 12px;
    }
    .carlist li .proinfo .ename{
        font-weight: bold;
    }
    .carlist li .proinfo .ename2{
        font-weight: normal;
        color: #676767;
    }
    .carlist li .proinfo .name{
        font-weight: bold;

    }
    .carlist li .proinfo .procolor,.carlist li .proinfo .cm{
        width: 40px;
        height:24px;
        box-sizing: border-box;
        border:2px solid #bcbcbc;
        border-radius: 3px;
        text-align: center;
        line-height: 20px;
        float: left;
        color: #696969;
        margin-top: 12px;
    }
    .carlist li .proinfo .cm{
        margin-left: 3px;
    }
    .carlist li .price,.carlist li .allprice{
        font-size: 18px;
        font-weight: bold;
        float: left;
        line-height: 141px;
    }
    .carlist li .nums{
        float: left;
        margin: 63px 53px 0 65px;
    }
    .carlist li .nums button{
        float: left;
        width: 16px;
        height:16px;
        border:1px solid #333;
        text-align: center;
        line-height: 14px;
        border-radius: 50%;
        background: transparent;
        box-sizing: border-box;
    }
    .carlist li .num{
        float: left;
        width: 27px;
        height:12px;
        background: #f3f3f3;
        border-radius: 30px;
        font-size:12px;
        text-align: center;
        margin: 0 4px;
        line-height: 12px;
    }
    .carlist li .allprice{

    }
    .carlist li .set{
        width:73px;
        height:56px;
        margin: 50px 0 0 48px;
        float: left;
    }
    .carlist li .set button{
        width: 69px;
        height:27px;
        border:1px solid #000;
        outline: none;
        background: transparent;
        border-radius: 30px;

    }
    .carlist li .set button:nth-of-type(2){
        background: #000;
        color: #fff;
        margin-top: 4px;
    }

    .carlist li:last-child{
        border: none;
        height:26px;
        margin: 23px auto 0;
    }
    .carlist li .allcheck2{
        margin-left: 19px;
        float: left;
    }
    .alldelete,.allcollection{
        width:95px;
        height:26px;
        border:1px solid #000;
        background: transparent;
        outline:none;
        background: none;
        font-size:10px;
        border-radius: 30px;
        float: left;
        margin-left: 30px;
    }
    .allcollection{
        width:71px;
        margin: 0 0 0 9px;
        background: #000;
        color: #fff;
    }


    .total{
        width: 614px;
        height:190px;
        margin: 56px auto 130px;
        position: relative;
    }
    .discount{
        width: 267px;
        height:167px;
        position: relative;

    }
    .discounttop{
        position: absolute;
        top:5px;
        left:41px;
        z-index: 10;
    }
    .discounttop img{
        float: left;
    }
    .discounttop span{
        display: block;
        float: left;
        margin-top: 7px;
    }
    .discounttop span.ename{
        font-weight: bold;
        font-size:14px;
        margin-top:10px;
        margin-left: 5px;
    }
    .discountcon{
        width:100%;
        clear: both;
        position: absolute;
        top:33px;
        height:145px;
        background: #fff;
        border-radius: 5px;
        margin-left: 30px;
        box-shadow: 0 0px 20px rgba(0,0,0,0.5);
        border-radius: 5px;
    }
    .discountcon ul{
        margin: 37px 0 0 44px;
    }
    .discountcon li:first-child{
        margin:0;
    }
    .discountcon li{
        height:25px;
        margin-top: 40px;
        clear: both;
    }
    .discountcon li input,.discountcon li .name,.discountcon li .yh{
        float: left;
    }
    .discountcon li .yh{
        font-size:12px;
        color: #030400;
        margin-left: 30px;
    }
    .discountcon li .name{
        margin-left: 14px;
        position: relative;
        margin-top: -5px;
        font-weight: bold;
    }
    .discountcon li .name .hx{
        width: 58px;
        height:3px;
        background: #000;
        border-radius: 5px;
        position: absolute;
        bottom:-7px;
        left:0;
        margin-right: 4px;
    }
    .discountcon li .name .yd{
        width: 4px;
        height:4px;
        border-radius: 50%;
        position: absolute;
        bottom:-7px;
        left:62px;
        background: #000;
    }

    .allt{
        width: 315px;
        heoght:100%;
        float: right;
    }
    .allt button{
        z-index: 500;
    }
    .totalprice{
        width: 317px;
        height:115px;
        background: #000;
        position: absolute;
        right:0;
        top:50px;
        z-index: 10;
        color: #fff;
    }
    .payable,.payment{
       margin-left: 44px;
        font-size:14px;

    }
    .payment span{
        font-size:30px;
    }
    .payment span.rmb{
       padding: 5px;
        border-radius: 30px;
        border:1px solid #78b868;
        text-align: center;
        line-height: 26px;
        font-size:12px;
    }
    .totalprice button{
        outline: none;
        background: none;
        border: none;
        margin-left: 10px;
        margin-top: 5px;
    }
</style>