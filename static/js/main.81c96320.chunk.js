(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(6),i=a(7),n=a(8),s=function(){function e(t){Object(i.a)(this,e),this.heap=[],this.visualize=!0,this.heap=[null],this.set=new Set(null),this.visualize=t}return Object(n.a)(e,[{key:"constructHeap",value:function(e){var t,a=Object(r.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;this.insert(i)}}catch(n){a.e(n)}finally{a.f()}}},{key:"copy",value:function(){if(this.visualize){var e,t=[],a=Object(r.a)(this.heap);try{for(a.s();!(e=a.n()).done;){var i=e.value;t.push(i)}}catch(n){a.e(n)}finally{a.f()}return t}}},{key:"insert",value:function(e){var t=[];if(!this.set.has(e)){this.heap.push(e),this.set.add(e);var a=this.copy();if(t.push({action:"oldarray",element:a}),this.heap.length>2)for(var r=this.heap.length-1;this.heap[r].distance<this.heap[Math.floor(r/2)].distance;)if(r>=1){var i=[this.heap[r],this.heap[Math.floor(r/2)]];this.heap[Math.floor(r/2)]=i[0],this.heap[r]=i[1];var n=this.copy();if(t.push({action:"swap",element1:Math.floor(r/2),element2:r,currentheap:n}),1===(r=Math.floor(r/2)))return t}return t}}},{key:"remove",value:function(){var e=[],t=this.copy();if(e.push({action:"oldarray",element:t}),this.heap.length>1){if(2===this.heap.length){var a=this.heap.pop(),r=this.copy();return e.push({action:"remove",element:0,currentheap:r}),{actions:e,result:a}}var i=this.heap[1];this.heap[1]=this.heap.pop();var n=this.copy();e.push({action:"remove",element:0,currentheap:n});var s=1,o=2*s,_=2*s+1;if(3===this.heap.length){if(this.heap[1].distance>this.heap[2].distance){var l=this.copy();e.push({action:"swap",element1:1,element2:2,currentheap:l});var c=[this.heap[2],this.heap[1]];this.heap[1]=c[0],this.heap[2]=c[1]}}else if(this.heap.length>2)for(;this.heap[s].distance>=this.heap[o].distance||this.heap[s].distance>=this.heap[_].distance;){if(this.heap[o].distance<=this.heap[_].distance){var u=this.copy();e.push({action:"swap",element1:s,element2:o,currentheap:u});var h=this.heap[s];this.heap[s]=this.heap[o],this.heap[o]=h,s=o}else{var p=this.copy();e.push({action:"swap",element1:s,element2:_,currentheap:p});var d=this.heap[s];this.heap[s]=this.heap[_],this.heap[_]=d,s=_}if(o=2*s,_=2*s+1,void 0===this.heap[o]||void 0===this.heap[_])break}return n=this.copy(),e.push({action:"settle",currentheap:n}),{actions:e,result:i}}}}]),e}()},29:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var r=a(13),i=a.n(r),n=a(19),s=a(6),o=a(7),_=a(8),l=a(11),c=a(10),u=a(0),h=a.n(u),p=(a(71),a(20)),d=a(53),v=a(33),f=a(26),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={value:r.props.value,width:r.props.width,height:r.props.height,color:r.props.color,isSelected:r.props.isSelected,toBeSwappedWith:r.props.toBeSwappedWith,remove:r.props.remove},r}return Object(_.a)(a,[{key:"switch",value:function(){var e=this;setTimeout((function(t){var a=e.state.toBeSwappedWith?e.state.toBeSwappedWith.value:e.state.value;e.setState({color:"teal",value:a,toBeSwappedWith:void 0,isSelected:!1})}),500)}},{key:"switchtoRemoved",value:function(){var e=this;setTimeout((function(){e.setState({value:void 0,color:"",remove:!1})}),500)}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.width,r=e.height,i=e.color,n=e.isSelected,s=e.toBeSwappedWith;return e.remove&&(i="red",this.switchtoRemoved()),n&&void 0!==t&&(i="blue",this.switch(s)),void 0===t&&(i=""),h.a.createElement("div",{style:{width:"".concat(a,"px"),height:"".concat(r,"px"),backgroundColor:"".concat(i),borderRadius:"200px"}},this.state.value)}}]),a}(u.Component),E=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={initialheap:[],resizefactor:1,width:120,height:100,permitOverflow:!0,heap:new f.a(!0),actions:[],selected:[],swappedElements:[],remove:!1,updateExternalArray:r.props.updateExternalArray},r}return Object(_.a)(a,[{key:"heapify",value:function(e){for(var t=[[{value:e[1],pos:1}]],a=1;a<e.length;a++){var r=!1;t.push([]);var i,n=Object(s.a)(t[a-1]);try{for(n.s();!(i=n.n()).done;){var o=i.value;t[a].push({value:e[2*o.pos],pos:2*o.pos}),t[a].push({value:e[2*o.pos+1],pos:2*o.pos+1}),2*o.pos!==e.length-1&&2*o.pos!==e.length||(r=!0)}}catch(_){n.e(_)}finally{n.f()}if(r)break}return t}},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"fillTreeSystemic",value:function(){var e=Object(n.a)(i.a.mark((function e(t){var a,r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(s.a)(t),e.prev=1,a.s();case 3:if((r=a.n()).done){e.next=10;break}return n=r.value,this.fillTree(n),e.next=8,this.sleep(3e3);case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),a.e(e.t0);case 15:return e.prev=15,a.f(),e.finish(15);case 18:return this.setState({array:this.state.array}),e.next=21,this.sleep(1e3);case 21:o=0;case 22:if(!(o<t.length)){e.next=29;break}return this.state.updateExternalArray(this.removeSmallest(),o),e.next=26,this.sleep(2500);case 26:o++,e.next=22;break;case 29:case"end":return e.stop()}}),e,this,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"fillTree",value:function(e){var t=e||Math.floor(10*Math.random()),a=this.state.heap.insert({distance:t}),r=a.shift().element,i=this.heapify(r),n=Math.floor(Math.log2(r.length-1)),s=r.length-1-(Math.pow(2,n)-1)-1;this.setState({readyForNext:!1,remove:!1,heap:this.state.heap,actions:a,initialheap:i,selected:[i[n][s]]})}},{key:"removeSmallest",value:function(){if(this.state.heap.heap.length>1){var e=this.state.heap.remove(),t=e.actions,a=t.shift().element,r=Math.floor(Math.log2(a.length-1)),i=a.length-1-(Math.pow(2,r)-1)-1;return this.setState({selected:[this.state.initialheap[r][i]],remove:!0,actions:t}),e.result.distance}}},{key:"componentDidMount",value:function(){this.props.array&&this.fillTreeSystemic(this.props.array)}},{key:"componentDidUpdate",value:function(){var e=this,t=this.element;if((t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&this.state.permitOverflow){var a=.9*this.state.resizefactor,r=120*a,i=100*a;r<=30?this.setState({resizefactor:.9*this.state.resizefactor,width:30,height:27,permitOverflow:!1}):this.setState({resizefactor:.9*this.state.resizefactor,width:r,height:i})}var n=this.state.actions.shift();if(n){if("swap"===n.action){var s=n.currentheap,o=Math.floor(Math.log2(n.element1)),_=n.element1-(Math.pow(2,o)-1)-1,l=Math.floor(Math.log2(n.element2)),c=n.element2-(Math.pow(2,l)-1)-1,u=this.state.initialheap[o][_],h=this.state.initialheap[l][c],p=this.heapify(s);setTimeout((function(){e.setState({actions:e.state.actions,selected:[u,h],swappedElements:[h,u],initialheap:p})}),1e3)}if("remove"===n.action){var d=n.currentheap,v=this.heapify(d);setTimeout((function(){e.setState({actions:e.state.actions,initialheap:v,remove:!1})}),1e3)}if("settle"===n.action){var f=this.state.heap.heap,m=this.heapify(f);setTimeout((function(){e.setState({actions:e.state.actions,initialheap:m,selected:[],remove:!1})}),600)}}}},{key:"contains",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return{contains:!0,pos:a};return{contains:!1,pos:0}}},{key:"render",value:function(){var e=this,t=this.state,a=t.width,r=t.height,i=t.initialheap,n=t.selected,o=t.swappedElements,_=t.remove,l=t.updateExternalArray,c=this.props.width,u=this.props.height,f=function(){return h.a.createElement("div",null,h.a.createElement(p.a,{variant:"outline-info",onClick:function(){return e.fillTree()}},"Add to Heap"),h.a.createElement(p.a,{variant:"outline-info",onClick:function(){return e.removeSmallest()}},"Remove smallest number from Heap"))};return l&&(f=function(){return h.a.createElement(h.a.Fragment,null)}),h.a.createElement("div",{style:{verticalAlign:"top",display:" inline-block"}},f(),h.a.createElement(d.a,{key:Math.random(),style:{width:"100%",display:"inline-block",overflowX:"auto",maxWidth:c-100,maxHeight:u-50,minWidth:c-100,minHeight:u-50,marginTop:"100px"},ref:function(t){e.element=t}},i.map((function(e,t){var i=[];return h.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row"}},e.map((function(e,l){e.value&&void 0!==e.value.distance&&(e.value=e.value.distance);var c,u=!1,p=void 0,d=Object(s.a)(n);try{for(d.s();!(c=d.n()).done;){if(c.value.pos===e.pos){u=!0,p=o.shift();break}}}catch(f){d.e(f)}finally{d.f()}return void 0!==e.value?i.push(h.a.createElement(v.a,{key:l,style:{display:"flex",alignItems:"center",justifyContent:"center"}},h.a.createElement(m,{remove:_&&0===t&&0===l,key:l*Math.random(),color:"teal",value:e.value,width:a,height:r,isSelected:u,toBeSwappedWith:p}))):i.push(h.a.createElement(v.a,{key:l,style:{display:"flex",alignItems:"center",justifyContent:"center"}},h.a.createElement("div",{style:{width:"".concat(a,"px"),height:"".concat(r,"px"),backgroundColor:"",borderRadius:"200px"}}))),h.a.createElement("div",{key:l*Math.random()})})),i)}))))}}]),a}(u.Component)},43:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SortingVisualizer}));var D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(11),D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),react_bootstrap__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(20),react_bootstrap__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(53),react_bootstrap__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(54),react_bootstrap__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(33),_algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(44),_ArrayElement__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(45),_heapVisualizer_HeapBlock__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(29),_TextBox__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(46),SortingVisualizer=function(_Component){Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(SortingVisualizer,_Component);var _super=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(SortingVisualizer);function SortingVisualizer(e){var t;return Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.a)(this,SortingVisualizer),(t=_super.call(this,e)).state={array:[],largestSoFar:-1/0,actions:[],mergeSelected:[],selected:[],height:t.props.height,width:t.props.width,heap:!1},t}return Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a)(SortingVisualizer,[{key:"update",value:function(){var e=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(t,a){var r;return D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=this.state.array)[a]=t,this.setState({array:r,selected:[a]}),e.next=5,this.sleep(500);case 5:a===this.state.array.length-1&&this.setState({heap:!1,selected:[]});case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"clear",value:function(){this.setState({array:[],selected:[],mergeSelected:[],largestSoFar:[]})}},{key:"fillArray",value:function(){this.state.array.push(7,6,5,4,3,2,1),this.setState({array:this.state.array,largestSoFar:7})}},{key:"sleep",value:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},{key:"removeElementFromArray",value:function(e){var t=this.state.array;t.splice(e,1),this.setState({array:t})}},{key:"changeElementAtArray",value:function(e,t){var a=this.state.array;a[e]=t;var r,i=-1/0,n=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(a);try{for(n.s();!(r=n.n()).done;){var s=r.value;s>i&&(i=s)}}catch(o){n.e(o)}finally{n.f()}this.setState({array:a,largestSoFar:i})}},{key:"initializeArray",value:function(e){var t,a=-1/0,r=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;i>a&&(a=i)}}catch(n){r.e(n)}finally{r.f()}this.setState({array:e,largestSoFar:a})}},{key:"select",value:function(){this.setState({selected:arguments.length<=0?void 0:arguments[0]})}},{key:"unselect",value:function(){this.setState({selected:[]})}},{key:"getArray",value:function(){return this.state.array}},{key:"getText",value:function(){var _getText=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function _callee2(text){var _this2=this,delay,lines,i,add,remove,change,initialize,sleep,select,unselect,getArray,newtext;return D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:for(delay=1e3,lines=text.split("\n"),i=0;i<lines.length;i++)(lines[i].includes("add")||lines[i].includes("change")||lines[i].includes("remove")||lines[i].includes("initialize")||lines[i].includes("select")||lines[i].includes("unselect"))&&(lines[i]=lines[i]+"\r\n  await sleep(delay);");add=function(e){_this2.addElementToArray(e)},remove=function(e){_this2.removeElementFromArray(e)},change=function(e,t){_this2.changeElementAtArray(e,t)},initialize=function(e){_this2.initializeArray(e)},sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},select=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];_this2.select(t)},unselect=function(){_this2.unselect()},getArray=function(){return _this2.getArray()},newtext=lines.join("\r\n"),eval("(async () => {"+newtext+"})()");case 13:case"end":return _context2.stop()}}),_callee2)})));function getText(e){return _getText.apply(this,arguments)}return getText}()},{key:"addElementToArray",value:function(e){var t=e||Math.floor(1e3*Math.random())+1;this.state.array.push(t),t>this.state.largestSoFar?this.setState({array:this.state.array,largestSoFar:t}):this.setState({array:this.state.array})}},{key:"sort",value:function(){var e=Object(_algorithms_bubbleSort__WEBPACK_IMPORTED_MODULE_12__.a)(this.state.array);this.setState({actions:e})}},{key:"merge",value:function(e,t,a,r,i,n){for(var s=e;e<a&&t<r;)i[e]<=i[t]?n[s++]=i[e++]:n[s++]=i[t++];for(;e<a;)n[s++]=i[e++];for(;t<r;)n[s++]=i[t++]}},{key:"mergeSort",value:function(){var e=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(t){var a,r,i,n,s,o,_,l,c,u,h,p,d,v,f,m,E,b;return D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Array.from(t),r=a.length,i=new Array(r),n=1;case 4:if(!(n<r)){e.next=29;break}s=0;case 6:if(!(s<r)){e.next=23;break}for(o=s,_=Math.min(o+n,r),l=_,c=Math.min(_+n,r),u=[],h=o;h<l;h++)u.push(t[h]);for(p=_;p<c;p++)u.push(t[p]);return this.setState({mergeSelected:u}),e.next=14,this.sleep(250);case 14:this.merge(o,_,l,c,a,i),d=[],v=0,f=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(i);try{for(f.s();!(m=f.n()).done;)void 0===(E=m.value)?d.push(a[v]):d.push(E),v+=1}catch(g){f.e(g)}finally{f.f()}this.setState({array:d});case 20:s+=2*n,e.next=6;break;case 23:b=a,a=i,i=b;case 26:n*=2,e.next=4;break;case 29:return e.next=31,this.sleep(500);case 31:return this.setState({mergeSelected:[]}),e.abrupt("return",a);case 33:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"heapSort",value:function(){var e=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e(){return D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({heap:!0});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this,t=this.state.actions.shift();if(t)if("swap"===t.action){var a=t.element1,r=t.element2,i=t.currentArray;setTimeout((function(){e.setState({actions:e.state.actions,selected:[a,r],array:i})}),500)}else"settle"===t.action&&setTimeout((function(){var a=t.currentArray;e.setState({actions:e.state.actions,array:a,selected:[]})}),500)}},{key:"contains",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return!0;return!1}},{key:"copy",value:function(e){var t,a=[],r=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;a.push(i)}}catch(n){r.e(n)}finally{r.f()}return a}},{key:"render",value:function(){var e=this,t=this.state,a=t.array,r=t.largestSoFar,i=t.selected,n=t.mergeSelected,s=t.heap,o=this.props,_=o.width,l=o.height;console.log(i);var c=1/a.length*100,u=function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null)};if(s){for(var h=[],p=0;p<a.length;p++)h.push({distance:a[p]});u=function(){return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_heapVisualizer_HeapBlock__WEBPACK_IMPORTED_MODULE_14__.a,{width:_/2,height:l/2,array:a,updateExternalArray:function(t,a){return e.update(t,a)}})}}return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",{style:{verticalAlign:"top",display:" inline-block"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"outline-info",onClick:function(){return e.fillArray()}},"Fill Array"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"outline-info",onClick:function(){return e.addElementToArray()}},"Add to Array"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"outline-info",onClick:function(){return e.sort()}},"BubbleSort"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"outline-info",onClick:function(){return e.mergeSort(e.state.array)}},"MergeSort"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"outline-info",onClick:function(){return e.heapSort()}},"HeapSort"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.a,{variant:"outline-info",onClick:function(){return e.clear()}},"Clear"),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.a,{style:{maxWidth:_-100,maxHeight:l-50,minWidth:_-100,minHeight:l-50,marginTop:"200px"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a,null,react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.a,null,a.map((function(e,t){var a,s=!1,o=0,_=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(n);try{for(_.s();!(a=_.n()).done;){e===a.value&&(e=n[o],s=!0),o+=1}}catch(h){_.e(h)}finally{_.f()}if(i){var l,u=Object(D_courseApp_clementvisualiser_visualization_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(i);try{for(u.s();!(l=u.n()).done;){l.value===t&&(s=!0)}}catch(h){u.e(h)}finally{u.f()}}return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.a,{key:Math.random(),style:{width:"".concat(c,"%"),display:"flex",justifyContent:"center",transform:"rotate(180deg)"}},react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ArrayElement__WEBPACK_IMPORTED_MODULE_13__.a,{key:t*Math.random(),value:e,largestSoFar:r,variant:"info",isSelected:s}))})))),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div",null,u()),react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_TextBox__WEBPACK_IMPORTED_MODULE_15__.a,{width:_-1e3,getText:function(t){return e.getText(t)}}))))}}]),SortingVisualizer}(react__WEBPACK_IMPORTED_MODULE_7__.Component)},44:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(6);function i(e){for(var t=[],a=0;a<e.length;a++){for(var r=!1,i=0;i<e.length&&i+1!==e.length;i++)if(e[i]>e[i+1]){var s=n(e);t.push({action:"swap",element1:i,element2:i+1,currentArray:s});var o=[e[i+1],e[i]];e[i]=o[0],e[i+1]=o[1],r=!0}if(!1===r){var _=n(e);return t.push({action:"settle",currentArray:_}),t}}var l=n(e);return t.push({action:"settle",currentArray:l}),t}function n(e){var t,a=[],i=Object(r.a)(e);try{for(i.s();!(t=i.n()).done;){var n=t.value;a.push(n)}}catch(s){i.e(s)}finally{i.f()}return a}},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(7),i=a(8),n=a(11),s=a(10),o=a(0),_=a.n(o),l=a(76),c=function(e){Object(n.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={value:i.props.value,isSelected:i.props.isSelected,largestSoFar:i.props.largestSoFar,variant:i.props.variant},i}return Object(i.a)(a,[{key:"switch",value:function(){var e=this;setTimeout((function(){e.setState({variant:"info"})}),5)}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.isSelected,r=e.largestSoFar,i=e.variant;a&&(i="danger");var n=t/r*400;return _.a.createElement(l.a,{style:{width:"50px",height:"".concat(n,"px"),transform:"rotate(180deg)"},variant:i,now:100,label:t})}}]),a}(o.Component)},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(7),i=a(8),n=a(23),s=a(11),o=a(10),_=a(0),l=a.n(_),c=a(53),u=a(33),h=a(20),p=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;Object(r.a)(this,a),(i=t.call(this,e)).onKeyPress=function(e){13===e.keyCode&&e.shiftKey&&(e.preventDefault(),i.addNewLineToTextArea())};return i.state={msg_text:""},i.handleChange=i.handleChange.bind(Object(n.a)(i)),i.addNewLineToTextArea=i.addNewLineToTextArea.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"addNewLineToTextArea",value:function(){var e=this.state.msg_text+"\r\n";this.setState({msg_text:e})}},{key:"handleChange",value:function(e){var t={};t[e.name]=e.event.target.value,this.setState(t),e.event.target.setCustomValidity("")}},{key:"render",value:function(){var e=this;return l.a.createElement(c.a,null,l.a.createElement(u.a,null,l.a.createElement("textarea",{rows:"3",placeholder:" \n        use initialize(array) to initialize the array\n        use add(element) to add to the array\n        use remove(index) to remove from the array\n        use change(index,value) to change array[index] to value\n        use select(...indices) to select indices\n        use unselect() to unselect all\n        use getArray() to get the current array's state\n        ",onChange:function(t){return e.handleChange({event:t,name:"msg_text"})},onKeyDown:this.onKeyPress,value:this.state.msg_text||"",style:{width:this.props.width,height:300}})),l.a.createElement(u.a,null,l.a.createElement(h.a,{onClick:function(){return e.props.getText(e.state.msg_text)},style:{width:100,height:100}}," SUBMIT")))}}]),a}(_.Component)},55:function(e,t,a){e.exports=a(75)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},71:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(21),s=a.n(n),o=(a(60),a(61),a(7)),_=a(8),l=a(11),c=a(10),u=a(6),h=a(26);function p(e,t){var a=[],r=e.col,i=e.row;return r<t[0].length-1&&a.push(t[i][r+1]),r>0&&a.push(t[i][r-1]),i>0&&a.push(t[i-1][r]),i<t.length-1&&a.push(t[i+1][r]),a.filter((function(e){return!e.isVisited}))}function d(e){for(var t=[],a=e;null!==a;)t.unshift(a),a=a.previousNode;return t}function v(e,t){var a=e.row-t.row,r=e.col-t.col;return Math.abs(a)+Math.abs(r)}function f(e){for(var t=e[0],a=0,r=1;r<e.length;r++)(e[r].distance<t.distance||e[r].distance===t.distance&&e[r].h<t.h)&&(t=e[r],a=r);var i=e[0];return e[0]=e[a],e[a]=i,e.shift()}a(62);var m=a(20),E=a(53),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),e=t.call(this),a.staticgrid=[],e.state={grid:[],visitedNodesInOrder:[],nodesInShortestPathOrder:[],mousedown:!1,reset:!1,weightdown:!1,variant:"outline-info",startPressed:!1,finishPressed:!1,startCoordinates:{row:7,col:15},finishCoordinates:{row:16,col:35},calculated:!1},e}return Object(_.a)(a,[{key:"contains",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return{contains:!0,pos:a};return{contains:!1,pos:0}}},{key:"getIndex",value:function(e,t){if(e)for(var a=0;a<e.length;a++)if(e[a]===t)return a;return!1}},{key:"componentDidMount",value:function(){var e=this.getInitialGrid();this.setState({grid:e}),a.staticgrid=e}},{key:"visualizeAstar",value:function(){var e=this.state.grid,t=e[this.state.startCoordinates.row][this.state.startCoordinates.col],a=e[this.state.finishCoordinates.row][this.state.finishCoordinates.col],r=(new Date).getTime(),i=function(e,t,a){var r=[],i=[];for(t.g=0,t.distance=v(t,a),r.push(t);r.length>0;){var n=f(r);if(n){if(n.isVisited=!0,i.push(n),n===a)return i;var s,o=p(n,e),_=Object(u.a)(o);try{for(_.s();!(s=_.n()).done;){var l,c=s.value;if(!c.isWall){l=n.g+1;var h=v(c,a);c.isWeight&&(h+=15);var d=h+l,m=!1;d<c.distance&&(c.g=l,c.h=h,c.distance=d);var E,b=Object(u.a)(r);try{for(b.s();!(E=b.n()).done;){if(E.value===c){m=!0;break}}}catch(g){b.e(g)}finally{b.f()}!1===m&&(c.previousNode=n,c.distance=d,r.push(c))}}}catch(g){_.e(g)}finally{_.f()}}}return i}(e,t,a),n=(new Date).getTime()-r;console.log(n),console.log(i),this.setState({visitedNodesInOrder:i});var s=d(a);this.setState({nodesInShortestPathOrder:s,calculated:!0}),console.log(s)}},{key:"visualizeDijkstra",value:function(){var e=a.staticgrid;this.setState({oldgrid:e});var t=this.state.grid,r=t[this.state.startCoordinates.row][this.state.startCoordinates.col],i=t[this.state.finishCoordinates.row][this.state.finishCoordinates.col],n=(new Date).getTime(),s=function(e,t,a){var r=[];t.distance=0;var i=new h.a(!1);for(i.insert(t);i.heap.length>1;){var n=i.remove().result;if(!n.isWall){if(n.distance===1/0)return r;if(n.isVisited=!0,r.push(n),n===a)return r;var s,o=p(n,e),_=Object(u.a)(o);try{for(_.s();!(s=_.n()).done;){var l=s.value;l.distance=n.distance+1,l.isWeight&&(l.distance+=15),l.previousNode=n,i.insert(l)}}catch(c){_.e(c)}finally{_.f()}}}}(t,r,i),o=(new Date).getTime()-n;console.log(o),this.setState({visitedNodesInOrder:s});var _=d(i);this.setState({nodesInShortestPathOrder:_,calculated:!0}),console.log(_)}},{key:"wallIt",value:function(e,t){a.staticgrid[e][t].isWall=!a.staticgrid[e][t].isWall}},{key:"weightIt",value:function(e,t){a.staticgrid[e][t].isWeight=!a.staticgrid[e][t].isWeight}},{key:"startIt",value:function(e,t){a.staticgrid[e][t].isStart=!0}},{key:"finishIt",value:function(e,t){a.staticgrid[e][t].isFinish=!0}},{key:"handleDown",value:function(e,t){a.staticgrid[e][t].isStart?this.setState({mousedown:!0,startPressed:!0}):a.staticgrid[e][t].isFinish?this.setState({mousedown:!0,finishPressed:!0}):this.setState({mousedown:!0})}},{key:"normalize",value:function(e,t){a.staticgrid[e][t].isStart=!1,a.staticgrid[e][t].isFinish=!1}},{key:"handleUp",value:function(e,t){this.state.startPressed?this.setState({startCoordinates:{row:e,col:t},mousedown:!1,startPressed:!1}):this.state.finishPressed?this.setState({finishCoordinates:{row:e,col:t},mousedown:!1,startPressed:!1,finishPressed:!1}):this.setState({mousedown:!1})}},{key:"switchToWeights",value:function(){var e="";e="outline-info"===this.state.variant?"danger":"outline-info",this.setState({variant:e,weightdown:!this.state.weightdown})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,r=t.visitedNodesInOrder,n=t.nodesInShortestPathOrder,s=t.mousedown,o=t.weightdown,_=t.variant,l=t.startPressed,c=t.finishPressed,u=t.calculated,h=this.props,p=h.height,d=h.width;return i.a.createElement("div",{style:{verticalAlign:"top",display:" inline-block"}},i.a.createElement(m.a,{variant:"outline-info",onClick:function(){return e.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),i.a.createElement(m.a,{variant:"outline-info",onClick:function(){return e.visualizeAstar()}},"Visualize A*'s Algorithm"),i.a.createElement(m.a,{variant:"outline-info",onClick:function(){return e.props.reset()}},"Clear Board"),i.a.createElement(m.a,{variant:_,onClick:function(){return e.switchToWeights()}},"Weights Down"),i.a.createElement(E.a,{style:{maxWidth:d-100,maxHeight:p-50,minWidth:d-100,minHeight:p-50,marginTop:"100px",justifyContent:"center"}},a.map((function(t,a){return i.a.createElement("div",{className:"row",key:a,style:{justifyContent:"center"}},t.map((function(t,a){var _=t.row,h=t.col,p=t.isFinish,d=t.isStart,v=t.isWall,f=t.isVisited,m=t.weight,E=e.getIndex(n,t);return E&&(E+=r.length),i.a.createElement(g,{key:a,col:h,isFinish:p,isStart:d,isWall:v,row:_,isVisited:f,isPath:E,wallIt:e.wallIt,weightIt:e.weightIt,startPressed:l,finishPressed:c,startIt:e.startIt,finishIt:e.finishIt,mousedown:s,weightdown:o,mousedownHandle:function(t,a){return e.handleDown(t,a)},mouseUpHandle:function(t,a){return e.handleUp(t,a)},normalize:function(t,a){e.normalize(t,a)},weight:m,calculated:u,recalculate:function(){return e.visualizeDijkstra()},delay:e.getIndex(r,t)})})))}))))}},{key:"getInitialGrid",value:function(){for(var e=[],t=0;t<20;t++){for(var a=[],r=0;r<50;r++){var i=this.createNode(r,t);a.push(i)}e.push(a)}return e}},{key:"createNode",value:function(e,t){return{col:e,row:t,isStart:t===this.state.startCoordinates.row&&e===this.state.startCoordinates.col,isFinish:t===this.state.finishCoordinates.row&&e===this.state.finishCoordinates.col,distance:1/0,isWeight:!1,isVisited:!1,isWall:!1,previousNode:null}}}]),a}(r.Component),g=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={extraClassName:r.props.isFinish?"node-finish":r.props.isStart?"node-start":r.props.isWall?"node-wall":r.props.isWeight?"node-weight":"",visited:!1,pathAnimated:!1,isWall:r.props.isWall,isWeight:r.props.isWeight,isStart:r.props.isStart},r}return Object(_.a)(a,[{key:"switch",value:function(){var e=this;setTimeout((function(){var t=e.state.isWeight?"node-visited-weighted":"node-visited";e.setState({extraClassName:t,visited:!0})}),10*this.props.delay)}},{key:"switchPath",value:function(){var e=this;setTimeout((function(){e.setState({extraClassName:"node-shortest-path",pathAnimated:!0})}),10*this.props.isPath)}},{key:"beWeight",value:function(){this.state.isWeight?this.setState({extraClassName:"",isWeight:!1}):this.setState({extraClassName:"node-weight",isWeight:!0})}},{key:"beWall",value:function(){this.state.isWall?this.setState({extraClassName:"",isWall:!1}):this.setState({extraClassName:"node-wall",isWall:!0})}},{key:"beFinish",value:function(){this.setState({extraClassName:"node-finish",isStart:!1})}},{key:"beStart",value:function(){this.setState({extraClassName:"node-start",isStart:!0})}},{key:"normalize",value:function(){this.setState({extraClassName:"",isStart:!1,isFinish:!1})}},{key:"render",value:function(){var e=this,t=this.props,a=t.col,r=t.wallIt,n=t.mousedownHandle,s=t.mouseUpHandle,o=t.row,_=t.weightIt,l=t.startIt,c=t.normalize,u=t.finishIt;return this.props.isVisited&&!1===this.state.visited&&this.switch(),!1!==this.props.isPath&&!1===this.state.pathAnimated&&this.switchPath(),i.a.createElement("div",{id:"node-".concat(o,"-").concat(a),className:"node ".concat(this.state.extraClassName),onMouseDown:function(){e.props.startPressed?(e.beStart(),l(o,a)):e.props.finishPressed?(e.beFinish(),u(o,a)):e.props.weightdown?e.props.isStart||(e.beWeight(),_(o,a)):e.props.isStart||(e.beWall(),r(o,a)),n(o,a)},onMouseUp:function(){return s(o,a)},onMouseOver:function(){e.props.isStart||e.props.isFinish||e.props.mousedown&&(e.props.startPressed?(e.beStart(),l(o,a)):e.props.finishPressed?(e.beFinish(),u(o,a)):e.props.weightdown?(e.beWeight(),_(o,a)):(e.beWall(),r(o,a)))},onMouseLeave:function(){e.props.mousedown&&(e.props.startPressed||e.props.finishPressed)&&(e.normalize(),c(o,a))}})}}]),a}(r.Component),y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={reset:!1,height:r.props.height,width:r.props.width},r}return Object(_.a)(a,[{key:"reset",value:function(){this.setState({reset:!0})}},{key:"componentDidUpdate",value:function(){this.state.reset&&this.setState({reset:!1})}},{key:"render",value:function(){var e=this;return this.state.reset?null:i.a.createElement(b,{reset:function(){return e.reset()},width:this.props.width,height:this.props.height})}}]),a}(r.Component),O=(a(63),a(78)),w=a(79),D=a(32),M=a(25),P=a(5),A=a(29),k=a(43),C=a(52);function S(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var T=function(){var e=function(){var e=Object(r.useState)(S()),t=Object(C.a)(e,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){function e(){i(S())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),t=e.height,a=e.width;return i.a.createElement(M.HashRouter,{basename:"/visualization"},i.a.createElement("div",{className:"App"},i.a.createElement(O.a,{bg:"dark",variant:"dark"},i.a.createElement(O.a.Brand,{href:"#home"},"Navbar"),i.a.createElement(w.a,{className:"mr-auto"},i.a.createElement(D.LinkContainer,{to:"/pathfinding"},i.a.createElement(m.a,{variant:"outline-info"},"PathFinding")),i.a.createElement(D.LinkContainer,{to:"/heapvisualization"},i.a.createElement(m.a,{variant:"outline-info"},"HeapVisualization")),i.a.createElement(D.LinkContainer,{to:"/sortingvisualization"},i.a.createElement(m.a,{variant:"outline-info"},"SortingVisualization"))),i.a.createElement(m.a,{variant:"outline-info",onClick:function(){window.open("https://github.com/Amr-Aboelnaga/visualization","_blank")}},"Github Repo")),i.a.createElement("div",{style:{backgroundColor:"#282c34"}}),i.a.createElement("header",{className:"App-header"},i.a.createElement(P.d,{path:"/heapvisualization",render:function(){return i.a.createElement(A.a,{width:a,height:t})},exact:!0}),i.a.createElement(P.d,{path:"/pathfinding",render:function(){return i.a.createElement(y,{width:a,height:t})},exact:!0}),i.a.createElement(P.d,{path:"/sortingvisualization",render:function(){return i.a.createElement(k.a,{width:a,height:t})},exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.81c96320.chunk.js.map