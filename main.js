let $container = document.getElementById("container");
let fragmento = document.createDocumentFragment();
let url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";

function axiosLarnU(){
  axios
  .get(url)
  .then((res) => {
    let json = res.data.communityCategories;
    console.log(json);
    json.forEach((e)=>{
      $container.innerHTML += `
      <div class="container__card">
          <div class="container__icon"><img src="${e.icon}" class="img"></div>
          <h2 class="title">${e.name}</h2>
          <p class="totalQ">Total Quizzes: ${e.totalQuizzes}</p>
          <P class="user">Users: ${e.users}</P>
          <a href="https://es.larnu.com/" class="link btn" target="_blank">Go to LarnU</a>
        </div>
      ` 
    })
  }).catch((err) => {
    let mensaje = err.statusText || 'Ocurrio un error'
      $lista.innerHTML = `Error ${err.status}: ${mensaje}`
  });
}
axiosLarnU();