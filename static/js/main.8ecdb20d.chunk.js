(this.webpackJsonpsnake=this.webpackJsonpsnake||[]).push([[0],[,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n,i,a=r(1),o=r.n(a),c=r(7),s=r.n(c),u=(r(13),r(14),r(5)),d=r(4),l=r(2),h=r(3),f=function(){function e(t){Object(h.a)(this,e),this.snakeEnds=void 0,this.snakeEnds=t||{tail:{row:5,col:5},head:{row:8,col:5}}}return Object(l.a)(e,[{key:"getSnakeEnds",value:function(){return this.snakeEnds}},{key:"setSnakeEnds",value:function(e){this.snakeEnds=e}},{key:"snakeAlive",value:function(){return!0}},{key:"snakeLength",value:function(){return 4}}]),e}();!function(e){e[e.None=0]="None",e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Right=3]="Right",e[e.Left=4]="Left"}(n||(n={})),function(e){e[e.Canvas=0]="Canvas",e[e.Body=1]="Body",e[e.Head=2]="Head",e[e.Tail=3]="Tail",e[e.Byte=4]="Byte"}(i||(i={}));var g=Object(l.a)((function e(){Object(h.a)(this,e),this.role=i.Canvas,this.direction=n.None})),w=function(){function e(){Object(h.a)(this,e),this.grid=void 0,this.gridSize=void 0,this.snake=void 0;var t=document.querySelector(":root"),r=getComputedStyle(t);this.gridSize=parseInt(r.getPropertyValue("--gridSize")),this.grid=new Array(this.gridSize);for(var n=0;n<this.gridSize;n++)this.grid[n]=new Array(this.gridSize);for(var i=0;i<this.gridSize;i++)for(var a=0;a<this.gridSize;a++)this.grid[i][a]=new g;this.snake=new f}return Object(l.a)(e,[{key:"getGrid",value:function(){return this.grid}},{key:"getGridSize",value:function(){return this.gridSize}},{key:"getSnake",value:function(){return this.snake}},{key:"getCurrentHeadDirection",value:function(){var e=this.snake.getSnakeEnds().head;return this.grid[e.row][e.col].direction}},{key:"getCurrentTailDirection",value:function(){var e=this.snake.getSnakeEnds().tail;return this.grid[e.row][e.col].direction}},{key:"setCurrentHeadDirection",value:function(e){var t=this.snake.getSnakeEnds().head;this.grid[t.row][t.col].direction=e}},{key:"setCurrentTailDirection",value:function(e){var t=this.snake.getSnakeEnds().tail;this.grid[t.row][t.col].direction=e}},{key:"initGridData",value:function(){var e=this.snake.getSnakeEnds(),t=e.tail,r=e.head;if(this.grid[t.row][t.col].direction=n.None,this.grid[r.row][r.col].direction=n.None,this.grid[t.row][t.col].role=i.Tail,this.grid[r.row][r.col].role=i.Head,t.row===r.row)for(var a=t.col+1;a<r.col;a++)this.grid[t.row][a].role=i.Body,this.grid[r.row][a].role=i.Body;else{if(t.col!==r.col)throw new Error("Snake init invalid");for(var o=t.row+1;o<r.row;o++)this.grid[o][t.col].role=i.Body,this.grid[o][t.col].role=i.Body}}}]),e}(),j=(r(15),r(0)),b=o.a.memo((function(e){var t=e.role,r=e.currentHeadDirection,a=function(e){switch(e){case n.Down:return"t2b";case n.Up:return"b2t";case n.Left:return"r2l";case n.Right:return"l2r";case n.None:return"none";default:throw new Error("invalid dir")}},o=function(){switch(t){case i.Canvas:return"box";case i.Head:return"head_".concat(a(r));case i.Body:return"snake";case i.Tail:return"tail_".concat(a(r));case i.Byte:return"food";default:throw new Error("invalid role")}}();return Object(j.jsx)("div",{className:o})})),v=(r(17),function(e){var t=e.grid,r=e.currentHeadDirection;return Object(j.jsx)("div",{className:"grid",children:t.flat().map((function(e,t){return Object(j.jsx)(b,{role:e.role,id:t,currentHeadDirection:r},t)}))})}),k=r(8),O=(r(18),function(e){switch(e){case i.Body:return"b";case i.Head:return"h";case i.Tail:return"t";case i.Canvas:return"c";case i.Byte:return"f";default:throw new Error("invalid role")}}),S=function(e){switch(e){case n.Down:return"d";case n.Up:return"u";case n.Left:return"l";case n.Right:return"r";case n.None:return"n";default:throw new Error("invalid direction")}},y=function(e){var t=e.role,r=e.direction;return Object(j.jsx)("div",{className:"debugBox",children:Object(j.jsxs)("ul",{children:[t>0?Object(j.jsx)("li",{children:O(t)}):null,r>0?Object(j.jsx)("li",{children:S(r)}):null]})})},D=(r(19),function(e){var t=e.grid;return Object(j.jsx)("div",{className:"debugGrid",children:t.flat().map((function(e,t){return Object(j.jsx)(y,{role:e.role,direction:e.direction},t)}))})}),m=(r(20),r(21),function(){return Object(j.jsx)("div",{className:"wordTilesContainer",children:"SNAKE"})}),p=document.querySelector(":root"),x=getComputedStyle(p).getPropertyValue("--tick"),C=1e3*parseFloat(x.substr(0,x.length-1)),N=new URL(window.location.href),E=(new URLSearchParams(N.search),new w);E.initGridData();var H=E.getGridSize(),B=E.getGrid(),L=function(){var e=Object(a.useState)(E.getSnake().getSnakeEnds()),t=Object(d.a)(e,2),r=t[0],o=t[1],c=Object(a.useState)(!1),s=Object(d.a)(c,2),l=s[0],h=s[1],f=Object(a.useState)(!1),g=Object(d.a)(f,2),w=g[0],b=g[1],O=Object(k.useSwipeable)({onSwipedLeft:function(){if(l){var e=E.getCurrentHeadDirection();console.log(e),e!==n.Left&&e!==n.Right&&E.setCurrentHeadDirection(n.Left)}},onSwipedRight:function(){if(l){var e=E.getCurrentHeadDirection();e!==n.Left&&e!==n.Right&&E.setCurrentHeadDirection(n.Right)}},onSwipedDown:function(){if(l){var e=E.getCurrentHeadDirection();e!==n.Down&&e!==n.Up&&E.setCurrentHeadDirection(n.Down)}},onSwipedUp:function(){if(l){var e=E.getCurrentHeadDirection();e!==n.Down&&e!==n.Up&&E.setCurrentHeadDirection(n.Up)}},preventDefaultTouchmoveEvent:!0,trackMouse:!0});!function(e,t){var r=Object(a.useRef)(e);Object(a.useLayoutEffect)((function(){r.current=e}),[e]),Object(a.useEffect)((function(){if(t){var e=setInterval((function(){return r.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){var e=function(e){var t=r.head.col,a=r.head.row,o=E.getCurrentHeadDirection();switch(B[a][t].role=i.Body,B[a][t].direction=n.None,o){case n.Up:a=r.head.row-1<0?H-1:r.head.row-1;break;case n.Down:a=r.head.row+1>=H?0:r.head.row+1;break;case n.Right:t=r.head.col+1>=H?0:r.head.col+1;break;case n.Left:t=r.head.col-1<0?H-1:r.head.col-1;break;default:throw h(!1),new Error("Invalid head direction!")}e.head.row=a,e.head.col=t,B[a][t].role=i.Head,B[a][t].direction=o;var c=E.getCurrentTailDirection();switch(B[r.tail.row][r.tail.col].role=i.Canvas,B[r.tail.row][r.tail.col].direction=n.None,t=r.tail.col,a=r.tail.row,c){case n.Up:a=r.tail.row-1<0?H-1:r.tail.row-1;break;case n.Down:a=r.tail.row+1>=H?0:r.tail.row+1;break;case n.Right:t=r.tail.col+1>=H?0:r.tail.col+1;break;case n.Left:t=r.tail.col-1<0?H-1:r.tail.col-1;break;default:throw h(!1),new Error("Invalid tail direction!")}return e.tail.row=a,e.tail.col=t,B[a][t].role=i.Tail,B[a][t].direction=c,e}(Object(u.a)({},r));o(e),E.getSnake().setSnakeEnds(e)}),l?C:null);Object(a.useCallback)((function(){if(!l){var e=E.getCurrentTailDirection();E.getCurrentHeadDirection()===n.None&&e===n.None&&(E.setCurrentTailDirection(n.Down),E.setCurrentHeadDirection(n.Down))}h((function(e){return!e}))}),[l]),Object(a.useCallback)((function(){b((function(e){return!e}))}),[]);return Object(j.jsxs)("div",Object(u.a)(Object(u.a)({},O),{},{className:"game",children:[Object(j.jsx)("div",{className:"gridContainer",children:w?Object(j.jsx)(D,{grid:B}):Object(j.jsx)(v,{grid:B,currentHeadDirection:E.getCurrentHeadDirection()})}),Object(j.jsx)(m,{})]}))},R=(r(22),function(){return Object(j.jsx)("div",{className:"title",children:"Snake Bytes"})}),T=(r(23),function(){return Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"menuleft",children:[Object(j.jsx)("button",{className:"About",style:{margin:"2px"},children:"About"}),Object(j.jsx)("button",{className:"Instructions",style:{margin:"2px"},children:"How"})]}),Object(j.jsx)(R,{}),Object(j.jsxs)("div",{className:"menuright",children:[Object(j.jsx)("button",{className:"Sett",style:{margin:"2px"},children:"Settings"}),Object(j.jsx)("button",{className:"Stat",style:{margin:"2px"},children:"Stats"})]})]})}),U=function(){return Object(j.jsxs)("div",{className:"appContainer",children:[Object(j.jsx)(T,{}),Object(j.jsx)(L,{})]})};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.8ecdb20d.chunk.js.map