(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8450],{16488:function(n,e,t){"use strict";t.d(e,{IJ:function(){return E},M8:function(){return P},Vx:function(){return _},XM:function(){return g},_U:function(){return v},eI:function(){return h},gU:function(){return T},lO:function(){return k},ri:function(){return m},tL:function(){return I},vJ:function(){return N},xH:function(){return O}});var r,i=t(82394),u=t(92083),o=t.n(u),c=t(3917),l=t(4383),a=t(30229),s=t(42122),f=t(86735);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var v=function(n){return!!n&&!Object.values(a.U5).includes(n)};function E(n){return null===n||void 0===n?void 0:n.reduce((function(n,e){var t=e.block_uuid,r=e.completed_at,u=e.started_at,c=e.status,l=null;u&&r&&(l=o()(r).valueOf()-o()(u).valueOf());return p(p({},n),{},(0,i.Z)({},t,{runtime:l,status:c}))}),{})}var b,m=function(n){var e=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return n?e.slice(0,1):e};function O(n){var e=(0,s.gR)(n,[a.gm.INTERVAL,a.gm.TYPE]),t=n[a.gm.INTERVAL];t&&(e["schedule_interval[]"]=encodeURIComponent(t));var r=n[a.gm.TYPE];return r&&(e["schedule_type[]"]=r),e}function h(n){if(!n)return null;var e=new Date(o()(n).valueOf()),t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());return new Date(t)}function _(n){return"string"!==typeof n?n:h(n.split("+")[0]).toISOString().split(".")[0]}!function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.SECOND="second"}(b||(b={}));var I=(r={},(0,i.Z)(r,b.DAY,86400),(0,i.Z)(r,b.HOUR,3600),(0,i.Z)(r,b.MINUTE,60),(0,i.Z)(r,b.SECOND,1),r);function T(n){var e=b.SECOND,t=n;return n%86400===0?(t/=86400,e=b.DAY):n%3600===0?(t/=3600,e=b.HOUR):n%60===0&&(t/=60,e=b.MINUTE),{time:t,unit:e}}function N(n,e){return n*I[e]}function g(n,e,t){var r="".concat(n.toISOString().split("T")[0]," ").concat(null===e||void 0===e?void 0:e.hour,":").concat(null===e||void 0===e?void 0:e.minute);if(null!==t&&void 0!==t&&t.includeSeconds&&(r=r.concat(":00")),null!==t&&void 0!==t&&t.localTimezone){var i=o()(n);i.set("hour",+(null===e||void 0===e?void 0:e.hour)||0),i.set("minute",+(null===e||void 0===e?void 0:e.minute)||0),i.set("second",0),r=i.format(c.lE),null!==t&&void 0!==t&&t.convertToUtc&&(r=(0,c.d$)(r,{includeSeconds:null===t||void 0===t?void 0:t.includeSeconds,utcFormat:!0}))}return r}function P(n){var e,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="",i=!0;return i&&(t?r="".concat(window.origin,"/api/pipeline_schedules/").concat(null===n||void 0===n?void 0:n.id,"/api_trigger"):(r="".concat(window.origin,"/api/pipeline_schedules/").concat(null===n||void 0===n?void 0:n.id,"/pipeline_runs"),null!==n&&void 0!==n&&n.token&&(r="".concat(r,"/").concat(n.token)))),i&&(e=window.location.port)&&(r=r.replace(e,l.QT)),r}function y(n,e,t){return n.match(/[*,-/]/)?{additionalOffset:0,cronValue:n}:function(n,e,t){var r=t.indexOf(n),i=0;if(e<0)for(var u=0;u>e;u--)0===r?(r=t.length-1,i-=1):r-=1;else if(e>0)for(var o=0;o<e;o++)r===t.length-1?(r=0,i+=1):r+=1;return{additionalOffset:i,cronValue:String(t[r]||n)}}(+n,e,t)}var A=(0,f.m5)(60),j=(0,f.m5)(24),w=(0,c.Cs)();function k(n,e){if(!n)return n;var t=o()().local().format("Z"),r=t.split(":"),i="-"===t[0],u=3===r[0].length?Number(r[0].slice(1)):Number(r[0]),c=Number(r[1]);(i&&!e||!i&&e)&&(u=-u,c=-c);var l=n.split(" "),a=l[0],s=l[1],f=l[2],d=y(a,c,A),p=y(s,u+d.additionalOffset,j);if(l[0]=d.cronValue,l[1]=p.cronValue,0!==(null===p||void 0===p?void 0:p.additionalOffset)){var v=y(f,p.additionalOffset,w);l[2]=v.cronValue}return l.join(" ")}},70320:function(n,e,t){"use strict";t.d(e,{h:function(){return o},q:function(){return u}});var r=t(78419),i=t(53808);function u(){return(0,i.U2)(r.am,null)||!1}function o(n){return"undefined"!==typeof n&&(0,i.t8)(r.am,n),n}},83641:function(n,e,t){"use strict";t.d(e,{I7:function(){return r},IB:function(){return l},VV:function(){return u},_7:function(){return o},rn:function(){return c}});var r,i=t(41143),u="datetime",o="code",c=i.V;!function(n){n.SECOND="second",n.MINUTE="minute",n.HOUR="hour",n.DAY="day",n.WEEK="week",n.MONTH="month",n.YEAR="year",n.CUSTOM="custom"}(r||(r={}));var l=[r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},41143:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running",n.UPSTREAM_FAILED="upstream_failed",n.CONDITION_FAILED="condition_failed"}(r||(r={}))},44265:function(n,e,t){"use strict";t.d(e,{Az:function(){return a},BF:function(){return l},Do:function(){return f},IK:function(){return c},P0:function(){return i},VO:function(){return o},sZ:function(){return s}});var r,i,u=t(82394),o=t(41143).V,c=[o.FAILED,o.COMPLETED,o.RUNNING,o.CANCELLED,o.INITIAL],l=[o.INITIAL,o.RUNNING],a=[o.CANCELLED,o.COMPLETED,o.FAILED],s="__mage_variables",f=(r={},(0,u.Z)(r,o.CANCELLED,"Cancelled"),(0,u.Z)(r,o.COMPLETED,"Done"),(0,u.Z)(r,o.FAILED,"Failed"),(0,u.Z)(r,o.INITIAL,"Ready"),(0,u.Z)(r,o.RUNNING,"Running"),r);!function(n){n.PIPELINE_UUID="pipeline_uuid[]",n.STATUS="status[]",n.TAG="pipeline_tag[]"}(i||(i={}))},30229:function(n,e,t){"use strict";t.d(e,{TR:function(){return p},U5:function(){return l},Wb:function(){return d},Xm:function(){return u},Z4:function(){return a},fq:function(){return c},gm:function(){return s},kJ:function(){return f}});var r,i,u,o=t(82394);!function(n){n.API="api",n.EVENT="event",n.TIME="time"}(u||(u={}));var c,l,a=(r={},(0,o.Z)(r,u.API,(function(){return"API"})),(0,o.Z)(r,u.EVENT,(function(){return"event"})),(0,o.Z)(r,u.TIME,(function(){return"schedule"})),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive"}(c||(c={})),function(n){n.ONCE="@once",n.HOURLY="@hourly",n.DAILY="@daily",n.WEEKLY="@weekly",n.MONTHLY="@monthly",n.ALWAYS_ON="@always_on"}(l||(l={}));var s,f,d=[l.ONCE,l.HOURLY,l.DAILY,l.WEEKLY,l.MONTHLY];!function(n){n.INTERVAL="frequency[]",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(s||(s={})),function(n){n.CREATED_AT="created_at",n.NAME="name",n.PIPELINE="pipeline_uuid",n.STATUS="status",n.TYPE="schedule_type"}(f||(f={}));var p=(i={},(0,o.Z)(i,f.CREATED_AT,"Created at"),(0,o.Z)(i,f.NAME,"Name"),(0,o.Z)(i,f.PIPELINE,"Pipeline"),(0,o.Z)(i,f.STATUS,"Active"),(0,o.Z)(i,f.TYPE,"Type"),i)},11650:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Y}});var r=t(77837),i=t(75582),u=t(38860),o=t.n(u),c=t(82684),l=t(69864),a=t(34376),s=t(82394),f=t(12691),d=t.n(f),p=t(83641),v=t(71180),E=t(48670),b=t(75499),m=t(30160),O=t(72473),h=t(44265),_=t(81655),I=t(70515),T=t(3917),N=t(16488),g=t(50178),P=t(70320),y=t(28598);function A(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function j(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?A(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var w=function(n){var e=n.models,t=n.onClickRow,r=n.pipeline,i=n.selectedRow,u=(0,g.Ct)(),o=(0,P.q)(),c=null===r||void 0===r?void 0:r.uuid,l=o?_.O$:{},a=[{uuid:"Status"},{uuid:"Name"},{uuid:"Type"},{uuid:"Runs"},j(j({},l),{},{uuid:"Backfill"}),j(j({},l),{},{uuid:"Started at"}),j(j({},l),{},{uuid:"Completed at"})];return u||a.push({label:function(){return""},uuid:"edit"}),(0,y.jsx)(b.Z,{columnFlex:[null,1,null,null,null,1,1,null],columns:a,isSelectedRow:function(n){return e[n].id===(null===i||void 0===i?void 0:i.id)},onClickRow:function(n){return t(e[n])},rows:e.map((function(n,e){var t=n.block_uuid,r=n.completed_at,i=n.end_datetime,l=n.id,a=n.name,s=n.start_datetime,f=n.started_at,b=n.status,_=n.total_run_count,g=[(0,y.jsx)(m.ZP,{default:!0,monospace:!0,children:b||"inactive"},"status"),(0,y.jsx)(d(),{as:"/pipelines/".concat(c,"/backfills/").concat(l),href:"/pipelines/[pipeline]/backfills/[...slug]",passHref:!0,children:(0,y.jsx)(E.Z,{bold:!0,sameColorAsText:!0,children:a})},"name"),(0,y.jsx)(m.ZP,{default:!0,monospace:!0,children:t?p._7:p.VV},"type"),(0,y.jsx)(m.ZP,{default:!0,monospace:!0,children:_||0},"runs"),(0,y.jsxs)(m.ZP,{default:!0,monospace:!0,small:!0,children:[s&&i&&(0,y.jsxs)(y.Fragment,{children:[o?(0,T.XG)(s,o):(0,N.Vx)(s),"\xa0-\xa0",o?(0,T.XG)(i,o):(0,N.Vx)(i)]}),!(s&&i)&&(0,y.jsx)(y.Fragment,{children:"\u2014"})]},"backfill"),(0,y.jsx)(m.ZP,{default:!0,monospace:!0,small:!0,title:f?(0,T._6)(f):null,children:f?o?(0,T.XG)(f,o):(0,N.Vx)(f):(0,y.jsx)(y.Fragment,{children:"\u2014"})},"started_at"),(0,y.jsx)(m.ZP,{default:!0,monospace:!0,small:!0,title:r?(0,T._6)(r):null,children:r?o?(0,T.XG)(r,o):(0,N.Vx)(r):(0,y.jsx)(y.Fragment,{children:"\u2014"})},"completed_at")];return u||g.push((0,y.jsx)(v.Z,{default:!0,disabled:b===h.VO.COMPLETED,iconOnly:!0,linkProps:{as:"/pipelines/".concat(c,"/backfills/").concat(l,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noBackground:!0,title:"Edit",children:(0,y.jsx)(O.I8,{default:!0,size:2*I.iI})},"".concat(e,"_edit_button"))),g})),uuid:"pipeline-runs"})},k=t(93369),D=t(75457),Z=t(93808),C=t(38276),L=t(35686),S=t(28795),x=t(15610),R=t(72619),U=t(69419),M=t(81728);function V(n){var e=n.pipeline,t=(0,a.useRouter)(),r=e.uuid,u=L.ZP.backfills.list({_limit:20,_offset:0,include_run_count:!0,pipeline_uuid:r},{refreshInterval:6e4}).data,o=(0,c.useMemo)((function(){return(null===u||void 0===u?void 0:u.backfills)||[]}),[u]),s=(0,U.iV)(),f=(0,c.useState)(null),d=f[0],p=f[1],v=(0,c.useState)(null),E=v[0],b=v[1];(0,c.useEffect)((function(){null!==s&&void 0!==s&&s.backfill_id?p(null===o||void 0===o?void 0:o.find((function(n){return n.id===Number(s.backfill_id)}))):d&&p(null)}),[o,s,d]);var h=(0,c.useMemo)((function(){var n="/pipelines/".concat(r,"/backfills"),e=[{label:function(){return"Backfills"},linkProps:d?{as:n,href:"/pipelines/[pipeline]/backfills"}:null}];return d&&e.push({label:function(){return d.name}}),e}),[r,d]),_=(0,l.Db)(L.ZP.backfills.pipelines.useCreate(r),{onSuccess:function(n){return(0,R.wD)(n,{callback:function(n){var e=n.backfill.id;t.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(r,"/backfills/").concat(e,"/edit"))},onErrorCallback:function(n,e){return b({errors:e,response:n})}})}}),T=(0,i.Z)(_,2),N=T[0],g=T[1].isLoading;return(0,y.jsxs)(D.Z,{breadcrumbs:h,errors:E,pageName:S.M.BACKFILLS,pipeline:e,setErrors:b,title:function(n){var e=n.name;return"".concat(e," backfills")},uuid:"".concat(S.M.BACKFILLS,"_").concat(r),children:[(0,y.jsx)(C.Z,{p:I.cd,children:(0,y.jsx)(k.ZP,{beforeElement:(0,y.jsx)(O.mm,{size:2.5*I.iI}),blackBorder:!0,inline:!0,loading:g,noHoverUnderline:!0,onClick:function(){return N({backfill:{name:(0,M.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/Backfills/add_new_backfill",children:"Create new backfill"})}),o&&0===o.length&&(0,y.jsx)(C.Z,{p:I.cd,children:(0,y.jsx)(m.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No backfills available"})}),(null===o||void 0===o?void 0:o.length)>=1&&(0,y.jsx)(w,{models:o,onClickRow:function(n){var e=n.id;return(0,x.u7)({backfill_id:e})},pipeline:e,selectedRow:d})]})}V.getInitialProps=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var Y=(0,Z.Z)(V)},37459:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills",function(){return t(11650)}])},80022:function(n,e,t){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},15544:function(n,e,t){"use strict";function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},99177:function(n,e,t){"use strict";function r(n,e){return r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},r(n,e)}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}t.d(e,{Z:function(){return i}})},93189:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(12539),i=t(80022);function u(n,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(n)}}},function(n){n.O(0,[844,5716,8013,600,4636,8264,6833,5499,5457,9774,2888,179],(function(){return e=37459,n(n.s=e);var e}));var e=n.O();_N_E=e}]);