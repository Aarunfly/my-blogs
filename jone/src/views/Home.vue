<template>
  <div class="content">
    <div class="hp-container">
      <div id="section1" ref="section1" class="section section1">
        <div class="myintro">
          <h1 class="fade fadesin1 animated jackInTheBox">Hello,I'm Jon E</h1>
          <h3 class="fade fadesin2 animated pulse">一个放眼于世界的Fe工程师</h3>
          <span id="adMe" class="active fade fadesin3 animated bounceInLeft"
                @click="getPageAbout(0)">关于我</span>
          <span id="myPro" class="fade fadesin3 animated bounceInRight" @click="getPageAbout(2)">我的作品</span>
        </div>
        <ul class="bg-img">
          <li class="show"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>


      </div>
      <div id="section2" class="section section2">
        <!--      导航条-->
        <div id="nav-bar" class="bar">
          <div class="container">
            <a href="#">
              <div class="fl">jon E博客</div>
            </a>
            <ul class=" fr nav-ul">
              <li class="nav active" @click="getPageAbout(0)">关于我</li>
              <li class="nav" @click="getPageAbout(1)">求职意向</li>
              <li class="nav" @click="getPageAbout(2)">作品集</li>
              <li class="nav" @click="getPageAbout(3)">技术掌握</li>
              <li class="nav" @click="getPageAbout(4)">我的经历</li>
              <li class="nav" @click="getPageAbout(5)">联系我</li>
            </ul>
            <div class=" fr more-nav" style="display: none">
              <img src="../assets/images/ellipsis.png" alt="更多">
            </div>
          </div>
          <ul class="nav-ul nav-xs-ul" style="display: none">
            <li class="active">关于我</li>
            <li>求职意向</li>
            <li>作品集</li>
            <li>技术掌握</li>
            <li>我的经历</li>
            <li>联系我</li>
          </ul>
        </div>
        <!--       关于我-->
        <h2 >关于我</h2>
        <hr>
        <div class="center fades fadesin">
          <p class="center">
            <img src="./../assets/images/my_pic.jpg" alt="自拍">
          </p>
          <div class="my-inter">
            <p>我叫jon E ，24岁，坐标北京，是一名FE工程师。前端是一门有容乃大的行业，我是计算机专业出生。
              在自学前端之前，唯一接触过的就是大学里的C语言。庆幸的是JS与C很相像，给我很大的信心来学习。</p>
            <p>很多初学者朋友可能会搜索到我的简历，这是项目源码，如果有帮到你 希望给个star~</p>
            <p>之后会给出项目源码www.jonE.com 项目源码</p>
          </div>
        </div>
      </div>
      <div id="section3" ref="section3" class="section section3">
        <h2>求职意向</h2>
        <hr>
        <Row type="flex" justify="space-around">
          <Col :xs="{ span: 12}" :lg="{ span: 3}">
            <div class="detail">
              <div class="detail_item">
                <p>
                  <Icon type="ios-desktop" size="100"/>
                </p>
                <p class="title">PS切图</p>
                <p>熟悉基础尺寸获取、取色等。</p>
              </div>
            </div>
          </Col>
          <Col :xs="{ span: 12}" :lg="{ span: 3}">
            <div class="detail">
              <div class="detail_item">
                <p>
                  <Icon type="ios-home" size="100"/>
                </p>
                <p class="title">网页制作</p>
                <p>响应式页面，简单不冗余代码。</p>
                <p>css3流畅动画效果，考虑浏览器兼容性。</p>
              </div>
            </div>
          </Col>
          <Col :xs="{ span: 12}" :lg="{ span: 3}">
            <div class="detail">
              <div class="detail_item">
                <p>
                  <Icon type="ios-keypad" size="100"/>
                </p>
                <p class="title">前端功能</p>
                <p>通过AJAX获取RD提供数据并进行数据处理</p>
                <p>提高页面展示性能，并提供良好的交互效果。</p>
              </div>
            </div>
          </Col>
          <Col :xs="{ span: 12}" :lg="{ span: 3}">
            <div class="detail">
              <div class="detail_item">
                <p>
                  <Icon type="md-phone-portrait" size="100"/>
                </p>
                <p class="title">H5页面</p>
                <p>兼容不同设备，提高页面运行效率</p>
              </div>
            </div>

          </Col>
        </Row>
      </div>
      <div id="section4" ref="section4" class="section">
        <h2>作品集</h2>
        <hr>
      </div>
      <div id="section5" ref="section5" class="section">
        <h2>技术掌握</h2>
        <hr>
        <div style="text-align: center">
          <Echarts></Echarts>
        </div>

      </div>
      <div id="section6" ref="section6" class="section section6 ">
        <h2>我的经历</h2>
        <hr>
        <div class="container center">
          <ul class="my-xp ">
            <li>
              <div class="date-box">
                <p>10/2018</p>
                <p>-</p>
                <p>12/2019</p>
              </div>
              <div class="my-work">
                <strong>北京零氪信息技术有限公司</strong>
                <p class="ptitle">研发部/FE工程师</p>
                <p>负责产品页面制作。PSD切图后构建页面框架</p>
                <p>利用JS、CSS3书写前端功能，让页面更充实丰富</p>
                <p>并将代码上传到代码托管平台上</p>
              </div>
            </li>
            <li>
              <div class="date-box">
                <p>06/2018</p>
                <p>-</p>
                <p>09/2018</p>
              </div>
              <div class="my-work ">
                <strong>去哪儿旅行</strong>
                <p class="ptitle">攻略部/前端工程师</p>
                <p>负责官网页面制作</p>
                <p>利用JS、CSS3书写前端功能，让页面更充实丰富</p>
                <p>并将代码上传到代码托管平台上</p>
              </div>
            </li>
            <li>
              <div class="date-box">
                <p>06/2019</p>
                <p>-</p>
                <p>09/2015</p>
              </div>
              <div class="my-school ">
                <strong>北京邮电大学世纪学院</strong>
                <p class="ptitle">大学本科</p>
                <p>获得日语N2证书</p>
                <p>获得C语言计算机二级</p>
                <p></p>
              </div>
            </li>

          </ul>
        </div>
      </div>
      <div id="section7" ref="section7" class="section section7">
        <h2>联系我</h2>
        <hr>
        <div>
          <div class="showMsg center">
            <span class="showAddress">{{showAddress}}</span>
          </div>
          <Row type="flex" justify="space-around">
            <Col :xs="{ span: 12}" :lg="{ span: 6}">
              <div class="center " @mouseenter="enter('Github@Aarunfly')" @mouseleave="leav">
                <img src="./../assets/images/github.png" alt="">
              </div>
            </Col>
            <Col :xs="{ span: 12}" :lg="{ span: 6}">
              <div class="center "  @mouseenter="enter('微博@Anakei')" @mouseleave="leav()">
                <img src="./../assets/images/weibo.png" alt="">
              </div>
            </Col>
            <Col :xs="{ span: 12}" :lg="{ span: 6}">
              <div class="center "  @mouseenter="enter('微信@DYF1996918')" @mouseleave="leav()">
                <img src="./../assets/images/weichar.png" alt="">
              </div>
            </Col>
            <Col :xs="{ span: 12}" :lg="{ span: 6}">
              <div class="center"  @mouseenter="enter('知乎@艺匠')" @mouseleave="leav()">
                <img src="./../assets/images/zhihu.png" alt="">
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Echarts from "../components/Echarts";

  export default {
    data() {
      return {
        top1: 0,
        top2: 0,
        top3: 0,
        top4: 0,
        top5: 0,
        top6: 0,
        top7: 0,
        showAddress:"联系地址"
      }

    },
    components:{
      Echarts,
    },
    mounted() {

      this.getPagePostion();
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
      this.changeBgPic();
    },
    methods: {

      getPagePostion() {
        this.top1 = $('#section1').offset().top ;
        this.top2 = $('#section2').offset().top ;
        this.top3 = $('#section3').offset().top ;
        this.top4 = $('#section4').offset().top;
        this.top5 = $('#section5').offset().top;
        this.top6 = $('#section6').offset().top;
        this.top7 = $('#section7').offset().top;

      },
      //监听滚动条位置
      handleScroll() {
        let s = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        s > this.top2 ? $('#nav-bar').addClass("fixed") : $('#nav-bar').removeClass("fixed");
        // 导航跟随滚动响应
        if ((s > this.top1-70) && (s < this.top2-70)) {
          $('.nav-ul li').eq(0).addClass("active").siblings().removeClass("active");
        } else if ((s > this.top2-70) && (s < this.top3-70)) {
          $('.nav-ul li').eq(0).addClass("active").siblings().removeClass("active");
        } else if ((s > this.top3-70) && (s < this.top4-70)) {
          $('.nav-ul li').eq(1).addClass("active").siblings().removeClass("active");
        } else if ((s > this.top4-70) && (s < this.top5-70)) {

          $('.nav-ul li').eq(2).addClass("active").siblings().removeClass("active");
        } else if ((s > this.top5-70) && (s < this.top6-70)) {
          $('.nav-ul li').eq(3).addClass("active").siblings().removeClass("active");
        } else if ((s > this.top6-70) && (s < this.top7-70)) {
          $('.nav-ul li').eq(4).addClass("active").siblings().removeClass("active");
        } else if ((s > this.top7-70)) {
          $('.nav-ul li').eq(5).addClass("active").siblings().removeClass("active");
        }


      },

      //随机背景图片
      changeBgPic() {
        let length = 3;
        $(".bg-img li:nth-child(1)").show();
        setInterval(function () {
          let randomBgIndex = Math.round(Math.random() * length);
          $("#section1 .bg-img li").eq(randomBgIndex).addClass("show").siblings().removeClass("show");
        }, 5000);
      },


      //导航高亮
      getPageAbout(Nums) {

        $(".nav-ul li").eq(Nums).addClass("active").siblings().removeClass("active");

        let top = $(".section").eq(Nums + 1).offset().top; //获取对应div距顶高度
        if(Nums===0){
          this.moveTo(top);
        }else {
          this.moveTo(top-70);
        }


      },


      //跳转位置
      moveTo(_top) {
        $('html,body').animate({
          scrollTop: _top
        }, 500);
      },
      //鼠标进入
      enter(textDetail) {
        this.showAddress = textDetail;
      },
        //地址-鼠标离开事件
        leav(){
          this.showAddress="联系地址"
        },
      },


      destroyed() {//离开该页面需要移除这个监听的事件
        window.removeEventListener('scroll', this.handleScroll)
      },

    }
