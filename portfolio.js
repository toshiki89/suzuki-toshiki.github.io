// 背景がでてくる

$('.top-page').hide().fadeIn(2000);
// ページTOPに戻る
$('#q9-btn').on('click',function(){
    $('body,html').animate({scrollTop:0},500);
});
// 写真のところにきたら消えて、スクロールすると出てくる
// $('fall.jpg').hide().fadeIn(4000);
// $(window).on('scroll',function(){
//         let q11 = $('#q11').offset().top;
    
//         // 画面の高さ
//         let wh = $(window).height();
    
//         if( q11 <= $(window).scrollTop()+ wh){
//             $('.q11-target').removeClass('hide');
//         } else {
//             $('.q11-target').addClass('hide');
//         }
//     })

// $(document).ready(function () {
//   $('top-page').css("background-position","100px 100px");
// });
// $(document).ready(function () {
//   //アニメーションスピード
//   var scrollSpeed = 1;
//   //画像サイズ
//   var imgWidth = 500;
//   //画像の初期位置
//   var posX = 0;
// });
//skillsが出てくる

// 画像が回る htmlへ


// htmlたちが出てくる

$('#q7-btn').on('mouseover',function(){
    $(this)
    .siblings()
    .slideToggle();
    console.log("test");
})

// html触れると出るやつ　出てこいや！！
$('#q8-text').on('mouseover',function(){
  console.log("test");
  $('.q8-target').fadeIn(100);
  
});

$('#q8-text').on('mouseleave',function(){
  $('.q8-target').fadeOut(100);
})

// CSS出てくるうんこ！！
$('#q9-text').on('mouseover',function(){
  console.log("test");
  $('.q9-target').fadeIn(100);
  
});

$('#q9-text').on('mouseleave',function(){
  $('.q9-target').fadeOut(100);
});

// js うんち！！！！！
$('#q10-text').on('mouseover',function(){
  console.log("test");
  $('.q10-target').fadeIn(100);
  
});

$('#q10-text').on('mouseleave',function(){
  $('.q10-target').fadeOut(100);
});

// wp こら！！！
$('#q11-text').on('mouseover',function(){
  console.log("test");
  $('.q11-target').fadeIn(100);
  
});

$('#q11-text').on('mouseleave',function(){
  $('.q11-target').fadeOut(100);
});

