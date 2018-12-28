$(document).ready(function(){

    //Slider
    $(function(){
        $('.galeria').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });


      //Posts

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
       })
       
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
    });