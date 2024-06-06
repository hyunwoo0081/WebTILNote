// init database
if (!localStorage.getItem('tags')) {
  const DEFAULT_TAGS = {
    "memos": [
      {
        "id": 1,
        "title": "C 프로그래밍 입문",
        "content": "C 언어의 기초 문법, 변수, 기본 제어 구조를 학습합니다. 이 강의는 초보자를 위한 것이며, C 언어의 기본 개념을 다룹니다. 변수 선언과 초기화, 기본적인 입력과 출력을 다룹니다.",
        "createdAt": "2024-03-03T11:08:39.830Z"
      },
      {
        "id": 2,
        "title": "C 포인터 이해하기",
        "content": "C 언어의 포인터 개념을 깊이 있게 탐구합니다. 포인터의 선언, 초기화 및 사용 방법을 배웁니다. 포인터를 사용한 메모리 조작 방법을 설명합니다.",
        "createdAt": "2024-03-10T11:16:35.141Z"
      },
      {
        "id": 3,
        "title": "C의 메모리 관리",
        "content": "C 언어에서 동적 메모리 할당과 해제를 학습합니다. malloc과 free 함수의 사용법을 익히고 메모리 누수 문제를 방지하는 방법을 다룹니다.",
        "createdAt": "2024-03-20T11:17:12.666Z"
      },
      {
        "id": 4,
        "title": "C 배열 다루기",
        "content": "C 언어에서 배열을 선언하고 초기화하는 방법을 배웁니다. 배열의 인덱싱과 반복문을 사용한 배열 처리 방법을 설명합니다.",
        "createdAt": "2024-03-20T11:17:30.124Z"
      },
      {
        "id": 5,
        "title": "C 구조체 이해하기",
        "content": "C 언어의 구조체를 사용하여 복잡한 데이터 타입을 만드는 방법을 배웁니다. 구조체의 선언과 사용법, 구조체 배열과 포인터를 설명합니다.",
        "createdAt": "2024-04-12T11:17:45.676Z"
      },
      {
        "id": 6,
        "title": "C 파일 입출력",
        "content": "C 언어에서 파일을 읽고 쓰는 방법을 배웁니다. 파일 포인터와 fopen, fclose, fread, fwrite 함수의 사용법을 다룹니다.",
        "createdAt": "2024-04-12T11:18:00.749Z"
      },
      {
        "id": 7,
        "title": "고급 C 프로그래밍 기법",
        "content": "비트 연산과 매크로 프로그래밍 등 고급 C 프로그래밍 기법을 탐구합니다. 효율적인 코딩을 위한 최적화 기법도 다룹니다.",
        "createdAt": "2024-04-12T11:18:22.277Z"
      },
      {
        "id": 8,
        "title": "C 연결 리스트",
        "content": "C 언어에서 연결 리스트를 구현하고 사용하는 방법을 배웁니다. 노드의 생성, 삽입, 삭제 및 탐색 방법을 설명합니다.",
        "createdAt": "2024-04-12T11:18:31.047Z"
      },
      {
        "id": 9,
        "title": "C 프로그램 디버깅",
        "content": "C 프로그램의 디버깅 기술과 도구를 학습합니다. gdb를 사용한 디버깅 기법과 일반적인 디버깅 전략을 다룹니다.",
        "createdAt": "2024-05-02T11:18:49.704Z"
      },
      {
        "id": 10,
        "title": "C 멀티스레딩",
        "content": "C 언어에서 멀티스레딩을 구현하고 관리하는 방법을 배웁니다. pthread 라이브러리를 사용한 스레드 생성과 동기화 방법을 설명합니다.",
        "createdAt": "2024-05-14T11:19:01.033Z"
      }
    ],
    "tags":[
      {
        "id": 1,
        "name": "C"
      },
      {
        "id": 2,
        "name": "초급"
      },
      {
        "id": 3,
        "name": "문법"
      },
      {
        "id": 4,
        "name": "중급"
      },
      {
        "id": 5,
        "name": "포인터"
      },
      {
        "id": 6,
        "name": "고급"
      },
      {
        "id": 7,
        "name": "메모리 관리"
      },
      {
        "id": 8,
        "name": "배열"
      },
      {
        "id": 9,
        "name": "구조체"
      },
      {
        "id": 10,
        "name": "파일 입출력"
      },
      {
        "id": 11,
        "name": "기법"
      },
      {
        "id": 12,
        "name": "연결 리스트"
      },
      {
        "id": 13,
        "name": "디버깅"
      },
      {
        "id": 14,
        "name": "멀티테스킹"
      }
    ],
    "tag_list": [
      {
        "memo_id": 1,
        "tag_id": 1
      },
      {
        "memo_id": 1,
        "tag_id": 2
      },
      {
        "memo_id": 1,
        "tag_id": 3
      },
      {
        "memo_id": 2,
        "tag_id": 1
      },
      {
        "memo_id": 2,
        "tag_id": 4
      },
      {
        "memo_id": 2,
        "tag_id": 5
      },
      {
        "memo_id": 3,
        "tag_id": 1
      },
      {
        "memo_id": 3,
        "tag_id": 6
      },
      {
        "memo_id": 3,
        "tag_id": 7
      },
      {
        "memo_id": 4,
        "tag_id": 1
      },
      {
        "memo_id": 4,
        "tag_id": 2
      },
      {
        "memo_id": 4,
        "tag_id": 8
      },
      {
        "memo_id": 5,
        "tag_id": 1
      },
      {
        "memo_id": 5,
        "tag_id": 6
      },
      {
        "memo_id": 5,
        "tag_id": 9
      },
      {
        "memo_id": 6,
        "tag_id": 1
      },
      {
        "memo_id": 6,
        "tag_id": 4
      },
      {
        "memo_id": 6,
        "tag_id": 10
      },
      {
        "memo_id": 7,
        "tag_id": 1
      },
      {
        "memo_id": 7,
        "tag_id": 8
      },
      {
        "memo_id": 7,
        "tag_id": 11
      },
      {
        "memo_id": 8,
        "tag_id": 1
      },
      {
        "memo_id": 8,
        "tag_id": 4
      },
      {
        "memo_id": 8,
        "tag_id": 12
      },
      {
        "memo_id": 9,
        "tag_id": 1
      },
      {
        "memo_id": 9,
        "tag_id": 4
      },
      {
        "memo_id": 9,
        "tag_id": 13
      },
      {
        "memo_id": 10,
        "tag_id": 1
      },
      {
        "memo_id": 10,
        "tag_id": 6
      },
      {
        "memo_id": 10,
        "tag_id": 14
      }
    ]
  };

  for (const key in DEFAULT_TAGS) {
    localStorage.setItem(key, JSON.stringify(DEFAULT_TAGS[key]));
  }
}

