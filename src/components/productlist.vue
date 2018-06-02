<template>
    <div class="productlist">
        <ul class="crumbs">
            <li>
                <div class="name">TITOLO首页</div>
                <div class="ename">HOMEPAGE</div>
                <div class="hx"></div>
                <div class="yd"></div>
            </li>
            <i class="iconfont "> > </i>
            <li>
                <div class="name">商品列表</div>
                <div class="ename">NEWWEEK</div>
                <div class="hx"></div>
                <div class="yd"></div>
            </li>
        </ul>
        <div class="lbbix">
            <div class="pl-left"><img src="../assets/img/splb2_03.png" alt=""></div>
            <div class="pl-right">
                <swiper class="swip" :options="swiperOption">
                    <!-- slides -->
                    <swiper-slide><router-link to=""><img src="../assets/img/splbbabber_03.png" alt=""></router-link></swiper-slide>
                    <swiper-slide><router-link to=""><img src="../assets/img/splbbanner2_03.png" alt=""></router-link></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-button-prev" slot="button-prev">&lt;</div>
                    <div class="swiper-button-next" slot="button-next">&gt;</div>
                </swiper>
                <div class="flimg"><img src="../assets/img/splb_06.png" alt=""></div>
                <ul class="list">
                    <li v-for="(item,ind) in arr">
                        <i class="iconfont icon-xin"></i>
                        <img :src="JSON.parse(item.img.split('--')[0]).url" alt="">
                        <p>{{item.ename}}</p>
                        <span>{{item.description}}</span>
                        <h3>{{item.name}}</h3>
                        <div>
                            <span>{{item.price}}</span>
                            <div>RMB</div>
                            <router-link :to="'/productdec?id='+item.id" class="newa">BUY</router-link>
                        </div>
                    </li>
                </ul>
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
        name: 'productlist',
        data(){
            return {
                swiperOption: {
                    autoplay: true,
                    speed: 400
                },
//                相关推荐的arr
                arr:[],
                swiperOption2: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: true
                },
                shoesId:0
            }
        },
        mounted(){
//            相关推荐的数据
            this.$http.get('/api/product').then(res=>{
                this.arr=res.body;
            })
        },

        //        相关推荐的created
        created(){

        },
        methods:{
            toto(id){
                this.$router.push({name:'productdec',params:{id:id}})
            }
        }

    }
</script>
<style scoped lang="scss">
    .newa{
        border:2px solid #1c8b18;
        background: black;
        width:45px;
        height:20px;
        color:white;
        text-align: center;
        line-height: 20px;
        border-radius: 5px;
    }
    ul.crumbs{
        display: flex;
        font-size:12px;
        color: #8f8f8f;
        margin-top: 38px;
        margin-bottom: 35px;
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
    .productlist{
        .mbx{
            height:100px;
        }
        .lbbix{
            .pl-right{
                .list{
                    li{
                        > div{
                            ul{
                                border:2px solid #1c8b18;
                                background: black;
                                width:45px;
                                height:20px;
                                color:white;
                                text-align: center;
                                line-height: 20px;
                                border-radius: 5px;
                            }
                            div{
                                background: #84bd00;
                                color:white;
                                width:40px;
                                height:18px;
                                font-size: 13px;
                                text-align: center;
                                align-self: center;
                                border-radius: 40%;
                            }
                            span{
                                font-weight: 600;
                                font-size: 19px;
                                color:black;
                            }
                            display: block;
                            border-top: 1px solid black;
                            margin-top: 17px;
                            box-sizing: border-box;
                            padding-top: 13px;
                            display: flex;
                            justify-content: space-between;
                            cursor: pointer;
                        }
                        h3{
                            color:#a3a3a3;
                            font-weight: 500;
                        }
                        > span{
                            font-size: 15px;
                            display: block;
                            color:#b7b6b6;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }
                        > p{
                            margin-top: 20px;
                            font-size: 18px;
                        }
                        img{
                            width:190px;
                            height:155px;
                            margin-left: 10px;
                        }
                        i{
                            width:22px;
                            height:22px;
                            border-radius: 50%;
                            border:1px solid black;
                            text-align: center;
                            line-height: 22px;
                            font-size: 15px;
                            display: block;
                            margin-left: 170px;
                        }
                        width:30%;
                        height:355px;
                        border:1px solid #e0e2da;
                        margin:0 35px 35px 0;
                        box-sizing: border-box;
                        padding:10px 15px 0;
                    }
                    li:nth-child(3n){
                        margin-right: 0;
                    }
                    width:100%;
                    display: flex;
                    flex-wrap: wrap;
                }
                .flimg{
                    img{
                        width:100%;
                    }
                    margin:50px 0 80px;
                    width:100%;
                    height:120px;
                }
                .swip{
                    .swiper-button-prev{
                        top:97%;
                        left:47%;
                        background-image: none;
                        font-size: 20px;
                        background: black;
                        text-align: center;
                        color:white;
                        height:27px;
                    }
                    .swiper-button-next{
                        top:97%;
                        right:44%;
                        text-align: center;
                        background-image: none;
                        font-size: 20px;
                        background: #b9f503;
                        height:27px;
                        color:white;
                    }
                    .swiper-wrapper{
                        .swiper-slide{
                            .router-link-exact-active{
                                display: block;
                                width:100%;
                                height:100%;
                                img{
                                    display: block;
                                    margin: 40px auto 0;
                                }
                            }
                            width:100%;
                            height:100%;
                        }
                        width:100%;
                        height:100%;
                    }

                    width:100%;
                    border:1px solid black;
                    height:350px;
                }
                width:765px;
            }
            .pl-left{
                img{
                    width:100%;
                }
                width:303px;
                height:1132px;
                margin-right: 50px;
            }
            display: flex;
            margin-bottom: 110px;
        }
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
        width:1200px;
        margin:0 auto;
    }
</style>