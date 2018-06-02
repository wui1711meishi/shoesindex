import Vue from 'vue'
import Router from 'vue-router'
import MyMain from '@/components/main'                  //主页
import Login from '@/components/login'                  //登录页
import Writeorder from '@/components/writeorder'        //填写订单页
import Productdec from '@/components/productdec'        //商品详情页
import Productlist from '@/components/productlist'      //商品列表页
import Car from '@/components/car'                      //购物车
import My from '@/components/my'                        //个人中心
import Ordergive from '@/components/ordergive'          //订单支付
import Orderok from '@/components/orderok'              //订单完成
import Xgtj from '@/components/xgtj'                    //相关推荐
import Myhf from '@/components/myhf'                    //相关推荐

Vue.use(Router);

export default new Router({
    routes: [
        //    登录页
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path:'/',
            name:'myhf',
            component:Myhf,
            redirect:'mymain',
            children: [
                //   填写订单页
                {
                    path: '/writeorder',
                    name: 'writeorder',
                    component: Writeorder
                },
                //   订单支付
                {
                    path: '/ordergive',
                    name: 'ordergive',
                    component: Ordergive
                },
                //订单完成
                {
                    path: '/orderok',
                    name: 'orderok',
                    component: Orderok
                },
                //   商品详情页
                {
                    path: '/productdec',
                    name: 'productdec',
                    component: Productdec
                },
                //   商品列表页
                {
                    path: '/productlist',
                    name: 'productlist',
                    component: Productlist
                },
                //   购物车
                {
                    path: '/car',
                    name: 'car',
                    component: Car
                },
                //   个人中心
                {
                    path: '/my',
                    name: 'my',
                    component: My
                },
                //   相关推荐
                {
                    path: '/xgtj',
                    name: 'xgtj',
                    component: Xgtj
                },
                //主页
                {
                    path: '/mymain',
                    name: 'mymain',
                    component: MyMain,
                },
            ]
        }
    ]
})
