(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r,i,a=n(1),o=n.n(a),c=n(7),s=n.n(c),u=(n(13),n(14),n(5)),l=n(4),d=(n(15),n(0)),h=o.a.memo((function(e){return Object(d.jsx)("button",{className:"newGame",onClick:e.onClick,children:e.label})})),f=n(2),v=n(3),g=function(){function e(t){Object(v.a)(this,e),this.snakeEnds=void 0,this.snakeEnds=t||{tail:{row:5,col:5},head:{row:12,col:5}}}return Object(f.a)(e,[{key:"getSnakeEnds",value:function(){return this.snakeEnds}},{key:"setSnakeEnds",value:function(e){this.snakeEnds=e}},{key:"snakeAlive",value:function(){return!0}},{key:"snakeLength",value:function(){return 4}}]),e}();!function(e){e[e.None=0]="None",e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Right=3]="Right",e[e.Left=4]="Left"}(r||(r={})),function(e){e[e.Canvas=0]="Canvas",e[e.Body=1]="Body",e[e.Head=2]="Head",e[e.Tail=3]="Tail",e[e.Byte=4]="Byte"}(i||(i={}));var b=Object(f.a)((function e(){Object(v.a)(this,e),this.role=i.Canvas,this.direction=r.None,this.pivot=r.None})),w=function(){function e(){Object(v.a)(this,e),this.grid=void 0,this.gridSize=void 0,this.snake=void 0;var t=document.querySelector(":root"),n=getComputedStyle(t);this.gridSize=parseInt(n.getPropertyValue("--gridSize")),this.grid=new Array(this.gridSize);for(var r=0;r<this.gridSize;r++)this.grid[r]=new Array(this.gridSize);for(var i=0;i<this.gridSize;i++)for(var a=0;a<this.gridSize;a++)this.grid[i][a]=new b;this.snake=new g}return Object(f.a)(e,[{key:"getGrid",value:function(){return this.grid}},{key:"getGridSize",value:function(){return this.gridSize}},{key:"getSnake",value:function(){return this.snake}},{key:"getCurrentHeadDirection",value:function(){var e=this.snake.getSnakeEnds().head;return this.grid[e.row][e.col].direction}},{key:"getCurrentTailDirection",value:function(){var e=this.snake.getSnakeEnds().tail;return this.grid[e.row][e.col].direction}},{key:"setCurrentHeadDirection",value:function(e){var t=this.snake.getSnakeEnds().head;this.grid[t.row][t.col].direction=e}},{key:"getPivotDirectionOnCurrentTail",value:function(){var e=this.snake.getSnakeEnds().tail;return this.grid[e.row][e.col].pivot}},{key:"setCurrentTailDirection",value:function(e){var t=this.snake.getSnakeEnds().tail;this.grid[t.row][t.col].direction=e}},{key:"setPivotOnCurrentHeadDirection",value:function(e){var t=this.snake.getSnakeEnds().head;this.grid[t.row][t.col].pivot=e}},{key:"initGridData",value:function(){var e=this.snake.getSnakeEnds(),t=e.tail,n=e.head;if(this.grid[t.row][t.col].direction=r.None,this.grid[n.row][n.col].direction=r.None,this.grid[t.row][t.col].role=i.Tail,this.grid[n.row][n.col].role=i.Head,t.row===n.row)for(var a=t.col+1;a<n.col;a++)this.grid[t.row][a].role=i.Body,this.grid[n.row][a].role=i.Body;else{if(t.col!==n.col)throw new Error("Snake init invalid");for(var o=t.row+1;o<n.row;o++)this.grid[o][t.col].role=i.Body,this.grid[o][t.col].role=i.Body}}}]),e}(),j=(n(17),o.a.memo((function(e){var t=e.role,n=e.currentHeadDirection,a=e.currentTailDirection,o=e.currentTailPivot,c=function(e){switch(e){case r.Down:return"t2b";case r.Up:return"b2t";case r.Left:return"r2l";case r.Right:return"l2r";case r.None:return"none";default:throw new Error("invalid dir")}},s=function(){switch(t){case i.Canvas:return"box";case i.Head:return"head_".concat(c(n));case i.Body:return"snake";case i.Tail:return"tail_".concat(c(o!==r.None?o:a));case i.Byte:return"food";default:throw new Error("invalid role")}}();return Object(d.jsx)("div",{className:s})}))),k=(n(18),function(e){var t=e.grid,n=e.currentHeadDirection,r=e.currentTailDirection,i=e.currentTailPivot;return Object(d.jsx)("div",{className:"grid",children:t.flat().map((function(e,t){return Object(d.jsx)(j,{role:e.role,id:t,currentHeadDirection:n,currentTailDirection:r,currentTailPivot:i},t)}))})}),O=n(8),D=(n(19),function(e){switch(e){case i.Body:return"b ";case i.Head:return"h ";case i.Tail:return"t ";case i.Canvas:return"c ";case i.Byte:return"f ";default:throw new Error("invalid role")}}),p=function(e){switch(e){case r.Down:return"d ";case r.Up:return"u ";case r.Left:return"l ";case r.Right:return"r ";case r.None:return"n ";default:throw new Error("invalid direction")}},C=function(e){var t=e.role,n=e.direction,r=e.pivot;return Object(d.jsxs)("div",{className:"debugBox",children:[t>0?D(t):null,n>0?p(n):null,t>0?p(r).toUpperCase():null]})},S=(n(20),function(e){var t=e.grid;return Object(d.jsx)("div",{className:"debugGrid",children:t.flat().map((function(e,t){return Object(d.jsx)(C,{role:e.role,direction:e.direction,pivot:e.pivot},t)}))})}),y=(n(21),n(22),function(){return Object(d.jsx)("div",{className:"wordTilesContainer",children:"SNAKE"})}),m=document.querySelector(":root"),x=getComputedStyle(m).getPropertyValue("--tick"),N=1e3*parseFloat(x.substr(0,x.length-1)),H=new URL(window.location.href),E=new URLSearchParams(H.search),T=new w;T.initGridData();var B=T.getGridSize(),P=T.getGrid(),L=function(){var e=Object(a.useState)(T.getSnake().getSnakeEnds()),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(l.a)(c,2),f=s[0],v=s[1],g=Object(a.useState)(!1),b=Object(l.a)(g,2),w=b[0],j=b[1],D=function(e){return function(e){var t=n.tail.row,a=n.tail.col,o=P[t][a].pivot,c=o!==r.None?o:T.getCurrentTailDirection();P[t][a].role=i.Canvas,P[t][a].direction=r.None,o!==r.None&&(P[t][a].pivot=r.None);var s=t,u=a;switch(c){case r.Up:s=n.tail.row-1<0?B-1:n.tail.row-1;break;case r.Down:s=n.tail.row+1>=B?0:n.tail.row+1;break;case r.Right:u=n.tail.col+1>=B?0:n.tail.col+1;break;case r.Left:u=n.tail.col-1<0?B-1:n.tail.col-1;break;default:throw v(!1),new Error("Invalid tail direction!")}e.tail.row=s,e.tail.col=u,P[s][u].role=i.Tail,P[s][u].direction=c}(e),function(e){var t=n.head.row,a=n.head.col,o=T.getCurrentHeadDirection();P[t][a].role=i.Body,P[t][a].direction=r.None;var c=t,s=a;switch(o){case r.Up:c=n.head.row-1<0?B-1:n.head.row-1;break;case r.Down:c=n.head.row+1>=B?0:n.head.row+1;break;case r.Right:s=n.head.col+1>=B?0:n.head.col+1;break;case r.Left:s=n.head.col-1<0?B-1:n.head.col-1;break;default:throw v(!1),new Error("Invalid head direction!")}switch(e.head.row=c,e.head.col=s,P[c][s].role){case i.Canvas:P[c][s].role=i.Head;break;case i.Byte:console.log("Byte found!");break;default:throw v(!1),new Error("Head collision with invalid role")}P[c][s].direction=o}(e),e};!function(e,t){var n=Object(a.useRef)(e);Object(a.useLayoutEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e=Object(u.a)({},n),t=D(e);o(t),T.getSnake().setSnakeEnds(e)}),f?N:null);var p=Object(a.useCallback)((function(){if(!f){var e=T.getCurrentTailDirection();T.getCurrentHeadDirection()===r.None&&e===r.None&&(T.setCurrentTailDirection(r.Down),T.setCurrentHeadDirection(r.Down))}v((function(e){return!e}))}),[f]),C=Object(a.useCallback)((function(){j((function(e){return!e}))}),[]),m=Object(O.useSwipeable)({onSwipedLeft:function(){if(f){var e=T.getCurrentHeadDirection();e!==r.Left&&e!==r.Right&&(T.setCurrentHeadDirection(r.Left),T.setPivotOnCurrentHeadDirection(r.Left))}},onSwipedRight:function(){if(f){var e=T.getCurrentHeadDirection();e!==r.Left&&e!==r.Right&&(T.setCurrentHeadDirection(r.Right),T.setPivotOnCurrentHeadDirection(r.Right))}},onSwipedDown:function(){if(f){var e=T.getCurrentHeadDirection();e!==r.Down&&e!==r.Up&&(T.setCurrentHeadDirection(r.Down),T.setPivotOnCurrentHeadDirection(r.Down))}},onSwipedUp:function(){if(f){var e=T.getCurrentHeadDirection();e!==r.Down&&e!==r.Up&&(T.setCurrentHeadDirection(r.Up),T.setPivotOnCurrentHeadDirection(r.Up))}},preventDefaultTouchmoveEvent:!0,trackMouse:!0}),x=T.getPivotDirectionOnCurrentTail();return Object(d.jsxs)("div",Object(u.a)(Object(u.a)({},m),{},{className:"game",children:[Object(d.jsx)("div",{className:"gridContainer",children:w?Object(d.jsx)(S,{grid:P}):Object(d.jsx)(k,{grid:P,currentHeadDirection:T.getCurrentHeadDirection(),currentTailDirection:T.getCurrentTailDirection(),currentTailPivot:x})}),Object(d.jsxs)("div",{className:"appUtils",children:[Object(d.jsx)(h,{onClick:p,label:f?"Pause":"Play"}),"true"===E.get("debug")?Object(d.jsx)(h,{onClick:C,label:w?"Debug Off":"Debug On"}):null]}),Object(d.jsx)(y,{})]}))},U=(n(23),function(){return Object(d.jsx)("div",{className:"title",children:"Snake Bytes"})}),R=(n(24),function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"menuleft",children:[Object(d.jsx)("button",{className:"About",style:{margin:"2px"},children:"About"}),Object(d.jsx)("button",{className:"Instructions",style:{margin:"2px"},children:"How"})]}),Object(d.jsx)(U,{}),Object(d.jsxs)("div",{className:"menuright",children:[Object(d.jsx)("button",{className:"Sett",style:{margin:"2px"},children:"Settings"}),Object(d.jsx)("button",{className:"Stat",style:{margin:"2px"},children:"Stats"})]})]})}),z=function(){return Object(d.jsxs)("div",{className:"appContainer",children:[Object(d.jsx)(R,{}),Object(d.jsx)(L,{})]})};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.3bc9059b.chunk.js.map