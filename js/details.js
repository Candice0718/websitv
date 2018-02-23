function getPage() {
  var url = document.location.toString();
  var arrObj = url.split("?");
  if (arrObj.length > 1) {
　　var arrPara = arrObj[1].split("&");
　　　　var arr;
       for (var i = 0; i < arrPara.length; i++) {
         arr = arrPara[i].split("=");
         if (arr != null && arr[0] == 'page') {
           return arr[1];
         }
       }
       return "";
  } else {
    return "";
  }
}
// 获取当前页面
var page = getPage()
var detailsData = details[page];
var showMenu = true;
var style='cursor: pointer;';

var player = videojs('video');

    player.playlist(detailsData);

    // Initialize the playlist-ui plugin with no option (i.e. the defaults).
    player.playlistUi();
    player.playlist.autoadvance(0);



// 监听页面事件
$("#playlist-btn").click(function(){
  if (showMenu) {
    $(".playlist-btn").fadeOut();
    $(".vjs-playlist").fadeOut();
    $(".video-js").animate({width:"990px"});
    showMenu = false;
  }
});
// 监听页面事件
$("#sitv-btn").click(function(){
  if (showMenu) {
    $(".playlist-btn").fadeOut();
    $(".vjs-playlist").fadeOut();
    $(".video-js").animate({width:"990px"});
    showMenu = false;
  } else {
    $(".playlist-btn").fadeIn();
    $(".vjs-playlist").fadeIn();
    $(".video-js").animate({width:"660px"});
    showMenu = true;
  }
});

$('.vjs-playlist-now-playing-text').text('')
var playImg = '<img src="img/playing.png"></img>'
$('.vjs-playlist-now-playing-text').html(playImg)
// 跳转其他页面
function jumpUrl(href) {
  if (!!href) {
    // window.location = href; // 当前页跳转
    window.open(href); // 新的页面跳转
  }
}
