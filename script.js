



    const gallery = "http://mawadesign.eu/wordpress/wp-json/wp/v2/gallery?_embed";
    fetch(gallery)
      .then(res => res.json())
      .then(handleData)
  
    function handleData(posts) {
      console.log(posts);
      posts.forEach(showevent);
  
    }
  
    function showevent(gallery) {
      console.log(gallery);
      const template = document.querySelector(".gallery").content;
      const copy = template.cloneNode(true);
      copy.querySelector(".name").textContent = gallery.title.rendered;


      document.querySelector("main").appendChild(copy);

      data = gallery.images;
      data.forEach(function(obj) {
        var img = document.createElement("img");
        img.src = obj.guid;
        img.alt = obj.post_title;


      document.querySelector(".hereiswheretheimagesgo").appendChild(img);

    }
    )

   }