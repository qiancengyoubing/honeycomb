<template>
  <div>
    <Form  style="padding:20px 10%"   :model="formCustom" :label-width="80">
      <FormItem label="销售人员">
        <Input v-model="formCustom.usage"/>
      </FormItem>
      <FormItem label="客户姓名">
        <Input v-model="formCustom.usage"/>
      </FormItem>
      <FormItem label="地区">
        <Input v-model="formCustom.usage" />
      </FormItem>
      <FormItem label="性别">
        <RadioGroup v-model="formCustom.radio">
          <Radio label="0">男</Radio>
          <Radio label="1">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="客户级别">
        <Select v-model="formCustom.process_type">
          <Option value="0">请选择</Option>
          <Option value="1">成品板</Option>
          <Option value="2">大板</Option>
        </Select>
      </FormItem>
      <FormItem label="客户公司">
        <Input v-model="formCustom.usage" />
      </FormItem>
      <FormItem label="客户身份">
        <Input v-model="formCustom.usage" />
      </FormItem>
      <FormItem label="工作地点">
        <Input v-model="formCustom.usage" />
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
    name:"customer_info_newOrEdit",
    data () {
      return {
        "formCustom":{

        }
      }
    },
    methods:{
      submit:function(){

      },
      cancelFn:function(){
        this.$router.push({
          name:'customer_info'
        })
      }
    }
  }
</script>
<style scoped>

</style>
