<template>
    <div class="orderok">
        <div class="img">
            <img src="../assets/img/end.png" alt="">
        </div>
        <div class="detailorder">
            <div class="number">订单号：{{ordernumber}}</div>
            <router-link to="/my" class="see">
                <i class="iconfont icon-rili"></i>
                <span>查看订单</span>
            </router-link>
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
        name: 'orderok',
        data(){
            return {
                //                相关推荐的arr
                arr:[],
                ordernumber:1,
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
//        相关推荐的created
        created(){
            this.ordernumber=this.$route.params.ordernumber;
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
    .orderok{

        .detailorder{
            a{
                i{
                    color:black;
                }
                span{
                    font-size: 10px;
                    color:black;
                }
                display: block;
                width:98px;
                height:30px;
                text-align: center;
                line-height: 25px;
                border-radius: 20px;
                border:2px solid black;
                box-sizing: border-box;
            }
            .number{
                font-size: 12px;
                line-height: 30px;
            }
            display: flex;
            justify-content: space-between;
            width:300px;
            margin:30px auto 120px;
        }
        .img{
            height:460px;
            width:850px;
            margin:0 auto;
            img{
                height:100%;
            }
        }
        width:1200px;
        margin:0 auto;
    }
</style>