$(document).ready(function() {
  var carouselCustomeTemplateProps = {
    width : 900,
    height : 500,
    slideLayout : 'fill',     /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
    animation : 'slide3D', 	/* slide | scroll | fade | zoomInSlide | zoomInScroll */
    animationCurve : 'ease',
    animationDuration : 1900,
    animationInterval : 2000,
    slideClass : 'jR3DCarouselCustomSlide',
    autoplay : true,
    controls : true,			/* control buttons */
    navigation : ''			/* circles | squares | '' */,
    perspective : 1400,
    rotationDirection : 'rtl',
    onSlideShow: slideShownCallback
  }
  function slideShownCallback($slide) {
    console.log("Slide shown: ", $slide.find('img').attr('src'))
  }
  jR3DCarouselCustomeTemplate =
    $('.jR3DCarouselGalleryCustomeTemplate').jR3DCarousel(carouselCustomeTemplateProps);
})
var state = 0;
var i = Number(Math.floor(Math.random() * 4));
function changeimage() {
  if(state == 0) {
    document.getElementById('image').src = "../images/pause.png"    // state가 0일 때 재생, 재생 시 일시정지 이미지 보여줌
    document.getElementById('eq').src = "../images/equi.gif"
  }
  else {
    document.getElementById('image').src = "../images/play.png"
    document.getElementById('eq').src = "../images/equi_stop.jpg"
  }
}
function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");    // 오디오 태그 불러오기
    if (myAudio.paused) {    // play
      myAudio.play();
      state = 0;
    }
    else {    // pause
      myAudio.pause();
      state = 1;
    }
  }
  function back() {
    if(i > 0) {
      i--;
      document.getElementById("music").innerHTML = "<br>" + music_name_list[i];
    }
    else {
      i = 3;
      document.getElementById("music").innerHTML = "<br>" + music_name_list[i];
    }
  }

  function next() {
    if(i < 3) {
      i++;
      document.getElementById("music").innerHTML = "<br>" + music_name_list[i];
    }
    else {
      i = 0;
      document.getElementById("music").innerHTML = "<br>" + music_name_list[i];
    }
  }
  window.onload = function() {
    var music_list = new Array("../audio/몸매.mp3", "../audio/￦ & ONLY.mp3", "../audio/시차.mp3", "../audio/RESPECT.mp3")
    var m_l = document.getElementById("myAudio");
    m_l.src = music_list[i];    // 음악 경로를 미리 초기화 시켜놓은 배열 값으로 넣어줌
    document.getElementById("image").onclick = function() {    // play 버튼 클릭 시
      aud_play_pause();
      changeimage();
      document.getElementById("back").onclick = function() {    // 이전 곡 클릭 시
        back();
        m_l.src = music_list[i];
        myAudio.play();
        state = 0;
        changeimage()
      }
      document.getElementById("next").onclick = function() {
        next();
        m_l.src = music_list[i];
        myAudio.play();
        state = 0;
        changeimage()
    }
      document.getElementById("myAudio").onended = function() {
        next();
        m_l.src = music_list[i];
        myAudio.play();
        state = 0;
        changeimage()
      }
  }
  music_name_list = new Array("몸매(MOMMAE) (feat.Ugly Duck) - 박재범", "￦ & ONLY - 사이먼 도미닉", "시차(We Are) (feat.로꼬 & GRAY) - 우원재", "RESPECT (feat.GRAY & DJ Pumkin) - 로꼬")
  document.getElementById("music").innerHTML = "<br>" + music_name_list[i];

  document.getElementById("facebook").onclick = function() {
    window.open("https://www.facebook.com/AOMGOFFICIAL/");
    myAudio.pause();
    state = 1;
    changeimage()
  }
  document.getElementById("instagram").onclick = function() {
    window.open("https://www.instagram.com/aomgofficial/");
    myAudio.pause();
    state = 1;
    changeimage()
  }
  document.getElementById("youtube").onclick = function() {
    window.open("https://www.youtube.com/user/AOMGOFFICIAL");
    myAudio.pause();
    state = 1;
    changeimage()
  }
}
