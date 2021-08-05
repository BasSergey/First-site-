document.querySelector('.button').onclick = myClickk;
//взять со страницы кнопку, повесить на нее свойство onlick и при клике выпольнить функцию
function myClickk() {
    //   get input
    let a = document.querySelector('.input-text').value;
    let b = document.querySelector('.input-email').value;
    //value отвечает за ввод текста
    console.log(a);
    console.log(b);
}

