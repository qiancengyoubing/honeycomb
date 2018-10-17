var sql = require('zj-sql');
var express = require('express');

sql.query('select * from gitanalysis;','',function(res){
    console.log(res);
});


sql.query();