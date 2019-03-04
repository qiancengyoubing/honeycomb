var fs = require('fs')
var path = require('path')
var tempArgv = process.argv.splice(2)
var name = tempArgv[0]
var name_zh = tempArgv[1]
var isHideInMenu = tempArgv[2] || false;
console.log('isHideInMenu = ',isHideInMenu);

var is_first_level = name.indexOf('/') === -1
var routerPath = path.join(__dirname.split('\zjTool')[0], './src/router/routers.js')

console.log('name = ', name)
var fileHandle = {
  mkDir: function (dirName, callback) {
    fs.exists(dirName, function (exists) {
      if (exists) {
        console.log(dirName + '文件已经存在了。')
        callback && callback()
      }
      if (!exists) {
        fs.mkdir(dirName, function (err) {
          if (err) {
            console.log('创建文件夹失败：---》', err)
          } else {
            callback && callback()
            console.log('创建文件夹成功')
          }
        })
      }
    })
  },
  mkFile: function (fileName, callback) {
    var fileContent = name_zh
    fs.exists(fileName, function (exists) {
      if (exists) {
        console.log(fileName + '文件已经存在了!')
        callback && callback()
      }
      if (!exists) {
        console.log(path.join(__dirname, 'vueTpl.vue'))
        fs.readFile(path.join(__dirname, 'vueTpl.vue'), 'utf8', function (err, data) {
          if (err) {
            console.log('读取文件失败')
          } else {
            data = data.replace('</div>', name_zh + '\n\t\t</div>')
            // data = data.replace(" name: \"vueTpl.vue\"","name:\""+fileName+'\"');
            fs.writeFile(fileName, data, function (err) {
              if (err) {
                console.log('创建文件' + fileName + '失败---》', err)
              } else {
                callback && callback()
              }
            })
          }
        })
      }
    })
  },
  addRouter: function (dirName, fileName) {
    console.log('addRouter= ', dirName)
    fs.readFile(routerPath, 'utf-8', function (err, data) {
      // 一级菜单存在
      if (data.indexOf('// ' + dirName) > -1) {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        fs.readFile(path.join(__dirname, 'router.json'), 'utf-8', function (err, routerTpl) {
          routerTpl = '// ' + dirName + '-' + fileName + '\n' + routerTpl;
          routerTpl = routerTpl.replace(/fileName/g, fileName)
          routerTpl = routerTpl.replace(/dirName/g, dirName)
          routerTpl += '\t// ' + dirName + '-' + fileName + '-end\n' ;
          routerTpl += '\t// ' + dirName + '-childRouter\n';
          data = data.replace('// ' + dirName + '-childRouter', routerTpl + '\t// ' + dirName + '-');
          data = data.replace('isHideInMenu',isHideInMenu);
          fs.writeFile(routerPath, data, function (err) {
            if (err) {
              console.err(err)
            } else {
              console.log('路由添加成功。')
            }
          })
        })
      } else { // 一级菜单不存在
        fs.readFile(path.join(__dirname, 'routerFirst.json'), 'utf-8', function (err, routerTpl) {
          routerTpl = routerTpl.replace('// dirname-filename', '// ' + dirName + '-' + fileName)
          routerTpl = routerTpl.replace(/dirname/g, dirName)
          routerTpl = routerTpl.replace(/filename/g, fileName)
          data = data.replace('// insertPoint', '// ' + name.split('/')[0] + '\n' + routerTpl + '\t// ' + name.split('/')[0] + "-end" + '\n' +'  // insertPoint')
          data = data.replace('isHideInMenu',isHideInMenu);
          fs.writeFile(routerPath, data, function (err) {
            if (err) {
              console.err(err)
            } else {
              console.log('路由添加成功。')
            }
          })
        })
      }
    })
  },
  addLan: function (en,zh,callback) {
    console.log("en",en)
    console.log("zh",zh)
    var path_lan = path.join(__dirname.split('\zjTool')[0], './src/locale/lang/zh-CN.js/');
    fs.readFile(path_lan, 'utf-8', function (err, data) {

      if(data.indexOf(en + ":\'" + zh) > -1){
        callback && callback();
        return;
      }else {
        var dataResult = ",\n\t\'" + en + "\':\'" + zh + '\'\n}';
        dataResult = data.replace('\n}', dataResult);
        fs.writeFile(path_lan, dataResult, function (err) {
          if (err) {
            console.log('写入中英文错误！')
          } else {
            console.log('写入中英文成功');
            callback && callback();
          }
        })
      }
    })

  }
};

if (is_first_level) {
  var dirName = path.join(__dirname.split('\zjTool')[0], './src/view/' + name)
  var fileName = path.join(__dirname.split('\zjTool')[0], './src/view/' + name + '/' + name + '.vue')
  console.log('dirName = ', dirName)
  console.log('fileName = ', fileName)
  fileHandle.mkDir(dirName, function () {
    fileHandle.mkFile(fileName, function () {
       fileHandle.addRouter(name);
      fileHandle.addLan(name,name_zh);
    })
  })
} else {
  var dirName = path.join(__dirname.split('\zjTool')[0], './src/view/' + name.split('\/')[0])
  var fileName = path.join(__dirname.split('\zjTool')[0], './src/view/' + name + '.vue')
  fileHandle.mkDir(dirName, function () {
    fileHandle.mkFile(fileName, function () {
      fileHandle.addRouter(name.split('/')[0], name.split('/')[1]);
      fileHandle.addLan(name.split("/")[0],name_zh.split("/")[0],function(){
        fileHandle.addLan(name.split("/")[1],name_zh.split("/")[1]);
      });
    })
  })
}
