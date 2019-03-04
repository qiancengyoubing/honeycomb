<template>
  <div>
    <Form  style="padding:20px 10%" :model="formCustom" :label-width="80">
      <FormItem label="归属机构">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="角色名称">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="英文名称">
        <Input v-model="formCustom.name" />
      </FormItem>
      <FormItem label="角色类型">
        <Select v-model="formCustom.usage">
          <Option value="0">请选择</Option>
          <Option value="1">任务分配</Option>
          <Option value="2">管理角色</Option>
          <Option value="3">普通角色</Option>
        </Select>
      </FormItem>
      <FormItem label="是否系统数据">
        <RadioGroup v-model="formCustom.radio">
          <Radio label="0">否</Radio>
          <Radio label="1">是</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="是否可用">
        <RadioGroup v-model="formCustom.radio">
          <Radio label="0">否</Radio>
          <Radio label="1">是</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="数据范围">
        <Select v-model="formCustom.usage">
          <Option value="0">请选择</Option>
        </Select>
      </FormItem>
      <FormItem label="角色授权">

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
    name: 'role_manage_newOrEdit',
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
          name:'role_manage'
        })
      }
    }
  }
</script>

<style scoped>

</style>
