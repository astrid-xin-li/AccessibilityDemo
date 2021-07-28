import React from "react";

export default class AriaActivedescendant extends React.Component {
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          aria-activedescendant="cb1-opt6"
          aria-readonly="true"
          aria-owns="cb1-list"
          aria-autocomplete="list"
          role="combobox"
          id="cb1-edit"
        />
        <ul aria-expanded="true" role="listbox" id="cb1-list">
          <li role="option" id="cb1-opt1">
            阿拉巴马州
          </li>
          <li role="option" id="cb1-opt2">
            阿拉斯加
          </li>
          <li role="option" id="cb1-opt3">
            美属萨摩亚
          </li>
          <li role="option" id="cb1-opt4">
            亚利桑那州
          </li>
          <li role="option" id="cb1-opt5">
            阿肯色州
          </li>
          <li role="option" id="cb1-opt6">
            加利福尼亚
          </li>
          <li role="option" id="cb1-opt7">
            科罗拉多
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
