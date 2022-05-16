import pages from "../modules/data.js"



const menuLinks = document.querySelectorAll('.main_aside_dt_link')
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      })
      e.preventDefault()
    }
  }
}

//------------------------------

const mainContainer = document.querySelector('.main_container_first_page'),
      mainContainerSecond = document.querySelector('.main_container_second_page'),
      linknNav = document.querySelector('.link_nav'),
      elLinks = document.querySelectorAll('.main_article_dd'),
      button = document.querySelector('.div_button'),
      ewf = document.querySelector('.sec')

let mainDiv = document.createElement('div')


for (let i = 0; i < elLinks.length; i++) {
  elLinks[i].addEventListener('click', function(e) {
    e.preventDefault()
    mainContainer.classList.toggle('disable')
    mainDiv.innerHTML = pages[i]
    mainContainerSecond.classList.toggle('active')
    //button.classList.toggle('active')
    ewf.append(mainDiv)
    //window.history.pushState("page2", "Title", `${i}`)
  })
}


linknNav.addEventListener('click', showContent)
button.addEventListener('click', showContent)
function showContent() {
  mainContainer.classList.remove('disable')
  mainContainerSecond.classList .remove('active')
  //button.classList .remove('active')
}

addEventListener('popstate', showContent)





  






/* var runLengthEncoding = function(str){
    str = str.split('')
    let arr = []
    str.forEach(el => {
        arr[el] = (arr[el] || 0) + 1;
      });
      return arr;
  }

console.log(runLengthEncoding('eeeeww')) */
/* function compressText(str) {
    str = str.split('')

    let result = [];
    let con = [];
    

    if (str.length > 0) {
        let count = 1;
        let value = str[0];
        for (let i = 1; i < str.length; i++) {
            var entry = str[i];
            if (entry == value) {
                count++;
            } else {
                    result.push([count + ',' + value] );
                    count = 1;
                value = entry;
            }
        }
        console.log(typeof count)
            con.push([count + ',' + entry]) ;
    }
    let arr = result.concat(con)
    return arr;
}

console.log(compressText('eeeeww'))

function deepCount(a) {
    let el = 0;
    
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        el += deepCount(a[i]) + 1;
      } 
      else {
        el++;
      }
    }
    return el;
  }
  

console.log(deepCount([1, 2, [3, 4, [5]]]))
*/