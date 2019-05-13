var mysql = require('mysql');

module.exports = {
  query: function (sql, params, callback) {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: "kyeepass",
      port: "3306",
      database: "honeycomb"
    });
    connection.connect(function (err) {
      if (err) {
        console.log('数据库链接失败');
        throw err;
      }
      connection.query(sql, params, function (err, results, fields) {
        connection.end(function (err) {
          if (err) {
            console.log('关闭数据库连接失败！');
            throw err;
          }
        });
        if (err) {
          console.log('数据操作失败');
          throw err;
        }
        callback && callback(results, fields);
      });
    });


  }
}