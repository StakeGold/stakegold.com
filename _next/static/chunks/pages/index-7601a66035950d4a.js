(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3540)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,r=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i,l=e.src,s=e.sizes,h=e.unoptimized,p=void 0!==h&&h,w=e.priority,j=void 0!==w&&w,k=e.loading,E=e.lazyRoot,I=e.lazyBoundary,O=e.className,R=e.quality,C=e.width,N=e.height,L=e.style,P=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,H=e.placeholder,W=void 0===H?"empty":H,B=e.blurDataURL,Z=c(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=d.useContext(m.ImageConfigContext),T=d.useMemo(function(){var e=v||D||f.imageConfigDefault,t=r(e.deviceSizes).concat(r(e.imageSizes)).sort(function(e,t){return e-t}),i=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:i})},[D]),V=s?"responsive":"intrinsic";"layout"in Z&&(Z.layout&&(V=Z.layout),delete Z.layout);var G=x;if("loader"in Z){if(Z.loader){var U=Z.loader;G=function(e){e.config;var t=c(e,["config"]);return U(t)}}delete Z.loader}var F="";if(function(e){var t;return"object"==typeof e&&(_(e)||void 0!==e.src)}(l)){var Q=_(l)?l.default:l;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(B=B||Q.blurDataURL,F=Q.src,(!V||"fill"!==V)&&(N=N||Q.height,C=C||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}l="string"==typeof l?l:F;var J=!j&&("lazy"===k||void 0===k);(l.startsWith("data:")||l.startsWith("blob:"))&&(p=!0,J=!1),b.has(l)&&(J=!1),T.unoptimized&&(p=!0);var X=o(d.useState(!1),2),K=X[0],Y=X[1],$=o(g.useIntersection({rootRef:void 0===E?null:E,rootMargin:I||"200px",disabled:!J}),3),ee=$[0],et=$[1],ei=$[2],en=!J||et,eo={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},er={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,el=S(C),es=S(N),ec=S(R),ed=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:P,objectPosition:q}),eu="blur"!==W||K?{}:{backgroundSize:P||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(B,'")')};if("fill"===V)eo.display="block",eo.position="absolute",eo.top=0,eo.left=0,eo.bottom=0,eo.right=0;else if(void 0!==el&&void 0!==es){var ef=es/el,eg=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===V?(eo.display="block",eo.position="relative",ea=!0,er.paddingTop=eg):"intrinsic"===V?(eo.display="inline-block",eo.position="relative",eo.maxWidth="100%",ea=!0,er.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(el,"%27%20height=%27").concat(es,"%27/%3e")):"fixed"===V&&(eo.display="inline-block",eo.position="relative",eo.width=el,eo.height=es)}var em={src:y,srcSet:void 0,sizes:void 0};en&&(em=z({config:T,src:l,unoptimized:p,layout:V,width:el,quality:ec,sizes:s,loader:G}));var eh=l,ep="imagesizes";ep="imageSizes";var ev=(n(i={},"imageSrcSet",em.srcSet),n(i,ep,em.sizes),n(i,"crossOrigin",Z.crossOrigin),i),eb=d.default.useLayoutEffect,ey=d.useRef(M),ew=d.useRef(l);d.useEffect(function(){ey.current=M},[M]),eb(function(){ew.current!==l&&(ei(),ew.current=l)},[ei,l]);var e_=a({isLazy:J,imgAttributes:em,heightInt:es,widthInt:el,qualityInt:ec,layout:V,className:O,imgStyle:ed,blurStyle:eu,loading:k,config:T,unoptimized:p,placeholder:W,loader:G,srcString:eh,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:en,noscriptSizes:s},Z);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:eo},ea?d.default.createElement("span",{style:er},t?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,d.default.createElement(A,Object.assign({},e_))),j?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+em.src+em.srcSet+em.sizes,rel:"preload",as:"image",href:em.srcSet?void 0:em.src},ev))):null)};var a=i(6495).Z,l=i(2648).Z,s=i(1598).Z,c=i(7273).Z,d=s(i(7294)),u=l(i(5443)),f=i(9309),g=i(7190),m=i(9977);i(3794);var h=i(2392);function p(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/stakegold.com/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,r=new URL("".concat(t.path).concat(p(i))),a=r.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),o&&a.set("q",o.toString()),r.href}],["cloudinary",function(e){var t,i=e.config,n=e.src,o=e.width,r=["f_auto","c_limit","w_"+o,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(i.path).concat(r).concat(p(n))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function _(e){return void 0!==e.default}function z(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var l=/(^|\s)(1?\d?\d)vw/g,s=[];c=l.exec(n);c)s.push(parseInt(c[2]));if(s.length){var c,d,u=.01*(d=Math).min.apply(d,r(s));return{widths:a.filter(function(e){return e>=o[0]*u}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:r(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,o,s),u=d.widths,f=d.kind,g=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map(function(e,n){return"".concat(c({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)}).join(", "),src:c({config:t,src:i,quality:l,width:u[g]})}}function S(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function x(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function j(e,t,i,n,o,r){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===n&&r(!0),null==o?void 0:o.current)){var i=e.naturalWidth,a=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:a})}}))}var A=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,r=e.className,l=e.imgStyle,s=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,h=e.config,p=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,w=e.setIntersection,_=e.onLoad,S=e.onError,x=(e.isVisible,e.noscriptSizes),A=c(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":o,className:r,style:a({},l,s),ref:d.useCallback(function(e){w(e),(null==e?void 0:e.complete)&&j(e,m,o,f,b,y)},[w,m,o,f,b,y,]),onLoad:function(e){j(e.currentTarget,m,o,f,b,y),_&&_(e)},onError:function(e){"blur"===f&&y(!0),S&&S(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,z({config:h,src:m,unoptimized:p,layout:o,width:i,quality:n,sizes:x,loader:v}),{decoding:"async","data-nimg":o,style:l,className:r,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,i=e.rootRef,c=e.rootMargin,d=e.disabled||!a,u=n(o.useState(!1),2),f=u[0],g=u[1],m=n(o.useState(null),2),h=m[0],p=m[1];return o.useEffect(function(){if(a){if(!d&&!f&&h&&h.tagName){var e,t,n,o,u,m,p;return t=function(e){return e&&g(e)},u=(o=function(e){var t,i={root:e.root||null,margin:e.rootMargin||""},n=s.find(function(e){return e.root===i.root&&e.margin===i.margin});if(n&&(t=l.get(n)))return t;var o=new Map;return t={id:i,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)})},e),elements:o},s.push(i),l.set(i,t),t}(n={root:null==i?void 0:i.current,rootMargin:c})).id,m=o.observer,(p=o.elements).set(h,t),m.observe(h),function(){if(p.delete(h),m.unobserve(h),0===p.size){m.disconnect(),l.delete(u);var e=s.findIndex(function(e){return e.root===u.root&&e.margin===u.margin});e>-1&&s.splice(e,1)}}}}else if(!f){var v=r.requestIdleCallback(function(){return g(!0)});return function(){return r.cancelIdleCallback(v)}}},[h,d,c,i,f]),[p,f,o.useCallback(function(){g(!1)},[])]};var o=i(7294),r=i(9311),a="function"==typeof IntersectionObserver,l=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3540:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var n=i(5893),o=i(9008),r=i.n(o),a=i(5675),l=i.n(a),s=i(214),c=i.n(s),d={src:"/stakegold.com/_next/static/media/stakegold_reversed.081a15f5.svg",height:365,width:600},u=function(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"StakeGold"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"stakegold_original.png"})]}),(0,n.jsx)("header",{className:c().header,children:(0,n.jsx)(l(),{src:d,alt:"logo",width:"150",height:"150"})}),(0,n.jsx)("main",{className:c().main,children:(0,n.jsx)("h1",{className:c().title,children:"Coming soon!"})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",header:"Home_header__GCVRv",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",logo:"Home_logo__27_tb"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);