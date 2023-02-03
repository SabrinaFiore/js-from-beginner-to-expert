function loadJsonData() {
    var xhr = new XMLHttpRequest();
    var params = {
        name: 'Hidran',
        lastName: 'Arias',
        age: 43
    };
  
    var jsonString = JSON.stringify(params);
    console.group('json ajax');
    console.time('INIZIO CHIAMATA AJAX');
    
    xhr.open('GET', 'json.php?json=' + jsonString, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.timeEnd('iNIZIO CHIAMATA AJAX');
            var resp = xhr.responseText;
            console.log(resp);
            var obj = JSON.parse(resp);
            console.log(obj);

            var result = document.getElementById('result');
            result.innerHTML = resp;

        }
    }
    console.groupEnd('json ajax');
}
document.addEventListener('DOMContentLoaded',
    loadJsonData
)