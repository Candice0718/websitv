var carouselData = index.carousel;
var carouselStr = '';
var style='cursor: pointer;';
//幻灯片读取数据，生成li
for(var i = 0; i < carouselData.length; i++) {
  carouselStr += '<li class="carousel-Coverflow" onclick="jumpUrl(\''+carouselData[i].href+'\')" id="'+i+'"><img class="carousel-Coverflow-img" src="'+carouselData[i].imgUrl+'"/></li>'
}
$('.flip-items').append(carouselStr)

// 频道栏目数据
var channelData = index.channel;
var channelTitleStyle = !!channelData.titleHref ? style : '';
var channelTitleImg = '<img style="'+ channelTitleStyle +'" onclick="jumpUrl(\''+channelData.titleHref+'\')" src="'+channelData.titleUrl+'"/>';
$('.channel-title').html(channelTitleImg);
var channelStr = '';
if(!!channelData.list) {
  for (var c = 0; c < channelData.list.length; c++) {
    var channelItemStyle = !!channelData.list[c].href ? style : '';
    channelStr += '<div class="channel-item" style="'+ channelItemStyle +'" onclick="jumpUrl(\''+ channelData.list[c].href +'\')">'
    channelStr += '<div class="channel-item-img"><img src="'+channelData.list[c].imgUrl+'"/></div>'
    channelStr += '<div class="channel-item-label">' + channelData.list[c].label + '</div>'
    channelStr += '</div>'
  }
  $('.channel-list').html(channelStr)
}


// 栏目介绍的数据
var programaData = index.programa;
var programaTitleStyle = !!programaData.titleHref ? style : '';
var programaTitleImg = '<img style="'+ programaTitleStyle +'" onclick="jumpUrl(\''+programaData.titleHref+'\')" src="'+programaData.titleUrl+'"/>';
$('.programa-title').html(programaTitleImg);
var programaStr = '';
if(!!programaData.list) {
  for(var p = 0; p < programaData.list.length; p++) {
    var programaItemStyle = !!programaData.list[p].href ? style : '';
    programaStr += '<div class="programa-item" style="'+ programaItemStyle +'" onclick="jumpUrl(\''+programaData.list[p].href+'\')">';
    programaStr += '<div class="programa-item-left"><img src="'+programaData.list[p].leftImg+'"/></div>';
    programaStr += '<div class="programa-item-right"><div class="programa-item-right-title">'+programaData.list[p].right.title+'</div><div class="programa-item-right-description">'+programaData.list[p].right.description+'</div></div>';
    programaStr += '</div>';
  }
  // <img src="'+programaData.list[p].rightImg+'"/>
  $('.programa-list').html(programaStr);
}

// 插入联系我们的数据
var contactData = index.contact;
var contactTitleImg = '<img src="'+contactData.titleUrl+'"/>'
$('.index-contact-title').html(contactTitleImg)
$('.index-contact-address > .contact-value').text(contactData.address)
var contactTel = '<a href="tel:'+contactData.tel+'">'+contactData.tel+'</a>'
$('.index-contact-tel > .contact-value').html(contactTel)
var contactWeb = '<a href="'+contactData.web+'" target="_blank">'+contactData.web+'</a>';
$('.index-contact-web > .contact-value').html(contactWeb)

// 跳转其他页面
function jumpUrl(href) {
  if (!!href) {
    // window.location = href; // 当前页跳转
    window.open(href); // 新的页面跳转
  }
}
