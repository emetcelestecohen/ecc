alert('Hello')
var video = document.getElementById("cloudsBackground")
video.pause()
alert("Paused")

window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}



function scrollClouds() {
  var scrolltop = window.pageYOffset
  video.currentTime = scrolltop * 0.005

}

window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollClouds)
}, false)
