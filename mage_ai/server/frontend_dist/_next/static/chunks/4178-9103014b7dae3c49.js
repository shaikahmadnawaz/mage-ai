"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4178],{65597:function(n,e,t){t.d(e,{f:function(){return c}});var r=t(9518),i=t(23831),o=t(49125),u=t(73942),c=r.default.div.withConfig({displayName:"Tablestyle__PopupContainerStyle",componentId:"sc-8ammqd-0"})(["position:absolute;max-height:","px;z-index:10;border-radius:","px;padding:","px;"," "," "," ",""],58*o.iI,u.TR,2*o.iI,(function(n){return"\n    box-shadow: ".concat((n.theme.shadow||i.Z.shadow).popup,";\n    background-color: ").concat((n.theme.interactive||i.Z.interactive).defaultBackground,";\n  ")}),(function(n){return n.leftOffset&&"\n    left: ".concat(n.leftOffset,"px;\n  ")}),(function(n){return n.topOffset&&"\n    top: ".concat(n.topOffset,"px;\n  ")}),(function(n){return n.width&&"\n    width: ".concat(n.width,"px;\n  ")}))},97496:function(n,e,t){var r=t(75582),i=t(12691),o=t.n(i),u=t(34376),c=t.n(u),l=t(82684),s=t(83455),a=t(60328),d=t(47999),p=t(93461),f=t(67971),h=t(10919),g=t(47409),m=t(86673),j=t(54283),x=t(58180),b=t(19711),Z=t(82531),v=t(23831),_=t(73942),C=t(10503),I=t(65597),E=t(93348),O=t(45838),y=t(49125),P=t(42305),w=t(19395),D=t(9736),k=t(96510),S=t(28598);function A(n){var e=n.cancelingRunId,t=n.disabled,i=n.isLoadingCancelPipeline,o=n.onCancel,u=n.onSuccess,c=n.pipelineRun,p=n.setCancelingRunId,h=n.setErrors,x=n.setShowConfirmationId,O=n.showConfirmationId,w=(0,D.Ct)(),A=c||{},N=A.id,T=A.pipeline_schedule_id,L=A.pipeline_schedule_token,R=A.pipeline_schedule_type,V=A.status,M=i&&N===e&&g.V.RUNNING===V,Y=(0,s.Db)(E.Xm.API===R&&L?Z.ZP.pipeline_runs.pipeline_schedules.useCreateWithParent(T,L):Z.ZP.pipeline_runs.pipeline_schedules.useCreate(T),{onSuccess:function(n){return(0,k.wD)(n,{callback:function(){u()},onErrorCallback:function(n,e){return null===h||void 0===h?void 0:h({errors:e,response:n})}})}}),U=(0,r.Z)(Y,1)[0],F=(0,l.useCallback)((function(){x(null),U({pipeline_run:{execution_date:(0,P.d$)((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0}),pipeline_schedule_id:null===c||void 0===c?void 0:c.pipeline_schedule_id,pipeline_uuid:null===c||void 0===c?void 0:c.pipeline_uuid,variables:null===c||void 0===c?void 0:c.variables}})}),[U,c,x]),H=(0,l.useCallback)((function(){x(null),p(N),o({id:N,status:g.V.CANCELLED})}),[o,N,p,x]);return(0,S.jsxs)("div",{style:{position:"relative"},children:[(0,S.jsx)(a.Z,{backgroundColor:M&&v.Z.accent.yellow,beforeIcon:g.V.INITIAL!==V&&!t&&(0,S.jsxs)(S.Fragment,{children:[g.V.COMPLETED===V&&(0,S.jsx)(C.Jr,{size:2*y.iI}),[g.V.FAILED,g.V.CANCELLED].includes(V)&&(0,S.jsx)(C.Py,{inverted:g.V.CANCELLED===V&&!w,size:2*y.iI}),[g.V.RUNNING].includes(V)&&(0,S.jsx)(j.Z,{color:M?v.Z.status.negative:v.Z.monotone.white,small:!0})]}),borderRadius:_.D7,danger:g.V.FAILED===V&&!w,default:g.V.INITIAL===V,disabled:t||w,loading:!c,onClick:function(){return x(N)},padding:"6px",primary:g.V.RUNNING===V&&!M&&!w,warning:g.V.CANCELLED===V&&!w,children:t?"Ready":M?"Canceling":g.D[V]}),(0,S.jsx)(d.Z,{onClickOutside:function(){return x(null)},open:O===N,children:(0,S.jsxs)(I.f,{children:[[g.V.RUNNING,g.V.INITIAL].includes(V)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(b.ZP,{bold:!0,color:"#9ECBFF",children:"Run is in progress"}),(0,S.jsx)(m.Z,{mb:1}),(0,S.jsxs)(b.ZP,{children:["This pipeline run is currently ongoing. Retrying will cancel",(0,S.jsx)("br",{}),"the current pipeline run."]}),(0,S.jsx)(b.ZP,{}),(0,S.jsx)(m.Z,{mt:1,children:(0,S.jsxs)(f.Z,{children:[(0,S.jsx)(a.Z,{onClick:function(){H(),F()},children:"Retry run"}),(0,S.jsx)(m.Z,{ml:1}),(0,S.jsx)(a.Z,{onClick:H,children:"Cancel run"})]})})]}),[g.V.CANCELLED,g.V.FAILED,g.V.COMPLETED].includes(V)&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(b.ZP,{bold:!0,color:"#9ECBFF",children:["Run ",V]}),(0,S.jsx)(m.Z,{mb:1}),(0,S.jsx)(b.ZP,{children:"Retry the run with changes you have made to the pipeline."}),(0,S.jsx)(m.Z,{mb:1}),(0,S.jsx)(a.Z,{onClick:F,children:"Retry run"})]})]})})]})}e.Z=function(n){var e=n.disableRowSelect,t=n.emptyMessage,i=void 0===t?"No runs available":t,u=n.fetchPipelineRuns,d=n.onClickRow,j=n.pipelineRuns,v=n.selectedRun,I=n.setErrors,E=(0,l.useState)(null),P=E[0],D=E[1],N=(0,l.useState)(null),T=N[0],L=N[1],R=(0,s.Db)((function(n){var e=n.id,t=n.status;return Z.ZP.pipeline_runs.useUpdate(e)({pipeline_run:{status:t}})}),{onSuccess:function(n){return(0,k.wD)(n,{callback:function(){D(null),u()},onErrorCallback:function(n,e){D(null),null===I||void 0===I||I({errors:e,response:n})}})}}),V=(0,r.Z)(R,2),M=V[0],Y=V[1].isLoading,U=[null,1,2,1,1,null],F=[{uuid:"Status"},{uuid:"Pipeline UUID"},{uuid:"Date"},{uuid:"Trigger"},{uuid:"Block runs"},{uuid:"Completed"},{uuid:"Logs"}];return!e&&d&&(U.push(null),F.push({label:function(){return""},uuid:"action"})),(0,S.jsx)(O.cl,{minHeight:30*y.iI,overflowVisible:!!T,children:0===(null===j||void 0===j?void 0:j.length)?(0,S.jsx)(m.Z,{px:3,py:1,children:(0,S.jsx)(b.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:i})}):(0,S.jsx)(x.Z,{columnFlex:U,columns:F,isSelectedRow:function(n){return!e&&j[n].id===(null===v||void 0===v?void 0:v.id)},onClickRow:e?null:d,rowVerticalPadding:6,rows:null===j||void 0===j?void 0:j.map((function(n,t){var r=n.block_runs_count,i=n.completed_at,l=n.execution_date,s=n.id,x=n.pipeline_schedule_id,Z=n.pipeline_schedule_name,v=n.pipeline_uuid,E=n.status,O=!s&&!E,k=[];return k=t>0&&j[t-1].execution_date===n.execution_date&&j[t-1].pipeline_schedule_id===n.pipeline_schedule_id?[(0,S.jsx)(m.Z,{ml:1,children:(0,S.jsxs)(f.Z,{alignItems:"center",children:[(0,S.jsx)(C.TT,{size:2*y.iI,useStroke:!0}),(0,S.jsx)(a.Z,{borderRadius:_.D7,notClickable:!0,padding:"6px",children:(0,S.jsx)(b.ZP,{muted:!0,children:g.D[E]})})]})},"row_status"),(0,S.jsx)(b.ZP,{default:!0,monospace:!0,muted:!0,children:v},"row_pipeline_uuid"),(0,S.jsx)(b.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_date_retry"),(0,S.jsx)(b.ZP,{default:!0,monospace:!0,muted:!0,children:"-"},"row_trigger_retry"),(0,S.jsx)(o(),{as:"/pipelines/".concat(v,"/runs/").concat(s),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,S.jsx)(h.Z,{bold:!0,muted:!0,children:"See block runs (".concat(r,")")})},"row_block_runs"),(0,S.jsx)(b.ZP,{monospace:!0,muted:!0,children:i&&(0,w.eI)(i).toISOString().split(".")[0]||"-"},"row_completed"),(0,S.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(v,"/logs?pipeline_run_id[]=").concat(s))},children:(0,S.jsx)(C.B4,{default:!0,size:2*y.iI})},"row_logs")]:[(0,S.jsx)(A,{cancelingRunId:P,disabled:O,isLoadingCancelPipeline:Y,onCancel:M,onSuccess:u,pipelineRun:n,setCancelingRunId:D,setErrors:I,setShowConfirmationId:L,showConfirmationId:T},"row_retry_button"),(0,S.jsx)(b.ZP,{default:!0,monospace:!0,children:v},"row_pipeline_uuid"),(0,S.jsx)(b.ZP,{default:!0,monospace:!0,children:l&&(0,w.eI)(l).toISOString().split(".")[0]||"-"},"row_date"),(0,S.jsx)(o(),{as:"/pipelines/".concat(v,"/triggers/").concat(x),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,S.jsx)(h.Z,{bold:!0,sameColorAsText:!0,children:Z})},"row_trigger"),(0,S.jsx)(o(),{as:"/pipelines/".concat(v,"/runs/").concat(s),href:"/pipelines/[pipeline]/runs/[run]",passHref:!0,children:(0,S.jsx)(h.Z,{bold:!0,disabled:O,sameColorAsText:!0,children:O?"":"See block runs (".concat(r,")")})},"row_block_runs"),(0,S.jsx)(b.ZP,{default:!0,monospace:!0,children:i&&(0,w.eI)(i).toISOString().split(".")[0]||"-"},"row_completed"),(0,S.jsx)(a.Z,{default:!0,disabled:O,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(v,"/logs?pipeline_run_id[]=").concat(s))},children:(0,S.jsx)(C.B4,{default:!0,size:2*y.iI})},"row_item_13")],!e&&d&&k.push((0,S.jsx)(p.Z,{flex:1,justifyContent:"flex-end",children:(0,S.jsx)(C._Q,{default:!0,size:2*y.iI})})),k})),uuid:"pipeline-runs"})})}},19395:function(n,e,t){t.d(e,{IJ:function(){return a},Vx:function(){return p},eI:function(){return d},gU:function(){return h},tL:function(){return f},vJ:function(){return g}});var r,i,o=t(82394),u=t(92083),c=t.n(u);function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n){return null===n||void 0===n?void 0:n.reduce((function(n,e){var t=e.block_uuid,r=e.completed_at,i=e.started_at,u=e.status,l=null;i&&r&&(l=c()(r).valueOf()-c()(i).valueOf());return s(s({},n),{},(0,o.Z)({},t,{runtime:l,status:u}))}),{})}function d(n){if(!n)return null;var e=new Date(c()(n).valueOf()),t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());return new Date(t)}function p(n){return d(n).toISOString().split(".")[0]}!function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.SECOND="second"}(i||(i={}));var f=(r={},(0,o.Z)(r,i.DAY,86400),(0,o.Z)(r,i.HOUR,3600),(0,o.Z)(r,i.MINUTE,60),(0,o.Z)(r,i.SECOND,1),r);function h(n){var e=i.SECOND,t=n;return n%86400===0?(t/=86400,e=i.DAY):n%3600===0?(t/=3600,e=i.HOUR):n%60===0&&(t/=60,e=i.MINUTE),{time:t,unit:e}}function g(n,e){return n*f[e]}},51099:function(n,e,t){t.d(e,{Q:function(){return a}});t(82684);var r=t(60328),i=t(67971),o=t(86673),u=t(10503),c=t(73899),l=t(49125),s=t(28598),a=22;e.Z=function(n){var e=n.page,t=n.maxPages,a=n.onUpdate,d=n.totalPages,p=[],f=t;if(f>d)p=Array.from({length:d},(function(n,e){return e}));else{var h=Math.floor(f/2),g=e-h;e+h>=d?(g=d-f+2,f-=2):e-h<=0?(g=0,f-=2):(f-=4,g=e-Math.floor(f/2)),p=Array.from({length:f},(function(n,e){return e+g}))}return(0,s.jsx)(s.Fragment,{children:d>0&&(0,s.jsxs)(i.Z,{alignItems:"center",children:[(0,s.jsx)(r.Z,{disabled:0===e,onClick:function(){return a(e-1)},children:(0,s.jsx)(u.Hd,{size:1.5*l.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(n){return(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){n!==e&&a(n)},notClickable:n===e,backgroundColor:n===e&&c.a$,borderLess:!0,noBackground:!0,children:n+1})},n)})),!p.includes(d-1)&&(0,s.jsxs)(s.Fragment,{children:[!p.includes(d-2)&&(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,s.jsx)(o.Z,{ml:1,children:(0,s.jsx)(r.Z,{onClick:function(){return a(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,s.jsx)(o.Z,{ml:1}),(0,s.jsx)(r.Z,{disabled:e===d-1,onClick:function(){return a(e+1)},children:(0,s.jsx)(u.Kw,{size:1.5*l.iI,stroke:"#AEAEAE"})})]})})}},47409:function(n,e,t){t.d(e,{D:function(){return u},V:function(){return o}});var r,i=t(82394),o=t(66050).V,u=(r={},(0,i.Z)(r,o.CANCELLED,"Cancelled"),(0,i.Z)(r,o.COMPLETED,"Done"),(0,i.Z)(r,o.FAILED,"Failed"),(0,i.Z)(r,o.INITIAL,"Ready"),(0,i.Z)(r,o.RUNNING,"Running"),r)},93348:function(n,e,t){t.d(e,{TR:function(){return d},U5:function(){return l},Xm:function(){return o},Z4:function(){return a},fq:function(){return c},kJ:function(){return s}});var r,i,o,u=t(82394);!function(n){n.API="api",n.EVENT="event",n.TIME="time"}(o||(o={}));var c,l,s,a=(r={},(0,u.Z)(r,o.API,(function(){return"API"})),(0,u.Z)(r,o.EVENT,(function(){return"event"})),(0,u.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive"}(c||(c={})),function(n){n.ONCE="@once",n.HOURLY="@hourly",n.DAILY="@daily",n.WEEKLY="@weekly",n.MONTHLY="@monthly"}(l||(l={})),function(n){n.CREATED_AT="created_at",n.NAME="name",n.PIPELINE="pipeline_uuid",n.STATUS="status",n.TYPE="schedule_type"}(s||(s={}));var d=(i={},(0,u.Z)(i,s.CREATED_AT,"Created at"),(0,u.Z)(i,s.NAME,"Name"),(0,u.Z)(i,s.PIPELINE,"Pipeline"),(0,u.Z)(i,s.STATUS,"Status"),(0,u.Z)(i,s.TYPE,"Type"),i)},42305:function(n,e,t){t.d(e,{A5:function(){return p},AY:function(){return f},BP:function(){return d},JX:function(){return a},OC:function(){return o},Pc:function(){return h},Tz:function(){return s},d$:function(){return l},lJ:function(){return g},n1:function(){return c}});var r=t(92083),i=t.n(r),o="YYYY-MM-DD HH:mm:ss",u="YYYY-MM-DD HH:mm",c="YYYY-MM-DD";function l(n,e){var t=e.dayAgo,r=e.includeSeconds,c=e.utcFormat,l=i()(n),s=u;return c&&(l=l.utc()),t&&(l=l.subtract(1,"days")),r&&(s=o),l.format(s)}function s(n){var e=l((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==n&&void 0!==n&&n.dateObj?new Date(e):e}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i().unix(n).format(null!==e&&void 0!==e&&e.withSeconds?o:u)}function d(n,e,t){return i()(n).utc().hours(+e).minutes(+t).format()}function p(n){return i()(n).unix()}function f(n,e,t){return"".concat(n.toISOString().split("T")[0]," ").concat(e,":").concat(t)}function h(n){var e=i().unix(+n).utc();return{date:e.toDate(),hour:String(e.hour()),minute:String(e.minute())}}function g(n){return n.padStart(2,"0")}},33766:function(n,e,t){t.d(e,{g_:function(){return p},u7:function(){return d}});var r=t(75582),i=t(82394),o=t(34376),u=t.n(o),c=t(59e3),l=t(24224);function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.replaceParams,o=t.pushHistory,l=i?{}:(0,c.iV)();e=window.location.pathname;var s=o?u().push:u().replace,d=a(a({},l),n);Object.entries(n).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1];"undefined"!==typeof i&&null!==i||delete d[t]}));var p=(0,c.uM)(d);p.length>=1&&(p="?".concat(p));var f="".concat(e.split("?")[0]).concat(p);return s(u().router.pathname,f,{shallow:!0})}function p(n,e,t){var i=t.addingMultipleValues,o=t.isList,u=t.itemsPerPage,c=t.pushHistory,s=void 0!==c&&c,p=t.resetLimitParams,f=a({},n);i?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1];if(Array.isArray(i)){var o="".concat(t,"[]");f[o]=i.map(String)}})):o?Object.entries(e).forEach((function(n){var e=(0,r.Z)(n,2),t=e[0],i=e[1],o=String(i),u="".concat(t,"[]"),c=f[u];c&&Array.isArray(c)?(c=c.map(String)).includes(o)?f[u]=(0,l.Od)(c,(function(n){return n===o})):f[u]=c.concat(o):f[u]=[o]})):f=a(a({},f),e),p&&(f._limit=u||20,f._offset=0),d(f,{pushHistory:s})}}}]);