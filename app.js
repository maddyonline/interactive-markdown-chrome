
require.config({
  baseUrl: chrome.extension.getURL('/lib/')
});


var scripts = [
                'jquery',
                'codeblock/vendor/ace/ace',
                'codeblock/vendor/ace/theme-dawn',
                'codeblock/vendor/ace/mode-javascript',
                'codeblock/vendor/jquery-textrange',
                'codeblock/js/linked-editor'
              ];



require(scripts, function($) {
  setup_view();
  //var codeStringDict = getCode(codeBlockList, checkboxList); //#TEMP: codeBlockList is from the global scope.
  //theRunButtonElement.addEventListener('click', function(){  injectCode(theRunButtonElement, codeStringDict);  });
  // console.log(codeStringDict);


  $('pre').on('click', function (e) {
    currRunCodeType = $(this).parent()[0].className.split(' ')[1].split('-')[1];; //#QUICK-HACK
    currRunCodeText = $(this).text().replace(/&nbsp;/g, ' '); //#QUICK-HACK
    currRunCodeParent = $(this).parent()[0]; //#QUICK-HACK

    //$($(this).parent()[0]).append($("<style>pre {height:150px;}</style>"))
    var height = $(this).height();
    $(this).css('height', (height + 50) + 'px');
    $(this).codeblock();
    $(this).unbind();
  });
  
  $('.codeblock-console-run').on('click', function (e) {
    currRunCodeType = $(this).parent()[0].className.split(' ')[1].split('-')[1];; //#QUICK-HACK
    currRunCodeText = $(this).text().replace(/&nbsp;/g, ' '); //#QUICK-HACK
    currRunCodeParent = $(this).parent()[0]; //#QUICK-HACK
  });

  // $(".codeblock-console-run").click(function() {
  //   //CANNOT ACCESS VALUES FROM editor.getValue() outside here...
  //   console.debug("@@@", $(this).parent().parent().children(".codeblock-editor-wrapper").children(".codeblock-editor .ace_editor .ace_nobold .ace-dawn").codeblock(), "###");//.editor.getValue()
  // });

   // var request = $.ajax({ type: 'GET', url: encodeURI('https://api.uwaterloo.ca/v2/weather/current.json'), async : false });
   // console.log(request.responseText)
   // eval("alert(10)");

});