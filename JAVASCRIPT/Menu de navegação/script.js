let menu = document.getElementById('menu-opener');
 let asideMenu = document.getElementById('menu-area');

menu.addEventListener('click', esconde);

/*function esconde(){
   
     if(asideMenu.classList.contains('menu-opened')){
        asideMenu.classList.remove('menu-opened');
     }else{
        asideMenu.classList.add('menu-opened');
     }
};
*/

function esconde(){
   if(asideMenu.style.width == '200px'){
      asideMenu.style.width = '0';
   }else{
      asideMenu.style.width = '200px'
   }
}