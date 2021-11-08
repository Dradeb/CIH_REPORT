LoadScripts();

      function LoadScripts(async) {
        if (async === undefined) {
          async = false;
        }
        var scripts = [];
        var _scripts = ['https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js', './script.js'];

        if (async) {
          LoadScriptsAsync(_scripts, scripts)
        } else {
          LoadScriptsSync(_scripts, scripts)
        }
      }

      // what you are looking for :
      function LoadScriptsSync(_scripts, scripts) {

        var x = 0;
        var loopArray = function (_scripts, scripts) {
          // call itself
          loadScript(_scripts[x], scripts[x], function () {
            // set x to next item
            x++;
            // any more items in array?
            if (x < _scripts.length) {
              loopArray(_scripts, scripts);
            }
          });
        }
        loopArray(_scripts, scripts);
      }

      // async load as in your code
      function LoadScriptsAsync(_scripts, scripts) {
        for (var i = 0; i < _scripts.length; i++) {
          loadScript(_scripts[i], scripts[i], function () { });
        }
      }

      // load script function with callback to handle synchronicity 
      function loadScript(src, script, callback) {

        script = document.createElement('script');
        script.onerror = function () {
          // handling error when loading script
          alert('Error to handle')
        }
        script.onload = function () {
          console.log(src + ' loaded ')
          callback();
        }
        script.src = src;
        document.getElementsByTagName('head')[0].appendChild(script);
      }

