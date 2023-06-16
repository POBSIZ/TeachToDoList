# How To Make TODO LIST

### Agenda
1. HTML
2. CSS
3. JAVASCRIPT

### HTML
1. [Basic Tag](https://github.com/POBSIZ/TeachToDoList/edit/master/README.md#html---basic-tag)
2. [class & id]()
3. [Structuring]()

### CSS
1. [Selector]()
2. [Layout]()
3. [Append Style]()

### JAVASCRIPT
1. [Define Variable & Function]()
2. [Data Type]()
3. [Get DOM Element]()
4. [Array & DOM Element Method]()

### etc
1. [WEB VSCODE](https://vscode.dev/)

</br>

## HTML - Basic Tag

### head
html 문서의 상단부에 위치한 태그로써 내부에 해당 문서의 title, meta 정보, 외부 소스들에 대한 값들을 넣을 수 있다.
```html
...
<head>
  <!-- 인코딩 속성 -->
  <meta charset="UTF-8"> 

  <!-- viewport 크기 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 해당 페이지 title -->
  <title>Hello World!</title>
</head>
...
```

### body
html 문서의 핵심 부분이며 이곳에 우리가 만들 페이지들에 대한 직접적인 정보와 태그들이 들어간다.
```html
...
<body>
  ...
  Hello World!
  ...
</body>
...
```

### main
태그 중 주요 내용을 담을 수 있는 태그이다. 명시적인 태그이며 해당 태그는 body, html 태그 외에 부모 태그가 있어서는 안된다. 
```html
...
<body>
  <main>
    ...
    This is Main Place
    ...
  </main>
</body>
...
```

### h1
해당 구역의 제목을 나타낼 수 있는 태그이다.
```html
...
<main>
  <h1>Title Here</h1>
</main>
...
```

### div
구역을 나누어 주는 태그이다.
```html
...
<main>
  <div>구역 1</div>
  <div>구역 2</div>
  <div>구역 3</div>
</main>
...
```

### ul, ol, li
- ul: 순서가 없는 목록을 나타내는 태그
- ol: 순서가 있는 목록을 나타내는 태그
- li: 목록의 요소를 나타내는 태그

```html
...
<!-- 순서가 없는 목록 -->
<ul>
  <!-- 목록의 요소 -->
  <li>item 1</li>
  <li>item 2</li>
</ul>

<!-- 순서가 있는 목록 -->
<ol>
  <li>item 1</li>
  <li>item 2</li>
</ol>
...
```

### input
사용자의 입력을 받을 수 있는 태그이다. 
#### 속성 
- type: 입력받을 정보의 유형
- placeholder: 사용자에게 미리 보여질 문구

```html
...
<input type="text" placeholde="미리 보여줄 글">
...
```
### button
말 그대로 버튼이다 눌렀을떄의 이벤트등을 자바스크립트로 넣을 수 있다.

```html
<button onclick="foo()">Click!</button>
```
