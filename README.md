# How To Make TODO LIST

### Agenda
1. HTML
2. CSS
3. JAVASCRIPT

### HTML
1. [Basic Tag](https://github.com/POBSIZ/TeachToDoList#html---basic-tag)
2. [class & id](https://github.com/POBSIZ/TeachToDoList#html---class--id)
3. [Structuring](https://github.com/POBSIZ/TeachToDoList#html---structuring)

### CSS
1. [Selector](https://github.com/POBSIZ/TeachToDoList#css---selector)
2. [Layout](https://github.com/POBSIZ/TeachToDoList#css---layout)
3. [Append Style](https://github.com/POBSIZ/TeachToDoList#css---append-style)

### JAVASCRIPT
1. [Define Variable & Function]()
2. [Data Type]()
3. [Get DOM Element]()
4. [Array & DOM Element Method]()

### etc
1. [WEB VSCODE](https://vscode.dev/)
  
  
  

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




## HTML - class & id
class 와 id는 태그들을 식별 할 수 있는 이름을 붙이기 위해 사용된다.
이름을 붙이는 이유는 JS 혹은 CSS에서 class 또는 id명으로 객체를 지정해 스타일과 기능들을 지정하기 위해서이다.

### class
class는 여러 태그에 지정 할 수 있다.

```html
...
<main>
  <ul>
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
  </ul>
</main>
...
```

### id
id는 한 태그에만 지정 할 수 있다.

```html
...
<main>
  <ul id="list">
    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>
  </ul>
</main>
...
```




## HTML - Structuring
html로 구조를 짜기 위해선 만들 페이지의 디자인을 보고 그에 맞춰 짜야한다.

> 아래 이미지와 같이 테두리를 치며 구조를 시각화 할 수 있다.

- before
  
![image](https://github.com/POBSIZ/TeachToDoList/assets/65818008/bb3ff380-64ec-4ad1-9032-f8fbd1c17fc6)

- after
  
![image](https://github.com/POBSIZ/TeachToDoList/assets/65818008/06952376-f20c-4743-84c5-845473de1689)

- 시각화된 구조를 바탕으로 작성한 html 코드

```html
...
<body>

  <main>
    <h1>TODO LIST</h1>

    <div>
      <input type="text" placeholder="Write some to do ...">
      <button>+</button>
    </div>

    <ul>
      
      <li>
        <button></button>
        <p>Solve Alogorithm Problem’s</p>
      </li>

      <li>
        <button></button>
        <p>Solve Alogorithm Problem’s</p>
      </li>
      
    </ul>
  </main>

</body>
...
```




## CSS - Selector
css의 selector 즉 선택자는 html에서 작성한 tag 혹은 class, id를 지정하는 문법이다.

### tag
태그의 경우 태그명을 그대로 작성하면 된다.
```css
body {}

main {}

div {}
...
```

### class
클래스의 경우 클래스명 앞에 . 을 붙여 작성한다.
```css
.item {}

.somthing {}

.hello {}
...
```

### id
id의 경우 앞에 # 를 붙여 작성한다.
```css
#list {}

#unique {}

#only {}
...
```

### select child
특정 태그 혹은 class, id의 자식 요소를 특정하여 지정하는 방법이다.
```css
.parent .child {}

#parent #child {}

.paarent #child {}

#parent .child {}
...
```

### select All
연결된 HTML 파일의 모든 요소를 지정하는 방법이다.
```css
* {}
...
```




## CSS - Layout
CSS를 이용하여 HTML 요소들의 레이아웃을 바꾸어보자.

### Flex
flex는 Flexbox(Flexible Box) 레이아웃 모델을 지원하기 위한 속성입니다.  
Flexbox는 요소들을 효율적으로 정렬하고 배치하기 위해 사용되며, 주로 컨테이너와 그 안에 있는 아이템들을 다루는 데에 적용됩니다.  
Flexbox는 수평 정렬과 수직 정렬을 간편하게 수행하며, 요소들의 크기를 자동으로 조절하여 레이아웃을 유연하게 조정할 수 있습니다.  

### Flexbox의 속성

- **display: flex;**  
Flexbox를 적용할 컨테이너를 지정합니다. 해당 속성을 선언한 요소는 Flex 컨테이너가 됩니다.

- **flex-direction**
Flex 아이템들의 배치 방향을 지정합니다.   
row: 수평으로 왼쪽에서 오른쪽으로 배치 (기본값).  
row-reverse: 수평으로 오른쪽에서 왼쪽으로 배치.  
column: 수직으로 위에서 아래로 배치.  
column-reverse: 수직으로 아래에서 위로 배치.  

- **flex-wrap**
Flex 아이템들이 한 줄에 모두 배치되지 않을 경우 줄 바꿈을 할 지 여부를 지정합니다.  
nowrap: 한 줄에 모두 배치 (기본값).  
wrap: 여러 줄에 걸쳐서 배치.  

- **justify-content**
Flex 아이템들을 주 축(main axis)을 따라 정렬합니다.  
flex-start: 주 축 시작점에 정렬 (기본값).  
flex-end: 주 축 끝점에 정렬.  
center: 주 축 중앙에 정렬.  
space-between: 주 축에 공간을 균등하게 분배하여 정렬.  
space-around: 주 축 양쪽에 공간을 균등하게 분배하여 정렬.  

- **align-items**
Flex 아이템들을 교차 축(cross axis)을 따라 정렬합니다.  
flex-start: 교차 축 시작점에 정렬.  
flex-end: 교차 축 끝점에 정렬.  
center: 교차 축 중앙에 정렬.  
stretch: 교차 축을 채우기 위해 아이템들을 늘립니다 (기본값).  

- **align-content**
Flex 아이템들 사이의 간격을 교차 축을 따라 조절합니다. flex-wrap이 wrap으로 설정되어야만 동작합니다.  
flex-start: 교차 축 시작점에 정렬.  
flex-end: 교차 축 끝점에 정렬.  
center: 교차 축 중앙에 정렬.  
space-between: 교차 축에 공간을 균등하게 분배하여 정렬.  
space-around: 교차 축 양쪽에 공간을 균등하게 분배하여 정렬.  
stretch: 교차 축을 채우기 위해 아이템들을 늘립니다 (기본값).   
  
Flexbox를 사용하면 요소들을 쉽고 유연하게 배치할 수 있어 레이아웃 구성에 큰 도움이 됩니다.

![image](https://github.com/POBSIZ/TeachToDoList/assets/65818008/74fef42c-264d-464b-9d1b-10a33ff2ba7a)

  
  
## CSS - Append Style
css의 몇가지 스타일 속성들에 대해 알아보자

### width & height
지정한 HTML 요소의 폭(width)과 높이(height)를 지정하는 속성이다.
```css
.box {
  width: 100px;
  height: 100px;
}
...
```

### margin & padding
HTML 요소 주변의 공간(여백)을 조정하는데 사용되는 속성이다. 
간단히 말해, 요소의 외부 영역을 제어하는데 쓰이며, 해당 요소와 다른 요소 사이의 간격을 조절하는 데 유용하다.

- 하나의 값 : margin: 10px; - 네 방향의 마진이 모두 10px로 설정됩니다.
- 두 개의 값: margin: 10px 20px; - 첫 번째 값은 위/아래(수직) 방향 마진을 설정하고, 두 번째 값은 왼쪽/오른쪽(수평) 방향 마진을 설정합니다.
- 세 개의 값: margin: 10px 20px 30px; - 첫 번째 값은 위 방향, 두 번째 값은 왼쪽/오른쪽 방향, 세 번째 값은 아래 방향 마진을 설정합니다.
- 네 개의 값: margin: 10px 20px 30px 40px; - 시계 방향으로 위, 오른쪽, 아래, 왼쪽 방향의 마진을 설정합니다.

```css
.box1 {
  margin: 10px;
}

.box2 {
  margin: 10px 20px;
}

.box3 {
  margin: 10px 20px 30px;
}

.box4 {
  margin: 10px 20px 30px 40px;
}
...
```
