window.onload = function() {

    let map = new Map();

    map.set(document.querySelector('.red'),'.git');
    map.set(document.querySelector('.orange'),'.gitBranches');
    map.set(document.querySelector('.yellow'),'.gulp');
    map.set(document.querySelector('.green'),'.sass');
    map.set(document.querySelector('.lightblue'),'.over');
    map.set(document.querySelector('.blue'),'.gitHub');
    map.set(document.querySelector('.purple'),'.profit');


    function openNewInfo(a) {
        map.forEach(function(value, key) {
            document.querySelector(value).style.display = 'none'; 
        });
        document.querySelector(a).style.display = 'block';
    }

    map.forEach(function(value, key) {
        key.addEventListener('click', function() {
            openNewInfo(value);
        });  
        console.log('создан листинер для - ' + key);
    });




};
