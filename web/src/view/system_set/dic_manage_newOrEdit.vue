<template>
  <div>
    <Form  style="padding:20px 10%" :model="formCustom" :label-width="80">
      <FormItem label="键值">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="标签">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="类型">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="描述">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="颜色">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="排序">
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
    name: 'dic_manage_newOrEdit',
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
          name:'dic_manage'
        })
      }
    }
  }
</script>

<style scoped>

</style>
