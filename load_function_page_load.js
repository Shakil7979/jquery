

//load function page load 

    var al_selector = document.querySelectorAll("a[load]");
   
    for (let index = 0; index < al_selector.length; index++) {
      al_selector[index].addEventListener("click", function () {
        var url = this.getAttribute("load");
        $("body").load(url);
        return false;
      });

 
    }
