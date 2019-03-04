var fs = require('fs')
var path = require('path')

var tpl = {
  tplStart: '<template>\n\t<div>\n',
  tplEnd: '\t'.repeat(1) + '</div>\n</template>\n',
  cssStart: '<style scoped>\n',
  cssEnd: '\t'.repeat(1) + '\n</style>\n',
  jsStart: '<script>\n export default {\n',
  jsEnd: '\t}\n</script>\n',

};

var addFn = {
  addDetail: function (fileName, config) {
    var filePath = path.join(__dirname.split('\zjTool')[0], './src/view/' + fileName)
    var moduleName = (fileName.split('/')[1]).split('.')[0]
    fs.exists(filePath, function (exist) {

      var data = tpl.tplStart;
      config.forEach(function (item) {
        if (item.type == 'span') {
          item.child.forEach(function (rowItem) {
            data += '\t'.repeat(2) + '<div class="spanItem">\n' +
              '\t'.repeat(3) + "<label>" + rowItem.label + "</label>\n" +
              '\t'.repeat(3) + "<span>{{" + moduleName + 'Form.' + rowItem.model + "}}</span>\n" +
              '\t'.repeat(2) + "</div>\n";
          });
        } else if (item.type == 'collapse') {
          data += '\t'.repeat(2) + "<Collapse v-model=\"value1\">\n" +
            '\t'.repeat(3) + "<Panel  name=\"1\">\n" +
            '\t'.repeat(4) + item.child.name + "\n" +
            '\t'.repeat(4) + "<div class='common_dil w100' slot=\"content\">\n";
          item.child.opt.forEach(function (rowItem) {
            data += '\t'.repeat(5) + '<div class="panelItem">\n' +
              '\t'.repeat(6) + "<label>" + rowItem.label + "</label>\n" +
              '\t'.repeat(6) + "<span>{{" + rowItem.model + "}}</span>\n" +
              '\t'.repeat(5) + "</div>\n";
          });
          data += '\t'.repeat(4) + "</div>\n";
          data += '\t'.repeat(3) + "</Panel>\n" +
            '\t'.repeat(2) + "</Collapse>\n";
        }else if(item.type == 'form'){
          data += '\t'.repeat(2) + "<Form  :model=\"formCustom\" :label-width=\"80\">\n" ;

            item.child.forEach(function(formItem){
              data += '\t'.repeat(3) + "<FormItem label=\""+ formItem.label +"\">\n" +
                '\t'.repeat(4) +"<Input v-model=\"" + formItem.model + "\" />\n" +
                '\t'.repeat(3) +"</FormItem>\n"

            })
          data += '\t'.repeat(2) + "</Form>\n";
        }
      });
      data += tpl.tplEnd;
      data += tpl.jsStart;
      data += '\t'.repeat(2) + "name:\"" + moduleName + '\",\n' +
        '\t'.repeat(2) + "data () {\n" +
        '\t'.repeat(3) + "return {\n" +
        '\t'.repeat(4) + "\"" + moduleName + "Form\":{\n" +
        '\t'.repeat(4) + "}\n" +
        '\t'.repeat(3) + "}\n" +
        '\t'.repeat(2) + "},\n";
      data += tpl.jsEnd;

      data += tpl.cssStart;
      data += ".spanItem{\n" +
        "}\n" +
        ".panelItem{\n" +
        '\t'.repeat(1) + "display:inline-block;\n" +
        '\t'.repeat(1) + "width:20%;;\n" +
        '\t'.repeat(1) + "line-height:40px;\n" +
        '\t'.repeat(1) + "float:left;\n" +
        "}";
      data += tpl.cssEnd;

      fs.writeFile(filePath, data, function (err) {
        if (err) {
          console.log(err)
        } else {
          console.log('修改页面文件成功')
        }
      })
    })
  }
};

[
  {
    'fileName': 'base_info/product_type_newOrEdit.vue',
      'config': [
        {
          type:'form',
          child:[
            {
              label:'产品类型',
              model:'product_name'
            },
            {
              label:'用途类型',
              model:'usage'
            },
            {
              label:'支持贴面',
              model:'product_veneer',
              option:[{

              }]
            },
            {
              label:'用途类型',
              model:'usage'
            },
          ],
          action:[
            "保存","返回"
          ]
        }
      ]
  }
].forEach(function (file) {
  addFn.addDetail(file.fileName, file.config)
})

//export default addFn
