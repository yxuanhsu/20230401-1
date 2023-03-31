let points1 = [[3, 5], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; //list資料，
let points2 = [[3, 5], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let points3 = [[3, 5], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let points4 = [[3, 5], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let points5 = [[3, 5], [5, -1], [6, -2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]];
let ctx
var k_num=1
var clr1 = '#1B263B'
var clr2 = '#778DA9'

function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
	for (let i = 0; i < points1.length; i++) {
    for (let j = 0; j < points1[i].length; j++) {
      points1[i][j] = points1[i][j] * 12;
    }
  }
  for (let i = 0; i < points2.length; i++) {
    for (let j = 0; j < points2[i].length; j++) {
      points2[i][j] = points2[i][j] * 16;
    }
  }
  for (let i = 0; i < points3.length; i++) {
    for (let j = 0; j < points3[i].length; j++) {
      points3[i][j] = points3[i][j] * 20;
    }
  }
  for (let i = 0; i < points4.length; i++) {
    for (let j = 0; j < points4[i].length; j++) {
      points4[i][j] = points4[i][j] * 24;
    }
  }
  for (let i = 0; i < points5.length; i++) {
    for (let j = 0; j < points5[i].length; j++) {
      points5[i][j] = points5[i][j] * 28;
    }
  }
  ctx = canvas.getContext('2d');
	ctx.lineWidth = 15;
	ctx.lineCap = 'round'
}

function draw() {
  background(255);
  translate(width/2,height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  textSize(30)  //文字大小
fill(0, 102, 153);  //設定顏色
text("蝙蝠",mouseX+75,100)  //顯示文字
  scale(1, -1);  //上下翻轉
	for(let k = 0; k <k_num ; k++){
   draw_line(points1[points1.length-1][0],points1[points1.length-1][1])*10
 }
 for(let k = 0; k <k_num ; k++){
  draw_line(points2[points2.length-1][0],points2[points2.length-1][1])*10
}
for(let k = 0; k <k_num ; k++){
  draw_line(points3[points3.length-1][0],points3[points3.length-1][1])*10
}
for(let k = 0; k <k_num ; k++){
  draw_line(points4[points4.length-1][0],points4[points4.length-1][1])*10
}
for(let k = 0; k <k_num ; k++){
  draw_line(points5[points5.length-1][0],points5[points5.length-1][1])*10
}
	
  }
function draw_line(){
	for (let i = 0; i < points1.length-1; i++) {
    gradientLine(ctx,points1[i][0]+mouseX, points1[i][1]+mouseX, points1[i+1][0]+mouseX, points1[i+1][1]+mouseX,clr1,clr2);
  }
gradientLine(ctx,points1[points1.length-1][0]+mouseX, points1[points1.length-1][1]+mouseX, points1[0][0]+mouseX, points1[0][1]+mouseX,clr1,clr2);//把最後一點與第一點的連線
 
	for (let i = 0; i < points2.length-1; i++) {
    gradientLine(ctx,points2[i][0]+mouseX, points2[i][1]+mouseX, points2[i+1][0]+mouseX, points2[i+1][1]+mouseX,clr1,clr2);
  }
  gradientLine(ctx,points2[points2.length-1][0]+mouseX, points2[points2.length-1][1]+mouseX, points2[0][0]+mouseX, points2[0][1]+mouseX,clr1,clr2);//把最後一點與第一點的連線}

  for (let i = 0; i < points3.length-1; i++) {
    gradientLine(ctx,points3[i][0]+mouseX, points3[i][1]+mouseX, points3[i+1][0]+mouseX, points3[i+1][1]+mouseX,clr1,clr2);
  }
  gradientLine(ctx,points3[points3.length-1][0]+mouseX, points3[points3.length-1][1]+mouseX, points3[0][0]+mouseX, points2[0][1]+mouseX,clr1,clr2);//把最後一點與第一點的連線}

  for (let i = 0; i < points4.length-1; i++) {
    gradientLine(ctx,points4[i][0]+mouseX, points4[i][1]+mouseX, points4[i+1][0]+mouseX, points4[i+1][1]+mouseX,clr1,clr2);
  }
  gradientLine(ctx,points4[points4.length-1][0], points4[points4.length-1][1], points4[0][0], points4[0][1],clr1,clr2);//把最後一點與第一點的連線}

  for (let i = 0; i < points5.length-1; i++) {
    gradientLine(ctx,points5[i][0]+mouseX, points5[i][1]+mouseX, points5[i+1][0]+mouseX, points5[i+1][1]+mouseX,clr1,clr2);
  }
  gradientLine(ctx,points5[points5.length-1][0]+mouseX, points5[points5.length-1][1]+mouseX, points5[0][0]+mouseX, points5[0][1]+mouseX,clr1,clr2);//把最後一點與第一點的連線}

}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}