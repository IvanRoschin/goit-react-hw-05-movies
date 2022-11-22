"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{5811:function(n,t,e){e.d(t,{Au:function(){return p},dh:function(){return f},m4:function(){return d},v0:function(){return x},xl:function(){return l}});var r,a,u,c,o,i=e(168),s=e(6444),p=s.ZP.ul(r||(r=(0,i.Z)(["\n  margin-top: 16px;\n  margin-bottom: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  list-style: none;\n"]))),f=s.ZP.li(a||(a=(0,i.Z)(["\n  margin-bottom: 16px;\n"]))),d=s.ZP.img(u||(u=(0,i.Z)(["\n  box-shadow: 0px 3px 4px 1px rgba(44, 133, 200, 0.2);\n  max-width: 200px;\n  height: 300px;\n  margin-bottom: 6px;\n"]))),l=s.ZP.p(c||(c=(0,i.Z)(["\n  font-weight: 500;\n  text-align: center;\n  max-width: 200px;\n"]))),x=s.ZP.div(o||(o=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 16px;\n  font-size: 16px;\n  font-weight: 700;\n"])))},4387:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,a=e(5861),u=e(885),c=e(7757),o=e.n(c),i=e(7689),s=e(2791),p=e(2611),f=e(336),d=e(168),l=e(6444).ZP.ul(r||(r=(0,d.Z)(["\n  margin-top: 16px;\n  margin-bottom: 16px;\n  justify-content: center;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),x=e(5811),v=e(184),h=function(){var n=(0,s.useState)(f.q.IDLE),t=(0,u.Z)(n,2),e=t[0],r=t[1],c=(0,s.useState)([]),d=(0,u.Z)(c,2),h=d[0],m=d[1],g=(0,i.UO)().movieId;return(0,s.useEffect)((function(){function n(){return(n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(f.q.PENDING),n.prev=1,n.next=4,(0,p.tx)(g);case 4:t=n.sent,m(t),r(f.q.RESOLVED),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),r(f.q.REJECTED),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}g&&function(){n.apply(this,arguments)}()}),[g]),(0,v.jsxs)(v.Fragment,{children:["pending"===e,"resolved"===e&&(0,v.jsx)(l,{children:h.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{children:e}),(0,v.jsxs)("p",{children:["`",r,"`"]})]},t)}))}),"rejected"===e&&(0,v.jsx)(x.v0,{children:"Sorry! Reviews not found"})]})}},2611:function(n,t,e){e.d(t,{ts:function(){return f},M1:function(){return l},tx:function(){return x},gH:function(){return d},Hg:function(){return p}});var r=e(5861),a=e(7757),u=e.n(a),c=e(4569),o=e.n(c),i="7b857fa55c7b70b9ad8d603bfe522c1c",s=e(3152);o().defaults.baseURL=s.Rh;var p=function(){var n=(0,r.Z)(u().mark((function n(){var t,e,r=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,n.next=3,o().get("/trending/movie/day?api_key=".concat(i,"&page=").concat(t));case 3:return e=n.sent,n.abrupt("return",e.data);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t));case 2:if(e=n.sent,0!==(r=e.data).total_results){n.next=8;break}return n.abrupt("return",Promise.reject(new Error("Ooops! No images with ".concat(t))));case 8:return n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:if(0!==(e=n.sent).data.cast.length){n.next=7;break}return n.abrupt("return",Promise.reject(new Error("No cast was found.")));case 7:return n.abrupt("return",e.data.cast);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:if(0!==(e=n.sent).data.total_results){n.next=7;break}return n.abrupt("return",Promise.reject(new Error("No reviews was found.")));case 7:return n.abrupt("return",e.data.results);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3152:function(n,t,e){e.d(t,{QN:function(){return c},Rh:function(){return r},cv:function(){return u},fh:function(){return a},nP:function(){return o}});var r="https://api.themoviedb.org/3",a="https://image.tmdb.org/t/p",u="/w500",c="/w300",o="/w200"},336:function(n,t,e){e.d(t,{q:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=387.d156358c.chunk.js.map