var fs = require('fs')
var path = require('path')

var tpl = {
  tplStart: '<template>\n\t<div>\n',
  tplEnd: '\t'.repeat(1) + '</div>\n</template>\n',
  cssStart: '<style scoped>\n',
  cssEnd: '\t'.repeat(1) + 'form>div{\n' +
    '\t'.repeat(2) + 'display:inline-block;\n' +
    '\t'.repeat(2) + 'float:left;\n' +
    '\t'.repeat(1) + '}\n' +
    '\t'.repeat(1) + '.table_action{\n' +
    '\t'.repeat(2) + 'margin:10px 0;display:inline-block;margin-right:20px;\n' +
    '\t'.repeat(1) + '}\n</style>\n',
  jsStart: '<script>\n export default {\n',
  jsEnd: '}\n</script>\n',

  filterTplStar: '\t\t<Row>\n      <Form ref="formRef" :model="formModel" :label-width="80">\n',
  filterTplEnd: '\t\t\t</Form>\n\t\t</Row>\n',

  jsData: 'data() {\n' +
    '\t'.repeat(2) + 'return {\n' +
    '\t'.repeat(3) + 'formCustom:{},\n' +
    '\t'.repeat(3) + 'filterFormModel:{},\n' +
    '\t'.repeat(3) + 'tableData:[{\n' +
    '          "product_mame":"阿道夫",\n' +
    '          "usage":"加分",\n' +
    '          "update_time":"2019年2月22日18:11:22",\n' +
    '        }],\n' +
    '\t'.repeat(3) + 'tableColumn:[\n' +
    //'\t'.repeat(4) +'//tableColumn\n'+
    '//tableColumn\n' +
    '\t'.repeat(3) + ']\n' +
    '\t'.repeat(2) + '}\n' +
    '\t'.repeat(1) + '}\n'

}

