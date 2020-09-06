(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(61)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(20),r=a.n(s),o=(a(50),a(51),a(10)),h=a(11),l=a(14),c=a(13),u=a(17),p=function(){function e(t){Object(o.a)(this,e),this.heap=[],this.visualize=!0,this.heap=[null],this.set=new Set(null),this.visualize=t}return Object(h.a)(e,[{key:"constructHeap",value:function(e){var t,a=Object(u.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;this.insert(i)}}catch(n){a.e(n)}finally{a.f()}}},{key:"copy",value:function(){if(this.visualize){var e,t=[],a=Object(u.a)(this.heap);try{for(a.s();!(e=a.n()).done;){var i=e.value;t.push(i)}}catch(n){a.e(n)}finally{a.f()}return t}}},{key:"insert",value:function(e){var t=[];if(!this.set.has(e)){this.heap.push(e),this.set.add(e);var a=this.copy();if(t.push({action:"oldarray",element:a}),this.heap.length>2)for(var i=this.heap.length-1;this.heap[i].distance<this.heap[Math.floor(i/2)].distance;)if(i>=1){var n=[this.heap[i],this.heap[Math.floor(i/2)]];this.heap[Math.floor(i/2)]=n[0],this.heap[i]=n[1];var s=this.copy();if(t.push({action:"swap",element1:Math.floor(i/2),element2:i,currentheap:s}),1===(i=Math.floor(i/2)))return t}return t}}},{key:"remove",value:function(){var e=[],t=this.copy();if(e.push({action:"oldarray",element:t}),this.heap.length>1){if(2===this.heap.length){var a=this.copy();return e.push({action:"remove",element:0,currentheap:a}),{actions:e,result:this.heap.pop()}}var i=this.heap[1];this.heap[1]=this.heap.pop();var n=this.copy();e.push({action:"remove",element:0,currentheap:n});var s=1,r=2*s,o=2*s+1;if(3===this.heap.length){if(this.heap[1].distance>this.heap[2].distance){var h=[this.heap[2],this.heap[1]];this.heap[1]=h[0],this.heap[2]=h[1];var l=this.copy();e.push({action:"swap",element1:1,element2:2,currentheap:l})}}else if(this.heap.length>2)for(;this.heap[s].distance>=this.heap[r].distance||this.heap[s].distance>=this.heap[o].distance;){if(this.heap[r].distance<=this.heap[o].distance){var c=this.heap[s];this.heap[s]=this.heap[r],this.heap[r]=c,s=r;var u=this.copy();e.push({action:"swap",element1:s,element2:r,currentheap:u})}else{var p=this.heap[s];this.heap[s]=this.heap[o],this.heap[o]=p,s=o;var d=this.copy();e.push({action:"swap",element1:s,element2:o,currentheap:d})}if(r=2*s,o=2*s+1,void 0===this.heap[r]||void 0===this.heap[o])break}return n=this.copy(),e.push({action:"settle",currentheap:n}),{actions:e,result:i}}}}]),e}();function d(e,t){var a=[],i=e.col,n=e.row;return i<t[0].length-1&&a.push(t[n][i+1]),i>0&&a.push(t[n][i-1]),n>0&&a.push(t[n-1][i]),n<t.length-1&&a.push(t[n+1][i]),a.filter((function(e){return!e.isVisited}))}a(52);var v=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),e=t.call(this),a.staticgrid=[],e.state={grid:[],visitedNodesInOrder:[],nodesInShortestPathOrder:[],mousedown:!1,reset:!1},e}return Object(h.a)(a,[{key:"contains",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return{contains:!0,pos:a};return{contains:!1,pos:0}}},{key:"getIndex",value:function(e,t){if(e)for(var a=0;a<e.length;a++)if(e[a]===t)return a;return!1}},{key:"componentDidMount",value:function(){var e=f();this.setState({grid:e}),a.staticgrid=e}},{key:"visualizeDijkstra",value:function(){var e=a.staticgrid;this.setState({oldgrid:e});var t=this.state.grid,i=t[7][15],n=t[16][35],s=(new Date).getTime(),r=function(e,t,a){var i=[];t.distance=0;var n=new p(!1);for(n.insert(t);n.heap.length>1;){var s=n.remove().result;if(!s.isWall){if(s.distance===1/0)return i;if(s.isVisited=!0,i.push(s),s===a)return i;var r,o=d(s,e),h=Object(u.a)(o);try{for(h.s();!(r=h.n()).done;){var l=r.value;l.distance=s.distance+1,l.previousNode=s,n.insert(l)}}catch(c){h.e(c)}finally{h.f()}}}}(t,i,n),o=(new Date).getTime()-s;console.log(o),this.setState({visitedNodesInOrder:r});var h=function(e){for(var t=[],a=e;null!==a;)t.unshift(a),a=a.previousNode;return t}(n);this.setState({nodesInShortestPathOrder:h}),console.log(h)}},{key:"wallIt",value:function(e,t){a.staticgrid[e][t].isWall=!a.staticgrid[e][t].isWall}},{key:"handleDown",value:function(){this.setState({mousedown:!0})}},{key:"handleUp",value:function(){this.setState({mousedown:!1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.grid,i=t.visitedNodesInOrder,s=t.nodesInShortestPathOrder,r=t.mousedown;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:function(){return e.visualizeDijkstra()}},"Visualize Dijkstra's Algorithm"),n.a.createElement("button",{onClick:function(){return e.props.reset()}},"Clear Board"),n.a.createElement("div",{className:"grid"},a.map((function(t,a){return n.a.createElement("div",{className:"row",key:a},t.map((function(t,a){var o=t.row,h=t.col,l=t.isFinish,c=t.isStart,u=t.isWall,p=t.isVisited,d=e.getIndex(s,t);return d&&(d+=i.length),n.a.createElement(y,{key:a,col:h,isFinish:l,isStart:c,isWall:u,row:o,isVisited:p,isPath:d,wallIt:e.wallIt,mousedown:r,mousedownHandle:function(){return e.handleDown()},mouseUpHandle:function(){return e.handleUp()},delay:e.getIndex(i,t)})})))}))))}}]),a}(i.Component),f=function(){for(var e=[],t=0;t<20;t++){for(var a=[],i=0;i<50;i++){var n=m(i,t);a.push(n)}e.push(a)}return e},m=function(e,t){return{col:e,row:t,isStart:7===t&&15===e,isFinish:16===t&&35===e,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={extraClassName:i.props.isFinish?"node-finish":i.props.isStart?"node-start":i.props.isWall?"node-wall":"",visited:!1,pathAnimated:!1,isWall:i.props.isWall},i}return Object(h.a)(a,[{key:"switch",value:function(){var e=this;setTimeout((function(){e.setState({extraClassName:"node-visited",visited:!0})}),this.props.delay)}},{key:"switchPath",value:function(){var e=this;setTimeout((function(){e.setState({extraClassName:"node-shortest-path",pathAnimated:!0})}),this.props.isPath)}},{key:"beWall",value:function(){this.state.isWall?this.setState({extraClassName:"",isWall:!1}):this.setState({extraClassName:"node-wall",isWall:!0})}},{key:"render",value:function(){var e=this,t=this.props,a=t.col,i=t.wallIt,s=t.mousedownHandle,r=t.mouseUpHandle,o=t.row;return this.props.isVisited&&!1===this.state.visited&&this.switch(),!1!==this.props.isPath&&!1===this.state.pathAnimated&&this.switchPath(),n.a.createElement("div",{id:"node-".concat(o,"-").concat(a),className:"node ".concat(this.state.extraClassName),onMouseDown:function(){e.props.isStart||e.props.isFinish||(e.beWall(),i(o,a),s())},onMouseUp:function(){return r()},onMouseOver:function(){e.props.isStart||e.props.isFinish||e.props.mousedown&&(e.beWall(),i(o,a))}})}}]),a}(i.Component),w=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={reset:!1},e}return Object(h.a)(a,[{key:"reset",value:function(){this.setState({reset:!0})}},{key:"componentDidUpdate",value:function(){this.state.reset&&this.setState({reset:!1})}},{key:"render",value:function(){var e=this;return this.state.reset?null:n.a.createElement(v,{reset:function(){return e.reset()}})}}]),a}(i.Component),g=(a(53),a(65)),k=a(66),b=a(64),S=a(43),E=a(63),O=a(36),j=a(5),M=(a(54),a(35)),W=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this,e)).state={value:i.props.value,width:i.props.width,height:i.props.height,color:i.props.color,isSelected:i.props.isSelected,toBeSwappedWith:i.props.toBeSwappedWith,remove:i.props.remove},i}return Object(h.a)(a,[{key:"switch",value:function(){var e=this;setTimeout((function(t){var a=e.state.toBeSwappedWith?e.state.toBeSwappedWith.value:e.state.value;e.setState({color:"brown",value:a,toBeSwappedWith:void 0,isSelected:!1})}),500)}},{key:"switchtoRemoved",value:function(){var e=this;setTimeout((function(){e.setState({value:void 0,color:"",remove:!1})}),500)}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.width,i=e.height,s=e.color,r=e.isSelected,o=e.toBeSwappedWith;return e.remove&&(s="red",this.switchtoRemoved()),r&&void 0!==t&&(s="blue",this.switch(o)),void 0===t&&(s=""),n.a.createElement("div",{style:{width:"".concat(a,"px"),height:"".concat(i,"px"),backgroundColor:"".concat(s),borderRadius:"200px"}},this.state.value)}}]),a}(i.Component),x=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={initialheap:[],resizefactor:1,width:120,height:100,permitOverflow:!0,heap:new p(!0),actions:[],selected:[],swappedElements:[],remove:!1},e}return Object(h.a)(a,[{key:"heapify",value:function(e){for(var t=[[{value:e[1],pos:1}]],a=1;a<e.length;a++){var i=!1;t.push([]);var n,s=Object(u.a)(t[a-1]);try{for(s.s();!(n=s.n()).done;){var r=n.value;t[a].push({value:e[2*r.pos],pos:2*r.pos}),t[a].push({value:e[2*r.pos+1],pos:2*r.pos+1}),2*r.pos!==e.length-1&&2*r.pos!==e.length||(i=!0)}}catch(o){s.e(o)}finally{s.f()}if(i)break}return t}},{key:"fillTree",value:function(){var e=Math.floor(10*Math.random()),t=this.state.heap.insert({distance:e}),a=t.shift().element,i=this.heapify(a),n=Math.floor(Math.log2(a.length-1)),s=a.length-1-(Math.pow(2,n)-1)-1;this.setState({readyForNext:!1,remove:!1,heap:this.state.heap,actions:t,initialheap:i,selected:[i[n][s]]})}},{key:"removeSmallest",value:function(){var e=this.state.heap.remove().actions;console.log(e);var t=e.shift().element,a=Math.floor(Math.log2(t.length-1)),i=t.length-1-(Math.pow(2,a)-1)-1;this.setState({selected:[this.state.initialheap[a][i]],remove:!0,actions:e})}},{key:"componentDidUpdate",value:function(){var e=this,t=this.element;if((t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&this.state.permitOverflow){var a=.9*this.state.resizefactor,i=120*a,n=100*a;i<=30?this.setState({resizefactor:.9*this.state.resizefactor,width:30,height:27,permitOverflow:!1}):this.setState({resizefactor:.9*this.state.resizefactor,width:i,height:n})}var s=this.state.actions.shift();if(s){if("swap"===s.action){var r=Math.floor(Math.log2(s.element1)),o=s.element1-(Math.pow(2,r)-1)-1,h=Math.floor(Math.log2(s.element2)),l=s.element2-(Math.pow(2,h)-1)-1,c=this.state.initialheap[r][o],u=this.state.initialheap[h][l],p=s.currentheap,d=this.heapify(p);setTimeout((function(){e.setState({actions:e.state.actions,selected:[c,u],swappedElements:[u,c],initialheap:d})}),1e3)}if("remove"===s.action){var v=s.currentheap,f=this.heapify(v);setTimeout((function(){e.setState({actions:e.state.actions,initialheap:f,remove:!1})}),1e3)}if("settle"===s.action){var m=s.currentheap,y=this.heapify(m);setTimeout((function(){e.setState({actions:e.state.actions,initialheap:y,remove:!1})}),500)}}}},{key:"updateHeap",value:function(e,t,a){var i=this;setTimeout((function(){var n=i.state.initialheap;n[e][t].value=a,i.setState({initialheap:n,selected:[]})}),2e3)}},{key:"contains",value:function(e,t){for(var a=0;a<e.length;a++)if(e[a]===t)return{contains:!0,pos:a};return{contains:!1,pos:0}}},{key:"render",value:function(){var e=this,t=this.state,a=t.width,i=t.height,s=t.initialheap,r=t.selected,o=t.swappedElements,h=t.remove;return n.a.createElement("div",{key:Math.random(),style:{width:"100%",display:"inline-block",overflowX:"auto"},ref:function(t){e.element=t}},n.a.createElement("button",{onClick:function(){return e.fillTree()}},"Add to Heap"),n.a.createElement("button",{onClick:function(){return e.removeSmallest()}},"Remove smallest number from Heap"),s.map((function(e,t){var s=[];return n.a.createElement("div",{key:t,style:{display:"flex",flexDirection:"row"}},e.map((function(e,l){e.value&&void 0!==e.value.distance&&(e.value=e.value.distance);var c,p=!1,d=void 0,v=Object(u.a)(r);try{for(v.s();!(c=v.n()).done;){if(c.value.pos===e.pos){p=!0,d=o.shift();break}}}catch(f){v.e(f)}finally{v.f()}return void 0!==e.value?s.push(n.a.createElement(M.a,{key:l,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement(W,{remove:h&&0===t&&0===l,key:l*Math.random(),color:"brown",value:e.value,width:a,height:i,isSelected:p,toBeSwappedWith:d}))):s.push(n.a.createElement(M.a,{key:l,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.a.createElement("div",{style:{width:"".concat(a,"px"),height:"".concat(i,"px"),backgroundColor:"",borderRadius:"200px"}}))),n.a.createElement("div",{key:l*Math.random()})})),s)})))}}]),a}(i.Component);var C=function(){return n.a.createElement(O.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(g.a,{bg:"dark",variant:"dark"},n.a.createElement(g.a.Brand,{href:"#home"},"Navbar"),n.a.createElement(k.a,{className:"mr-auto"},n.a.createElement(k.a.Link,{href:"pathfinding"},"PathFinding"),n.a.createElement(k.a.Link,{href:"sorting"},"Sorting"),n.a.createElement(k.a.Link,{href:"datastructures"},"Data Structures")),n.a.createElement(b.a,{inline:!0},n.a.createElement(S.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),n.a.createElement(E.a,{variant:"outline-info"},"Search"))),n.a.createElement("div",{style:{backgroundColor:"#282c34"}}),n.a.createElement("header",{className:"App-header"},n.a.createElement(j.a,{path:"/sorting",component:x,exact:!0}),n.a.createElement(j.a,{path:"/pathfinding",component:w,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.324906b7.chunk.js.map