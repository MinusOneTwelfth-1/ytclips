/**
 * @OnlyCurrentDoc
*/
var sht=SpreadsheetApp.openById('17eGDFn6aLuCMF_B_ffEad6to7YwNXrR9VOA7gU2S7Q4')
var thing;
buildThing()
function doGet(e)
 {
  if(e.parameter.resp){
    return HtmlService.createHtmlOutputFromFile("responsiveSample")
  }

  if(e.parameter.basic){return HtmlService.createHtmlOutputFromFile("basicResp")
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')}
  
   // Logger.log(e.parameter)
  
   // Logger.log(e.parameter.mode)
   
    return  HtmlService.createTemplateFromFile("mobile.html").evaluate()
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle('YTClip')
    }
    
 



function t2(){Logger.log('aaa')}

function buildThing(){
  
nn=sht.getRange('NumClipTable2').getValue()
Logger.log(nn)
aa=sht.getRange('ClipTable2').offset(0,0,nn,5).getValues()
Logger.log(aa)
thing={}
for(i=0; i<nn; i++){
 if ( ! thing[aa[i][0]] )
   { thing[aa[i][0]]=[]}
   thing[aa[i][0]].push( [aa[i][1],aa[i][2],aa[i][3]], aa[i][4] )

}
Logger.log(thing)
Logger.log(thing['2'])
Logger.log(JSON.stringify(thing))

}
