const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document);

window.addEventListener("load", function(){
$('.content').addEventListener("click", function(){
	if(event.target.closest('.slider')) sliderOne(event.target);
	if(event.target.closest('.slider-2')) sliderTwo(event.target);
	if(event.target.closest('.add-active')) addActiveClass(event.target);
	if(event.target.closest('.main-form__btn')) openSpoiler();
	if(!event.target.closest('.main-form')) closeSpoiler();
});

function slider(ev, counterReset){
	let counter = 0;
	return function(ev, counterReset){
		if(counterReset == true) counter = 1;
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
		}
			if(counter >= sItemL - Math.round(slides)){
				nBtn.classList.add('hidden')
			} else nBtn.classList.remove("hidden")
			if(counter <= 0){
				pBtn.classList.add('hidden')
			} else pBtn.classList.remove("hidden");
	}
}
let sliderOne = slider(),
sliderTwo = slider();

addActiveClass()
	function addActiveClass(){
		if($$('.add-active input').length > 0){
			$$('.add-active input').forEach((item) =>{
				if(item.checked){
					item.parentElement.classList.add('active');
				} else item.parentElement.classList.remove('active');
			});
			$$('.add-active input').forEach((item) =>{
				if(item.disabled){
					item.parentElement.classList.add('no-active');
				} else item.parentElement.classList.remove('no-active');
			});
		}
	}

	$('.main-slider__filter').addEventListener("change", filter);
	filter();
	function filter(){
		$$('[name="filter"]').forEach(item => {
			if(item.checked) catalogArr(item.getAttribute('value').toLowerCase());
		});
	}
function catalogArr(val){
	let arr = [];
	catalog.forEach(item =>{
		if(item.filter.toLowerCase() == val) {
			arr.push(item);} else if (val == 'all') arr.push(item);
	});
	renderSlider(arr);
}

function renderSlider(arr) {
	$('.main-slider__slider-track').innerHTML = '';
	for(let i =0; i < arr.length; i++){
$('.main-slider__slider-track').insertAdjacentHTML(
	"beforeend",
	`<div class="main-slider__slider-item slider-item">
	<div class="trip-card" id="${arr[i].id}">
		<img src="${arr[i].img}" width="350" height="570" alt="card">
		<div class="trip-card__info">
			<div class="trip-card__about">
				<div class="trip-card__place text_h2">${arr[i].place}</div>
				<a href="pages/lux-packages-package.html" class="trip-card__name title_h5">${arr[i].name}</a>
				<div class="trip-card__bottom">
					<div class="trip-card__price">
						<b class="text_h2">From</b>
						<div class="trip-carddivice-price text_h3">€ <output>${arr[i].price}</output></div>
					</div>
					<a href="pages/customise.html" class="trip-card__customise text_h4">customise </a>
				</div>
			</div>
			<div class="trip-card__rating">
				<div class="trip-card__rating-rating text_h2">${arr[i].rate}.0</div>
				<div class="trip-card__rating-scale">
					<div class="trip-card__rating-point"></div>
					<div class="trip-card__rating-point"></div>
					<div class="trip-card__rating-point"></div>
					<div class="trip-card__rating-point"></div>
					<div class="trip-card__rating-point"></div>
				</div>
			</div>
		</div>
	</div>
</div>`);
let dots = $(`#${arr[i].id}`).querySelectorAll('.trip-card__rating-point');
	for(let k = 0; k < arr[i].rate; k++){
		dots[k].classList.add('active');
	}
}
sliderOne($('.main-slider__slider-btn'), true)
}

function openSpoiler(){
	$('.main-form__btn').nextElementSibling.classList.toggle('active')
}
function closeSpoiler(){
	$('.main-form__form-wrapper').classList.remove('active')
}

const pBlock = $('.main-block'),
pMain = $('.main-block__parallax-main'),
pTailand = $('.main-block__parallax-tailand'),
pLackes = $('.main-block__parallax-lackes'),
pMountain = $('.main-block__parallax-mountain');
timer(40000);
function timer(time) {setTimeout(varOne, time, time);}
function varOne(time){
	pTailand.classList.remove('opacity');
	pLackes.classList.remove('opacity');
	pMountain.classList.remove('opacity');
	pLackes.classList.add('opacity');
	setTimeout(varTwo, time, time);
}
function varTwo(time){
	pTailand.classList.remove('opacity');
	pLackes.classList.remove('opacity');
	pMountain.classList.remove('opacity');
	pTailand.classList.add('opacity');
	pLackes.classList.add('opacity');
	pMountain.classList.add('opacity');
	setTimeout(varThree, time, time);
}
function varThree(time){
	pTailand.classList.remove('opacity');
	pLackes.classList.remove('opacity');
	pMountain.classList.remove('opacity');
	setTimeout(timer, time, time);
}
});