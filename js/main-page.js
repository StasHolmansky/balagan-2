const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document)
$('.content').addEventListener("click", function(){
	if(event.target.closest('.slider')) sliderOne(event.target);
});


function slider(ev){
	let counter = 0;
	return function(ev){
		let el = ev.closest('.slider'),
		sItemW = el.querySelector('.slider-item').offsetWidth,
		sContainerW = el.querySelector('.slider-container').offsetWidth,
		sItemL = el.querySelectorAll('.slider-item').length,
		sTrack = el.querySelector('.slider-track'),
		pBtn = el.querySelector('.slider-prev'),
		nBtn = el.querySelector('.slider-next'),
		slides = sContainerW/sItemW;
		if(ev.matches('.slider-next')) counterPlus();
		if(ev.matches('.slider-prev')) counterMinus();
		function counterPlus(){
			if(counter >= sItemL - Math.round(slides)) return;
			counter++;
			sliderScroll();
		}
		
		function counterMinus(){
			if(counter <= 0) return;
			counter--;
			sliderScroll();
		}
		function sliderScroll(){
			let scroll = (sContainerW * counter)/slides;
			sTrack.style.transform = `translateX(-${scroll}px)`;
			console.log(sItemW, sContainerW, window.innerWidth, scroll)
		}
			if(counter >= sItemL - Math.round(slides)){
				nBtn.classList.add('hidden')
			} else nBtn.classList.remove("hidden")
			if(counter <= 0){
				pBtn.classList.add('hidden')
			} else pBtn.classList.remove("hidden");
	}
}
let sliderOne = slider();