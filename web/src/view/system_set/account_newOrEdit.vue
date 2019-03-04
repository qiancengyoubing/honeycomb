<template>
  <div>
    <Form  style="padding:20px 10%" :model="formCustom" :label-width="80">
      <FormItem label="账户名称">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="账户类型">
        <Select v-model="formCustom.usage">
          <Option value="0">请选择</Option>
          <Option value="1">全部</Option>
          <Option value="2">对公</Option>
          <Option value="3">对私</Option>
          <Option value="4">微信</Option>
          <Option value="5">支付宝</Option>
        </Select>
      </FormItem>
      <FormItem label="部门">
        <span></span>
      </FormItem>
      <FormItem label="纳税人识别号">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="开户行">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="账号">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="发票名称">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="联系人姓名">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="联系电话">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="单位地址">
        <Input v-model="formCustom.name" />
      </FormItem>

      <FormItem label="备注">
        <Input v-model="formCustom.usage" type="textarea" :autosize="{minRows: 2,maxRows: 5}" />
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submit()">保存</Button>
        <Button @click="cancelFn()" style="margin-left: 8px">返回</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    name: 'account_newOrEdit',
    data(){
      return {
        formCustom:{

        }
      }
    },
    methods:{
      submit:function(){

      },
      cancelFn:function(){
        this.$router.push({
          name:'account'
        })
      }
    }
  }
</script>

<style scoped>

</style>
