import React from "react";
import "./TableIndexTest.css";
export default class TabIndexTestDome extends React.Component {
  render() {
    return (
      <div id="tabIndexContent">
        测试tabindex得出的结论：
        <ol>
          <li>
            当开启无障碍化时，读屏软件是根据tabindex为1、2、3.....开始依次读屏，最后读取tabindex=0
          </li>
          <li>
            没有开启无障碍化时，读屏软件是根据tabindex为0、1、2、3.....开始依次读屏
          </li>
          <li> tabindex=-1 键盘tab按键是无法对焦改节点</li>
          <li>
            是将tabindex为相同值，按照dom节点顺序依次便利对焦后。再按照该方法，对焦tabindex值加1的dom节点，若无，则去对焦tabindex=0
          </li>
        </ol>
        <div role="presentation" tabIndex="-1">
          <a
            // tabIndex="0"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="baidu12"
          >
            百度tabIndex="0"
          </a>
        </div>
        <div>
          <a
            tabIndex="1"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="111"
          >
            百度hjhsdjkftabIndex="1"
          </a>
        </div>
        <div>
          <a
            tabIndex="3"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="12"
          >
            百度hjhsdjkftabIndex="3"
          </a>
        </div>
        <div tabIndex="2">
          div tabIndex="2"
          <a
            // tabIndex="0"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="88"
          >
            百度hjhsdjkf tabIndex="0"
          </a>
          <a
            tabIndex="1"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="11dsf"
          >
            百度hjhsdjkf tabIndex="1"
          </a>
          <a
            tabIndex="2"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="88fds"
          >
            百度hjhsdjkf tabIndex="2"
          </a>
        </div>
        <div>
          <a
            tabIndex="2"
            href="https://www.baidu.com"
            title="百度title"
            aria-label="bfdsafsdaidu12"
          >
            百度hjhsdjkf tabIndex="2"
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