//////////////////////////////////////////////////////////////////////////////////////////

const Database = {
  /** Database 에 테이블을 생성합니다.
   * @param {string} tableName 테이블 이름
   * @param {object} defaultSchema 테이블의 디폴트 스키마 */
  createTable(tableName, defaultSchema) {
    const database = localStorage.getItem(tableName);
    const data = database ? JSON.parse(database) : [];

    return { tableName, defaultSchema, data };
  },
  /** LocalStorage 에 테이블을 저장합니다.
   * @param {object} tableData 테이블 데이터 */
  saveDatabase(tableData) {
    localStorage.setItem(tableData.tableName, JSON.stringify(tableData.data));
  },
  /** 테이블에서 데이터를 검색합니다.
   * @param {object} tableData 테이블 데이터
   * @param {(data:object, list:Array|undefined) => boolean} searchFunc 검색할 데이터 조건 함수 */
  select(tableData, searchFunc) {
    return tableData.data.filter((item) => searchFunc(item, tableData.data));
  },
  /** 데이터를 테이블에 삽입합니다.
   * @param {object} tableData 테이블 데이터
   * @param {object} data 삽입할 데이터 */
  insert(tableData, data) {
    const newData = {};
    for (const key in tableData.defaultSchema) {
      if (typeof tableData.defaultSchema[key] === 'function')
        newData[key] = tableData.defaultSchema[key](tableData.data[tableData.data.length-1]);
      else
        newData[key] = tableData.defaultSchema[key];
    }

    tableData.data.push({...newData, ...data});
  },
  /** 데이터를 업데이트합니다.
   * @param {object} database 테이블 데이터
   * @param {(data:object, list:Array|undefined) => boolean} searchFunc 검색할 데이터 조건 함수
   * @param {object} data 변경할 데이터 */
  update(database, searchFunc, data) {
    const items = this.select(database, searchFunc);

    if (items.length === 0)
      throw new Error('No data found');

    const item = items[0];

    for (const key in data) {
      item[key] = data[key];
    }
  },
  /** 데이터를 삭제합니다.
   * @param {object} database 테이블 데이터
   * @param {(data:object, list:Array|undefined) => boolean} searchFunc 검색할 데이터 조건 함수 */
  delete(database, searchFunc) {
    database.data = database.data.filter((item) => !searchFunc(item, database.data));
  },
};

const Tables = {
  tags: Database.createTable('tags',
    { id: (last) => last ? last.id + 1 : 1, name: '' }),
  memos: Database.createTable('memos',
    { id: (last) => last ? last.id + 1 : 1 , title: '', content: '', createdAt: new Date().toISOString() }),
  tag_list: Database.createTable('tag_list',
    { memo_id: 1, tag_id: 1 }),
};

