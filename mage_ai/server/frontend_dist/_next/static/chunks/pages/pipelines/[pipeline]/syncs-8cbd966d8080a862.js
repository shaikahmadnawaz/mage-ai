(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7803],{17717:function(n,e,r){var t=r(554);!function(){"use strict";var e={977:function(n){function e(n){if("string"!==typeof n)throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function r(n,e){for(var r,t="",i=0,o=-1,l=0,u=0;u<=n.length;++u){if(u<n.length)r=n.charCodeAt(u);else{if(47===r)break;r=47}if(47===r){if(o===u-1||1===l);else if(o!==u-1&&2===l){if(t.length<2||2!==i||46!==t.charCodeAt(t.length-1)||46!==t.charCodeAt(t.length-2))if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){-1===c?(t="",i=0):i=(t=t.slice(0,c)).length-1-t.lastIndexOf("/"),o=u,l=0;continue}}else if(2===t.length||1===t.length){t="",i=0,o=u,l=0;continue}e&&(t.length>0?t+="/..":t="..",i=2)}else t.length>0?t+="/"+n.slice(o+1,u):t=n.slice(o+1,u),i=u-o-1;o=u,l=0}else 46===r&&-1!==l?++l:l=-1}return t}var i={resolve:function(){for(var n,i="",o=!1,l=arguments.length-1;l>=-1&&!o;l--){var u;l>=0?u=arguments[l]:(void 0===n&&(n=t.cwd()),u=n),e(u),0!==u.length&&(i=u+"/"+i,o=47===u.charCodeAt(0))}return i=r(i,!o),o?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(n){if(e(n),0===n.length)return".";var t=47===n.charCodeAt(0),i=47===n.charCodeAt(n.length-1);return 0!==(n=r(n,!t)).length||t||(n="."),n.length>0&&i&&(n+="/"),t?"/"+n:n},isAbsolute:function(n){return e(n),n.length>0&&47===n.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var n,r=0;r<arguments.length;++r){var t=arguments[r];e(t),t.length>0&&(void 0===n?n=t:n+="/"+t)}return void 0===n?".":i.normalize(n)},relative:function(n,r){if(e(n),e(r),n===r)return"";if((n=i.resolve(n))===(r=i.resolve(r)))return"";for(var t=1;t<n.length&&47===n.charCodeAt(t);++t);for(var o=n.length,l=o-t,u=1;u<r.length&&47===r.charCodeAt(u);++u);for(var c=r.length-u,s=l<c?l:c,a=-1,d=0;d<=s;++d){if(d===s){if(c>s){if(47===r.charCodeAt(u+d))return r.slice(u+d+1);if(0===d)return r.slice(u+d)}else l>s&&(47===n.charCodeAt(t+d)?a=d:0===d&&(a=0));break}var f=n.charCodeAt(t+d);if(f!==r.charCodeAt(u+d))break;47===f&&(a=d)}var v="";for(d=t+a+1;d<=o;++d)d!==o&&47!==n.charCodeAt(d)||(0===v.length?v+="..":v+="/..");return v.length>0?v+r.slice(u+a):(u+=a,47===r.charCodeAt(u)&&++u,r.slice(u))},_makeLong:function(n){return n},dirname:function(n){if(e(n),0===n.length)return".";for(var r=n.charCodeAt(0),t=47===r,i=-1,o=!0,l=n.length-1;l>=1;--l)if(47===(r=n.charCodeAt(l))){if(!o){i=l;break}}else o=!1;return-1===i?t?"/":".":t&&1===i?"//":n.slice(0,i)},basename:function(n,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');e(n);var t,i=0,o=-1,l=!0;if(void 0!==r&&r.length>0&&r.length<=n.length){if(r.length===n.length&&r===n)return"";var u=r.length-1,c=-1;for(t=n.length-1;t>=0;--t){var s=n.charCodeAt(t);if(47===s){if(!l){i=t+1;break}}else-1===c&&(l=!1,c=t+1),u>=0&&(s===r.charCodeAt(u)?-1===--u&&(o=t):(u=-1,o=c))}return i===o?o=c:-1===o&&(o=n.length),n.slice(i,o)}for(t=n.length-1;t>=0;--t)if(47===n.charCodeAt(t)){if(!l){i=t+1;break}}else-1===o&&(l=!1,o=t+1);return-1===o?"":n.slice(i,o)},extname:function(n){e(n);for(var r=-1,t=0,i=-1,o=!0,l=0,u=n.length-1;u>=0;--u){var c=n.charCodeAt(u);if(47!==c)-1===i&&(o=!1,i=u+1),46===c?-1===r?r=u:1!==l&&(l=1):-1!==r&&(l=-1);else if(!o){t=u+1;break}}return-1===r||-1===i||0===l||1===l&&r===i-1&&r===t+1?"":n.slice(r,i)},format:function(n){if(null===n||"object"!==typeof n)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return function(n,e){var r=e.dir||e.root,t=e.base||(e.name||"")+(e.ext||"");return r?r===e.root?r+t:r+n+t:t}("/",n)},parse:function(n){e(n);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===n.length)return r;var t,i=n.charCodeAt(0),o=47===i;o?(r.root="/",t=1):t=0;for(var l=-1,u=0,c=-1,s=!0,a=n.length-1,d=0;a>=t;--a)if(47!==(i=n.charCodeAt(a)))-1===c&&(s=!1,c=a+1),46===i?-1===l?l=a:1!==d&&(d=1):-1!==l&&(d=-1);else if(!s){u=a+1;break}return-1===l||-1===c||0===d||1===d&&l===c-1&&l===u+1?-1!==c&&(r.base=r.name=0===u&&o?n.slice(1,c):n.slice(u,c)):(0===u&&o?(r.name=n.slice(1,l),r.base=n.slice(1,c)):(r.name=n.slice(u,l),r.base=n.slice(u,c)),r.ext=n.slice(l,c)),u>0?r.dir=n.slice(0,u-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};i.posix=i,n.exports=i}},r={};function i(n){var t=r[n];if(void 0!==t)return t.exports;var o=r[n]={exports:{}},l=!0;try{e[n](o,o.exports,i),l=!1}finally{l&&delete r[n]}return o.exports}i.ab="//";var o=i(977);n.exports=o}()},66050:function(n,e,r){"use strict";var t;r.d(e,{V:function(){return t}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running",n.UPSTREAM_FAILED="upstream_failed",n.CONDITION_FAILED="condition_failed"}(t||(t={}))},47409:function(n,e,r){"use strict";r.d(e,{Az:function(){return c},BF:function(){return u},Do:function(){return a},IK:function(){return l},VO:function(){return o},sZ:function(){return s}});var t,i=r(82394),o=r(66050).V,l=[o.FAILED,o.COMPLETED,o.RUNNING,o.CANCELLED,o.INITIAL],u=[o.INITIAL,o.RUNNING],c=[o.CANCELLED,o.COMPLETED,o.FAILED],s="__mage_variables",a=(t={},(0,i.Z)(t,o.CANCELLED,"Cancelled"),(0,i.Z)(t,o.COMPLETED,"Done"),(0,i.Z)(t,o.FAILED,"Failed"),(0,i.Z)(t,o.INITIAL,"Ready"),(0,i.Z)(t,o.RUNNING,"Running"),t)},98781:function(n,e,r){"use strict";r.d(e,{$1:function(){return a},G7:function(){return f},LM:function(){return v},Mj:function(){return m},QK:function(){return s},a_:function(){return h},qL:function(){return l},r0:function(){return d}});var t,i,o,l,u=r(82394),c=r(22341);!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(l||(l={}));var s,a,d,f=(t={},(0,u.Z)(t,l.INTEGRATION,"Integration"),(0,u.Z)(t,l.PYTHON,"Standard"),(0,u.Z)(t,l.PYSPARK,"PySpark"),(0,u.Z)(t,l.STREAMING,"Streaming"),t),v="all",m=(l.PYTHON,l.INTEGRATION,l.STREAMING,i={},(0,u.Z)(i,v,c.ie),(0,u.Z)(i,l.INTEGRATION,c.YC),(0,u.Z)(i,l.PYTHON,c.El),(0,u.Z)(i,l.STREAMING,c.dB),i);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry"}(s||(s={})),function(n){n.GROUP="group_by",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(a||(a={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(d||(d={}));var h=(o={},(0,u.Z)(o,l.PYTHON,"python3"),(0,u.Z)(o,l.PYSPARK,"pysparkkernel"),o)},89745:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return ln}});var t=r(77837),i=r(38860),o=r.n(i),l=r(82684),u=r(60547),c=r(41788),s=r(75582),a=r(82394),d=r(93461),f=r(67971),v=r(87372),m=r(47409),h=r(86673),p=r(54283),g=r(19711),b=r(23831),x=r(22341),j=r(38626),Z=r(73942),y=r(2005),I=r(49125),N=r(31012),k=j.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-15svh8z-0"})(["border-radius:","px;margin:","px;overflow:hidden;"," "," "," "," "," "," &:hover{"," "," "," "," ","}"],Z.n_,I.cd*I.iI,(function(n){return"\n    background-color: ".concat((n.theme.background||b.Z.background).panel,";\n    border: 1px solid ").concat((n.theme.borders||b.Z.borders).dark,";\n\n    &:hover {\n      cursor: pointer;\n    }\n  ")}),(function(n){return n.selected&&n.danger&&"\n    border-color: ".concat((n.theme.accent||b.Z.accent).negative,";\n  ")}),(function(n){return n.selected&&n.primary&&"\n    border-color: ".concat((n.theme.interactive||b.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.selected&&n.default&&"\n    border-color: ".concat((n.theme.interactive||b.Z.interactive).focusBackground,";\n  ")}),(function(n){return n.selected&&n.success&&"\n    border-color: ".concat((n.theme.background||b.Z.background).success,";\n  ")}),(function(n){return n.selected&&n.warning&&"\n    border-color: ".concat((n.theme.accent||b.Z.accent).warning,";\n  ")}),(function(n){return n.danger&&"\n      border-color: ".concat((n.theme.accent||b.Z.accent).negative,";\n    ")}),(function(n){return n.primary&&"\n      border-color: ".concat((n.theme.interactive||b.Z.interactive).linkPrimary,";\n    ")}),(function(n){return n.default&&"\n      border-color: ".concat((n.theme.interactive||b.Z.interactive).focusBackground,";\n    ")}),(function(n){return n.success&&"\n      border-color: ".concat((n.theme.background||b.Z.background).success,";\n    ")}),(function(n){return n.warning&&"\n      border-color: ".concat((n.theme.accent||b.Z.accent).warning,";\n    ")})),_=(0,j.css)([""," "," "," "," ",""],(function(n){return n.danger&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).negative,";\n  ")}),(function(n){return n.primary&&"\n    background-color: ".concat((n.theme.interactive||b.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||b.Z.interactive).defaultBackground,";\n  ")}),(function(n){return n.success&&"\n    background-color: ".concat((n.theme.background||b.Z.background).success,";\n  ")}),(function(n){return n.warning&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).warning,";\n  ")})),E=j.default.div.withConfig({displayName:"indexstyle__StatusStyle",componentId:"sc-15svh8z-1"})([""," ",";border-radius:","px;display:inline-block;font-family:",";padding:6px;"," "," "," "," "," ",""],_,N.iD,Z.D7,y.ry,(function(n){return n.danger&&"\n    color: ".concat((n.theme.content||b.Z.content).active,";\n  ")}),(function(n){return n.primary&&"\n    color: ".concat((n.theme.content||b.Z.content).active,";\n  ")}),(function(n){return(n.default||n.success)&&"\n  "}),(function(n){return n.default&&"\n    color: ".concat((n.theme.content||b.Z.content).default,";\n  ")}),(function(n){return n.success&&"\n    color: ".concat((n.theme.content||b.Z.content).inverted,";\n  ")}),(function(n){return n.warning&&"\n    color: ".concat((n.theme.content||b.Z.content).inverted,";\n  ")})),w=j.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-15svh8z-2"})([""," display:flex;height:auto;width:3px;",""],_,(function(n){return n.default&&"\n    background-color: ".concat((n.theme.interactive||b.Z.interactive).focusBackground,";\n  ")})),P=r(90211),A=r(92083),O=r.n(A),C=r(66050),T=r(24224);function S(n){var e;return Object.keys((null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{}).sort()}function L(n){var e,r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=null,o=null,l=null,u=null,c={},a=(null===n||void 0===n?void 0:n.block_runs)||[],d=(null===n||void 0===n||null===(e=n.metrics)||void 0===e?void 0:e.blocks)||{},f=(null===n||void 0===n||null===(r=n.metrics)||void 0===r?void 0:r.pipeline)||{},v=M(n);return Object.entries(d).forEach((function(n){var e,r=(0,s.Z)(n,2),a=r[0],d=r[1];if(!t||t===a){var m,h=d||{},p=h.destinations,g=void 0===p?{records_affected:null,records_inserted:null,records_updated:null}:p,b=h.sources,x=void 0===b?{records:null}:b,j=v[a]||[];if(t&&t===a&&j.every((function(n){var e=n.status;return C.V.COMPLETED===e}))&&null===i&&(i=0),null!==f&&void 0!==f&&null!==(e=f[a])&&void 0!==e&&e.record_counts)null===i&&(i=0),i+=Number(null===f||void 0===f||null===(m=f[a])||void 0===m?void 0:m.record_counts);else null!==x&&void 0!==x&&x.records&&(null===i&&(i=0),i+=Number(x.records));null!==g&&void 0!==g&&g.records_updated?(null===l&&(l=0),l+=Number(g.records_updated),null===u&&(u=0),u+=Number(g.records_updated)):null!==g&&void 0!==g&&g.records_inserted?(null===l&&(l=0),l+=Number(g.records_inserted),null===o&&(o=0),o+=Number(g.records_inserted)):null!==g&&void 0!==g&&g.records_affected&&(null===l&&(l=0),l+=Number(g.records_affected)),["destinations","sources"].forEach((function(n){var e=d[n]||{};null!==e&&void 0!==e&&e.error&&(c[a]||(c[a]={}),c[a][n]={error:null===e||void 0===e?void 0:e.error,errors:null===e||void 0===e?void 0:e.errors,message:null===e||void 0===e?void 0:e.message})}))}})),null===a||void 0===a||a.forEach((function(n){var e=n.block_uuid,r=n.metrics,t=n.status;if(C.V.FAILED===t&&null!==r&&void 0!==r&&r.error&&e){var i=e.split(":"),o=(0,s.Z)(i,3),l=(o[0],o[1]);o[2];c[l]||(c[l]={}),c[l][""]=r.error}})),{errors:c,records:i,recordsInserted:o,recordsProcessed:l,recordsUpdated:u}}function M(n){var e=n.block_runs,r={};return null===e||void 0===e||e.forEach((function(n){var e=n.block_uuid.split(":"),t=(0,s.Z)(e,3),i=(t[0],t[1]);t[2];r[i]||(r[i]=[]),r[i].push(n)})),r}function R(n){var e=M(n),r={};return Object.entries(e).forEach((function(n){var e=(0,s.Z)(n,2),t=e[0],i=e[1],o=i.filter((function(n){var e=n.status;return C.V.COMPLETED===e})),l=o.map((function(n){var e=n.completed_at,r=n.started_at,t=O().utc(e),i=O().utc(r);return t.diff(i,"second")})),u=o.length,c=i.length;r[t]={completed:u,runtime:l.length>=1?(0,T.Sm)(l)/l.length:null,total:c}})),r}function D(n){var e=n.block_runs,r=(null===e||void 0===e?void 0:e.length)||1,t=function(n){var e=(null===n||void 0===n?void 0:n.block_runs)||[];return null===e||void 0===e?void 0:e.filter((function(n){var e=n.status;return C.V.COMPLETED===e}))}(n).length||0;return t/r}function V(n){var e=n.completed_at,r=n.block_runs,t=void 0===r?[]:r,i=n.status;if(null===t||void 0===t||!t.length)return 0;var o=O().utc();if(e)o=O().utc(e);else if([m.VO.CANCELLED,m.VO.FAILED].includes(i)){var l=(0,T.YC)(t,(function(n){return n.started_at}),{ascending:!1})[0];o=O().utc(l.updated_at)}var u=O().utc(n.created_at);return o.diff(u,"second")}function G(n,e){var r,t,i,o,l,u=M(n),c=R(n),s=(null===n||void 0===n?void 0:n.metrics)||{blocks:null,pipeline:null},a=s.blocks||{},d=s.pipeline||{},f=(a[e],d[e],c[e]||{completed:null,total:null}),v=f.completed,m=f.total,h=v&&m?v/m:0,p=u[e]||[],g=p.every((function(n){var e=n.status;return C.V.COMPLETED===e})),b=(0,T.YC)(p,(function(n){return n.updated_at}),{ascending:!1})[0],x=null===(r=(0,T.YC)(p,(function(n){return n.started_at}),{ascending:!0})[0])||void 0===r?void 0:r.started_at;g?t=null===(l=(0,T.YC)(p,(function(n){return n.completed_at}),{ascending:!1})[0])||void 0===l?void 0:l.completed_at:b&&(o=null===b||void 0===b?void 0:b.updated_at);var j=g?O().utc(t||o):O().utc(),Z=O().utc(x);return{completed:v,completedAt:t,done:g,progress:h,runtime:i=j.diff(Z,"second"),startedAt:x,status:null===b||void 0===b?void 0:b.status,timeText:(0,P.zf)(i),total:m,updatedAt:o}}var U=r(28598);function F(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function Y(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){(0,a.Z)(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}var z=function(n){var e=n.onSelect,r=n.pipelineRun,t=n.selected,i=(r.block_runs,r.created_at),o=r.status,u=(0,l.useMemo)((function(){return(null===r||void 0===r?void 0:r.metrics)||{blocks:{},destination:null,pipeline:{},source:null}}),[r]),c=((0,l.useMemo)((function(){return u.blocks||{}}),[u]),(0,l.useMemo)((function(){return u.pipeline||{}}),[u])),a=u.destination,j=u.source,Z=(0,l.useMemo)((function(){return Object.keys(c).length}),[c]),y=(0,l.useMemo)((function(){return L(r)}),[r]),N=y.errors,_=y.records,A=y.recordsProcessed,O=(0,l.useMemo)((function(){return D(r)}),[r]),C=(0,l.useMemo)((function(){return[m.VO.COMPLETED].includes(o)}),[o]),T=(0,l.useMemo)((function(){return{danger:m.VO.FAILED===o,default:m.VO.INITIAL===o,primary:m.VO.RUNNING===o,success:C,warning:m.VO.CANCELLED===o}}),[C,o]),S=(0,l.useMemo)((function(){if(r){var n=V(r);return(0,P.zf)(n)}}),[r]);return(0,U.jsx)(k,Y(Y({},T),{},{onClick:function(){return e(t?null:r.id)},selected:t,children:(0,U.jsxs)(f.ZP,{fullHeight:!0,justifyContent:"space-between",children:[(0,U.jsx)(w,Y({},T)),(0,U.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,U.jsxs)(h.Z,{ml:3,py:3,children:[(0,U.jsx)(v.Z,{bold:!0,level:5,monospace:!0,children:i}),(0,U.jsx)(h.Z,{fullWidth:!1,mt:2,children:(0,U.jsx)(E,Y(Y({},T),{},{children:(0,U.jsxs)(f.ZP,{alignItems:"center",children:[C&&(0,U.jsx)(x.Jr,{inverted:!0,size:2*I.iI}),[m.VO.INITIAL,m.VO.RUNNING].includes(o)&&(0,U.jsx)(p.Z,{color:m.VO.INITIAL!==o?b.Z.monotone.white:null,inverted:m.VO.INITIAL===o,small:!0}),"\xa0",m.VO.RUNNING===o&&(0,U.jsxs)(U.Fragment,{children:["\xa0",Math.round(100*O),"%"]}),![m.VO.INITIAL,m.VO.RUNNING].includes(o)&&m.Do[o],m.VO.INITIAL===o&&"Starting"]})}))}),Object.values(N).length>=1&&(0,U.jsx)(h.Z,{mt:1,children:Object.entries(N).map((function(n,e){var r=(0,s.Z)(n,2),t=r[0];r[1];return(0,U.jsxs)(g.ZP,{monospace:!0,muted:!0,small:!0,children:[t," stream failed"]},t)}))})]})}),(0,U.jsxs)(d.Z,{flex:1,children:[(0,U.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,U.jsxs)(h.Z,{ml:3,py:3,children:[(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Rows processed"}),(0,U.jsx)(g.ZP,{monospace:!0,children:A>=1?(0,P.x6)(A):"-"})]}),(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Rows remaining"}),(0,U.jsx)(g.ZP,{monospace:!0,children:_>=1&&_>=A?(0,P.x6)(_-A):"-"})]}),m.VO.RUNNING!==o&&(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Runtime"}),(0,U.jsx)(g.ZP,{monospace:!0,children:S})]})]})}),(0,U.jsx)(d.Z,{flex:1,flexDirection:"column",children:(0,U.jsxs)(h.Z,{ml:3,py:3,children:[(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Source"}),(0,U.jsx)(g.ZP,{monospace:!0,children:j||"-"})]}),(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Destination"}),(0,U.jsx)(g.ZP,{monospace:!0,children:a||"-"})]}),(0,U.jsxs)(h.Z,{mb:1,children:[(0,U.jsx)(g.ZP,{bold:!0,muted:!0,small:!0,children:"Streams"}),(0,U.jsx)(g.ZP,{monospace:!0,children:Z>=1?(0,P.x6)(Z):"-"})]})]})})]})]})}))},B=r(89565),H=r.n(B),W=r(34376),J=r(60328),K=r(10919),X=r(87815),q=j.default.div.withConfig({displayName:"indexstyle__BarStyle",componentId:"sc-1thr560-0"})(["display:flex;flex:1;"," "," ",""],(function(n){return n.even&&n.fill&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).cyan,";\n  ")}),(function(n){return n.even&&!n.fill&&"\n    background-color: ".concat((n.theme.accent||b.Z.accent).cyanTransparent,";\n  ")}),(function(n){return"\n    height: ".concat((n.small?1:2)*I.iI,"px;\n  ")})),Q=r(66653);var $=function(n){var e=n.onClickRow,r=n.pipelineRun,t=n.selectedStream,i=(0,W.useRouter)(),o=(0,l.useState)(null),u=o[0],c=o[1],a=(0,l.useState)(null),d=a[0],p=a[1],b=(0,l.useMemo)((function(){return r?M(r):{}}),[r]),j=(0,l.useMemo)((function(){return r?R(r):{}}),[r]),Z=(0,l.useMemo)((function(){var n=0,e=[],r=[];if(Object.entries(j).forEach((function(t){var i=(0,s.Z)(t,2),o=(i[0],i[1]),l=o.completed,u=o.runtime,c=o.total;null===u?r.push(o):(e.push(u),n+=u*(c-l))})),0===e.length)return null;var t=(0,T.Sm)(e)/e.length;return r.forEach((function(e){var r=e.completed,i=e.total;n+=t*(i-r)})),n}),[j]),y=(0,l.useMemo)((function(){return t?j[t]:null}),[j,t]),N=(0,l.useMemo)((function(){if(t&&j){var n=j[t]||{},e=n.completed,i=n.total;if(i>=1)return e/i}else if(r)return D(r);return 0}),[y,r,t]),k=(0,l.useMemo)((function(){return(0,U.jsx)(f.ZP,{children:(0,T.w6)(101).map((function(n,e){return(0,U.jsx)(q,{even:e%2===0,fill:N>0&&Math.round(100*N)>=e},e)}))})}),[N]),_=(0,l.useMemo)((function(){if(t){var n=b[t]||[],e=n.every((function(n){var e=n.status;return C.V.COMPLETED===e})),i=(0,T.YC)(n,(function(n){return n.updated_at}),{ascending:!1})[0],o=null===i||void 0===i?void 0:i.status,l=y||{},u=l.completed,c=l.runtime,s=l.total;if(e)return"Sync complete for ".concat(t);if([C.V.CANCELLED,C.V.FAILED].includes(o))return m.Do[o];if(c&&s>=1){var a=Math.ceil(c*(s-u)/60);return"".concat((0,P._6)("minute",a,!0)," to completion")}return"Estimating time remaining for stream..."}if(m.VO.COMPLETED===(null===r||void 0===r?void 0:r.status))return"Sync complete";if(r){if([m.VO.CANCELLED,m.VO.FAILED].includes(null===r||void 0===r?void 0:r.status))return m.Do[null===r||void 0===r?void 0:r.status];if(m.VO.INITIAL===(null===r||void 0===r?void 0:r.status))return"Initializing sync (this can take several minutes)";if(null===Z)return"Estimating time remaining...";var d=Math.ceil(Z/60);return"".concat((0,P._6)("minute",d,!0)," to completion")}return"Select a sync"}),[b,Z,y,r,t]),E=(0,l.useMemo)((function(){return r&&t?G(r,t):{completed:null,completedAt:null,done:null,progress:null,runtime:null,startedAt:null,status:null,timeText:null,total:null,updatedAt:null}}),[r,t]);(0,l.useEffect)((function(){var n;if(r){var e=V(r);c(e),n=setInterval((function(){return c((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[r]),(0,l.useEffect)((function(){var n;if(r&&t&&E){var e=(null===E||void 0===E?void 0:E.runtime)||0;p(e),n=setInterval((function(){return p((function(n){return n+1}))}),1e3)}return function(){return clearInterval(n)}}),[r,t,E]);var w=(0,l.useMemo)((function(){if(r){if(t)return null===E||void 0===E?void 0:E.timeText;var n=V(r);return(0,P.zf)(n)}}),[r,t,E]),A=(0,l.useMemo)((function(){var n=Math.floor(u%86400/3600),e=Math.floor(u%3600/60),r=Math.floor(u%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),r>=10?String(r):"0".concat(r)].join(":")}),[u]),O=(0,l.useMemo)((function(){var n=Math.floor(d%86400/3600),e=Math.floor(d%3600/60),r=Math.floor(d%60/1);return[n>=10?String(n):"0".concat(n),e>=10?String(e):"0".concat(e),r>=10?String(r):"0".concat(r)].join(":")}),[d]),F=(0,l.useMemo)((function(){return r?L(r):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[r]),Y=F.errors,z=F.records,B=F.recordsInserted,$=F.recordsProcessed,nn=F.recordsUpdated,en=(0,l.useMemo)((function(){return r&&t?L(r,t):{errors:null,records:null,recordsInserted:null,recordsProcessed:null,recordsUpdated:null}}),[r,t]),rn=(0,l.useMemo)((function(){var n=t?null===en||void 0===en?void 0:en.records:z,e=t?null===en||void 0===en?void 0:en.recordsInserted:B,r=t?null===en||void 0===en?void 0:en.recordsProcessed:$,i=t?null===en||void 0===en?void 0:en.recordsUpdated:nn,o=[{label:"Rows fetched",value:null===n?"-":(0,P.x6)(n)}];return null===e&&null===i?o.push({label:"Rows processed",value:null===r?"-":(0,P.x6)(r)}):null!==e?o.push({label:"Rows inserted",value:(0,P.x6)(e)}):null!==i&&o.push({label:"Rows updated",value:(0,P.x6)(i)}),o.map((function(n){var e=n.label,r=n.value;return(0,U.jsxs)("div",{children:[(0,U.jsx)(g.ZP,{bold:!0,large:!0,muted:!0,children:e}),(0,U.jsx)(g.ZP,{headline:!0,children:r})]},e)}))}),[z,en,B,$,nn,w,A,status]),tn=(0,l.useMemo)((function(){if(!r)return(0,U.jsx)("div",{});var n=S(r);return(0,U.jsx)(X.Z,{columnFlex:[null,null,null,null,null,null],columns:[{uuid:"Stream"},{uuid:"Start"},{uuid:"End"},{uuid:"Time"},{uuid:"Progress"},{uuid:"Logs"}],isSelectedRow:function(e){return t&&t===n[e]},onClickRow:e,rows:n.map((function(n){var e=G(r,n),t=(e.completed,e.completedAt),o=e.done,l=e.progress,u=e.startedAt,c=e.status,s=e.timeText,a=(e.total,!!Y[n]);return[(0,U.jsx)(g.ZP,{danger:a,default:!a,monospace:!0,children:n},"stream"),(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:u?u.split(".")[0]:"-"},"started_at"),(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:t?t.split(".")[0]:"-"},"completed_at"),(0,U.jsx)(g.ZP,{default:!0,children:[C.V.INITIAL,C.V.RUNNING].includes(c)?"-":s},"runtime"),(0,U.jsxs)("div",{children:[o&&(0,U.jsx)(x.Jr,{default:!0,size:2*I.iI}),!o&&(0,U.jsx)(f.ZP,{children:(0,T.w6)(51).map((function(n,e){return(0,U.jsx)(q,{fill:l>0&&Math.round(50*l)>=e,even:e%2===0,small:!0},e)}))})]},"progress"),(0,U.jsx)(J.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(n){i.push("/pipelines/".concat(r.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(r.id)),(0,Q.j)(n)},children:(0,U.jsx)(x.UL,{default:!0,size:2*I.iI})},"logs")]})),uuid:"".concat(null===r||void 0===r?void 0:r.id,"-streams-table")})}),[Y,j,r,t]),on=(0,l.useMemo)((function(){var n,e,i,o,l,u,c,a;if(r&&t){var d=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,destination:null,pipeline:null,source:null},f=null===d||void 0===d||null===(n=d.pipeline)||void 0===n||null===(e=n[t])||void 0===e||null===(i=e.bookmarks)||void 0===i?void 0:i[t],v=null===d||void 0===d||null===(o=d.blocks)||void 0===o||null===(l=o[t])||void 0===l||null===(u=l.destinations)||void 0===u||null===(c=u.state)||void 0===c||null===(a=c.bookmarks)||void 0===a?void 0:a[t];if(f||v){var m=Array.from(new Set(Object.keys(f||{}).concat(Object.keys(v||{})))).sort(),h=[];m.forEach((function(n){var e=[(0,U.jsx)(g.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[f,v].forEach((function(r,t){r&&e.push((0,U.jsx)(g.ZP,{monospace:!0,small:!0,children:r[n]},"".concat(n,"-").concat(t)))})),h.push(e)}));var p=[{label:function(){return""},uuid:"column"}];return[[null===d||void 0===d?void 0:d.source,"source",f],[null===d||void 0===d?void 0:d.destination,"destination",v]].forEach((function(n){var e=(0,s.Z)(n,3),r=e[0],t=e[1];e[2]&&p.push({uuid:"".concat(r," (").concat(t,")")})})),(0,U.jsx)(X.Z,{columnFlex:[null,1,1],columns:p,rows:h,uuid:"".concat(t,"-bookmark-table")})}}}),[r,t]),ln=(0,l.useMemo)((function(){var n,e,i,o,l,u;if(r&&t){var c=(null===r||void 0===r?void 0:r.metrics)||{blocks:null,destination:null,pipeline:null,source:null},a=null===c||void 0===c||null===(n=c.blocks)||void 0===n||null===(e=n[t])||void 0===e||null===(i=e.sources)||void 0===i?void 0:i.record,d=null===c||void 0===c||null===(o=c.blocks)||void 0===o||null===(l=o[t])||void 0===l||null===(u=l.destinations)||void 0===u?void 0:u.record;if(a||d){var f=Object.keys(d||a||{}).sort(),v=[];f.forEach((function(n){var e=[(0,U.jsx)(g.ZP,{bold:!0,monospace:!0,muted:!0,small:!0,children:n},n)];[a,d].forEach((function(r,t){if(r){var i=r[n],o="object"===typeof i;e.push((0,U.jsxs)(g.ZP,{monospace:!0,small:!0,textOverflow:!0,whiteSpaceNormal:!0,wordBreak:!0,children:[o&&(0,U.jsx)("pre",{children:JSON.stringify(i,null,2)}),!o&&i]},"".concat(n,"-").concat(t)))}})),v.push(e)}));var m=[{label:function(){return""},uuid:"column"}];return[[null===c||void 0===c?void 0:c.source,"source",a],[null===c||void 0===c?void 0:c.destination,"destination",d]].forEach((function(n){var e=(0,s.Z)(n,3),r=e[0],t=e[1];e[2]&&m.push({uuid:"".concat(r," (").concat(t,")")})})),(0,U.jsx)(X.Z,{columnFlex:[null,1,1],columns:m,rows:v.map((function(n){return n.map((function(n){return(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:n},n)}))})),uuid:"".concat(t,"-bookmark-table")})}}}),[r,t]),un=(0,l.useMemo)((function(){var n,e,i,o,l,u,c=null===r||void 0===r||null===(n=r.metrics)||void 0===n||null===(e=n.blocks)||void 0===e?void 0:e[t];return(null===c||void 0===c||null===(i=c.sources)||void 0===i||null===(o=i.block_tags)||void 0===o?void 0:o.destination_table)||(null===c||void 0===c||null===(l=c.destinations)||void 0===l||null===(u=l.block_tags)||void 0===u?void 0:u.destination_table)}),[r,t]);return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(h.Z,{p:3,children:[t&&(0,U.jsx)(h.Z,{mb:3,children:(0,U.jsxs)(f.ZP,{alignItems:"center",children:[(0,U.jsx)(K.Z,{block:!0,onClick:function(){return i.push("/pipelines/".concat(r.pipeline_uuid,"/syncs?pipeline_run_id=").concat(r.id))},preventDefault:!0,children:(0,U.jsxs)(f.ZP,{alignItems:"center",children:[(0,U.jsx)(x.Xd,{default:!0,size:1.5*I.iI}),(0,U.jsx)(h.Z,{mr:1}),(0,U.jsx)(g.ZP,{default:!0,children:"Syncs"})]})}),(0,U.jsx)(h.Z,{mx:1,children:(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:"/"})}),(0,U.jsx)(g.ZP,{bold:!0,monospace:!0,children:t})]})}),(0,U.jsxs)(f.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,U.jsx)(h.Z,{mr:2,my:1,children:(0,U.jsx)(v.Z,{level:5,muted:!r,children:_})}),r&&(0,U.jsx)(J.Z,{onClick:function(){return i.push("/pipelines/".concat(r.pipeline_uuid,"/logs?pipeline_run_id[]=").concat(r.id))},small:!0,children:"Logs"})]}),(0,U.jsx)(h.Z,{mt:2,children:k}),r&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(h.Z,{mt:3,children:(0,U.jsxs)(f.ZP,{justifyContent:"space-between",children:[(0,U.jsxs)("div",{children:[(0,U.jsx)(g.ZP,{bold:!0,large:!0,muted:!0,children:"Runtime"}),(0,U.jsxs)(g.ZP,{headline:!0,children:[t&&[C.V.INITIAL,C.V.RUNNING].includes(null===E||void 0===E?void 0:E.status)&&O,t&&![C.V.INITIAL,C.V.RUNNING].includes(null===E||void 0===E?void 0:E.status)&&(null===E||void 0===E?void 0:E.timeText),!t&&[m.VO.INITIAL,m.VO.RUNNING].includes(null===r||void 0===r?void 0:r.status)&&A,!t&&![m.VO.INITIAL,m.VO.RUNNING].includes(null===r||void 0===r?void 0:r.status)&&w]})]}),rn]})}),Object.values(Y).length>=1&&(0,U.jsxs)(h.Z,{mt:3,children:[(0,U.jsx)(v.Z,{level:5,muted:!0,children:"Errors"}),Object.entries(Y).map((function(n,e){var r=(0,s.Z)(n,2),i=r[0],o=r[1];return(!t||t===i)&&(0,U.jsx)(h.Z,{mt:e>=1?1:0,children:Object.entries(o).map((function(n){var e=(0,s.Z)(n,2),r=e[0],t=e[1],o=t.error,l=t.errors,u=t.message,c=Array.isArray(o)?o.join(" "):o;return(0,U.jsxs)("div",{children:[(0,U.jsx)(h.Z,{mb:u||(null===l||void 0===l?void 0:l.length)>=1?2:0,children:(0,U.jsxs)(g.ZP,{monospace:!0,preWrap:!0,textOverflow:!0,children:[i,!!r&&(0,U.jsxs)(g.ZP,{inline:!0,monospace:!0,muted:!0,children:["\xa0(",r,")"]}),": ",(0,U.jsx)(g.ZP,{default:!0,inline:!0,monospace:!0,children:c&&(0,U.jsx)(H(),{children:c})})]})}),(0,U.jsx)(g.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:u}),l.map((function(n){return(0,U.jsx)(g.ZP,{default:!0,monospace:!0,preWrap:!0,small:!0,children:n},n)}))]},"".concat(i,"-").concat(r))}))},i)}))]})]})]}),r&&!t&&(0,U.jsx)(h.Z,{my:3,children:tn}),r&&t&&(0,U.jsxs)(U.Fragment,{children:[un&&(0,U.jsx)(h.Z,{my:3,children:(0,U.jsxs)(h.Z,{px:3,children:[(0,U.jsx)(v.Z,{level:5,children:"Table name"}),(0,U.jsx)(h.Z,{mt:1,children:(0,U.jsx)(g.ZP,{default:!0,monospace:!0,children:un})})]})}),on&&(0,U.jsxs)(h.Z,{my:3,children:[(0,U.jsx)(h.Z,{px:3,children:(0,U.jsx)(v.Z,{level:5,children:"Bookmarks"})}),(0,U.jsx)(h.Z,{px:1,children:on})]}),ln&&(0,U.jsxs)(h.Z,{my:3,children:[(0,U.jsx)(h.Z,{px:3,children:(0,U.jsx)(v.Z,{level:5,children:"Sample row"})}),(0,U.jsx)(h.Z,{px:1,children:ln})]})]})]})},nn=r(82531),en=r(59920),rn=r(33766),tn=r(59e3);function on(n){var e=n.pipeline,r=e.uuid,t=nn.ZP.pipeline_runs.list({_limit:20,_offset:0,pipeline_uuid:r},{refreshInterval:5e3}).data,i=(0,l.useMemo)((function(){return(null===t||void 0===t?void 0:t.pipeline_runs)||[]}),[t]),o=(0,tn.iV)(),c=(0,l.useState)(null),s=c[0],a=c[1],d=(0,l.useState)(null),f=d[0],v=d[1],m=(0,l.useState)(null),h=m[0],p=m[1];(0,l.useEffect)((function(){null!==o&&void 0!==o&&o.pipeline_run_id?p(null===i||void 0===i?void 0:i.find((function(n){return n.id===Number(o.pipeline_run_id)}))):h&&p(null),null!==o&&void 0!==o&&o.stream?v(o.stream):f&&v(null)}),[i,o,h,f]);var g=(0,l.useCallback)((function(){var n=h?S(h):[];return(0,U.jsx)($,{onClickRow:function(e){var r=n[e];(0,rn.u7)({stream:f===r?null:r})},pipelineRun:h,selectedStream:f})}),[h,f]),b=(0,l.useMemo)((function(){var n="/pipelines/".concat(r,"/syncs");h&&(n="".concat(n,"?pipeline_run_id=").concat(h.id));var e=[{label:function(){return"Syncs"},linkProps:f?{as:n,href:"/pipelines/[pipeline]/syncs"}:null}];return f&&e.push({label:function(){return f}}),e}),[r,h,f]);return(0,U.jsx)(u.Z,{breadcrumbs:b,buildSidekick:g,errors:s,pageName:en.M.SYNCS,pipeline:e,setErrors:a,title:function(n){var e=n.name;return"".concat(e," syncs")},uuid:"".concat(en.M.SYNCS,"_").concat(r),children:i.map((function(n){var e=(null===h||void 0===h?void 0:h.id)===n.id;return(0,U.jsx)(z,{onSelect:function(n){return(0,rn.u7)({pipeline_run_id:n,stream:null})},pipelineRun:n,selected:e},n.id)}))})}on.getInitialProps=function(){var n=(0,t.Z)(o().mark((function n(e){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:r}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var ln=(0,c.Z)(on)},90211:function(n,e,r){"use strict";r.d(e,{RA:function(){return a},kC:function(){return d},vg:function(){return b},kE:function(){return I},Mp:function(){return f},Pb:function(){return c},HW:function(){return j},wX:function(){return v},x6:function(){return m},_6:function(){return h},zf:function(){return x},Y6:function(){return y},wE:function(){return N},J3:function(){return p},We:function(){return s},QV:function(){return Z},C5:function(){return g}});var t=r(75582),i=r(17717),o=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],l=(r(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),u=r(24224);function c(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function s(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function a(n){return n.split(" ").join("_")}function d(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function f(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function v(n){return n.charAt(0).toLowerCase()+n.slice(1)}function m(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),r=(0,t.Z)(e,2),i=r[0],o=r[1],l=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return o?"".concat(l,".").concat(o):l}function h(n,e){var r,t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=e,o=void 0!==i&&null!==i;if(o||(i=2),1===i)r=n;else{var l=n.length,u=n[l-1];r="y"===u&&"day"!==n?"".concat(n.slice(0,l-1),"ies"):"".concat(n,"s"===u?"es":"s")}if(o){var c=t?m(i):i;return"".concat(c," ").concat(r)}return r}function p(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function g(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function b(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return d(p(n.toLowerCase()))}function x(n){var e,r=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return r.forEach((function(i,o){if(!e){var l=(0,t.Z)(i,2),u=l[0],c=l[1],s=r.slice(0,o).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(c)*s&&(e=h(u,Math.round(n/s)))}})),e}function j(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function Z(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=Math.pow(10,e);return Math.round((n||0)*r)/r}function y(){return"".concat((0,u.mp)(o)," ").concat((0,u.mp)(l))}function I(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function N(n){var e,r=n.split(i.sep),t=r[r.length-1].split(".");return e=1===t.length?t[0]:t.slice(0,-1).join("."),r.slice(0,r.length-1).concat(e).join(i.sep)}},59416:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/syncs",function(){return r(89745)}])}},function(n){n.O(0,[844,9902,1424,1005,7815,547,9774,2888,179],(function(){return e=59416,n(n.s=e);var e}));var e=n.O();_N_E=e}]);