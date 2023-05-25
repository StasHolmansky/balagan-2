const tabsBtn   = document.querySelectorAll(".client_btn");
const tabsItems = document.querySelectorAll(".client_block-content");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

let fields = document.querySelectorAll('.field__file');
        Array.prototype.forEach.call(fields, function (input) {
          let label = input.nextElementSibling,
            labelVal = label.querySelector('.field__file-fake').innerText;
      
          input.addEventListener('change', function (e) {
            let countFiles = '';
            if (this.files && this.files.length >= 1)
              countFiles = this.files.length;
      
            if (countFiles)
              label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
            else
              label.querySelector('.field__file-fake').innerText = labelVal;
    });
})



        





