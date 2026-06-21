
var objPlayerReadyEvent
console.log('player.js 1.0')
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
  spnLen.textContent=( 1.0*txtStop.value-1.0*txtStart.value).toFixed(2)
  userClick=true;
  player.loadVideoById(vid)

  if(nn){currentItem=nn; spnCurrent.textContent=nn}
  // spnClip.textContent='1'
     divLyrics.textContent = thing[currentItem][0][3]
  }

const thing= 
    {
  "1": [
    [
      1,
      4.59,
      39.23,
      ""
    ],
    [
      2,
      38.39,
      73.35,
      ""
    ],
    [
      3,
      73.18,
      108.59,
      ""
    ]
  ],
  "2": [
    [
      1,
      32.91,
      49.09,
      ""
    ],
    [
      2,
      64.98,
      89.47,
      ""
    ],
    [
      3,
      89.68,
      102.55,
      "Humko ab tak aashiqui ka woh zamana yaad hai"
    ],
    [
      4,
      102.56,
      114.67,
      "chupke chupke..."
    ]
  ],
  "3": [
    [
      1,
      9.33,
      44.79,
      ""
    ],
    [
      2,
      44.88,
      65.03,
      ""
    ],
    [
      3,
      68.8,
      84.4,
      ""
    ]
  ],
  "4": [
    [
      1,
      10.83,
      51.98,
      ""
    ],
    [
      2,
      53.41,
      68.79,
      ""
    ],
    [
      3,
      79.81,
      94.81,
      ""
    ]
  ],
  "5": [
    [
      1,
      24.77,
      48.25,
      ""
    ],
    [
      2,
      48.45,
      76.38,
      ""
    ],
    [
      3,
      86.12,
      119.38,
      ""
    ]
  ],
  "6": [
    [
      1,
      0,
      25.63,
      ""
    ],
    [
      2,
      25.39,
      68.23,
      ""
    ],
    [
      3,
      68.91,
      90.81,
      ""
    ]
  ],
  "7": [
    [
      1,
      39.49,
      67.45,
      ""
    ],
    [
      2,
      68.87,
      82.41,
      ""
    ],
    [
      3,
      86.08,
      118.87,
      ""
    ]
  ],
  "8": [
    [
      1,
      35.53,
      62.51,
      ""
    ],
    [
      2,
      61.78,
      75.78,
      ""
    ],
    [
      3,
      119.95,
      170.34,
      ""
    ]
  ],
  "9": [
    [
      1,
      9.54,
      32.97,
      ""
    ],
    [
      2,
      37.36,
      60.62,
      ""
    ]
  ],
  "10": [
    [
      1,
      13.39,
      39.86,
      ""
    ],
    [
      2,
      38.65,
      65.29,
      ""
    ],
    [
      3,
      77.99,
      104.75,
      ""
    ]
  ],
  "11": [
    [
      1,
      7.44,
      68.17,
      ""
    ],
    [
      2,
      68.49,
      130.62,
      ""
    ]
  ],
  "12": [
    [
      1,
      5.29,
      38.6,
      ""
    ],
    [
      2,
      38.17,
      74.69,
      ""
    ],
    [
      3,
      74.79,
      108.72,
      ""
    ]
  ],
  "13": [
    [
      1,
      7.25,
      74.95,
      ""
    ],
    [
      2,
      74.42,
      98.62,
      ""
    ]
  ],
  "14": [
    [
      1,
      18.18,
      28.34,
      ""
    ],
    [
      2,
      53.09,
      75.97,
      ""
    ],
    [
      3,
      86.83,
      106.17,
      ""
    ]
  ],
  "15": [
    [
      1,
      7.97,
      28.67,
      ""
    ],
    [
      1,
      28.57,
      41.83,
      ""
    ],
    [
      2,
      48.18,
      74.48,
      ""
    ]
  ],
  "16": [
    [
      1,
      5.21,
      43.71,
      "Purano sei diner katha bhulbi kire haay.\r\nO sei   chhokher dekha, praaner katha, se ki bhola jaay."
    ],
    [
      2,
      60.94,
      99.55,
      "Aay   aar-ektibar aay re sakha, praaner maajhe aay. Mora   sukher dukher katha kabo, praan jurabe taay."
    ]
  ],
  "17": [
    [
      1,
      0.01,
      17.25,
      ""
    ],
    [
      2,
      23.63,
      43.01,
      ""
    ],
    [
      3,
      42.82,
      67.1,
      ""
    ]
  ],
  "18": [
    [
      1,
      25,
      69.68,
      "Samhalera rakha, sangalera rakha / Pheri phulne ho ki hoina jowanako phoola / Yasalai rakha, sanchi sanchi rakha / Chahe jharos biranima, nisani bhai phoola / Samhalera raakha."
    ],
    [
      2,
      78.76,
      107.68,
      "Taaraa tipne maya chhaina / juna jharne priti chhaina / Chhoto jiwan dherai baata / garne yaha fursad chhaina"
    ],
    [
      3,
      107.21,
      131.37,
      "Yasalai samjha, manmai guni rakha / Ghari ghari hune hoina / yasto mitho bhula / Samhalera raakha."
    ]
  ],
  "19": [
    [
      1,
      11.42,
      28.08,
      ""
    ],
    [
      2,
      28.53,
      36.33,
      ""
    ]
  ],
  "20": [
    [
      1,
      9.91,
      54.54,
      ""
    ],
    [
      2,
      54.7,
      98.13,
      ""
    ],
    [
      3,
      97.78,
      140.95,
      ""
    ]
  ],
  "21": [
    [
      1,
      12.26,
      37.57,
      "And now, the end is near / And so I face the final curtain / My friend, I'll say it clear / I'll state my case, of which I'm certain"
    ],
    [
      2,
      36.48,
      62.02,
      "I've lived a life that's full / I traveled each and every highway / And more, much more than this / I did it my way"
    ],
    [
      3,
      62.01,
      86.36,
      "Regrets, I've had a few / But then again, too few to mention / I did what I had to do / And saw it through without exemption"
    ]
  ],
  "22": [
    [
      1,
      13.2,
      40.62,
      "Panis angelicus / Fit panis hominum / Dat panis coelicus / Figuris terminum"
    ],
    [
      2,
      40.27,
      83.47,
      "O res mirabilis / Manducat Dominum / Pauper, pauper / Servus et humilis"
    ]
  ],
  "23": [
    [
      1,
      77.07,
      100.65,
      "Chautarima basera runa paau / Man ko pir aansule dhuna paau"
    ],
    [
      2,
      100.72,
      124.64,
      "Gaunthali ko ke ghar ke gau / Dukhiya ko ke thar ke nau"
    ],
    [
      3,
      140.73,
      156.64,
      "Pipalle paluwa feryo, purano bho bar / Karmale thagepachhi, birano bho ghar"
    ],
    [
      4,
      175.16,
      204.7,
      "Dindasha warawar ho, dindasha warawar / Sangisathi parNyauli ko bhaka sunneKallai khacho chha ra, chautarima"
    ]
  ],
  "24": [
    [
      1,
      7.52,
      26.46,
      ""
    ],
    [
      2,
      26.65,
      67.92,
      ""
    ]
  ]
}  
