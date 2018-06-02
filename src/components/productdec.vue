<template>
    <div class="productdec">
        <ul class="crumbs">
            <li>
                <div class="name">TITOLO首页</div>
                <div class="ename">HOMEPAGE</div>
                <div class="hx"></div>
                <div class="yd"></div>
            </li>
            <i class="iconfont "> > </i>
            <li>
                <div class="name">本周上新</div>
                <div class="ename">NEWWEEK</div>
                <div class="hx"></div>
                <div class="yd"></div>
            </li>
        </ul>
        <div class="productinfo">
            <div class="productimgs">
                <img class="showimg" :src="showimg" alt="">
                <div class="lr">
                    <div @click="goleft" class="lr-l"><i class="iconfont icon-zuoyou"></i></div>
                    <div @click="goright" class="lr-r"><i class="iconfont icon-right"></i></div>
                </div>
                <ul class="imgs">
                    <li @click="active=index" :class="{active:index==active}" v-for="(item,index) in productimgs" :key="index">
                        <img :src="item.url" alt="">
                    </li>
                </ul>
            </div>
            <div class="producttxt">
                <h3 class="ename">{{product.ename}}</h3>
                <h2 class="name">{{product.name}}</h2>
                <div class="gd">
                    <div class="hx1"></div>
                    <div class="yd"></div>
                    <div class="hx2"></div>
                </div>
                <div class="dec">{{product.description}}
                </div>
                <div class="price">
                    <div class="pricetxt">{{product.price}}</div>
                    <div class="rmb">RMB</div>
                </div>
                <div class="chx"></div>
                <div class="colors">
                    <div class="colortxt">COLOR</div>
                    <span>色彩选择</span>
                    <ul id="cc">
                        <li :style="{background: item.color}" v-for="(item,index) in colors" :key="index" :class="{colorsactive:colornub==index}" @click="colornub=index"></li>
                    </ul>
                </div>
                <div class="sizes">
                    <div class="colortxt">SIZE</div>
                    <span>尺码选择</span>
                    <ul id="ss">
                        <li @click="sizenub=index" v-for="(item,index) in sizes" :key="index" :class="{sizesactive:sizenub==index}">{{item.size}}</li>
                    </ul>
                </div>
                <div class="nums">
                    <div class="colortxt">NUMBUER</div>
                    <span>数量选择</span>
                    <button class="reduce" @click="reduce">-</button>
                    <div class="numtxt">{{num}}</div>
                    <button class="add" @click="add">+</button>
                </div>
                <div class="chx"></div>
                <div class="but">
                    <!--立即购买-->
                    <div @click="buynow">
                        <img src="../assets/img/zxcv.png" alt="">
                        <span v-if="flag1">请先登录</span>
                    </div>
                    <!--加入购物车-->
                    <div @click="addcar()">
                        <img src="../assets/img/vcxz.png" alt="">
                        <span v-if="flag2">请先登录</span>
                    </div>

                </div>

            </div>
        </div>
        <div class="btn">
            <img src="../assets/img/vcxxcv.png" alt="">
            <img src="../assets/img/ccvvvcvc.png" alt="">
        </div>
        <div class="details">
            <img :src="bigimg" alt="">
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
        name: 'productdec',
        data(){
            return {
                productimgs:[
                    {id:1,src:''},
                    {id:2,src:''},
                    {id:3,src:''},
                    {id:4,src:''},
                ],
                showimg:'',
                product:[],
                bigimg:[],
                active:0,
                num:1,
                colors:[
                    {id:1,color:'red'},
                    {id:2,color:'yellow'},
                    {id:3,color:'green'},
                    {id:2,color:'blue'},
                    {id:2,color:'pink'},
                ],
                colornub:0,
                sizenub:0,
                sizes:[
                    {id:1,size:'41码'},
                    {id:2,size:'42码'},
                    {id:3,size:'43码'},
                    {id:4,size:'44码'},
                    {id:5,size:'45码'},
                    {id:6,size:'46码'},
                ],
                id:0,
                subobj:{},
                addobj:{},
                arr:[],
                swiperOption2: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: true
                },
                shoesId:0,
                flag1: false,
                flag2: false,
                kg:''
            }
        },
        methods:{

            buynow(){
                if (sessionStorage.user) {
                    this.addobj.id=this.shoesId;
                    this.addobj.size=this.sizes[this.sizenub].size;
                    this.addobj.color=this.colors[this.colornub].color;
                    this.addobj.num=this.num;
                    this.addobj.user=sessionStorage.user;
                    this.$http.post('/api/product/addcar',this.addobj,{headers:"application/x-www-form-urlencoded"}).then(res=>{

                        if(res.body=='ok'){
                            console.log('添加成功')
                            this.$router.push('writeorder')
                        }else{
                            console.log('添加失败')
                        }
                    })

                }
                else {
                    this.flag1 = true;
                }
            },
            addcar(){
                if (sessionStorage.user) {
                    this.addobj.id=this.shoesId;
                    this.addobj.size=this.sizes[this.sizenub].size;
                    this.addobj.color=this.colors[this.colornub].color;
                    this.addobj.num=this.num;
                    this.addobj.user=sessionStorage.user;
                    this.$http.post('/api/product/addcar',this.addobj,{headers:"application/x-www-form-urlencoded"}).then(res=>{

                        if(res.body=='ok'){
                            console.log('添加成功')
                            this.$router.push({name:'my'})
                        }else{
                            console.log('添加失败')
                        }
                    })
                } else {
                    this.flag2 = true;
                }
            },

            goleft(){
                this.active=this.active-1;
                this.active=this.active<0 ? 0:this.active;
            },
            goright(){
                this.active=this.active+1;
                this.active=this.active>this.productimgs.length-1 ? this.productimgs.length-1:this.active;
            },
            reduce(){
                this.num=this.num-1;
                this.num=this.num<1 ? 1:this.num;
            },
            add(){
                this.num=this.num+1;
                this.num=this.num>99 ? 99:this.num;
            },
            tocar(){
                let id=this.id;
                this.subobj.size=this.sizes[this.sizenub].size;
                this.subobj.color=this.colors[this.colornub].color;
                this.subobj.num=this.num;
                this.subobj.sid=id;
                this.$http.post('/api/product/order',this.subobj,{headers:"application/x-www-form-urlencoded"}).then(res=>{

                })
                this.$router.push({name:'car',params:{id:id}})
            },
            addcart(id){

            }

        },
        mounted(){
            this.shoesId=this.$route.query.id;
            let id=this.$route.query.id;
            this.$http.get('/api/product').then(res=>{
                this.arr=res.body;
                let index=0;
                res.body.forEach((val,ind)=>{
                    if(val.id==id){
                        index=ind;
                    };
                })
                this.product=res.body[index];
                this.bigimg=JSON.parse(this.product.bigimg).url
                let arr=res.body[index].img.split('--');
                let brr=[]
                arr.forEach((val,ind)=>{
                    brr.push(JSON.parse(val))
                })
                this.productimgs=brr;
                this.showimg=this.productimgs[0].url;
            })
            this.id=id;
        },
        watch:{
          active(){
              this.showimg=this.productimgs[this.active].url;
          }
        },
        created(){
            this.kg=sessionStorage.user
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
    .details{
        width: 1200px;
        height: auto;
        img{
            display: block;
            margin: 0 auto;
        }
    }
    .productdec{
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 100px;
    }
    ul.crumbs{
        display: flex;
        font-size:12px;
        color: #8f8f8f;
        margin-top: 38px;
    }
    ul.crumbs .name{
        color: #666;
    }
    ul.crumbs li .hx{
        width: 21px;
        height: 4px;
        background: #000;
        border-radius: 30px;
        float: left;
    }
    ul.crumbs li .yd{
        width: 4px;
        height: 4px;
        background: #000;
        border-radius: 50%;
        float: left;
        margin-left: 2px;
    }
    ul.crumbs i.iconfont{
        margin: -2px 9px 0;
        color: #000;
    }
    .productinfo{
        width: 100%;
        height:457px;
        margin: 77px 0 85px;
        display: flex;
        justify-content: space-around;
    }
    .productimgs{
        width: 397px;
        height:457px;
        position: relative;
    }
    .productimgs .showimg{
        width: 100%;
    }
    .productimgs ul.imgs{
        width: 316px;
        height:71px;
        display: flex;
        justify-content: space-around;
        position: absolute;
        bottom: 20px;
        left:42px;
    }
    .productimgs ul.imgs li{
        width: 72px;
        height: 72px;
        border:1px solid #c9c9c9;
        box-sizing: border-box;
        position: relative;
    }
    .productimgs ul.imgs li.active:before{
        content: '';
        width: 0;
        height:0;
        border: 12px solid transparent;
        border-bottom-color: #aaa;
        position: absolute;
        top:-24px;
        left:26px;
    }
    .productimgs ul.imgs li img{
        display: block;
        width: 100%;
        height:100%;
    }
    .productimgs .lr-l,.productimgs .lr-r{
        width: 25px;
        height:25px;
        background: #000;
        text-align: center;
        line-height: 25px;
        font-size:12px;
        color: #fff;
        position: absolute;
        bottom:43px;
    }
    .productimgs .lr-l{
        left:0;
    }
    .productimgs .lr-r{
        right:0;
    }
    .producttxt{
        width: 482px;
        background: #000;
        height:457px;
        color: #fff;
    }
    .producttxt .ename{
        margin: 24px 0 12px 23px;
    }
    .producttxt .name{
        margin: 0 0 20px 23px;
    }
    .producttxt .gd{
        height:3px;
        margin:0 0 24px 23px;
    }
    .producttxt .gd .hx1,.producttxt .gd .hx2{
        width:102px;
        height: 3px;
        border-radius: 30px;
        float: left;
        background: #b1fe00;
    }
    .producttxt .gd .yd{
        width: 4px;
        height:4px;
        background: #b1fe00;
        float: left;
        border-radius: 50%;
        margin-left: 3px;
    }
    .producttxt .gd .hx2{
        width: 21px;
        margin-left: 4px;
    }
    .producttxt .dec{
        clear: both;
        font-size:12px;
        color: #a9a9a8;
        margin: 0px 22px 10px 23px;
    }
    .producttxt .price{
        height:24px;
        margin: 0 0 20px 23px;
    }
    .producttxt .price .pricetxt{
        color: #b1fe00;
        font-size:24px;
        float: left;
    }
    .producttxt .price .rmb{
        width: 43px;
        height:16px;
        border-radius:30px;
        box-sizing: border-box;
        border:1px solid #b1fe00;
        color: #fff;
        font-size:12px;
        text-align: center;
        float: left;
        line-height: 14px;
        margin: 7px 0 0 11px;
    }
    .chx{
        margin: 0px 0 21px 23px;
        width: 434px;
        height:1px;
        background: #b1fe00;
        border-radius: 30px;
        clear: both;
    }
    .colors{
        width: 120px;
        height:40px;
        margin:0 76px 22px 23px;
        float: left;
    }
    .sizes{
        width: 236px;
        float:left
    }
    .nums{
        width: 130px;
        clear: both;
        margin: 0 0 21px 23px;
    }
    .colors .colortxt,.sizes .colortxt,.nums .colortxt{
        width: 50px;
        height:20px;
        border-radius: 3px;
        text-align: center;
        line-height: 20px;
        font-weight: bold;
        background: #fff;
        float: left;
        color: #333;
        font-size:10px;
    }
    .nums .colortxt{
        width: 70px;
    }
    .colors span,.sizes span,.nums span{
        float: left;
        margin-left: 7px;
        font-size:12px;
        color: #b2b2b1;
        line-height: 20px;
    }
    .colors ul,.sizes ul{
        padding-top: 11px;
        clear: both;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    }
    .colors ul li{
        width: 16px;
        height:16px;
        border-radius: 50%;
        border:2px solid black;
    }



    /*阿克提物*/
    ul#ss li.sizesactive{
        border:2px solid white;
    }
    ul#cc li.colorsactive{
        border:2px solid white;
    }
    .sizes ul li{
        font-size:12px;
        color: #a9a9a8;
        border:2px solid black;
        border-radius: 5px;
    }
    .nums .reduce,.nums .add{
        width:16px;
        height:16px;
        border-radius: 50%;
        border:1px solid #aaf400;
        box-sizing: border-box;
        line-height: 14px;
        text-align: center;
        color: #a3a4a3;
        background: transparent;
        float: left;
        margin: 10px 0 21px;
        outline: none;
    }
    .nums .reduce{
        clear: both;
    }
    .nums .numtxt{
        width: 34px;
        height:15px;
        background: #fff;
        color: #000;
        text-align: center;
        line-height: 15px;
        border-radius: 5px;
        font-size:12px;
        font-weight: bold;
        margin: 10px 6px  21px 6px;
        float: left;
    }
    .but {
        display: flex;
        justify-content: space-around;
        > div {
            display: flex;
            flex-direction: column;
            > span {
                font-size: 12px;
                color: red;
                text-align: center;
                line-height: 24px;
            }
        }
    }

    div.btn{
        display: flex;
        justify-content: center;
        margin-bottom:100px;
    }
</style>