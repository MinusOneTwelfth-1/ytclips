// player.js 1.0
var objPlayerReadyEvent
      var userClick=true;
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        console.log('onYouTubeIfrmeAPIReady')
        player = new YT.Player('player', {
          height: '250rem',
          width: '350rem',
          videoId: 'fO_-esmcsv4',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        console.log('onYouTubeIfrmeAPIReady')

      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        console.log('playerReady: '+ event.target )
        
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      
      function onPlayerStateChange(event) {
        console.log('stateChange: ' + event.data)
        if (event.data == YT.PlayerState.PLAYING ) {
         // setTimeout(stopVideo, 6000);
          if(userClick){startLoop(); userClick=false}
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
     // player.loadVideoById(txtVidID.value)
      function loadID(){
        stopLoop()
        console.log('loadID'); player.loadVideoById(txtVidID.value);
        stopLoop();
      }

  function startLoop(){
    clearInterval(myTimer)
    player.seekTo(txtStart.value)
    
    myTimer=setInterval(function(){console.log("seek");
player.seekTo(txtStart.value); },1000.*lblLength.textContent);
console.log('myTimer: '+myTimer)
  lblLength.style.border='solid black 4px'
       }

function stopLoop(){console.log('myTimer: ' + myTimer); clearInterval(myTimer)
lblLength.style.border='none'
}

function goPlay(vid,startT,stopT,nn){
  if(startT){txtStart.value=startT}
  if(stopT){txtStop.value=stopT}
  lblLength.textContent=( 1.0*txtStop.value-1.0*txtStart.value).toFixed(2)
  userClick=true;
  player.loadVideoById(vid)

  if(nn){currentItem=nn; spnCurrent.textContent=nn}
  spnClip.textContent='1'
     divLyrics.textContent = thing[currentItem][0][3]
  }
