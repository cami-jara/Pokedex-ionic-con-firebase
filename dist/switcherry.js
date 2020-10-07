var elem = document.querySelector('js-switch');
var switcherry= new Switchery(elem,{
    color             : '#64bd63',
    secondaryColor    : '#dfdfdf',
    speed             : '1s',
    jackColor         : 'pink',

document.querySelector('js-switch').addEventListener('click', function() {
  switchery.disable();
});

document.querySelector('js-switch').addEventListener('click', function() {
  switchery.enable();
});

});