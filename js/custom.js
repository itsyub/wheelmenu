
function attachmore(ele){
for (var i = ele.length - 1; i >= 0; i--)
{
	for(j=0 ; j<ele[i].length ; j++)
	{
	  ele[i][j].addEventListener("click", function(e){addclass(e.target,e.target.parentElement);}, false);
	}
}

}
document.getElementById('theme').addEventListener('click',function(e){var d=document.querySelector('.wheel');d.setAttribute('class',d.getAttribute('class').split(' ')[0] + ' ' + e.target.getAttribute('data-c'));});
var i;
var els = document.querySelectorAll('.wheel .inner i');
var els2= document.querySelectorAll('.dark .inner i');
var els3= document.querySelectorAll('.redish .inner i');
var els4= document.querySelectorAll('.blue .inner i');
var els5= document.querySelectorAll('.pink .inner i');
var els6= document.querySelectorAll('.roma .inner i');
var ele=new Array(els,els2,els3,els4,els5,els6);
attachmore(ele);

function addclass(f,l)
{
	var ld=l.parentElement;
	l.setAttribute('class',l.getAttribute('class').split(' ')[0]+' ' + f.getAttribute('data-id'));
	var d=l.querySelectorAll('.inner i');
	for(i=0 ; i<d.length ; i++){
		d[i].classList.remove('active');
	}
	f.classList.add('active');
	ld.querySelector('.header').innerHTML=f.getAttribute('data-text');
}