(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(20),r=a.n(s),o=(a(50),a(51),a(11)),h=a(12),l=a(18),c=a(16),u=a(17),p=function(){function e(){Object(o.a)(this,e),this.heap=[],this.heap=[null],this.set=new Set(null)}return Object(h.a)(e,[{key:"constructHeap",value:function(e){var t,a=Object(u.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;this.insert(i)}}catch(n){a.e(n)}finally{a.f()}}},{key:"insert",value:function(e){if(!this.set.has(e)&&(this.heap.push(e),this.set.add(e),this.heap.length>2))for(var t=this.heap.length-1;this.heap[t].distance<this.heap[Math.floor(t/2)].distance;)if(t>=1){var a=[this.heap[t],this.heap[Math.floor(t/2)]];if(this.heap[Math.floor(t/2)]=a[0],this.heap[t]=a[1],1===(t=Math.floor(t/2)))break}}},{key:"remove",value:function(){if(this.heap.length>1){if(2===this.heap.length)return this.heap.pop();var e=this.heap[1];this.heap[1]=this.heap.pop();var t=1,a=2*t,i=2*t+1;if(3===this.heap.length){if(this.heap[1].distance>this.heap[2].distance){var n=[this.heap[2],this.heap[1]];this.heap[1]=n[0],this.heap[2]=n[1]}}else if(this.heap.length>2)for(;this.heap[t].distance>=this.heap[a].distance||this.heap[t].distance>=this.heap[i].distance;){if(this.heap[a].distance<=this.heap[i].distance){var s=this.heap[t];this.heap[t]=this.heap[a],this.heap[a]=s,t=a}else{var r=this.heap[t];this.heap[t]=this.heap[i],this.heap[i]=r,t=i}if(a=2*t,i=2*t+1,void 0===this.heap[a]||void 0===this.heap[i])break}return e}}}]),e}();function d(e,t){var a=[],i=e.col,n=e.row;return i<t[0].length-1&&a.push(t[n][i+1]),i>0&&a.push(t[n][i-1]),n>0&&a.push(t[n-1][i]),n<t.length-1&&a.push(t[n+1][i]),a.filter((function(e){return!e.isVisited}))}a(52);var f=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),e=t.call(this),a.staticgrid=[],e.state={grid:[],visitedNodesInOrder:[],nodesInShortestPathOrder:[],mousedown:!1,reset:!1},e}return Object(h.a)(a,[{key:"contains",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return{contains:!0,pos:a};return{contains:!1,pos:0}}},{key:"getIndex",value:function(e,t){if(e)for(var a=0;a<e.length;a++)if(e[a]===t)return a;return!1}},{key:"componentDidMount",value:function(){var e=v();this.setState({grid:e}),a.staticgrid=e}},{key:"visualizeDijkstra",value:function(){var e=a.staticgrid;this.setState({oldgrid:e});var t=this.state.grid,i=t[7][15],n=t[16][35],s=(new Date).getTime(),r=function(e,t,a){var i=[];t.distance=0;var n=new p;for(n.insert(t);n.heap.length>1;){var s=n.remove();if(!s.isWall){if(s.distance===1/0)return i;if(s.isVisited=!0,i.push(s),s===a)return i;var r,o=d(s,e),h=Object(u.a)(o);try{for(h.s();!(r=h.n()).done;){var l=r.value;l.distance=s.distance+1,l.previousNode=s,n.insert(l)}}catch(c){h.e(c)}finally{h.f()}}}}(t,i,n),o=(new Date).getTime()-s;console.log(o),this.setState({visitedNodesInOrder:r});var h=function(e){for(var t=[],a=e;null!==a;)t.unshift(a),a=a.previousNode;return t}(n);this.setState({nodesInShortestPathOrder:h}),console.log(h)}},{key:"wallIt",value:function(e,t){a.staticgrid[e][t].isWall=!a.staticgrid[e][t].isWall}},{key:"handleDown",value:function(){this.setState({mousedown:!0})}},{key:"handleUp",value:function(){this.setState({mousedown:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,i=t.visitedNodesInOrder,s=t.nodesInShortestPathOrder,r=t.mousedown;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:function(){return e.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),n.a.createElement("button",{onClick:function(){return e.props.reset()}},"Clear Board"),n.a.createElement("div",{className:"grid"},a.map((function(t,a){return n.a.createElement("div",{className:"row",key:a},t.map((function(t,a){var o=t.row,h=t.col,l=t.isFinish,c=t.isStart,u=t.isWall,p=t.isVisited,d=e.getIndex(s,t);return d&&(d+=i.length),n.a.createElement(g,{key:a,col:h,isFinish:l,isStart:c,isWall:u,row:o,isVisited:p,isPath:d,wallIt:e.wallIt,mousedown:r,mousedownHandle:function(){return e.handleDown()},mouseUpHandle:function(){return e.handleUp()},delay:e.getIndex(i,t)})})))}))))}}]),a}(i.Component),v=function(){for(var e=[],t=0;t<20;t++){for(var a=[],i=0;i<50;i++){var n=m(i,t);a.push(n)}e.push(a)}return e},m=function(e,t){return{col:e,row:t,isStart:7===t&&15===e,isFinish:16===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},g=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={extraClassName:i.props.isFinish?"node-finish":i.props.isStart?"node-start":i.props.isWall?"node-wall":"",visited:!1,pathAnimated:!1,isWall:i.props.isWall},i}return Object(h.a)(a,[{key:"switch",value:function(){var e=this;setTimeout((function(){e.setState({extraClassName:"node-visited",visited:!0})}),this.props.delay)}},{key:"switchPath",value:function(){var e=this;setTimeout((function(){e.setState({extraClassName:"node-shortest-path",pathAnimated:!0})}),this.props.isPath)}},{key:"beWall",value:function(){this.state.isWall?this.setState({extraClassName:"",isWall:!1}):this.setState({extraClassName:"node-wall",isWall:!0})}},{key:"render",value:function(){var e=this,t=this.props,a=t.col,i=t.wallIt,s=t.mousedownHandle,r=t.mouseUpHandle,o=t.row;return this.props.isVisited&&!1===this.state.visited&&this.switch(),!1!==this.props.isPath&&!1===this.state.pathAnimated&&this.switchPath(),n.a.createElement("div",{id:"node-".concat(o,"-").concat(a),className:"node ".concat(this.state.extraClassName),onMouseDown:function(){e.props.isStart||e.props.isFinish||(e.beWall(),i(o,a),s())},onMouseUp:function(){return r()},onMouseOver:function(){e.props.isStart||e.props.isFinish||e.props.mousedown&&(e.beWall(),i(o,a))}})}}]),a}(i.Component),y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={reset:!1},e}return Object(h.a)(a,[{key:"reset",value:function(){this.setState({reset:!0})}},{key:"componentDidUpdate",value:function(){this.state.reset&&this.setState({reset:!1})}},{key:"render",value:function(){var e=this;return this.state.reset?null:n.a.createElement(f,{reset:function(){return e.reset()}})}}]),a}(i.Component),w=(a(53),a(65)),k=a(66),b=a(64),S=a(43),E=a(63),O=a(36),j=a(5),N=(a(54),a(35)),x=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={finalarray:[],resizefactor:1,width:120,height:100,permitOverflow:!0,heap:new p},e}return Object(h.a)(a,[{key:"fillTree",value:function(){var e=this.state.heap.heap,t=Math.floor(10*Math.random());this.state.heap.insert({distance:t}),console.log(e);for(var a=[[{value:e[1],pos:1}]],i=1;i<e.length;i++){var n=!1;a.push([]);var s,r=Object(u.a)(a[i-1]);try{for(r.s();!(s=r.n()).done;){var o=s.value;a[i].push({value:e[2*o.pos],pos:2*o.pos}),a[i].push({value:e[2*o.pos+1],pos:2*o.pos+1}),2*o.pos!=e.length-1&&2*o.pos!=e.length||(n=!0)}}catch(h){r.e(h)}finally{r.f()}if(n)break}console.log(a),this.setState({heap:this.state.heap,finalarray:a})}},{key:"removeSmallest",value:function(){this.state.heap.remove();for(var e=this.state.heap.heap,t=[[{value:e[1],pos:1}]],a=1;a<e.length;a++){var i=!1;t.push([]);var n,s=Object(u.a)(t[a-1]);try{for(s.s();!(n=s.n()).done;){var r=n.value;t[a].push({value:e[2*r.pos],pos:2*r.pos}),t[a].push({value:e[2*r.pos+1],pos:2*r.pos+1}),2*r.pos!=e.length-1&&2*r.pos!=e.length||(i=!0)}}catch(o){s.e(o)}finally{s.f()}if(i)break}console.log(t),this.setState({heap:this.state.heap,finalarray:t})}},{key:"componentDidUpdate",value:function(){var e=this.element;if((e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&this.state.permitOverflow){var t=.9*this.state.resizefactor,a=120*t,i=100*t;a<=30?this.setState({resizefactor:.9*this.state.resizefactor,width:30,height:27,permitOverflow:!1}):this.setState({resizefactor:.9*this.state.resizefactor,width:a,height:i})}}},{key:"render",value:function(){var e=this,t=this.state,a=t.finalarray,i=t.width,s=t.height;return n.a.createElement("div",{style:{width:"100%",display:"inline-block",overflowX:"auto"},ref:function(t){e.element=t}},n.a.createElement("button",{onClick:function(){return e.fillTree()}},"Add to Heap"),n.a.createElement("button",{onClick:function(){return e.removeSmallest()}},"Remove smallest number from Heap"),a.map((function(e,t){return n.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},e.map((function(e,t){var a="red",r=void 0;return void 0==e.value?a="":r=e.value.distance,n.a.createElement(N.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{width:"".concat(i,"px"),height:"".concat(s,"px"),backgroundColor:"".concat(a),borderRadius:"200px"}},r))})))})))}}]),a}(i.Component);var W=function(){return n.a.createElement(O.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(w.a,{bg:"dark",variant:"dark"},n.a.createElement(w.a.Brand,{href:"#home"},"Navbar"),n.a.createElement(k.a,{className:"mr-auto"},n.a.createElement(k.a.Link,{href:"/visualization/pathfinding"},"PathFinding"),n.a.createElement(k.a.Link,{href:"/visualization/sorting"},"Sorting"),n.a.createElement(k.a.Link,{href:"/visualization/datastructures"},"Data Structures")),n.a.createElement(b.a,{inline:!0},n.a.createElement(S.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(E.a,{variant:"outline-info"},"Search"))),n.a.createElement("div",{style:{backgroundColor:"#282c34"}}),n.a.createElement("header",{className:"App-header"},n.a.createElement(j.a,{path:"/visualization/sorting",component:x,exact:!0}),n.a.createElement(j.a,{path:"/visualization/pathfinding",component:y,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.e1abb90d.chunk.js.map