var addFn = {
  addVue: function (fileName, config) {
    var filePath = path.join(__dirname.split('\zjTool')[0], './src/view/' + fileName);
    var moduleName = (fileName.split('/')[1]).split('.')[0];
    fs.exists(filePath, function (exist) {
      var formRef = 'filterFormRef';
      var formModel = 'filterFormModel';
      var data = tpl.tplStart;
      //过滤器部分
      data += tpl.filterTplStar.replace('formRef', formRef).replace('formModel', formModel)
      config.filterList.forEach(function (v, index) {
        var tempTpl;
        data += '\t'.repeat(4) + '<FormItem label="' + v.label + '" style="width:15%">\n'
        if (v.type == 'input') {
          tempTpl = '<Input v-model="eModel" placeholder="Enter something..."></Input>'
          data += '\t'.repeat(5) + tempTpl.replace('eModel', formModel + '.' + v.model) + '\n'
        } else if (v.type == 'select') {
          tempTpl = '<Select v-model="eModel">'
          data += '\t'.repeat(5) + tempTpl.replace('eModel', formModel + '.' + v.model) + '\n'
          v.optList.forEach(function (option) {
            data += '\t'.repeat(6) + v.optTpl.replace('eValue', option.value).replace('eName', option.name) + '\n'
          })
          data += '\t'.repeat(5) + '</Select>\n'
        } else if (v.type == 'date') {

        } else if (v.type == 'button') {
          data = data.replace('label=\"' + v.label + '\"', '');   //button不需要label属性
          data += '\t'.repeat(5) + '<Button  type="primary">eLabel</Button>\n'.replace('eLabel', v.label)
        }
        data += '\t'.repeat(4) + '</FormItem>\n'
      });
      data += tpl.filterTplEnd;
      //table組件方法
      if (config.action) {
        data += '\t'.repeat(2) + '<Row>\n';
        config.action.forEach(function (act, itemIndex) {
          data += '\t'.repeat(3) + '<div class="table_action" @click="$router.push({name:\''+ moduleName +'_newOrEdit\'})">\n' +
                  '\t'.repeat(4) + '<Button  type="primary">' + act +'</Button>\n' +
                  '\t'.repeat(3)  + '</div>\n';
        });
        data += '\t'.repeat(2) + '</Row>\n'
      }
      //table组件
      data += '\t'.repeat(2) + '<Row>\n' +
              '\t'.repeat(3) + '<Table width="100%" :columns="tableColumn" :data="tableData"></Table>\n' +
              '\t'.repeat(2) + '</Row>\n'
      //分页组件
      data += '\t'.repeat(2) + '<Row style="margin-top:20px;">\n' +
              '\t'.repeat(3) + '<Page :total="40" show-elevator show-sizer />\n' +
              '\t'.repeat(3) + '</Row>';
      data += tpl.tplEnd;
      //js部分
      data += tpl.jsStart;
      data += '\t'.repeat(1) + tpl.jsData.replace('moduleName', moduleName)
      var tabCon = '';
      config.table.forEach(function (columnItem, itemIndex) {
        tabCon += '\t'.repeat(4) + '{\n'
        tabCon += '\t'.repeat(5) + 'title:\"' + columnItem.label + '",\n';
        if (columnItem.opt) {
          tabCon += '\t'.repeat(5) + 'key:\"' + columnItem.model + '\",\n';
          var reRenderFn = '\t'.repeat(5) + "render: (h, params) => {\n" +
            '\t'.repeat(6) + "var that = this;\n"+
            '\t'.repeat(6) + "return h('div', [\n";
          var actionMenu = {
            "修改": {
              "btnClass":"primary",
              "onClick":'\t'.repeat(9) + "on: {\n" +
                '\t'.repeat(10) + "click: () => {\n" +
                '\t'.repeat(11) + "that.$router.push({\n" +
                '\t'.repeat(12) + "name:\'"+ moduleName +"_newOrEdit\',\n" +
                '\t'.repeat(12) + "params:{\n" +
                '\t'.repeat(13) + 'id:params\n' +
                '\t'.repeat(12) + "}\n" +
                '\t'.repeat(11) + "})\n" +
                '\t'.repeat(10) + "}\n" +
                '\t'.repeat(9) + "},\n"
            },
            "删除":{
              "btnClass":"error",
              "onClick":"on: {\n" +
                '\t'.repeat(10) + "click: () => {\n" +
                '\t'.repeat(11) + "that.$Modal.confirm({\n" +

                '\t'.repeat(12) + "title:\'提示\',\n"+
                '\t'.repeat(12) + "content:\'确定要删除这条数据吗?\',\n"+
                '\t'.repeat(12) + "onOk:null,\n"+
                '\t'.repeat(12) + "onCancel:that.$Modal.remove(),\n"+
                '\t'.repeat(11) + "})\n"+
                '\t'.repeat(10) + "},\n"+
                '\t'.repeat(10) + "},\n"
            }
          };
          columnItem.opt.forEach(function (optBtn) {
            console.log("optBtn = ", optBtn);
            optBtn = actionMenu[optBtn] ? optBtn : '删除';
            reRenderFn += '\t'.repeat(7) + "h('Button', {\n" +
              '\t'.repeat(9) + "props: {\n" +
              '\t'.repeat(10) + "type: \'" + actionMenu[optBtn]['btnClass'] + "\',\n" +
              '\t'.repeat(10) + "size: 'small'\n" +
              '\t'.repeat(9) + "},\n" +
              '\t'.repeat(9) + "style: {\n" +
              '\t'.repeat(10) + "margin: '5px',\n" +
              '\t'.repeat(9) + "},\n" +
              '\t'.repeat(9) + actionMenu[optBtn]['onClick']  +

              '\t'.repeat(7) + "},\"" + optBtn + "\"),\n"
          });
          reRenderFn += '\t'.repeat(6) + "]);\n" +
            '\t'.repeat(5) + "}\n"
          tabCon += reRenderFn;
        } else {
          tabCon += '\t'.repeat(5) + 'key:\"' + columnItem.model + '\"\n';
        }
        if (itemIndex == config.table.length - 1) {
          tabCon += '\t'.repeat(4) + '}';
        } else {
          tabCon += '\t'.repeat(4) + '},\n';
        }

      })

      data = data.replace('//tableColumn', tabCon)
      data += tpl.jsEnd

      data += tpl.cssStart + tpl.cssEnd
      fs.writeFile(filePath, data, function (err) {
        if (err) {
          console.log(err)
        }
      })

    })
  }
};

[
  {
    'fileName': 'company/website.vue',
    'config': {
      filterList: [
        {
          type: 'input',
          label: "网站名称",
          model: 'usage',
        },
        {
          type: 'input',
          label: '一级分类',
          model: 'usage',
        },
        {
          type: 'button',
          label: '查询',
          model: 'usage',
        },

      ],
      table: [
        {
          label: '序号',
          model: 'index',
        },
        {
          label: '名称',
          model: 'name',
        },
        {
          label: 'URL',
          model: 'URL',
        },
        {
          label: 'title',
          model: 'title',
        },
        {
          label: '一级分类',
          model: 'subject',
        },
        {
          label: '二级分类',
          model: 'sub_subject',
        },
        {
          label: '创建时间',
          model: 'create_time',
        },
        {
          label: '修改时间',
          model: 'modify_time',
        },

      ],
    }
  },
].forEach(function (file) {
  addFn.addVue(file.fileName, file.config)
})

//export default addFn
