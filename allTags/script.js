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
      window.location.href = `../memo/index.html?memoId=${memo.id}`;
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

/** 엘리먼트의 속성을 설정합니다.
 * @param {HTMLElement|SVGElement} $element 속성을 설정할 엘리먼트
 * @param {object} attributes 설정할 속성 객체 */
function setAttributes($element, attributes) {
  for (const key in attributes) {
    $element.setAttribute(key, attributes[key].toString());
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
const $TagButtonContainer = document.querySelector('#tag-button-container');
const $TagMemoContainer = document.querySelector('#tag-memo-container');

let selectedTagId = -1;

function setSelectedTag(tagId) {
  selectedTagId = tagId;

  const selectedIndex = tags.findIndex((tag) => tag.id === tagId);

  for (let child of $TagButtonContainer.children)
    child.classList.remove('active');
  $TagButtonContainer.children[selectedIndex].classList.add('active');

  const TagMemos = Database.select(Tables.tag_list,
    (item) => item.tag_id === tagId);
  const Memos = Database.select(Tables.memos,
    (memo) => TagMemos.some((tagMemo) => tagMemo.memo_id === memo.id));

  for (let i = $TagMemoContainer.children.length-1; i >= 0; i--)
    $TagMemoContainer.children[i].remove();
  Memos.forEach((memo) =>
    $TagMemoContainer.appendChild(Views.drawMemo(memo)));
}

// 태그를 그립니다.
const tags = Database.select(Tables.tags, () => true);
tags.forEach((tag) => {
  $TagButtonContainer.appendChild(Views.drawTag(tag));
  if (selectedTagId === -1) {
    setSelectedTag(tag.id)
  }
});
if (tags.length === 0) {
  $TagButtonContainer.innerHTML = '<p>태그가 없습니다.</p>';
}



function onNewMemo() {
  window.location.href = '../memo/index.html';
}
