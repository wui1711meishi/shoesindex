<template>
    <div class="main">
        <div class="banner">
            <div class="bannermain">
                <template>
                    <swiper :options="swiperOption1">
                        <!-- slides -->
                        <swiper-slide v-for="(item,ind) in bannerarr" v-bind:key="ind">
                            <router-link to="">
                                <img style="height:100%" :src="item" alt="">
                            </router-link>
                        </swiper-slide>
                        <!-- Optional controls -->
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </template>
            </div>
        </div>
        <section class="zhendian">
            <div class="zhendian_top">
                <ul>
                    <li>
                        <a href="">
                            <img src="../assets/img/vip-1.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/img/vip-2.png" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../assets/img/vip-2.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="title">
                <img src="../assets/img/zhendian-title.png" alt="">
            </div>
            <div class="zhendian_main">
                <div class="zhendian_main_left">
                    <img src="../assets/img/thibigshow_36.png" alt="">
                    <h1 style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis">运动鞋，顾名思义是指健身或竞技体育时所穿的鞋能足人们运各种需求，保证人脚</h1>
                    <h2>Sports shoes, as the name suggests, refer to shoes worn for body-building or competitive sports</h2>
                    <div class="price">
                        <h3>
                            <span>RMB</span>&nbsp;39999
                        </h3>
                        <a href="">
                            <img src="../assets/img/price_72.png" alt="">
                        </a>
                    </div>
                </div>
                <div class="zhendian_main_right">
                    <img src="../assets/img/zhendian_main_18.png" alt="">
                </div>
            </div>
        </section>
        <section class="paihang">
            <div class="paihang_main">
                <img src="../assets/img/paihang_title.png" alt="">
                <ul>
                    <li @mouseenter="act1" @mouseleave="le1" :class="active1=='1'?'active':''">
                        <router-link to="">
                            <div class="paihangbang_top">
                                <div class="paihang_img">
                                    <img src="../assets/img/paihangbang-img_28.png" alt="">
                                </div>
                                <h1><span>THE BIG</span>BANG SHOW</h1>
                                <h2>王爵盛世</h2>
                                <h3>Committed to the perfect combination</h3>
                                <span>BUY</span>
                            </div>
                            <div class="paihang_price" v-if="active1=='0'">
                                <h1><span>RMB</span>&nbsp;39999</h1>
                            </div>
                            <div class="showimg" v-else>
                                <img src="../assets/img/paihangbang-img_119.png" alt="">
                            </div>
                        </router-link>
                    </li>
                    <li @mouseenter="act2" @mouseleave="le2" :class="active2=='1'?'active':''">
                        <router-link to="">
                            <div class="paihangbang_top">
                                <div class="paihang_img">
                                    <img src="../assets/img/paihangbang-img2.png" alt="">
                                </div>
                                <h1><span>THE BIG</span>BANG SHOW</h1>
                                <h2>王爵盛世</h2>
                                <h3>Committed to the perfect combination</h3>
                                <span>BUY</span>
                            </div>
                            <div class="paihang_price" v-if="active2=='0'">
                                <h1><span>RMB</span>&nbsp;39999</h1>
                            </div>
                            <div class="showimg" v-else>
                                <img src="../assets/img/paihangbang-img_119.png" alt="">
                            </div>
                        </router-link>
                    </li>
                    <li @mouseenter="act3" @mouseleave="le3" :class="active3=='1'?'active':''">
                        <router-link to="">
                            <div class="paihangbang_top">
                                <div class="paihang_img">
                                    <img src="../assets/img/paihangbang-img3.png" alt="">
                                </div>
                                <h1><span>THE BIG</span>BANG SHOW</h1>
                                <h2>王爵盛世</h2>
                                <h3>Committed to the perfect combination</h3>
                                <span>BUY</span>
                            </div>
                            <div class="paihang_price" v-if="active3=='0'">
                                <h1><span>RMB</span>&nbsp;39999</h1>
                            </div>
                            <div class="showimg" v-else>
                                <img src="../assets/img/paihangbang-img_119.png" alt="">
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>
        <section class="cate">
            <div class="cate-title">
                <img src="../assets/img/cate-title_138.png" alt="">
            </div>
            <div class="cate-main">
                <div class="cate-swiper">
                    <template>
                        <swiper :options="swiperOption2">
                            <!-- slides -->


                            <!--<swiper-slide v-for="(item,ind) in botarr" v-if="ind>=2&&ind<=4" v-bind:key="ind">-->
                                <!--<router-link to="">-->
                                    <!--<img :src="JSON.parse(item.img.split('&#45;&#45;')[0]).url" alt="">-->
                                <!--</router-link>-->
                            <!--</swiper-slide>-->
                            <swiper-slide>
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
                        </swiper>
                    </template>
                </div>
                <div class="btn">
                    <img src="../assets/img/btn-1.png" class="btn-1" alt="">
                    <img src="../assets/img/btn-2.png" class="btn-2" alt="">
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    export default{
        name: 'mymain',
        data(){
            return {
                swiperOption1: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: true,
                    speed: 400
                },
                swiperOption2: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                    freeMode: true
                },
                swiperOption3: {
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    autoplay: true,
                    speed: 400
                },
                active1:0,
                active2:0,
                active3:0,
                dis1:0,
                dis2:0,
                dis3:0,
                bannerarr:[],
                zhendian:{},
                zhendianmainrightimg:'',
                hotarr:[],
                botarr:[]
            }
        },
        methods:{
            act1(){
                this.active1=1;
            },
            le1(){
                this.active1=0;
            },
            act2(){
                this.active2=1;
            },
            le2(){
                this.active2=0;
            },
            act3(){
                this.active3=1;
            },
            le3(){
                this.active3=0;
            },
            discount1(){
                this.dis1=1;
            },
            disle1(){
                this.dis1=0;
            }
        },
        created(){
            this.$http.get('/api/banner/bannerset').then(res=>{
                res.body.forEach((val,ind)=>{
                    this.bannerarr.push(JSON.parse(val.img).url)
                })
            })
            this.$http.get('/api/product').then(res=>{
                this.botarr=res.body;
            })
            this.$http.get('/api/banner/bannerzd').then(res=>{
                this.zhendian=res.body[0];
                this.zhendianmainrightimg=JSON.parse(res.body[0].img.split('--')[0]).url;
            })
        }
    }