const Views = {
  /** 메모를 화면에 그립니다.
   * @param {object} memo 메모 데이터 */
  drawMemo(memo) {
    const memoElement = document.createElement('div');
    memoElement.setAttribute('class', 'memo-card');
    memoElement.innerHTML = `
      <h3>${memo.title}</h3>
      <p>${memo.content}</p>
    `;
    memoElement.addEventListener('click', () => {
      window.location.href = `memo/index.html?memoId=${memo.id}`;
    });

    return memoElement;
  },
  /** 태그를 화면에 그립니다.
   * @param {object} tag 태그 데이터 */
  drawTag(tag) {
    const tagElement = document.createElement('button');
    setAttributes(tagElement, {
      'class': 'tag-name',
      'type': 'button',
    })
    tagElement.innerHTML = tag.name;

    tagElement.addEventListener('click', () => {
      setSelectedTag(tag.id);
    });

    return tagElement;
  },
};

const Contributions = {
  BOX_SIZE: 18,
  GAP_SIZE: 3,
  BORDER_RADIUS: 4,
  STROKE_WIDTH: 2,
  STROKE_COLOR: 'black',
  TITLE_COLOR: 'gray',

  HINT_WIDTH: 200,
  HINT_HEIGHT: 30,

  GRAPH_WIDTH: 0,
  GRAPH_HEIGHT: 0,
  TITLE_WIDTH: 50,

  DAYS: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  MONTHS: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  COLORS: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],

  /** 제목을 SVG 로 변환합니다.
   * @returns {SVGElement} SVG 엘리먼트 */
  getTitleSvg() {
    const $TitleSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setAttributes($TitleSvg, {
      'width': this.TITLE_WIDTH,
    });

    for (let i = 0; i < 7; i ++) {
      const $TitleText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      setAttributes($TitleText, {
        'x': this.TITLE_WIDTH - this.GAP_SIZE*3,
        'y': (i * (this.BOX_SIZE + this.GAP_SIZE) + this.BOX_SIZE),
        'width': this.TITLE_WIDTH,
        'height': this.BOX_SIZE,
        'font-size': '14px',
        'text-anchor': 'end',
        'fill': this.TITLE_COLOR,
      });
      $TitleText.innerHTML = this.DAYS[i];

      $TitleSvg.appendChild($TitleText);
    }

    return $TitleSvg;
  },

  /** 기여도를 SVG 로 변환합니다.
   * @returns {SVGElement} SVG 엘리먼트 */
  getGraphSVG() {
    const DAY = 24 * 60 * 60 * 1000;
    const YEAR = 365 * DAY;
    const startDate = new Date() - YEAR;

    // 날짜별 기여도를 계산합니다.
    const contributions = Database.select(Tables.memos, () => true).reduce((acc, memo) => {
      const date = new Date(memo.createdAt);
      const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    const ContributionMaxCount = Math.max(...Object.values(contributions));

    const contributionColor = (count) => {
      if (count === 0) return this.COLORS[0];
      if (ContributionMaxCount < 4) return this.COLORS[count];

      return this.COLORS[
        Math.min(Math.floor(count / ContributionMaxCount * 4) + 1, 4)];
    }

    // SVG 엘리먼트를 생성합니다.
    const $ContributionSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.GRAPH_WIDTH = 53 * (this.BOX_SIZE + this.GAP_SIZE) + this.GAP_SIZE * 2;
    this.GRAPH_HEIGHT = 8 * (this.BOX_SIZE + this.GAP_SIZE) + this.GAP_SIZE * 6;
    setAttributes($ContributionSvg, {
      width: this.GRAPH_WIDTH,
      height: this.GRAPH_HEIGHT,
    });

    const $ContributionHintBackground = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    const $ContributionHintText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    setAttributes($ContributionHintBackground, {
      width: this.HINT_WIDTH,
      height: this.HINT_HEIGHT,
      fill: this.STROKE_COLOR,
      rx: this.BORDER_RADIUS,
      display: 'none',
    });
    setAttributes($ContributionHintText, {
      display: 'none',
      fill: 'white',
      'font-size': '14px',
      'text-anchor': 'middle',
    });

    const Today = new Date();
    for (let x = 0; x < 53; x ++) {
      for (let y = 0; y < 7; y ++) {
        const date = new Date(startDate + (x * 7 + y) * DAY);
        const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const contributionElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        setAttributes(contributionElement, {
          x: x * (this.BOX_SIZE + this.GAP_SIZE) + this.GAP_SIZE,
          y: y * (this.BOX_SIZE + this.GAP_SIZE) + this.GAP_SIZE,
          width: this.BOX_SIZE,
          height: this.BOX_SIZE,
          rx: this.BORDER_RADIUS,
          fill: Today < date ? 'transparent' : contributionColor(contributions[key] || 0),
          stroke: this.STROKE_COLOR,
          'stroke-width': 0,
        })


        contributionElement.addEventListener('mouseover', () => {
          const rectX = Number(contributionElement.getAttribute('x'));
          const rectY = Number(contributionElement.getAttribute('y'));

          if (Today < date) return;

          setAttributes($ContributionHintBackground, {
            x: rectX - x/53 * this.HINT_WIDTH,
            y: rectY + this.BOX_SIZE + this.GAP_SIZE,
            display: 'block',
          });
          setAttributes($ContributionHintText, {
            x: rectX - x/53 * this.HINT_WIDTH + this.HINT_WIDTH/2,
            y: rectY + this.BOX_SIZE + this.GAP_SIZE + 20,
            display: 'block',
          });
          $ContributionHintText.innerHTML = `${key} : ${contributions[key] || 0}`;

          setAttributes(contributionElement, {
            'stroke-width': this.STROKE_WIDTH
          });
        });

        contributionElement.addEventListener('mouseout', () => {
          setAttributes(contributionElement, {'stroke-width': 0});
          setAttributes($ContributionHintBackground, {display: 'none'});
          setAttributes($ContributionHintText, {display: 'none'});
        });

        $ContributionSvg.appendChild(contributionElement);
      }

      const date = new Date(startDate + (x * 7 + 6) * DAY);
      if (date.getDate() <= 7) {
        const $MonthText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        setAttributes($MonthText, {
          x: x * (this.BOX_SIZE + this.GAP_SIZE) + this.GAP_SIZE + this.BOX_SIZE/2,
          y: 8 * (this.BOX_SIZE + this.GAP_SIZE),
          'font-size': '14px',
          'text-anchor': 'middle',
          'fill': this.TITLE_COLOR,
        });
        $MonthText.innerHTML = this.MONTHS[date.getMonth()];
        $ContributionSvg.appendChild($MonthText);
      }
    }
    $ContributionSvg.appendChild($ContributionHintBackground);
    $ContributionSvg.appendChild($ContributionHintText);

    return $ContributionSvg;
  }
}

/** 엘리먼트의 속성을 설정합니다.
 * @param {HTMLElement|SVGElement} $element 속성을 설정할 엘리먼트
 * @param {object} attributes 설정할 속성 객체 */
function setAttributes($element, attributes) {
  for (const key in attributes) {
    $element.setAttribute(key, attributes[key].toString());
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
const PageCardCount = 10;

const $ModifiedMemos = document.querySelector('.recently-memos');
const $TagButtonContainer = document.querySelector('#tag-button-container');
const $TagMemoContainer = document.querySelector('#tag-memo-container');
const $ContributionSvgDiv = document.querySelector('#contribution-graph > .graph-container > .graph-svg-container');
const $ContributionsTitleDiv = document.querySelector('#contribution-graph > .graph-container > .graph-title');

let selectedTagId = -1;


// 최근 메모를 그립니다.
const recentlyMemos = Database.select(Tables.memos, () => true)
                              .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1)
                              .slice(0, PageCardCount);
recentlyMemos.forEach((memo) => $ModifiedMemos.appendChild(Views.drawMemo(memo)));

if (recentlyMemos.length === 0) {
  $ModifiedMemos.innerHTML = '<p>최근 메모가 없습니다.</p>';
}

function setSelectedTag(tagId) {
  selectedTagId = tagId;

  const selectedIndex = tags.findIndex((tag) => tag.id === tagId);

  for (let child of $TagButtonContainer.children)
    child.classList.remove('active');
  $TagButtonContainer.children[selectedIndex].classList.add('active');

  const TagMemos = Database.select(Tables.tag_list,
    (item) => item.tag_id === tagId);
  const Memos = Database.select(Tables.memos,
    (memo) => TagMemos.some((tagMemo) => tagMemo.memo_id === memo.id))
    .slice(0, PageCardCount);

  for (let i = $TagMemoContainer.children.length-1; i >= 0; i--)
    $TagMemoContainer.children[i].remove();
  Memos.forEach((memo) =>
    $TagMemoContainer.appendChild(Views.drawMemo(memo)));
}

// 태그를 그립니다.
const tags = Database.select(Tables.tags, () => true)
                      .slice(0, PageCardCount);
tags.forEach((tag) => {
  $TagButtonContainer.appendChild(Views.drawTag(tag));
  if (selectedTagId === -1) {
    setSelectedTag(tag.id)
  }
});
if (tags.length === 0) {
  $TagButtonContainer.innerHTML = '<p>태그가 없습니다.</p>';
}


// 기여도를 그립니다.
$ContributionSvgDiv.appendChild(Contributions.getGraphSVG());
$ContributionsTitleDiv.appendChild(Contributions.getTitleSvg());
$ContributionSvgDiv.scrollTo(Contributions.GRAPH_WIDTH, 0);


function onNewMemo() {
  window.location.href = 'memo/index.html';
}
