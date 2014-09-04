function showcase(){
  var $intern_14 = '', $intern_11 = ' top: -1000px;', $intern_37 = '" for "gwt:onLoadErrorFn"', $intern_35 = '" for "gwt:onPropertyErrorFn"', $intern_20 = '");', $intern_38 = '#', $intern_53 = '&', $intern_74 = '.cache.js', $intern_40 = '/', $intern_46 = '//', $intern_64 = '25AACCBDB4458375612A63A9B117C09F', $intern_65 = '2B99D13C8B8E08584CC50009E7B49BED', $intern_66 = '84FEEA45053D28D5C46A8A6545D9CC9C', $intern_73 = ':', $intern_29 = '::', $intern_82 = ':moduleBase', $intern_13 = '<!doctype html>', $intern_15 = '<html><head><\/head><body><\/body><\/html>', $intern_32 = '=', $intern_39 = '?', $intern_34 = 'Bad handler "', $intern_67 = 'C2E04B24DB7DCA7FCCFE492238BA988E', $intern_12 = 'CSS1Compat', $intern_18 = 'Chrome', $intern_68 = 'D123F7E880FBFDA5BA17E57FBF3F1CB2', $intern_69 = 'D46970884F978F799F78C80DD460F54C', $intern_70 = 'DFF9ABC3D1E48DBA7A73DFC9FBC54AC9', $intern_17 = 'DOMContentLoaded', $intern_6 = 'DUMMY', $intern_71 = 'F278D279887B0FB67D8512A0E35E4706', $intern_72 = 'FD29CF7927AB09DA3500C5ED397D0593', $intern_81 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_80 = '__gwtDevModeHook:showcase', $intern_79 = '_gwt_dummy_', $intern_59 = 'android', $intern_45 = 'base', $intern_43 = 'baseUrl', $intern_1 = 'begin', $intern_7 = 'body', $intern_0 = 'bootstrap', $intern_42 = 'clear.cache.gif', $intern_31 = 'content', $intern_61 = 'desktop', $intern_76 = 'end', $intern_19 = 'eval("', $intern_78 = 'file:', $intern_52 = 'formfactor', $intern_2 = 'gwt.codesvr.showcase=', $intern_3 = 'gwt.codesvr=', $intern_36 = 'gwt:onLoadErrorFn', $intern_33 = 'gwt:onPropertyErrorFn', $intern_30 = 'gwt:property', $intern_25 = 'head', $intern_50 = 'high', $intern_77 = 'http:', $intern_8 = 'iframe', $intern_41 = 'img', $intern_57 = 'ipad', $intern_54 = 'iphone', $intern_55 = 'ipod', $intern_22 = 'javascript', $intern_9 = 'javascript:""', $intern_75 = 'loadExternalRefs', $intern_26 = 'meta', $intern_47 = 'mgwt.density', $intern_51 = 'mgwt.formfactor', $intern_48 = 'mid', $intern_60 = 'mobile', $intern_24 = 'moduleRequested', $intern_23 = 'moduleStartup', $intern_27 = 'name', $intern_56 = 'phone', $intern_10 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_21 = 'script', $intern_62 = 'selectingPermutation', $intern_4 = 'showcase', $intern_63 = 'showcase.devmode.js', $intern_44 = 'showcase.nocache.js', $intern_28 = 'showcase::', $intern_5 = 'startup', $intern_58 = 'tablet', $intern_16 = 'undefined', $intern_49 = 'xhigh';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  showcase.__sendStats = sendStats;
  showcase.__moduleName = $intern_4;
  showcase.__errFn = null;
  showcase.__moduleBase = $intern_6;
  showcase.__softPermutationId = 0;
  showcase.__computePropValue = null;
  showcase.__getPropMap = null;
  showcase.__gwtInstallCode = function(){
  }
  ;
  showcase.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  var __gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  var __gwt_getMetaProperty = function(){
    return null;
  }
  ;
  __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function getInstallLocation(){
    setupInstallLocation();
    return frameDoc.getElementsByTagName($intern_7)[0];
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_8);
    scriptFrame.src = $intern_9;
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_10 + $intern_11;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == $intern_12?$intern_13:$intern_14;
    frameDoc.write(doctype + $intern_15);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_16) {
          return typeof $doc.body != $intern_16 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_17, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_17, onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , 50);
    }

    function installCode(code_0){
      function removeScript(body_0, element){
      }

      var docbody = getInstallLocation();
      var doc = getInstallLocationDoc();
      var script;
      if (navigator.userAgent.indexOf($intern_18) > -1 && window.JSON) {
        var scriptFrag = doc.createDocumentFragment();
        scriptFrag.appendChild(doc.createTextNode($intern_19));
        for (var i = 0; i < code_0.length; i++) {
          var c = window.JSON.stringify(code_0[i]);
          scriptFrag.appendChild(doc.createTextNode(c.substring(1, c.length - 1)));
        }
        scriptFrag.appendChild(doc.createTextNode($intern_20));
        script = doc.createElement($intern_21);
        script.language = $intern_22;
        script.appendChild(scriptFrag);
        docbody.appendChild(script);
        removeScript(docbody, script);
      }
       else {
        for (var i = 0; i < code_0.length; i++) {
          script = doc.createElement($intern_21);
          script.language = $intern_22;
          script.text = code_0[i];
          docbody.appendChild(script);
          removeScript(docbody, script);
        }
      }
    }

    showcase.onScriptDownloaded = function(code_0){
      setupWaitForBodyLoad(function(){
        installCode(code_0);
      }
      );
    }
    ;
    sendStats($intern_23, $intern_24);
    var script = $doc.createElement($intern_21);
    script.src = filename;
    $doc.getElementsByTagName($intern_25)[0].appendChild(script);
  }

  showcase.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  showcase.__installRunAsyncCode = function(code_0){
    var docbody = getInstallLocation();
    var script = getInstallLocationDoc().createElement($intern_21);
    script.language = $intern_22;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_26);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_27), content;
      if (name_0) {
        name_0 = name_0.replace($intern_28, $intern_14);
        if (name_0.indexOf($intern_29) >= 0) {
          continue;
        }
        if (name_0 == $intern_30) {
          content = meta.getAttribute($intern_31);
          if (content) {
            var value_0, eq = content.indexOf($intern_32);
            if (eq >= 0) {
              name_0 = content.substring(0, eq);
              value_0 = content.substring(eq + 1);
            }
             else {
              name_0 = content;
              value_0 = $intern_14;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_33) {
          content = meta.getAttribute($intern_31);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_34 + content + $intern_35);
            }
          }
        }
         else if (name_0 == $intern_36) {
          content = meta.getAttribute($intern_31);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_34 + content + $intern_37);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    showcase.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_38);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_39);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_40, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_14;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_41);
        img.src = url_0 + $intern_42;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_43);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_14;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_21);
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_44) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_14;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_45);
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return $intern_14;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_46 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_14) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_14) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_14 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return showcase.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = 0;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunc) {
        __propertyErrorFunc(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers[$intern_47] = function(){
      if (!window.devicePixelRatio) {
        return $intern_48;
      }
      if (window.devicePixelRatio > 1.5) {
        return $intern_49;
      }
       else if (window.devicePixelRatio > 1) {
        return $intern_50;
      }
      return $intern_48;
    }
    ;
    values[$intern_47] = {high:0, mid:1, xhigh:2};
    providers[$intern_51] = function(){
      var args = location.search;
      var start_0 = args.indexOf($intern_52);
      if (start_0 >= 0) {
        var value_0 = args.substring(start_0);
        var begin = value_0.indexOf($intern_32) + 1;
        var end = value_0.indexOf($intern_53);
        if (end == -1) {
          end = value_0.length;
        }
        return value_0.substring(begin, end);
      }
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf($intern_54) != -1 || ua.indexOf($intern_55) != -1) {
        return $intern_56;
      }
       else if (ua.indexOf($intern_57) != -1) {
        return $intern_58;
      }
       else if (ua.indexOf($intern_59) != -1) {
        if (ua.indexOf($intern_60) != -1) {
          return $intern_56;
        }
         else {
          return $intern_58;
        }
      }
      return $intern_61;
    }
    ;
    values[$intern_51] = {desktop:0, phone:1, tablet:2};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    showcase.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    showcase.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = showcase.__getPropMap;
    sendStats($intern_0, $intern_62);
    if (isHostedMode()) {
      return computeUrlForResource($intern_63);
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers([$intern_49, $intern_56], $intern_64);
      unflattenKeylistIntoAnswers([$intern_48, $intern_56], $intern_65);
      unflattenKeylistIntoAnswers([$intern_49, $intern_58], $intern_66);
      unflattenKeylistIntoAnswers([$intern_50, $intern_61], $intern_67);
      unflattenKeylistIntoAnswers([$intern_48, $intern_58], $intern_68);
      unflattenKeylistIntoAnswers([$intern_50, $intern_56], $intern_69);
      unflattenKeylistIntoAnswers([$intern_49, $intern_61], $intern_70);
      unflattenKeylistIntoAnswers([$intern_48, $intern_61], $intern_71);
      unflattenKeylistIntoAnswers([$intern_50, $intern_58], $intern_72);
      strongName = answers[computePropValue($intern_47)][computePropValue($intern_51)];
      var idx = strongName.indexOf($intern_73);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + 1), 10);
        strongName = strongName.substring(0, idx);
      }
    }
     catch (e) {
    }
    showcase.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_74);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    sendStats($intern_75, $intern_1);
    sendStats($intern_75, $intern_76);
  }

  processMetas();
  showcase.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = showcase.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_77 || $wnd.location.protocol == $intern_78);
    $wnd.__gwt_activeModules[$intern_4].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = $intern_79;
      try {
        $wnd.sessionStorage.setItem(key, key);
        $wnd.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = $intern_80;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_81 + devModeUrl);
        }
        devModeUrl = $intern_14;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_82] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_21);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_25)[0];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[0]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_76);
  installScript(filename);
  return true;
}

showcase.succeeded = showcase();
