<template>
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
</template>
<script>
    export default{
        name: 'myfoot',
        data(){
            return {}
        }
    }
</script>
<style scoped lang='scss'>
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