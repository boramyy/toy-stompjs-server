# PUSH 연동 테스트를 위한 서버

## 서버를 구성해보자

<br>

### 필요한 사전 환경

- node 가 전역에 설치되어있다

<br>

### node express 서버구성

1. 프로젝트 폴더생성
2. package.json 생성
```shell
  $ npm init
```

3. express 설치
```shell
  $ npm i express --save
```

4. /src/index.js 작성

``` javascript
  const express = require("express");
  const app = express();

  const SERVER_PORT = 3001;

  app.get("/", (req, res) => {
    res.json({
      msg: `hello `
    });
  });

  app.listen(SERVER_PORT, () =>
    console.log(`server listening on part ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
  );
```

## stomp 설치

```shell
  $ npm i @stomp/stompjs websocket --save
```

## 참고

- [Express - Hello world 예제](https://expressjs.com/ko/starter/hello-world.html)
- [STOMP.js Documentation - Using STOMP JS](https://stomp-js.github.io/stomp-websocket/codo/extra/docs-src/Usage.md.html#toc_2)