</script>
<style scoped lang="scss">
    .banner {
        width: 100%;
        height: 443px;
        background: #030400;
        .bannermain {
            width: 100%;
            height: 100%;
            margin: 0 auto;
            .swiper-container {
                width: 100%;
                height: 100%;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
    }
    section.zhendian {
        width: 100%;
        height: 963px;
        background: #fff;
        .zhendian_top{
            width: 1200px;
            height: 330px;
            margin: 0 auto;
            overflow: hidden;
            ul{
                width: 740px;
                height: 75px;
                margin: 125px auto 0;
                display: flex;
                li{
                    width: 239px;
                    height: 75px;
                    overflow: hidden;
                    margin-right: 12px;
                    a{
                        display: block;
                        img{
                            width: 100%;
                        }
                    }
                }
                li:last-child{
                    margin-right: 0;
                }
            }
        }
        .title{
            width: 100%;
            height: 62px;
            img{
                display: block;
                height: 100%;
                margin: 0 auto;
            }
        }
        .zhendian_main{
            width: 100%;
            height: 571px;
            padding: 93px 0 64px 255px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .zhendian_main_left{
                width: 428px;
                height: 100%;
                h1{
                    font-size: 17px;
                    line-height: 27px;
                    color: #333;
                    margin-top: 29px;
                    font-weight: normal;
                }
                h2{
                    font-weight: normal;
                    font-family: 'HelveticaNeueLT Pro 33 ThEx';
                    font-size: 16px;
                    line-height: 24px;
                    color: #333;
                    margin-top: 10px;
                }
                .price{
                    width: 100%;
                    height: 28px;
                    margin-top: 30px;
                    display: flex;
                    justify-content: space-between;
                    h3{
                        line-height: 28px;
                        span{
                            border-radius: 10px;
                            background: #000000;
                            color: #fff;
                            font-size: 16px;
                            text-align: center;
                            font-weight: normal;
                            padding: 0 3px;
                            box-sizing: border-box;
                        }
                    }
                }
            }
            .zhendian_main_right{
                width: 513px;
                height: 414px;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
        }
    }
    section.paihang{
        width: 100%;
        height: 848px;
        background: #000;
        .paihang_main{
            width: 855px;
            height: 100%;
            margin: 0 auto;
            padding-top: 99px;
            box-sizing: border-box;
            img{
                display: block;
                height: 107px;
                margin: 0 auto;
            }
            ul{
                width: 100%;
                height: 326px;
                background: #000;
                margin-top: 34px;
                display: flex;
                justify-content: space-between;
                li{
                    width: 258px;
                    height: 100%;
                    border: 1px solid #000;
                    border-bottom: 4px solid #000;
                    box-sizing: border-box;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        .paihangbang_top{
                            width: 248px;
                            height: 248px;
                            margin: 0 auto;
                            border-bottom: 2px solid #87bd00;
                            position: relative;
                            .paihang_img{
                                width: 100%;
                                height: 141px;
                                overflow: hidden;
                                margin: 18px auto 0;
                                img{
                                    height: 100%;
                                }
                            }
                            h1{
                                font-size: 12px;
                                color: #fff;
                                line-height: 12px;
                                margin-top: 17px;
                                font-weight: normal;
                                >span{
                                    font-weight: 600;
                                }
                            }
                            h2{
                                font-size: 14px;
                                color: #fff;
                                font-weight: normal;
                                margin-top: 7px;
                            }
                            h3{
                                font-size: 12px;
                                color: #686967;
                                font-weight: normal;
                                margin-top: 19px;
                            }
                            >span{
                                display: block;
                                height: 36px;
                                width: 36px;
                                background: #fff;
                                color: #000;
                                font-weight: 600;
                                font-size: 10px;
                                text-align: center;
                                line-height: 36px;
                                border-radius: 50%;
                                position: absolute;
                                right: 10px;
                                bottom: 90px;
                            }
                        }
                        .paihang_price{
                            width: 248px;
                            height: 57px;
                            margin: 0 auto;
                            overflow: hidden;
                            h1{
                                display: block;
                                height: 20px;
                                color: #fff;
                                font-weight: normal;
                                font-size: 20px;
                                line-height: 20px;
                                border-right: 2px solid #b1fe00;
                                text-align: right;
                                margin-top: 19px;
                                padding-right: 10px;
                                box-sizing: border-box;
                                span{
                                    font-size: 10px;
                                    font-weight: 600;
                                }
                            }
                        }
                        .showimg{
                            width: 248px;
                            height: 57px;
                            margin: 0 auto;
                            overflow: hidden;
                            img{
                                height: 100%;
                            }
                        }
                    }
                }
                li.active{
                    border: 1px solid #b5ff00;
                    border-bottom: 4px solid #b5ff00;
                }
            }
        }
    }
    section.cate{
        width: 100%;
        height: 615px;
        background: pink;
        z-index: 100;
        margin-top: -148px;
        background: url("../assets/img/cate-1.png") no-repeat;
        background-size: 684px 582px;
        padding-bottom: 100px;
        .cate-title{
            width: 100%;
            height: 108px;
            img{
                display: block;
                margin-left: 436px;
            }
        }
        .cate-main{
            width: 765px;
            height: 507px;
            float: right;
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
            .btn{
                width: 373px;
                height: 262px;
                margin: 59px auto 0;
                position: relative;
                .btn-2{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            }
        }

    }
    section.discount{
        width: 100%;
        height: 866px;
        padding-top: 109px;
        box-sizing: border-box;
        .discount-title{
            width: 100%;
            height: 51px;
            img{
                display: block;
                margin: 0 auto;
            }
        }
        .discount-swiper{
            width: 851px;
            height: 425px;
            margin: 146px auto 0;
            .swiper-container{
                width: 100%;
                height: 100%;
                .swiper-slide{
                    width: 100%;
                    height: 343px;
                    overflow: hidden;
                    ul{
                        width: 100%;
                        height: 100%;
                        li{
                            width: 198px;
                            height: 317px;
                            margin-top: 2px;
                            border: 1px solid #bfb8b8;
                            box-sizing: border-box;
                            position: relative;
                            >span{
                                display: block;
                                width: 140px;
                                height: 6px;
                                background: #b9f503;
                                position: absolute;
                                top: -3px;
                                left: 0;
                                right: 0;
                                margin-left: auto;
                                margin-right: auto;
                                z-index: 10;
                            }
                            a.discount-before{
                                display: block;
                                width: 100%;
                                height: 100%;
                                padding-top: 40px;
                                box-sizing: border-box;
                                .discount-img{
                                    width: 180px;
                                    height: 180px;
                                    margin: 0 auto;
                                    overflow: hidden;
                                    img{
                                        width: 100%;
                                    }
                                }
                                >h1{
                                    font-size: 12px;
                                    font-weight: normal;
                                    color: #000;
                                    text-align: center;
                                    margin-top: 10px;
                                    >span{
                                        font-weight: 600;
                                    }
                                }
                                >h2{
                                    font-size: 14px;
                                    font-weight: normal;
                                    color: #676767;
                                    text-align: center;
                                    margin-top: 10px;
                                }
                                >h3{
                                    font-size: 10px;
                                    font-weight: normal;
                                    color: #b1b1b1;
                                    text-align: center;
                                }
                            }
                            .discount-buy{
                                display: block;
                                height: 36px;
                                width: 36px;
                                background: #000;
                                color: #fff;
                                font-weight: 600;
                                font-size: 10px;
                                text-align: center;
                                line-height: 36px;
                                border-radius: 50%;
                                position: absolute;
                                right: 20px;
                                top: 55px;
                            }
                            a.discount-after{
                                display: block;
                                width: 100%;
                                height: 100%;
                                padding-top: 40px;
                                box-sizing: border-box;
                                overflow: hidden;
                                img{
                                    display: block;
                                    float: right;
                                    width: 170%;
                                    margin-top: 20%;
                                    margin-right: -40%;
                                }
                                .after-text{
                                    width: 100%;
                                    height: 100%;
                                    position: absolute;
                                    top:0;
                                    left:0;
                                    >h1{
                                        font-size: 12px;
                                        font-weight: normal;
                                        color: #000;
                                        text-align: center;
                                        margin-top: 10px;
                                        >span{
                                            font-weight: 600;
                                        }
                                    }
                                    >h2{
                                        font-size: 14px;
                                        font-weight: normal;
                                        color: #676767;
                                        text-align: center;
                                        margin-top: 10px;
                                    }
                                    >h3{
                                        font-size: 10px;
                                        font-weight: normal;
                                        color: #b1b1b1;
                                        text-align: center;
                                    }
                                    >h4{
                                        font-size: 18px;
                                        color: #000;
                                        text-align: center;
                                        margin-top: 10px;
                                    }
                                    >span{
                                        display: block;
                                        width: 32px;
                                        height: 18px;
                                        background: #000;
                                        border-radius: 10px;
                                        margin: 5px auto 0;
                                    }
                                }
                            }
                        }
                        li.discount{
                            box-shadow: 1px 1px 15px 10px rgba(244,242,242,0.5);
                        }
                    }
                }
                .swiper-pagination{
                }
            }
        }
    }
</style>