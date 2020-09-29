
var pageData = ''


var item_row = document.querySelector('.item_row')
var county_name = document.querySelector('.county_name')

var xhr = new XMLHttpRequest();
xhr.open('get', '../_data/afd77c6c16537174530e5344fbabefc3_export.json', true);
xhr.send();
xhr.onload = function() {
  var str = JSON.parse(xhr.responseText);
  // console.log(str);


  item_row.textContent = str[0].Name
  showCities(str)

  // document.querySelector('.aaa').textContent = str[12].Name;
}


function showCities(jsonObj){
  console.log(jsonObj)
}
// Reference
//https://codepen.io/josheche/pen/POdJBN




