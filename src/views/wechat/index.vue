<template>
    <div>
        <avue-form v-show="!html" ref="form" v-model="obj" :option="option" @submit="submit">
        </avue-form>
<!--        <el-link v-show="!html" style="margin-left: 300px;margin-top:20px" :href="url" v-show="isFlag" target="_blank">点击跳转到支付页面</el-link>-->
<!--        <div v-html='html'>{{html}}</div>-->
<!--        <a href="alipays://platformapi/startapp?url=https://nxt.nongxinyin.com/buybal-api/v1.0/cashier/initializ/0BF0E1B45858AD28A20E4F19C2D0F8C7/EB893B83D8AA1CB65B69E21B5EFE70E6&appId=20000067">test</a>-->
    </div>
</template>

<script>

    import { create_order } from '@/api/request/request'
    export default {
        data() {
            return {
                obj:{},
                url:'',
                isFlag:false
            }
        },
        computed: {
            option(){
                return{
                    size:'mini',
                    labelWidth:100,
                    mock:true,
                    submitText: '完成',
                    column: [ {
                        label: "订单号",
                        prop: "down_ordercode",
                        type: "datetime",
                        span:10,
                        format:'yyyyMMddhhmmss',
                        valueFormat:'yyyyMMddhhmmss',
                        mock:{
                            type:'datetime',
                            format:'yyyyMMddhhmmss',
                            now:true,
                        },
                        row:true,
                    },              {
                        label: "金额",
                        prop: "amount",
                        type: 'number',
                        span: 10,
                        precision:2,
                        // mock:{
                        //     type:'number',
                        //     max:1,
                        //     min:2,
                        //     precision:2
                        // },
                        valueDefault: 3,
                        minRows: 0,
                        maxRows: 10000,
                        row:true,
                    },{
                        label: "订单创建时间",
                        prop: "createtime",
                        type: "datetime",
                        span:10,
                        format:'yyyy-MM-dd hh:mm:ss',
                        valueFormat:'yyyy-MM-dd hh:mm:ss',
                        display:false,
                        mock:{
                            type:'datetime',
                            format:'yyyy-MM-dd hh:mm:ss',
                            now:true,
                        },
                        row:true,
                    } ]
                }
            }
        },
        mounted(){
        },
        methods:{
            emptytChange(){
            },
            submit () {






                this.obj.businessid = '2'
                this.obj.paytypeid = "1"
                this.obj.client_ip = "192.168.0.1"
                this.obj.notifyurl = "http://47.56.193.188:80/api/paycall/wechat_test"
                this.obj.ismobile = "0"

                var key = "LZXFUKD42UAASEYL"

                var sign_test = key + this.obj.businessid + this.obj.paytypeid + this.obj.down_ordercode  + this.obj.client_ip + this.obj.amount + key
                console.log(sign_test)
                this.obj.sign=this.$md5(sign_test)



                console.log(this.obj)
                create_order({
                    data : this.obj,
                    callback : (res)  => {
                        this.url = res.data.data.path

                        window.location.href=this.url
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
