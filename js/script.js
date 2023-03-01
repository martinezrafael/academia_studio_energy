$('nav').origamidMenu({
	breakpoint: 960,
	top: 52,
	background: "#141414",
	color: "#fff"
});

const links = document.querySelectorAll('.nav__menu___link');

function ativarLink(link){
  const url = location.href;
  const href = link.href;

  if (url.includes(href)){
    link.classList.add('ativo');
  }
}


links.forEach(ativarLink)