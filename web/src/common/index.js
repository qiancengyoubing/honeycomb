//日期对象Format
Date.prototype.format = function(format)
{
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  }
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o)if(new RegExp("("+ k +")").test(format))
    format = format.replace(RegExp.$1,
      RegExp.$1.length==1 ? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
  return format;
}

export default {
  lsAjax : function(url,conf){
    $.ajax({
      url:url,
      type:conf.type||"GET",
      data:conf.data,
      success:function(res){
        console.log(323)
        if(conf.success){
          conf.success(res);
        }
      },
      error:function(res){
        console.log('res = ',res)
      }
    })
  },
  back: function(){
    this.$route()
  },
  delRow : function(me,url,){
    var that = this;
    me.$Modal.confirm({
      title:'提示',
      content:'确定要删除这条数据吗?',
      onOk:function(){
         return;
         that.lsAJax(url,{
           success:function(){

           }
         })
      }
    })
  }
}
