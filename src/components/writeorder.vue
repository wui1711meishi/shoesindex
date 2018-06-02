<template>
    <div class="writeorder">
        <div class="writetop">
            <div class="writetop-l">
                <h3>填写订单</h3>
                <h4>SHOPPING <span style="font-weight: normal" class="etxt">CART</span></h4>
                <div class="zz">
                    <span class="hx"></span>
                    <span class="yd"></span>
                </div>
            </div>
            <div class="writetop-r">
                <ul class="num">
                    <li>
                        <h1>01</h1>
                    </li>
                    <div class="hx"></div>
                    <li class="active">
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
        <div class="info">
            <div class="infopeo">
                <div class="yd"></div>
                <span class="txt">收款人信息</span>
                <span class="etxt">CONSIGNEE</span>
            </div>
            <div class="infotxt">
                <ul>
                    <li v-for="(item,ind) in addarr">
                        <input type="radio" checked name="oo" @click="number=ind">
                        <span>{{item}}</span>
                    </li>

                </ul>
                <button type="button" class="addaddress">添加地址</button>
                <button type="button" class="manageaddress">管理地址</button>
            </div>
        </div>
        <div class="orderinfo">
            <div class="orderinfotop">
                <div class="yd"></div>
                <span class="txt">订单信息</span>
                <span class="etxt">ORDERSIXW</span>
            </div>
            <ul class="orderlist">
                <li>
                    <img style="width:116px;height:101px" class="thumb" :src="product.img" alt="">
                    <div class="proinfo">
                        <span class="ename">THE BIG</span>
                        <span class="ename2">BANG SHOW</span>
                        <div class="name">{{product.name}}</div>
                        <div class="procolor">{{product.color}}</div>
                        <div class="cm">{{product.size}}</div>
                    </div>
                    <div class="price">{{product.price}}元</div>
                    <div class="num">{{product.num}}</div>
                    <div class="allprice">{{product.price*product.num}}元</div>
                </li>
            </ul>
        </div>
        <div class="methodinfo">
            <div class="methodinfotop">
                <div class="yd"></div>
                <span class="txt">支付方式</span>
                <span class="etxt">PAYMENT METHOD</span>
            </div>
            <ul class="methodlist">
                <li>
                    <button>
                        <div class="icon">
                            <i class="iconfont ">￥</i>
                        </div>
                        <div class="txt">在线支付</div>
                        <div class="etxt">AYMENT METHO</div>
                    </button>
                </li>
                <li class="active">
                    <button>
                        <div class="icon">
                            <i class="iconfont icon-zaixianzhifu-"></i>
                        </div>
                        <div class="txt">在线支付</div>
                        <div class="etxt">AYMENT METHO</div>
                    </button>
                </li>
                <li>
                    <button>
                        <div class="icon">
                            <i class="iconfont icon-baoguo"></i>
                        </div>
                        <div class="txt">在线支付</div>
                        <div class="etxt">AYMENT METHO</div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="distribution">
            <div class="distributiontop">
                <div class="yd"></div>
                <span class="txt">配送方式</span>
                <span class="etxt">AYMENT METHO</span>
            </div>
            <div class="defual">
                <i class="iconfont icon-kuaidi"></i>
                <div class="txt">
                    <div class="ctxt">默认快递</div>
                    <div class="etxt">EXPRESS</div>
                </div>
                <span>默认发送中通 / 韵达 / 圆通 / EMS</span>
            </div>
            <div class="other">
                <i class="iconfont icon-xinjian"></i>
                <div class="txt">
                    <div class="ctxt">其他快递</div>
                    <div class="etxt">EXPRESS</div>
                </div>
                <span>请联系客服更改快递方式</span>
                <button class="change">
                    <i class="iconfont icon-erji"></i> <span>联系客服</span>
                </button>
            </div>
        </div>
        <div class="pay">
            <div class="sett">
                <div class="payable"><span class="txt">应付款 </span><span>10232.00</span></div>
                <div class="pealpayment"><span class="txt">实付款 </span><span>8976.00</span><div class="rmb">RMB</div></div>
            </div>
            <button @click="toto" type="submit" class="go">
                <img src="../assets/img/hgjghjgjj.png" alt="">
            </button>
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
        name: 'writeorder',
        data(){
            return {
                id:0,
                ordernumber:1,
                product:'',
                imgurl:'',
                number:2,
                addarr:[
                    "北京市  朝阳区    三里屯SOHO大厦A栋1002室     020004    李氏    151-3562-1434",
                    "太原市  朝阳区    凯通大厦A栋1002室     020004    李氏    151-3562-1434",
                    "上海市  浦东区    金融中心大厦A栋1002室     020004    赵氏    151-3562-5443",
                ],
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
                this.id=this.$route.params.id;
                let id=this.id;
                let obj={add:this.addarr[this.number],sid:id};
                this.$http.post('/api/product/adar',obj,{headers:"application/x-www-form-urlencoded"}).then(res=>{
                    this.ordernumber=res.body[0].ordernumber;
                    this.$router.push({name:'ordergive',params:{on:this.ordernumber}})
                })

            }
        },
        created(){
            this.id=this.$route.params.id;
            let id=this.id;
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
    button{
        cursor: pointer;
    }
    .writeorder {
        width: 1200px;
        margin: 36px auto 160px;
    }
    .writetop{
        height: 97px;
    }
    .writetop-l {
        float: left;
        margin-left: 7px;
    }
    .writetop-l h4{
        font-size: 16px;
    }
    .writetop-l  h4 span.etxt{
        font-weight: normal;
    }
    .writetop-l .zz span{
        display: block;
    }
    .writetop-l .hx{
          width: 58px;
          height:3px;
          background: #000;
        float: left;
      }
    .writetop-l .yd{
          width: 4px;
          height:4px;
          border-radius: 50%;
          background: #000;
        float: left;
        margin-left: 4px;
      }
    .writetop-r{
        float: right;
        margin-left: 7px;
        width: 345px;
        height:50px;
    }
    .writetop-r ul.num li.active {
        width: 26px;
        height:26px;
        border-radius: 50%;
        background: #ffff01;
        line-height: 26px;
        text-align: center;
    }
    .writetop-r ul.num{
        display: flex;
        justify-content: space-around;
    }
    .writetop-r ul.num li h1{
        font-size: 16px;
        font-weight: bold;
        font-style: italic;
    }
    .writetop-r ul.num .hx{
        width: 65px;
        height:1px;
        background: #c9c9c9;
        margin-top: 6px;
    }
    .writetop-r ul.txt{
        display: flex;
        justify-content: space-between;
    }
    .writetop-r ul.txt li{
        color: #7b7b7b;
        font-size: 12px;
    }
    .info{
        width: 876px;
        overflow: hidden;
        margin: 0 auto;
    }
    .infopeo{
        width: 279px;
        height:44px;
        border-radius: 30px;
        background: #333;
        position: relative;
    }
    .infopeo .yd{
        position: absolute;
        top:18px;
        left: 22px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #c1ff00;
    }
    .infopeo span.txt{
        margin-left: 44px;
    }
    .infopeo span{
        color: #fff;
        line-height: 44px;
        font-size: 14px;
    }
    .infotxt{
        margin: 32px 0 44px;
    }
    .infotxt li:nth-of-type(1){
        margin: 0;
    }
    .infotxt li{
        font-size:12px;
        color: #676767;
        margin-top: 16px;
    }
    .infotxt li span{
        line-height: 14px;
    }
    .infotxt button{
        width: 98px;
        height:30px;
        border:2px solid #000;
        border-radius: 30px;
        outline: none;
        background: #fff;
        font-size:12px;
        color: #676767;
        margin-top: 27px;
    }
    .infotxt .addaddress{
        margin-right: 16px;
    }
    .orderinfotop{
        width: 876px;
        height:44px;
        border-radius: 30px;
        background: #333;
        position: relative;
        margin: 0 auto;
    }
    .orderinfotop .yd{
        position: absolute;
        top:18px;
        left: 22px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #c1ff00;
    }
    .orderinfotop span.txt{
        margin-left: 44px;
    }
    .orderinfotop span{
        color: #fff;
        line-height: 44px;
        font-size: 14px;
    }
    .orderlist li{
        width: 775px;
        height: 140px;
        margin: 0 auto;
        border-bottom: 1px solid #000;
    }
    .orderlist li .thumb{
        float: left;
        margin-top: 35px;
    }
    .orderlist li .proinfo{
        margin: 40px 60px 0 10px;
        width: 130px;
        height:68px;
        float: left;
        font-size: 12px;
    }
    .orderlist li .proinfo .ename{
        font-weight: bold;
    }
    .orderlist li .proinfo .ename2{
        font-weight: normal;
        color: #676767;
    }
    .orderlist li .proinfo .name{
        font-weight: bold;

    }
    .orderlist li .proinfo .procolor,.orderlist li .proinfo .cm{
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
    .orderlist li .proinfo .cm{
        margin-left: 4px;
    }
    .orderlist li .price,.orderlist li .allprice{
        font-size: 18px;
        font-weight: bold;
        float: left;
        line-height: 141px;
        margin-right: 100px;
    }
    .orderlist li .num{
        float: left;
        line-height: 141px;
    }
    .orderlist li .allprice{
        margin-left: 160px;
        margin-right: 0;
    }
    .methodinfo{
        margin: 62px auto 0;
        width: 876px;
    }
    .methodinfotop{
        width: 278px;
        height:44px;
        border-radius: 30px;
        background: #333;
        position: relative;
    }
    .methodinfotop .yd{
        position: absolute;
        top:18px;
        left: 22px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #c1ff00;
    }
    .methodinfotop span.txt{
        margin-left: 44px;
    }
    .methodinfotop span{
        color: #fff;
        line-height: 44px;
        font-size: 14px;
    }
    .methodlist{
        display: flex;
        justify-content: flex-start;
    }
    .methodlist li{
        margin-top: 40px;
        width: 122px;
        height:36px;
        border-radius: 30px;
        border:1px solid #000;
        font-size: 12px;
        margin-left: 36px;
        box-sizing: border-box;
        position: relative;
    }
    .methodlist li button{
        border: none;
        outline: none;
        background: none;
        width: 100%;
        height:100%;
    }
    .methodlist li.active{
        border-color: #c8f94e;
    }
    .methodlist li .icon{
        width: 30px;
        height:30px;
        border-radius: 50%;
        background: #000;
        position: absolute;
        bottom:0;
        left:4px;
    }
    .methodlist li .icon i{
        font-size:20px;
        color: #fff;
        text-align: center;
        margin-left: 0px;
        line-height: 30px;
    }
    .methodlist li .txt{
        margin: 0px 0 0  20px;
    }
    .methodlist li .etxt{
        position: absolute;
        top:22px;
        left:20px;
        font-size: 5px;
        transform: scale(0.7);
        font-weight: bold;
    }
    .distribution{
        width: 876px;
        margin: 70px auto 0;
    }
    .distributiontop{
        width: 278px;
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
    .defual{
        margin: 30px 0 22px 40px;
    }
    .defual i,.other i{
        float: left;
        font-size: 30px;
    }
    .defual i{
        font-size:35px;
    }
    .other i{
        margin-left: 10px;
        margin-top: 10px;
    }
    .defual .txt{
        margin: 7px 12px 0 8px;
        font-size:12px;
        color: #424141;
        float: left;
    }
    .defual span{
        float: left;
        color: #bfbfbf;
        margin: 8px 0 0 0;
        font-size:12px;
    }
    .other{
        clear: both;
        margin: 30px 0 22px 40px;
    }
    .other .txt{
        margin: 7px 12px 0 8px;
        font-size:12px;
        color: #424141;
        float: left;
        margin-left: 15px;
    }
    .other span{
        float: left;
        color: #bfbfbf;
        margin: 8px 0 0 0;
        font-size:12px;
    }
    .other .change{
        width: 98px;
        height:30px;
        border:1px solid #000;
        border-radius: 30px;
        margin-left: 7px;
        margin-top: 5px;
        background: #fff;
        line-height: 10px;
    }
    .other .change i{
        margin-top: 2px;
        font-size:18px;
    }
    .other .change span{
        margin-top: 3px;
        margin-left: 2px;
        font-weight: bold;
        color: #000;
    }
    .pay{
        width: 876px;
        margin: 50px auto;
        overflow: hidden;
    }
    .sett{
        /*height:260px;*/
        margin-top: 30px;
        float: left;
    }
    .sett .payable{
        font-size:12px;
        font-weight: bold;
    }
    .sett .pealpayment{
        font-weight: bold;
        font-size:12px;
    }
    .sett .pealpayment span{
        font-size:30px;
        float: left;
    }
    .sett .pealpayment span.txt{
        font-size: 12px;
    }
    .sett .pealpayment .rmb{
        width: 46px;
        height:26px;
        border-radius: 30px;
        background: #000;
        text-align: center;
        margin-top: 6px;
        line-height: 26px;
        color: #fff;
        font-weight: bold;
        float: left;
    }
    button.go{
        float: right;
        outline: none;
        border: none;
        background: none;
        margin-top: 25px;
    }
</style>