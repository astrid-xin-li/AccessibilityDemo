import React from "react";
import "./AriaTest.css";
export default class AriaTestDome extends React.Component {
  render() {
    return (
      <div id="ariaContent">
        {/* <ol role="presentation">
          <li role="listitem"> 测试一</li>
          <li role="listitem"> 测试二</li>
          <li role="listitem"> 测试三</li>
          <li role="listitem"> 测试四</li>
        </ol>
        <ol role="list">
          <li role="listitem"> 测试1一</li>
          <li role="listitem"> 测试2二</li>
          <li role="listitem"> 测试3三</li>
          <li role="listitem"> 测试4四</li>
        </ol>
        <ol role="presentation">
          <li> 测试一</li>
          <li> 测试二</li>
          <li role="listitem"> 测试三</li>
          <li role="listitem"> 测试四</li>
        </ol> */}
        {/* <div class="dropdown">
          <button
            type="button"
            class="btn dropdown-toggle"
            id="dropdownMenu1"
            data-toggle="dropdown"
          >
            选择您的职位
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                测试工程师
              </a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                开发工程师
              </a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">
                销售工程师
              </a>
            </li>
          </ul>
        </div>
        // <div class="button-fack">click button</div>
        <div id="image" role="img" tabIndex="1" aria-label="腾讯文档log" />
        <img
          src="https://docs.idqqimg.com/tim/docs/desktop/image/list_logo-230232562f.svg"
          alt="腾讯文档log"
          width="200px"
          height="150px"
          tabIndex="0"
        />
      </div>
    );
  }
} */}
        <ul>
          <ol tabIndex="-1">
            role = presentation 的意义
            <li>需要配合 tablist、tab标签配套使用</li>
          </ol>
          nomal
          <ul tabIndex="2" role="tablist">
            tabIndex="2"
            <li>
              <a role="tab" tabIndex="2" href="#">
                Tab 1 tabIndex="2"
              </a>
            </li>
            <li>
              <a role="tab" href="#">
                Tab 2 tabIndex="0"
              </a>
            </li>
            <li>
              <a role="tab" tabIndex="1" href="#">
                Tab 3 tabIndex="1"
              </a>
            </li>
          </ul>
          role = presentation
          <ul role="tablist" tabIndex="2">
            tabIndex="2"
            <li role="presentation">
              <a role="tab" href="#">
                Tab 1
              </a>
              <a
                role="tab"
                aria-label="测试a"
                aria-labelledby="dropdownMenu1"
                href="https://www.baidu.com"
              >
                baidu
              </a>
            </li>
            <li role="presentation">
              <a role="tab" href="#">
                Tab 2
              </a>
            </li>
            <li role="presentation">
              <a role="tab" href="#">
                Tab 3
              </a>
            </li>
          </ul>
          role = presentation
          <ul role="tablist">
            <li role="presentation">
              <a role="button" href="#">
                Tab 1
              </a>
            </li>
            <li role="presentation">
              <a href="#">Tab 2</a>
            </li>
            <li role="presentation">
              <a href="#">Tab 3</a>
            </li>
          </ul>
          aria-label && aria-labelledby
          <div class="dropdown">
            <button
              type="button"
              class="btn dropdown-toggle"
              id="dropdownMenu1"
              data-toggle="dropdown"
            >
              选择您的职位
              <span class="caret"></span>
            </button>
            <ul
              class="dropdown-menu"
              role="menu"
              aria-label="ul text"
              aria-labelledby="dropdownMenu1"
            >
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">
                  测试工程师
                </a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">
                  开发工程师
                </a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">
                  销售工程师
                </a>
              </li>
            </ul>

            <div role="presentation">
              <a
                tabIndex="2"
                aria-label="测试a"
                aria-labelledby="dropdownMenu1"
                href="https://www.baidu.com"
                role="tab"
              >
                baidu tabIndex="2"
              </a>
              <br />
              <a
                tabIndex="2"
                aria-label="测试a"
                href="https://www.baidu.com"
                role="presentation"
              >
                baidu tabIndex="2"
              </a>
            </div>
            <div role="presentation" tabIndex="2">
              <br />
              12
            </div>
            <br />
            <p tabIndex="2" aria-hidden="true">
              1545 tabIndex="2"
            </p>
            <p tabIndex="2" role="presentation">
              1545 tabIndex="2"
            </p>
            <p tabIndex="1">1545 tabIndex="1"</p>
            <p style={{ display: "none" }}>154</p>
            <p style={{ visibility: "hidden" }}>.fsdf</p>
          </div>
        </ul>
      </div>
    );
  }
}
