import React from "react";
import "./Test.css";
export default class TestDome extends React.Component {
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

  render() {
    return (
      <div style={{ opacity: this.state.opacity }} id="testContent">
        <div role="presentation" tabIndex="-1">
          <a
            // tabIndex="0"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="baidu12"
          >
            百度hjhsdjkf
          </a>
        </div>
        <div>
          <a
            tabIndex="1"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="111"
          >
            百度hjhsdjkf
          </a>
        </div>
        <div>
          <a
            tabIndex="3"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="12"
          >
            百度hjhsdjkf
          </a>
        </div>
        <div tabIndex="2">
          <a
            // tabIndex="0"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="88"
          >
            百度hjhsdjkf
          </a>
          <a
            tabIndex="1"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="11dsf"
          >
            百度hjhsdjkf
          </a>
          <a
            tabIndex="2"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="88fds"
          >
            百度hjhsdjkf
          </a>
        </div>

        <div>
          <a
            tabIndex="2"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="bfdsafsdaidu12"
          >
            百度hjhsdjkf
          </a>
        </div>
        <span id="ttt">jkjkdlsf</span>
        <div aria-labelledby="ttt" tabIndex="1" role="region">
          {/* <input /> */}
          <img
            src="https://www.baidu.com"
            alt="百度title"
            aria-label="baidu4"
          />
          {/* dsf */}
        </div>
      </div>
    );
  }
}
