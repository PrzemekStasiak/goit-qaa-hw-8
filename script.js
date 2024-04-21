// zadanie 1 w pliku user.json
/// 2 parsowanie
const json = '{"name":"Mango","age":3,"isHappy":true}'; //dane json
const data = JSON.parse(json); //parsowanie do danych JS]
console.log(data);

/// 3 paersowanie nieprawidłowego JSONi wyciągnięcię błedu
const sjson = '{username: "Mango"}'; //nieprawny JSON
try {
  //zainicjowanie try bu spróbować wykonać parse i zapisać ew. błędy
  const jsonData = JSON.parse(sjson); /// funkcja parsowania JSON
} catch (error) {
  // funkcja obsłużenia błędu
  console.log(error.name); // wyświetl nazwę błędu
  console.log(error.message); // wyświetl widomość błędu
}
