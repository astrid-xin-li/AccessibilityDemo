import "./App.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <a id="tencent" href="https://docs.qq.com">
        腾 讯 文 档
      </a>
      <input placeholder="input test" name="name" />
      {/* <br /> */}
      <br />
      <div>
        <div
          id="image"
          // role="img"
          tabIndex="0"
          aria-describedby="这是div做一张图片"
          aria-label="阁楼"
        />
        <div>
          <span> span测试 </span>
          <p> 段落测试</p>
          <a href="https://docs.qq.com" title="这个图片是一个腾讯文档链接">
            <img
              width="300px"
              src="http://static.runoob.com/images/demo/demo4.jpg"
            />
          </a>
        </div>
      </div>
      <h2>word</h2>
    </div>
  );
}
