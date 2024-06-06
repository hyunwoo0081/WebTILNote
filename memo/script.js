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

//////////////////////////////////////////////////////////////////////////////////

const $MemoTitle = document.querySelector('main > h2');
const $MemoTitleInput = document.querySelector('#memo-title');
const $MemoContentInput = document.querySelector('#memo-content');
const $MemoTagInput = document.querySelector('#memo-tags');
const $DeleteMemoButton = document.querySelector('#delete_memo');

const searchParams = new URLSearchParams(location.search);
const IsModifyMode = searchParams.has('memoId');
const ModifyMemoId = Number(searchParams.get('memoId'));


function init() {
  if (IsModifyMode) {
    $MemoTitle.textContent = '메모 수정';

    const memo = Database.select(Tables.memos, (memo) => memo.id === ModifyMemoId)[0];
    $MemoTitleInput.value = memo.title;
    $MemoContentInput.value = memo.content;

    const tags = Database.select(Tables.tag_list, (tag) => tag.memo_id === ModifyMemoId);
    const tagNames = tags.map(tag =>
      Database.select(Tables.tags, (tags) => tags.id === tag.tag_id)[0].name);
    $MemoTagInput.value = tagNames.join(', ');
  }
  else {
    $DeleteMemoButton.style.display = 'none';
  }
}
init();


/** 사용하지 않는 태그를 삭제합니다. */
function removeUnusedTags() {
  const unUsedTags = Database.select(Tables.tags, (tag) => {
    return Database.select(Tables.tag_list, (tagList) => tagList.tag_id === tag.id).length === 0;
  });

  Database.delete(Tables.tags, (tag) =>
    unUsedTags.some(unUsedTag => unUsedTag.id === tag.id));
}


function onSaveClick() {
  const title = $MemoTitleInput.value;
  const content = $MemoContentInput.value;

  const memo = { title, content };
  let targetMemoId = ModifyMemoId;

  // 수정 모드일 경우 메모 수정, 아닐 경우 메모 추가
  if (IsModifyMode) {
    Database.update(Tables.memos, (memo) => memo.id === targetMemoId , memo)
  } else {
    Database.insert(Tables.memos, memo);
    targetMemoId = Tables.memos.data[Tables.memos.data.length - 1].id;
  }

  // 태그 삭제 후, 태그 추가
  Database.delete(Tables.tag_list, (tag) => tag.memo_id === targetMemoId);
  const newTags = $MemoTagInput.value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

  // 태그가 없을 경우 태그를 새롭게 추가
  newTags.forEach(newTag => {
    const tagId = Database.select(Tables.tags, (tag) => tag.name === newTag)[0];

    if (!tagId)
      Database.insert(Tables.tags, { name: newTag });
  });

  // 태그 리스트에 태그 추가
  newTags.forEach(newTag => {
    const tagId = Database.select(Tables.tags, (tag) => tag.name === newTag)[0];
    Database.insert(Tables.tag_list, { memo_id: targetMemoId, tag_id: tagId.id });
  });

  // 사용하지 않는 태그를 태그 테이블에서 삭제
  removeUnusedTags();

  Database.saveDatabase(Tables.memos);
  Database.saveDatabase(Tables.tags);
  Database.saveDatabase(Tables.tag_list);

  alert('저장되었습니다.');

  onBackClick();
}


function onDeleteClick() {
  if (!confirm('정말 삭제하시겠습니까?'))
    return;

  if (IsModifyMode) {
    Database.delete(Tables.memos, (memo) => memo.id === ModifyMemoId);
    Database.delete(Tables.tag_list, (tag) => tag.memo_id === ModifyMemoId);
    removeUnusedTags();

    Database.saveDatabase(Tables.memos);
    Database.saveDatabase(Tables.tags);
    Database.saveDatabase(Tables.tag_list);
  }

  alert('메모가 삭제되었습니다.');

  onBackClick();
}

function onBackClick() {
  window.location.href = '../index.html';
}




