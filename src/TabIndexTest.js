import React from "react";
import "./TableIndexTest.css";
export default class TabIndexTestDome extends React.Component {
  render() {
    return (
      <div id="tabIndexContent">
        {/* 测试tabindex得出的结论：
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
        </ol> */}
        <a
          href="#"
          tabIndex="-1"
          role="button"
          aria-hidden="true"
          title="无法通过tab对焦的链接"
        >
          {" ds "}
          tabIndex="-1"
        </a>
        <br />
        <span aria-hidden="false">no hidden</span>

        <span> hidden</span>
        <br />
        <span aria-hidden="true">heihei hidden</span>
        <br />
        <button>nihao</button>
        <div role="button" tabindex="1">
          click
        </div>
        <div>
          <a
            // tabIndex="0"
            href="https://www.baidu.com"
            title="链接1"
            // aria-label="baidu12"
          >
            tabIndex="0"
          </a>
        </div>
        <div>
          <a
            tabIndex="1"
            href="https://www.baidu.com"
            title="链接2"
            // aria-label="111"
          >
            tabIndex="1"
          </a>
        </div>
        <div>
          <a
            tabIndex="3"
            href="https://www.baidu.com"
            title="链接3"
            // aria-label="12"
          >
            tabIndex="3"
          </a>
        </div>
        <div aria-hidden="true" tabIndex="2" id="divTabIndexTest">
          红色的是一个div 且 tabIndex="2"
          <br />
          <a
            // tabIndex="0"
            href="https://www.baidu.com"
            title="链接4"
            // aria-label="88"
          >
            tabIndex="0"
          </a>
          <br />
          <a
            tabIndex="1"
            href="https://www.baidu.com"
            title="链接5"
            // aria-label="11dsf"
          >
            tabIndex="1"
          </a>
          <br />
          <a
            tabIndex="2"
            href="https://www.baidu.com"
            title="链接6"
            // aria-label="88fds"
          >
            tabIndex="2"
          </a>
        </div>
        <div>
          <a
            tabIndex="2"
            href="https://www.baidu.com"
            title="链接7"
            // aria-label="bfdsafsdaidu12"
          >
            tabIndex="2"
          </a>
        </div>
        <span id="ttt" aria-label="nihao" tabindex="1" role="button">
          jkjkdlsf
        </span>
        <div tabindex="1" role="button" aria-hidden="false">
          jjjj
        </div>
        <div aria-labelledby="ttt" tabIndex="1" role="region">
          <input />
          <img
            src="https://www.baidu.com"
            alt="百度title"
            aria-label="baidu4"
          />
          dsf
        </div>
      </div>
    );
  }
}
