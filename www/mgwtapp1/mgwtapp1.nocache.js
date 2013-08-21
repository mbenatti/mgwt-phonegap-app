function mgwtapp1(){
  var $intern_0 = '', $intern_36 = '" for "gwt:onLoadErrorFn"', $intern_34 = '" for "gwt:onPropertyErrorFn"', $intern_21 = '"><\/script>', $intern_10 = '#', $intern_75 = '.cache.html', $intern_12 = '/', $intern_24 = '//', $intern_58 = '10D42E2C4954EA138155A2D0C868686B', $intern_59 = '23E37119F418550377D9984FF41A173D', $intern_60 = '267F59F3EA80D93935C6811AE63C907F', $intern_61 = '2EC438DE5EF101D9E0B8B17587FAD816', $intern_62 = '36667463EBAD9B89564D3556CD5929BF', $intern_63 = '479550951D8CAB63A7C286E826457B86', $intern_64 = '4929BDB7F07015EB6509034AC0CA24C7', $intern_65 = '495586CE56897DD313CA4FD61180958F', $intern_66 = '5059C5F9EE5D77CB6249ED4127694685', $intern_67 = '7F1BC932469279C7F21E21260C435379', $intern_68 = '98F4407EE3E72A6E853F9F445388C708', $intern_74 = ':', $intern_28 = '::', $intern_77 = '<script defer="defer">mgwtapp1.onInjectionDone(\'mgwtapp1\')<\/script>', $intern_20 = '<script id="', $intern_31 = '=', $intern_11 = '?', $intern_69 = 'A3FA9C651EDD6A06CC226DB567888BEA', $intern_70 = 'A8DC9183E7E8D6EB2B9521BECA4A016D', $intern_33 = 'Bad handler "', $intern_71 = 'D1C28753E2C3B712C7FBF94823853A45', $intern_72 = 'D8E3789B5FBB11B9369A9FE65521A668', $intern_76 = 'DOMContentLoaded', $intern_73 = 'E3CD6188F27226256D29FD6E5A771EE7', $intern_22 = 'SCRIPT', $intern_19 = '__gwt_marker_mgwtapp1', $intern_42 = 'android', $intern_44 = 'android_tablet', $intern_23 = 'base', $intern_15 = 'baseUrl', $intern_4 = 'begin', $intern_50 = 'blackberry', $intern_3 = 'bootstrap', $intern_14 = 'clear.cache.gif', $intern_30 = 'content', $intern_51 = 'desktop', $intern_9 = 'end', $intern_5 = 'gwt.codesvr=', $intern_6 = 'gwt.hosted=', $intern_7 = 'gwt.hybrid', $intern_35 = 'gwt:onLoadErrorFn', $intern_32 = 'gwt:onPropertyErrorFn', $intern_29 = 'gwt:property', $intern_56 = 'hosted.html?mgwtapp1', $intern_37 = 'iframe', $intern_13 = 'img', $intern_45 = 'ipad', $intern_46 = 'ipad_retina', $intern_47 = 'iphone', $intern_48 = 'ipod', $intern_38 = "javascript:''", $intern_55 = 'loadExternalRefs', $intern_25 = 'meta', $intern_41 = 'mgwt.os', $intern_1 = 'mgwtapp1', $intern_17 = 'mgwtapp1.nocache.js', $intern_27 = 'mgwtapp1::', $intern_43 = 'mobile', $intern_52 = 'mobile.user.agent', $intern_53 = 'mobilesafari', $intern_40 = 'moduleRequested', $intern_8 = 'moduleStartup', $intern_26 = 'name', $intern_54 = 'not_mobile', $intern_39 = 'position:absolute;width:0;height:0;border:none', $intern_49 = 'retina', $intern_16 = 'script', $intern_57 = 'selectingPermutation', $intern_2 = 'startup', $intern_18 = 'undefined';
  var $wnd = window, $doc = document, $stats = $wnd.__gwtStatsEvent?function(a){
    return $wnd.__gwtStatsEvent(a);
  }
  :null, $sessionId = $wnd.__gwtStatsSessionId?$wnd.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_4});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd.location.search;
      return (query.indexOf($intern_5) != -1 || (query.indexOf($intern_6) != -1 || $wnd.external && $wnd.external.gwtOnLoad)) && query.indexOf($intern_7) == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc.getElementById($intern_1);
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name){
          return computePropValue(name);
        }
        ;
      }
      mgwtapp1 = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, $intern_1, base, softPermutationId);
      $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_8, millis:(new Date).getTime(), type:$intern_9});
    }
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_10);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_11);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_12, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_0;
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_13);
        img.src = url + $intern_14;
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_15);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_0;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_16);
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_17) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_0;
    }

    function tryMarkerScript(){
      var thisScript;
      if (typeof isBodyLoaded == $intern_18 || !isBodyLoaded()) {
        var markerId = $intern_19;
        var markerScript;
        $doc.write($intern_20 + markerId + $intern_21);
        markerScript = $doc.getElementById(markerId);
        thisScript = markerScript && markerScript.previousSibling;
        while (thisScript && thisScript.tagName != $intern_22) {
          thisScript = thisScript.previousSibling;
        }
        if (markerScript) {
          markerScript.parentNode.removeChild(markerScript);
        }
        if (thisScript && thisScript.src) {
          return getDirectoryOfFile(thisScript.src);
        }
      }
      return $intern_0;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_23);
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return $intern_0;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_24 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_0) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_0) {
      tempBase = tryMarkerScript();
    }
    if (tempBase == $intern_0) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_0 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    base = tempBase;
    return tempBase;
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_25);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_26), content;
      if (name) {
        name = name.replace($intern_27, $intern_0);
        if (name.indexOf($intern_28) >= 0) {
          continue;
        }
        if (name == $intern_29) {
          content = meta.getAttribute($intern_30);
          if (content) {
            var value, eq = content.indexOf($intern_31);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_0;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_32) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_34);
            }
          }
        }
         else if (name == $intern_35) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_36);
            }
          }
        }
      }
    }
  }

  function __gwt_getMetaProperty(name){
    var value = metaProps[name];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc.createElement($intern_37);
      iframe.src = $intern_38;
      iframe.id = $intern_1;
      iframe.style.cssText = $intern_39;
      iframe.tabIndex = -1;
      $doc.body.appendChild(iframe);
      $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_8, millis:(new Date).getTime(), type:$intern_40});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers[$intern_41] = function(){
    {
      var mgwt_os = function(){
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.indexOf($intern_42) != -1) {
          if (ua.indexOf($intern_43) != -1) {
            return $intern_42;
          }
           else {
            return $intern_44;
          }
        }
        if (ua.indexOf($intern_45) != -1) {
          if (window.devicePixelRatio >= 2) {
            return $intern_46;
          }
          return $intern_45;
        }
        if (ua.indexOf($intern_47) != -1 || ua.indexOf($intern_48) != -1) {
          if (window.devicePixelRatio >= 2) {
            return $intern_49;
          }
          return $intern_47;
        }
        if (ua.indexOf($intern_50) != -1) {
          return $intern_50;
        }
        return $intern_51;
      }
      ();
      return mgwt_os;
    }
  }
  ;
  values[$intern_41] = {android:0, android_tablet:1, blackberry:2, desktop:3, ipad:4, ipad_retina:5, iphone:6, retina:7};
  providers[$intern_52] = function(){
    return /(android|iphone|ipod|ipad)/i.test(window.navigator.userAgent)?$intern_53:$intern_54;
  }
  ;
  values[$intern_52] = {mobilesafari:0, not_mobile:1};
  mgwtapp1.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  mgwtapp1.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_55, millis:(new Date).getTime(), type:$intern_9});
    maybeStartModule();
  }
  ;
  processMetas();
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd.external && ($wnd.external.initModule && $wnd.external.initModule($intern_1))) {
      $wnd.location.reload();
      return;
    }
    initialHtml = $intern_56;
    strongName = $intern_0;
  }
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_57});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers([$intern_44, $intern_54], $intern_58);
      unflattenKeylistIntoAnswers([$intern_46, $intern_54], $intern_59);
      unflattenKeylistIntoAnswers([$intern_45, $intern_54], $intern_60);
      unflattenKeylistIntoAnswers([$intern_45, $intern_53], $intern_61);
      unflattenKeylistIntoAnswers([$intern_42, $intern_53], $intern_62);
      unflattenKeylistIntoAnswers([$intern_49, $intern_53], $intern_63);
      unflattenKeylistIntoAnswers([$intern_44, $intern_53], $intern_64);
      unflattenKeylistIntoAnswers([$intern_47, $intern_53], $intern_65);
      unflattenKeylistIntoAnswers([$intern_46, $intern_53], $intern_66);
      unflattenKeylistIntoAnswers([$intern_42, $intern_54], $intern_67);
      unflattenKeylistIntoAnswers([$intern_51, $intern_53], $intern_68);
      unflattenKeylistIntoAnswers([$intern_51, $intern_54], $intern_69);
      unflattenKeylistIntoAnswers([$intern_47, $intern_54], $intern_70);
      unflattenKeylistIntoAnswers([$intern_50, $intern_54], $intern_71);
      unflattenKeylistIntoAnswers([$intern_49, $intern_54], $intern_72);
      unflattenKeylistIntoAnswers([$intern_50, $intern_53], $intern_73);
      strongName = answers[computePropValue($intern_41)][computePropValue($intern_52)];
      var idx = strongName.indexOf($intern_74);
      if (idx != -1) {
        softPermutationId = Number(strongName.substring(idx + 1));
        strongName = strongName.substring(0, idx);
      }
      initialHtml = strongName + $intern_75;
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_76, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_76, function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date).getTime(), type:$intern_9});
  $stats && $stats({moduleName:$intern_1, sessionId:$sessionId, subSystem:$intern_2, evtGroup:$intern_55, millis:(new Date).getTime(), type:$intern_4});
  $doc.write($intern_77);
}

mgwtapp1();
