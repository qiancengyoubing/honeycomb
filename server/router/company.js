const express = require('express');
const db  = require('../utils/mysql_lib');
const router = express.Router();
// 查询公司列表
router.get('/list',function(req, res){
   console.log('req = ',req)

   db.query('select * from company', [], (result) => {
      console.log('result = ', result)
     res.send(JSON.stringify(result));
   })

});
// 添加公司列表
router.post('/add',function(req, res){
   res.send("添加公司列表")
});
// 删除公司列表
router.delete('/del/:id',function(req, res){
   res.send("删除公司列表")
});
// 获取公司详情列表
router.get('/:id',function(req, res){
   console.log(req.query.params)
   res.send(" 获取公司详情列表\n")
});

module.exports = router;
