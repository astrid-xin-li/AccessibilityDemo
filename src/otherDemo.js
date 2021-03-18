import React, { CSSProperties } from "react";
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity: 1.0 };
  }

  componentDidMount() {
    this.renderCanvas();
    this.timer = setInterval(
      function () {
        var opacity = this.state.opacity;
        opacity -= 0.05;
        if (opacity < 0.1) {
          opacity = 1.0;
        }
        this.setState({
          opacity: opacity
        });
      }.bind(this),
      100
    );
  }
  renderCanvas() {
    var can = document.getElementById("astridlidemo");
    can.style.border = "1px solid red";
    can.width = 600;
    can.height = 600;
    /*canvas的宽高直接用width和height,千万别can.style.width*/

    /*第二步，获取canvas的上下文（也就是画布的工具栏）*/
    var ctx = can.getContext("2d");

    /*第三部：绘制*/
    /*画图，第一步，定位坐标点*/
    ctx.moveTo(100, 100); //将画笔移动到100，100的坐标点
    ctx.lineTo(200, 100); //将画笔从100,100水平移动到200,100的位置
    ctx.lineTo(100, 200); //将画笔从200,100移动到100,200的位置

    /*闭合路径*/
    ctx.closePath();

    //设置线宽
    ctx.lineWidth = 4;

    //设置描边
    ctx.strokeStyle = "red"; //设置描边样式
    ctx.stroke(); //描边的意思

    //设置填充
    ctx.fillStyle = "yellow"; //设置填充样式
    ctx.fill();
  }

  render() {
    return (
      <div style={{ opacity: this.state.opacity }}>
        Hello {this.props.name}
        <canvas id="astridlidemo" width="600" height="600"></canvas>
      </div>
    );
  }
}
