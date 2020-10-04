
var content_item = document.querySelector('.content_item')

var xhr = new XMLHttpRequest();
xhr.open('get', '../_data/afd77c6c16537174530e5344fbabefc3_export.json', true);
xhr.send();
xhr.onload = function() {
  var totalData = JSON.parse(xhr.responseText);
  showRestaurant(totalData)
}


function showRestaurant(jsonObj){
  
  // Pagination
  var page = document.querySelector('.page')
  var page_count = document.createElement('div')
  page_count.className = 'page_count';

  var pages = Math.ceil(jsonObj.length / 10)
  for (let p = 1; p < pages + 1 ; p++) {
    
    var page_count = document.querySelector('.page_count')
    var page_num = document.createElement('div')

    page_num.textContent = p
    page_count.appendChild(page_num)
    page.appendChild(page_count)
    page_count.className = 'page_count';
    page_num.className = 'page_num';
    page_num.setAttribute('data-num', p)

    page_num.addEventListener("click", function( event) {
      // console.log(p)
      var from_p = (p-1)*10
      var to_p = p*10
      console.log(from_p)
      console.log(to_p)

      slicePage(from_p, to_p)
      
    });
  }
  var aaa = ''
  function slicePage(x,y){

    aaa = jsonObj.slice(x,y)
    
    var pagination_data = aaa
  
    for (let i = 0; i < pagination_data.length; i++) {
      var item_block = document.querySelector('.item_block')
      var item_text = document.querySelector('.item_text')

      var item_row = document.createElement('div')
      var county_name = document.createElement('div')
      var county_area = document.createElement('div')
      var county = document.createElement('div')
      var item_block = document.createElement('div')
      var item_text = document.createElement('div')
      var item_title = document.createElement('h6')
      var item_des = document.createElement('p')
      var r_img = document.createElement('img')
      
      r_img.src = pagination_data[i].PicURL

      county_name.textContent = pagination_data[i].City;
      county_area.textContent = pagination_data[i].Town;
      item_title.textContent = pagination_data[i].Name;
      item_des.innerHTML = pagination_data[i].HostWords;


      county.appendChild(county_name)
      county.appendChild(county_area)
      item_block.appendChild(r_img)
      item_block.appendChild(item_text)
      item_text.appendChild(item_title)
      item_text.appendChild(item_des)

      item_row.appendChild(county)
      item_row.appendChild(item_block)
      content_item.appendChild(item_row)

      item_row.className = 'item_row';
      county.className = 'county';
      county_name.className = 'county_name';
      county_area.className = 'county_area';
      item_block.className = 'item_block';
      item_text.className = 'item_text';
      item_row.className = 'item_row';

    }

  }

}




