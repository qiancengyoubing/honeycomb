<template>
  <div class="card">
    <div class="card-title">
        <span>{{cardInfo.title}}</span>
    </div>
    <div class="card-item" v-for="card in cardInfo.cardList">
      <div class="card-item-div">
        <img class="card-item-img" :src="card.src">
        <h1 class="card-item-name"><strong>{{card.name}}</strong>{{card.name_id}}</h1>
        <h1 class="card-item-type">{{card.type}}</h1>
        <count-to :end="card.num"  class="card-item-num">{{card.num}}</count-to>
        <h3 class="card-item-unit">{{card.unit}}</h3>
      </div>

    </div>
  </div>
</template>

<script>
  import CountTo from '_c/count-to'
  export default {
    name: 'Card',
    components:{
      CountTo
    },
    data () {
      return {
        cardInfo:{
          title:'月度销售额（平方米）',
          cardList: [
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '科技木',
              name_id: '2345',
              type: '石纹系列',
              num: '153.86',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '纳什橡木',
              name_id: '2345',
              type: '石纹系列',
              num: '66',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '半山纹木',
              name_id: '2345',
              type: '石纹系列',
              num: '1586',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '科技木',
              name_id: '2345',
              type: '石纹系列',
              num: '153.86',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '纳什橡木',
              name_id: '2345',
              type: '石纹系列',
              num: '66',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '半山纹木',
              name_id: '2345',
              type: '石纹系列',
              num: '1586',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '科技木',
              name_id: '2345',
              type: '石纹系列',
              num: '153.86',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '纳什橡木',
              name_id: '2345',
              type: '石纹系列',
              num: '66',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '半山纹木',
              name_id: '2345',
              type: '石纹系列',
              num: '1586',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '科技木',
              name_id: '2345',
              type: '石纹系列',
              num: '153.86',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '纳什橡木',
              name_id: '2345',
              type: '石纹系列',
              num: '66',
              unit: '平方米',
            },
            {
              src: 'http://mg-e-lansen.com/file/view/5c0a4d8d6be2670752f86fb6',
              name: '半山纹木',
              name_id: '2345',
              type: '石纹系列',
              num: '1586',
              unit: '平方米',
            },
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .card{
    font-size:88px;
    height: 100%;
    padding: 0 5px;
    position: relative;
    overflow: hidden;
  }
  .card-title{
    line-height:20px;
    margin: 20px 0;
    padding-left:20px;
    font-size:.16rem;
    border-left:3px solid #333;
    color:#666;

  }
  .card-title span{
    padding-left:.16rem;
  }
  .card-item-div{
    width:120px;
    height:176px;
    position: relative;
    background-color: #fff;
    padding: .8rem;
    border-radius: .06rem;
    box-shadow: 0px 0px 6px 1px #f6e4cd;
    text-align: center;

  }
  .card-item-div>h1,.card-item-div>h2,.card-item-div>h3{
    font-size:.16rem;
  }
  .card-item {
     width:140px;
    display:inline-block;
    margin-top:30px;
    float:left;
    height:100%;
  }

  .card-item-img {
    width: 80px;
    height: 80px;
    padding: 8px;
    position: absolute;
    top: -30px;
    left: calc(50% - 38px);
    border-radius: 30px;
  }

  .card-item-name {
    font-size: .16rem;
    margin-bottom: .1rem;
    text-align: center;
    color: #ea5158;
    margin-top:50px;
    padding:5px;
  }

  .card-item-type {
    color: #D8B381;
    padding-top:5px;
  }

  .card-item-num {
    color: #333;
    font-size:20px!important;
  }

  .card-item-unit {
    color: #333;
  }
</style>
