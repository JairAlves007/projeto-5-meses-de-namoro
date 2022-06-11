window.addEventListener('load', loadDB);

const db = openDatabase("termo-clone", "1.0", "Database Termo Clone", 2 * 1024 * 1024);

function loadDB () {
  db.transaction(query => {
    const sql = `CREATE TABLE IF NOT EXISTS termo (
      id INTEGER PRIMARY KEY,
      word TEXT,
      chances INTEGER
    )`;

    query.executeSql(sql);
  });

  verifyDatas();

  getData();
}

function verifyDatas () {
  db.transaction(query => {

    const sql = `SELECT * FROM termo`;

    query.executeSql(sql, [], (data, res) => {

      if (res.rows.length <= 0) {
        createDataPlaceholder();
      }
      
    });
  });
}

function createDataPlaceholder () {
  db.transaction(query => {

    const sql = `INSERT INTO termo (
      word,
      chances
    ) VALUES (?, ?)`;

    const data = [
      "MISLENY",
      6
    ];

    query.executeSql(sql, data);
  });
}

function updateData (word, chances) {
  db.transaction(query => {

    const sql = `UPDATE termo SET word = ?, chances = ? WHERE id = ?`;

    const data = [
      word,
      chances,
      1
    ];

    query.executeSql(sql, data);
  });
}

function getData () {
  db.transaction(query => {

    const sql = `SELECT * FROM termo`;

    query.executeSql(sql, [], (data, res) => {

      localStorage.setItem('word', res.rows[0].word);
      localStorage.setItem('chances', res.rows[0].chances);

    });
  });
}
