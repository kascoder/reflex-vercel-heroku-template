(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36701,98458],{36701:function(e,t,n){"use strict";var s=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(75807));t.default=i.default},75807:function(e){"use strict";function t(e){e.languages.jolie=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\[\s\S]|[^"\\])*"/,lookbehind:!0,greedy:!0},"class-name":{pattern:/((?:\b(?:as|courier|embed|in|inputPort|outputPort|service)\b|@)[ \t]*)\w+/,lookbehind:!0},keyword:/\b(?:as|cH|comp|concurrent|constants|courier|cset|csets|default|define|else|embed|embedded|execution|exit|extender|for|foreach|forward|from|global|if|import|in|include|init|inputPort|install|instanceof|interface|is_defined|linkIn|linkOut|main|new|nullProcess|outputPort|over|private|provide|public|scope|sequential|service|single|spawn|synchronized|this|throw|throws|type|undef|until|while|with)\b/,function:/\b[a-z_]\w*(?=[ \t]*[@(])/i,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,operator:/-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[?\/%^@|]/,punctuation:/[()[\]{},;.:]/,builtin:/\b(?:Byte|any|bool|char|double|enum|float|int|length|long|ranges|regex|string|undefined|void)\b/}),e.languages.insertBefore("jolie","keyword",{aggregates:{pattern:/(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,lookbehind:!0,inside:{keyword:/\bwith\b/,"class-name":/\w+/,punctuation:/,/}},redirects:{pattern:/(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,lookbehind:!0,inside:{punctuation:/,/,"class-name":/\w+/,operator:/=>/}},property:{pattern:/\b(?:Aggregates|[Ii]nterfaces|Java|Javascript|Jolie|[Ll]ocation|OneWay|[Pp]rotocol|Redirects|RequestResponse)\b(?=[ \t]*:)/}})}e.exports=t,t.displayName="jolie",t.aliases=[]},64836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);