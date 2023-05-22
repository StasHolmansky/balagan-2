// --calendar--

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      startDate: '2023-05-20',
    endDate: '2023-12-30',
    locale: {
      format: 'DD MMM YYYY'
    }
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

// --calendar--


// --Load more--

 // При нажатии на "Показать еще", появляются все card
 const btn = document.querySelector('.btn');
 const cards = Array.from(document.querySelectorAll('.directions_item'));
 
 
 window.addEventListener('resize', event => {
     if (event.target.window.innerWidth > 989) response1();
     if (event.target.window.innerWidth <= 989 && event.target.window.innerWidth > 659) response2();
     if (event.target.window.innerWidth <= 659) response3();
 })
 
 function openCatalog() {
     btn.addEventListener('click', () => {
         cards.forEach(item => item.classList.remove('hidden'));
         btn.classList.add('hidden');
     })
 }
 
 function response1() {
     if (window.innerWidth > 989) {
 
         cards.forEach((item, index) => {
             item.classList.add('hidden')
             if (index <= 11) {
                 item.classList.remove('hidden')
             } else if (index > 11) {
                 btn.classList.remove('hidden');
             }
             openCatalog()
         })
     }
 }
 response1()
 
 
 function response2() {
     if (window.innerWidth <= 989 && window.innerWidth > 659) {
 
         cards.forEach((item, index) => {
             item.classList.add('hidden')
             if (index <= 5) {
                 item.classList.remove('hidden')
             } else if (index > 5) {
                 btn.classList.remove('hidden');
             }
             openCatalog()
         })
     }
 }
 response2()
 
 
 function response3() {
     if (window.innerWidth <= 659) {
 
         cards.forEach((item, index) => {
             item.classList.add('hidden')
             if (index <= 3) {
                 item.classList.remove('hidden')
             } else if (index > 3) {
                 btn.classList.remove('hidden');
             }
             openCatalog()
         })
     }
 }
 response3()

// --Load more--




document.querySelector('.btn').addEventListener('click', function() {
    document.querySelector('.wrap_btn').classList.add('hidden');
});


