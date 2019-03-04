<template>
	<div>
		<Row>
      <Form ref="filterFormRef" :model="filterFormModel" :label-width="80">
				<FormItem label="网站名称" style="width:15%">
					<Input v-model="filterFormModel.usage" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem label="一级分类" style="width:15%">
					<Input v-model="filterFormModel.usage" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem  style="width:15%">
					<Button  type="primary">查询</Button>
				</FormItem>
			</Form>
		</Row>
		<Row>
			<Table width="100%" :columns="tableColumn" :data="tableData"></Table>
		</Row>
		<Row style="margin-top:20px;">
			<Page :total="40" show-elevator show-sizer />
			</Row>	</div>
</template>
<script>
 export default {
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
					title:"序号",
					key:"index"
				},
				{
					title:"名称",
					key:"name"
				},
				{
					title:"URL",
					key:"URL"
				},
				{
					title:"title",
					key:"title"
				},
				{
					title:"一级分类",
					key:"subject"
				},
				{
					title:"二级分类",
					key:"sub_subject"
				},
				{
					title:"创建时间",
					key:"create_time"
				},
				{
					title:"修改时间",
					key:"modify_time"
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
