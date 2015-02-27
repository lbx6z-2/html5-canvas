var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');


/* 填充颜色和画笔颜色 */
context.fillStyle = 'yellow';
context.strokeStyle = 'black';


/* 使用路径绘制圆，在点（320,240）处绘制半径为200像素的圆弧
   其中参数0和2*pi是圆弧的初始角度和最终角度
 */
context.beginPath();
context.arc(320, 240, 200, 0, 2*Math.PI);
context.fill();
context.stroke();
context.closePath();


/* 绘制眼睛 */
context.fillStyle = 'white';

context.beginPath();
context.arc(260, 175, 30, 0, 2*Math.PI);
context.fill();
context.stroke();
context.closePath();

context.beginPath();
context.arc(380, 175, 30, 0, 2*Math.PI);
context.fill();
context.stroke();
context.closePath();


/* 绘制嘴巴 */
context.strokeStyle = 'red';
context.fillStyle = 'yellow';

context.beginPath();
context.arc(320, 240, 150, 0, -1*Math.PI);
context.fill();
context.stroke();
context.closePath();


























