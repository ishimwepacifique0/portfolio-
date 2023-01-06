const getBlogs = () => {
    // localStorage.removeItem("blogs");
    var result = localStorage.getItem("test");
    
    var fromStorage = localStorage.getItem("blogs");
    var blogsResult = JSON.parse(fromStorage);
    if (blogsResult){
      document.getElementById("blogOutputs").innerHTML = blogsResult.map((item)=>`
    <img src=${item.image} width="200px" />
    <p>${item.title}</p>
    <p>${item.description}</p>
    `)
    }
    
  }
  
  function handleSubmitBlog(event){
    event.preventDefault();
    var ourform = document.getElementById("form");
    var title = ourform["title"].value;
    var image = ourform["image"].value;
    var description = ourform["description"].value;
   
    if(localStorage.getItem("blogs") == null){
    let array = [];
      const blog = {
        id:1,
      title,
      image,
      description
    }
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
      getBlogs();
    } else {
      
      let array = JSON.parse(localStorage.getItem("blogs"));
      const blog = {
        id:(array.length+1),
      title,
      image,
      description
    }
      array.push(blog);
      localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
      getBlogs();
    }
  }
  
//   const editBlog = (blogId) => {
//     console.log(blo)
//     let array = JSON.parse(localStorage.getItem("blogs"));
//     array.map((item)=>{
//       if(blogId == item.id){
//         item.title = "New Value"
//       }
//     })
//     localStorage.setItem("blogs", JSON.stringify(array));
//   }
