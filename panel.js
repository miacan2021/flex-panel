

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  panels.forEach(panel => panel.classList.remove("open"));
    this.classList.add("open");
    if(this.classList.contains("open-active")){
      this.classList.remove("open");
    }
    };


function toggleActive(e){
if(e.propertyName.includes('flex-grow')){
this.classList.toggle("open-active");
}
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