</script>

<style lang="less" scoped>
  html, body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    /*margin-top: 20px;*/
    margin-bottom: 10px;
  }

  ul {
    overflow: hidden;
    margin-top: 0;
    padding: 0;
  }
  li{
    display: list-item;
    text-align: -webkit-match-parent;
  }

  p {
    text-align: justify;
    margin-bottom: 0;
    /*padding-right: 1em;*/
  }

  #section1 {
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    h1 {
      font-family: cursive, 'Lato', sans-serif;
      margin: 50px 0 30px;
      font-size: 50px;
      color: inherit;
    }

    h3 {
      margin: 20px 0;
      font-size: 20px;
      color: inherit;
    }

  }

  #section2 {
    height: 80vh;

    #nav-bar {
      width: 100%;
      height: 70px;
      background-color: #2c3e50;
      color: #f5f5f5;
    }

    .fixed {
      position: fixed;
      top: 0;
      z-index: 999;
    }
  }

  #section3 {
    background: rgba(255, 255, 255, 0.1);
    background: url("../assets/images/bgd-1.png") no-repeat center;
    background-attachment: fixed;
  }

  #section5 {
    background: url("../assets/images/bgd-2.png") no-repeat center;

    background-attachment: fixed;
  }

  #section7 {
    background: url("../assets/images/bgd-1.png") no-repeat center;

    background-attachment: fixed;
  }


  .center {
    text-align: center;
  }

  .section {
    min-height: 700px;
    width: 100%;
    height: 100vh;
    padding-bottom: 20px;
    position: relative;
    box-sizing: border-box;
    /*background-color: whitesmoke;*/

    h2 {
      text-align: center;
      font-size: 30px;
      line-height: 30px;
      color: #2c3e50;
      padding: 80px 0 0;
      letter-spacing: 2px;
    }

    hr {
      height: 4px;
      width: 70px;
      text-align: center;
      position: relative;
      background: #E87E04;
      margin: 0 auto 40px;
      border: 0;
      transition: all 0.5s 0.2s;
    }




  }
  .section1{

    .myintro {
      padding: 35vh 0 0;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      text-align: center;
      letter-spacing: 2px;
      background: rgba(256, 256, 256, 0.5);
      transition: all 0.35s;

      .fade {
        transform: translateY(2em);
        opacity: 0;
        transition: opacity .15s linear;
      }

      .fadesin1 {
        transform: translateY(0);
        opacity: 1;
        transition: all 1s 0s;
      }

      .fadesin2 {
        transform: translateY(0);
        opacity: 1;
        transition: all 1s 0.5s;
      }

      .fadesin3 {
        transform: translateY(0);
        opacity: 1;
        transition: all 1s 1s;
      }

      .active {
        background: #2c3e50;
        color: #fff;
      }

      span {
        width: 150px;
        height: 50px;
        line-height: 48px;
        font-size: 16px;
        font-weight: 100;
        border: 1px solid;
        border-radius: 5px;
        cursor: pointer;
        margin: 5px;
        display: inline-block;
        background: white;
      }
    }

    .bg-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;

      .show {
        animation: fadescale 5s forwards;
      }

      @keyframes fadescale {
        0% {
          opacity: 1;
          transform: scale(1);
        }

        50% {
          opacity: 1;
          transform: scale(1.1);
        }

        100% {
          opacity: 0.5;
          transform: scale(1);
        }
      }

      li {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        opacity: 0;

      }

      li:nth-child(1) {
        background: url("../assets/images/intro-bg.jpg") no-repeat center;
        background-size: 100% 100%;
      }

      li:nth-child(2) {
        background: url("../assets/images/bg-2.jpg") no-repeat center;
        background-size: 100% 100%;
      }

      li:nth-child(3) {
        background: url("../assets/images/bg-2.jpg") no-repeat center;
        background-size: 100% 100%;
      }

      li:nth-child(4) {
        background: url("../assets/images/intro-bg.jpg") no-repeat center;
        background-size: 100% 100%;
      }
    }
  }
  .section2{
    .bar {
      .fr {
        float: right;
      }

      .fl {
        float: left;
        line-height: 70px;
        font-weight: bold;
        font-size: 14px;
        color: white;
        font-size: 17px;
      }

      .container {
        position: relative;
        padding: 0 15px;
        margin: 0 auto;
        height: 70px;
        /*display: flex;*/
        /*justify-content: space-between;*/
        /*align-items: center;*/

        a {

        }

        .nav-ul {
          .active {
            color: #E87E04;
          }

          li {
            float: left;
            font-size: 16px;
            line-height: 70px;
            width: 100px;
            list-style: none;
            cursor: pointer;
            text-align: center;
          }
        }

        .more-nav {
          img {
            width: 60px;
            height: 70px;
          }
        }
      }

    }

    img {
      max-width: 200px;
      width: 40%;

    }

    .my-inter {
      max-width: 850px;
      margin: 0 auto;
      padding: 0 2em;
      position: relative;

      p {
        padding: 2em 0 0em;
        text-indent: 2em;
      }
    }
  }
  .section3 {
    .detail {
      text-align: center;

      .detail_item {
        padding: 15px;
        width: 230px;
        margin: 0 auto;
        .title {
          color: #E87E04;
          margin: 2em 0 1em;
          font-size: 16px;
          font-family: "SimHei";
        }

        p {
          text-align: center;

          img {
            width: 80px;
            height: 80px;
          }
        }
      }
    }
  }
  .section4{

  }
  .section5{

  }
  .section6 {
    background-color: whitesmoke;
    .my-xp:before{
      content:"";
      position: absolute;
      top: 200px;
      bottom: 0;
      left: 50%;
      width: 2px;
      height:50% ;
      margin-left: -1.5px;
      background-color: #eee;
    }
    .my-xp{
      overflow: hidden;
      margin-bottom: 0;
      li{
        div{
          height: 120px;
        }
        position: relative;
        overflow: hidden;
        .date-box{
          width: 120px;
          height: 120px;
          position: absolute;
          top: 0;
          left: 50%;
          background:#fff;
          padding-top: 30px;
          border-radius: 50%;
          border: 1px solid #eee;
          margin-left: -60px;
          p{
            text-align: center;
            font-size: 16px;
            font-weight: 600;
            line-height: 20px;
          }
        }
        .my-school,.my-work{
          width: 40%;
          text-align: right;
          strong{
            font-size: 16px;
            font-weight: 600;
          }

          p{
            font-size: 14px;
            text-align: right;
          }
          .ptitle{
            color: darkorange;

          }
        }


      }
      li:not(:first-child){
        margin-top: 60px;
      }
    }


  }
  .section7{
    .showMsg{
      width: 100%;
      margin-bottom: 100px;
      span{
        display: inline-block;
        padding: 10px;
        border-radius: 8px;
        color: white;
        font-size:16px;
        font-weight: bold;
        background:rgba(12,12,12,0.3);
        text-align: center;

      }
    }
    img{
      width: 100px;
      height: 100px;
    }
  }
</style>