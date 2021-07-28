import React from "react";
import "./Demo.css";
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0,
      firstLine: "这是隐藏dom",
      firstLength: 20,
      secondLine: "第二段，这是个例子呀",
      secondLength: 10
    };
    this.x = -1;
    this.y = -1;
  }

  componentDidMount() {
    this.renderCanvas();
    const canvasDemo = document.getElementById("astridlidemo");
    this.canvasbox = canvasDemo.getBoundingClientRect();

    canvasDemo.addEventListener(
      "mousedown",
      this.canvasMouseDown.bind(this),
      false
    );

    canvasDemo.addEventListener(
      "mousemove",
      this.canvasMouseMove.bind(this),
      false
    );

    canvasDemo.addEventListener(
      "mouseup",
      this.canvasMouseUp.bind(this),
      false
    );
  }
  renderCanvas() {
    var can = document.getElementById("astridlidemo");
    can.style.border = "1px solid red";
    can.width = 1000;
    can.height = 600;
    var ctx = can.getContext("2d");

    /*第三部：绘制*/
    /*画图，第一步，定位坐标点*/
    ctx.moveTo(570, 250); //将画笔移动到100，100的坐标点
    ctx.lineTo(560, 270); //将画笔从100,100水平移动到200,100的位置
    ctx.lineTo(550, 260); //将画笔从200,100移动到100,200的位置
    ctx.lineTo(500, 300); //将画笔从200,100移动到100,200的位置
    ctx.lineTo(490, 290);
    ctx.lineTo(545, 250);
    ctx.lineTo(540, 240);
    /*闭合路径*/
    ctx.closePath();

    //设置线宽
    ctx.lineWidth = 4;

    //设置描边
    ctx.strokeStyle = "red"; //设置描边样式
    ctx.stroke(); //描边的意思
    ctx.fillStyle = "yellow"; //设置填充样式
    ctx.fill();
    ctx.textBaseline = "middle";
    ctx.font = "50px red";
    ctx.fillStyle = "blue";
    ctx.fillText("红框内部是一个canvas", 0, 100);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "green";
    ctx.strokeText("红框内部是一个canvas", 0, 100);

    ctx.textBaseline = "middle";
    ctx.font = "80px red";
    ctx.fillStyle = "blue";
    ctx.fillText(this.state.firstLine, 0, 300);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "green";
    ctx.strokeText(this.state.firstLine, 0, 300);

    ctx.textBaseline = "middle";
    ctx.font = "100px red";
    ctx.fillStyle = "purple";
    ctx.fillText(this.state.secondLine, 0, 500);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "yellow";
    ctx.strokeText(this.state.secondLine, 0, 500);
  }

  canvasMouseDown(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.x = x;
    this.y = y;
    console.log("canvasMouseDown", x, y);
  }
  canvasMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log("canvasMouseMove", event);
  }
  canvasMouseUp(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    this.selectRange(x, y);
    console.log("canvasMouseUp", x, y);
  }

  selectRange(endX, endY) {
    if (this.x === -1 || this.y === -1) {
      return;
    }
    const width = endX - this.x;
    const height = endY - this.y;
    const startPoint = {
      x: this.x,
      y: this.y
    };
    if (width < 0) {
      startPoint.x = endX;
    }
    if (height < 0) {
      startPoint.y = endY;
    }
    let spantext = "";
    if (startPoint.y >= 270 && startPoint.y <= 330 && startPoint.x <= 20) {
      // first line
    }
    if (startPoint.y >= 450 && startPoint.y <= 550) {
      // secend line
      const index = Math.floor(startPoint.x / 100);
      const widthIndex = Math.floor(width / 100);
      for (let i = index; i <= index + widthIndex; i++) {
        spantext += this.state.secondLine[i];
        // console.log(
        //   "click x,y",
        //   i,
        //   this.state.secondLine[i],
        //   this.state.secondLine
        // );
      }
    }
    console.log("this is span text", spantext);
    if (spantext.length > 0) {
      const accessibilityDemo = document.getElementById("accessibilityDemo");
      accessibilityDemo.innerText = spantext;
    }
  }
  canvasClick(event) {
    console.log("click x,y", event.offsetX, event.offsetY);
  }

  render() {
    return (
      <div style={{ opacity: this.state.opacity }} id="outer">
        {/* Hello {this.props.name} */}
        <canvas id="astridlidemo" width="1000" height="600"></canvas>
        <div
          id="accessibilityDemo"
          aria-live="assertive"
          role="region"
          aria-atomic="true"
          aria-hidden="false"
        >
          {""}
        </div>
      </div>
    );
  }
}
