(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40439,25755],{40439:function(t,e,n){"use strict";var a=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n(5261));e.default=r.default},5261:function(t){"use strict";function e(t){!function(t){var e={pattern:/(^[ \t]*| {2}|\t)#.*/m,lookbehind:!0,greedy:!0},n={pattern:/((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,lookbehind:!0,inside:{punctuation:/^[$@&%]\{|\}$/}};function a(t,a){var r={};for(var o in r["section-header"]={pattern:/^ ?\*{3}.+?\*{3}/,alias:"keyword"},a)r[o]=a[o];return r.tag={pattern:/([\r\n](?: {2}|\t)[ \t]*)\[[-\w]+\]/,lookbehind:!0,inside:{punctuation:/\[|\]/}},r.variable=n,r.comment=e,{pattern:RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g,function(){return t}),"im"),alias:"section",inside:r}}var r={pattern:/(\[Documentation\](?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},o={pattern:/([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,alias:"function",inside:{variable:n}},i={pattern:/([\r\n](?: {2}|\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0,inside:{variable:n}};t.languages.robotframework={settings:a("Settings",{documentation:{pattern:/([\r\n] ?Documentation(?: {2}|\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,lookbehind:!0,alias:"string"},property:{pattern:/([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,lookbehind:!0}}),variables:a("Variables"),"test-cases":a("Test Cases",{"test-name":o,documentation:r,property:i}),keywords:a("Keywords",{"keyword-name":o,documentation:r,property:i}),tasks:a("Tasks",{"task-name":o,documentation:r,property:i}),comment:e},t.languages.robot=t.languages.robotframework}(t)}t.exports=e,e.displayName="robotframework",e.aliases=[]},64836:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);