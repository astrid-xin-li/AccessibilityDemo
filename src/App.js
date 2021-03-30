import "./App.css";
export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <a id="myAnchor" href="https://docs.qq.com/doc/">
        腾讯文档
      </a>
      <input placeholder="input test" name="name" />
      <br />
      <br />
      <div>
        <div
          id="image"
          role="img"
          tabIndex="0"
          aria-describedby="这是div做一张图片"
          aria-label="阁楼"
        />
        <div>
          <span> 你好 </span>
          <br />
          <br />
          <a href="https://docs.qq.com/doc/">
            <img
              width="100px"
              src="https://lh3.googleusercontent.com/proxy/6JSexvNZFPxN6B2nxRlmqzKevbkgmEXJm-lfI-1Sr8lxexI7i2HkP8X8I3pMuqWe3ehN4e0Gms-Hu_1iUHgntwK4fMUg5DGtqkOdKUdXAohCjsWKwqNKkDo5i2Q"
            />
          </a>
        </div>
      </div>
      <h2>word</h2>
      <br />
      <br />
    </div>
  );
}
