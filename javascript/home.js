const js_thml = () => {
	let code = "";
	code += "\t\t<h1 id=\"greeting\"><i id=\"welcome\">Welcome</i> To The <br> Shoulder Of <b id=\"success\">Success</b></h1>\n";
	code += "\n";
	code += "\t\t<div class=\"card-swiper\">\n";
	code += "\t\t\t<h1 class=\"cardtext\">Our Employees</h1>\n";
	code += "\t\t\t<div class=\"card-groups\">\n";
	code += "\t\t\t  <div class=\"card-group\" data-index=\"0\" data-status=\"active\">\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t  </div>\n";
	code += "\t\t\t  <div class=\"card-group\" data-index=\"1\" data-status=\"unknown\">\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t  </div>\n";
	code += "\t\t\t  <div class=\"card-group\" data-index=\"2\" data-status=\"unknown\">\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"little-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t\t<div class=\"big-card card\">\n";
	code += "\t\t  \n";
	code += "\t\t\t\t</div>\n";
	code += "\t\t\t  </div>\n";
	code += "\t\t\t</div>\n";
	code += "\t\t\t<div class=\"card-swiper-buttons\">\n";
	code += "\t\t\t  <button id=\"hate-button\" onclick=\"handleHateClick()\">\n";
	code += "\t\t\t\t<i class=\"toclick\">Back</i>\n";
	code += "\t\t\t  </button>\n";
	code += "\t\t\t\t<button id=\"love-button\" onclick=\"handleLoveClick()\">\n";
	code += "\t\t\t\t<i class=\"toclick\">Next</i>\n";
	code += "\t\t\t  </button>\n";
	code += "\t\t\t</div>\n";
	code += "\t\t  </div>\n";
	return code;
}


document.getElementById("js_html").innerHTML = js_thml();

let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentGroup.dataset.status = "before";
  
  nextGroup.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

