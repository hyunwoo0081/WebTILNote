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
  }
};

//////////////////////////////////////////////////////////////////////////////////////////
const $ModifiedMemos = document.querySelector('.recently-memos');


// 메모를 모두 그립니다.
const recentlyMemos = Database.select(Tables.memos, () => true)
                              .sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
recentlyMemos.forEach((memo) => $ModifiedMemos.appendChild(Views.drawMemo(memo)));

if (recentlyMemos.length === 0) {
  $ModifiedMemos.innerHTML = '<p>최근 메모가 없습니다.</p>';
}

function onNewMemo() {
  window.location.href = '../memo/index.html';
}
