var fs = require('fs')
var path = require('path')
var tempArgv = process.argv.splice(2)
var name = tempArgv[0]
var name_zh = tempArgv[1]

var is_first_level = name.indexOf('/') === -1
var routerPath = path.join(__dirname.split('\zjTool')[0], './src/router/routers.js')

console.log('name = ', name)
var fileHandle = {
  delDir: function (path) {
    let files = []
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path)
      files.forEach((file, index) => {
        let curPath = path + '/' + file
        if (fs.statSync(curPath).isDirectory()) {
          delDir(curPath) //递归删除文件夹
        } else {
          fs.unlinkSync(curPath) //删除文件
        }
      })
      fs.rmdirSync(path)
    }
  },
  removeDir: function (dirName) {
    this.delDir(dirName)
  },
  removeFile: function (filePath) {
    fs.exists(filePath,function(exists){
       if(exists){
         fs.unlinkSync(filePath);
         console.log("删除文件成功");
       }else{
         console.log("删除文件失败");
       }
    })

  },
  removeRouter: function (dirName, fileName) {
      var filePath = path.join(__dirname.split('\zjTool')[0], './src/router/routers.js');
      if(fileName) {
        fs.readFile(filePath, 'utf-8', function (err, data) {
          var len = data.length;
          var start_index = data.indexOf("// " + dirName + "-" + fileName);
          var end_index = data.indexOf("// " + dirName + "-" + fileName + "-end");
          var tem_len = ("// " + dirName + "-" + fileName + "-end\n").length;
          var dataResulet  = data.substr(0,start_index) + data.substr(end_index+tem_len,len)
          fs.writeFile(filePath, dataResulet, function (err) {
            if (err) {
              console.log('删除子路由错误！')
            } else {
              console.log('删除子路由成功')
            }
          })
        })
      }else{
        fs.readFile(filePath, 'utf-8', function (err, data) {
          var len = data.length;
          var start_index = data.indexOf("// " + dirName);
          var end_index = data.indexOf("// " + dirName + "-end");
          var tem_len = ("// " + dirName  +  "-end\n").length;
          var dataResulet  = data.substr(0,start_index) + data.substr(end_index+tem_len,len)
          fs.writeFile(filePath, dataResulet, function (err) {
            if (err) {
              console.log('删除路由错误！')
            } else {
              console.log('删除路由成功')
            }
          })
        })
      }
  },
  removeLan: function (en, zh) {

  }
}

if (is_first_level) {
  var dirName = path.join(__dirname.split('\zjTool')[0], './src/view/' + name);
  fileHandle.removeDir(dirName);
  fileHandle.removeRouter(name);
} else {
  var fileName = path.join(__dirname.split('\zjTool')[0], './src/view/' + name.split('\/')[0] +  '/' +name.split('\/')[1] + ".vue");
  fileHandle.removeFile(fileName);
  fileHandle.removeRouter(name.split("/")[0],name.split("/")[1]);
}
