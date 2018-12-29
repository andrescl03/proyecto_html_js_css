$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
    }
      //Posts
      if(window.location.href.indexOf('index') > -1){
      var posts = [
            {
              title: 'Prueba de titulo 1',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum mollitia   dignissimos itaque a! Nesciunt soluta laudantium explicabo, iusto vero illum   necessitatibus dignissimos molestias! Aperiam odit dolorem vero facere modi.'  
            },

            {
              title: 'Prueba de titulo 2',
              date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
              content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum mollitia   dignissimos itaque a! Nesciunt soluta laudantium explicabo, iusto vero illum   necessitatibus dignissimos molestias! Aperiam odit dolorem vero facere modi.'  
            },
            {
            title: 'Prueba de titulo 3',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum mollitia   dignissimos itaque a! Nesciunt soluta laudantium explicabo, iusto vero illum   necessitatibus dignissimos molestias! Aperiam odit dolorem vero facere modi.'  
            },
            {
            title: 'Prueba de titulo 4',
            date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum mollitia   dignissimos itaque a! Nesciunt soluta laudantium explicabo, iusto vero illum   necessitatibus dignissimos molestias! Aperiam odit dolorem vero facere modi.'  
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum mollitia   dignissimos itaque a! Nesciunt soluta laudantium explicabo, iusto vero illum   necessitatibus dignissimos molestias! Aperiam odit dolorem vero facere modi.'  
            },
            {
                title: 'Prueba de titulo 6',
                date: 'Publicado el día ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id voluptatum mollitia   dignissimos itaque a! Nesciunt soluta laudantium explicabo, iusto vero illum   necessitatibus dignissimos molestias! Aperiam odit dolorem vero facere modi.'  
            }
      ];
    
      posts.forEach(function(item,index){
            var post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
               ${item.content}
            </p>
            <a href="#" class="button-more" >Leer más</a>
    </article>`;

    $("#posts").append(post);
       });
    }
       
      var theme= $("#theme");
      var  color = localStorage.getItem("theme");
      switch(color){ 
          case "red-theme":
          theme.attr("href","css/red.css");
          break;
          case "blue-theme":
          theme.attr("href","css/blue.css");
          break;
          default :
          theme.attr("href","css/green.css");
      }
console.log(color);
      //Selector de tema
        $("#to-green").click(function(){
            localStorage.setItem("theme","green-theme");
            theme.attr("href","css/green.css")
        }
        );
        $("#to-red").click(function(){
            localStorage.setItem("theme","red-theme");
            theme.attr("href","css/red.css")
        }
        );
        $("#to-blue").click(function(){
            localStorage.setItem("theme","blue-theme");
            theme.attr("href","css/blue.css")
        });

        //Scroll arriba de la web
        $('.subir').click(function(e){
            e.preventDefault(); 
                $('html, body').animate({
                    scrollTop:0
                }, 500);
                return false;
        });

        $("#login form").submit(function(){
            var form_name =  $("#form_name").val();
            localStorage.setItem("form_name",form_name);
            });
        
            var form_name = localStorage.getItem("form_name");
            if(form_name!=null && form_name != "undefined"){
                var about_parrafo=   $('#about p');
                about_parrafo.html("<br><strong> Bienvenido, " + form_name + "</strong>");
                about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion </a>");
                
                $("#login").hide();
                $("#logout").click(function(){
                        localStorage.removeItem("form_name");
                        location.reload();
                });
        }

 //Acordeon
        if(window.location.href.indexOf('about') > -1){ 
            $("#acordeon").accordion();
        }
    //reloj
        if(window.location.href.indexOf('reloj') > 1){
            setInterval(function(){
                var reloj = moment().format("h:mm:ss");
                $("#reloj").html(reloj);

            },1000);
           
        }

        //validacion
        if(window.location.href.indexOf('contact') > 1){
            
            $("form input[name='date']").datepicker({
                dateFormat: 'dd-mm-yy'
            }); 
            $.validate({
            lang: 'es',
            errorMessagePosition : 'top',
            scrollToTopOnError: true
          });
        }

    });