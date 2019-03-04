<template>
   <div>
     <Row>
       <div class="table_action" @click="$router.push({name:'role_manage_newOrEdit'})">
         <Button  type="primary">添加</Button>
       </div>
     </Row>
     <Row>
       <Table width="100%" :columns="tableColumn" :data="tableData"></Table>
     </Row>
   </div>
</template>

<script>
export default {
  name: 'vueTpl.vue',
  data() {
    return {
      formCustom:{},
      filterFormModel:{},
      tableData:[{
        "product_mame":"阿道夫",
        "usage":"加分",
        "update_time":"2019年2月22日18:11:22",
      }],
      tableColumn:[
        {
          title:"角色名称",
          key:"product_mame"
        },
        {
          title:"英文名称",
          key:"usage"
        },
        {
          title:"归属机构",
          key:"update_time"
        },
        {
          title:"数据范围",
          key:"update_time"
        },

        {
          title:"操作",
          key:"action",
          render: (h, params) => {
            var that = this;
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  margin: '5px',
                },
                on: {
                  click: () => {

                  }
                },
              },"分配"),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  margin: '5px',
                },
                on: {
                  click: () => {
                    that.$router.push({
                      name:'role_manage_newOrEdit',
                      params:{
                        id:params
                      }
                    })
                  }
                },
              },"修改"),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                style: {
                  margin: '5px',
                },
                on: {
                  click: () => {
                    that.$Modal.confirm({
                      title:'提示',
                      content:'确定要删除这条数据吗?',
                      onOk:null,
                      onCancel:that.$Modal.remove(),
                    })
                  },
                },
              },"删除"),
            ]);
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
  form>div{
    display:inline-block;
    float:left;
  }
  .table_action{
    margin:10px 0;display:inline-block;margin-right:20px;
  }
</style>
