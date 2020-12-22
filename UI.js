//display data inside the html
class UI{
    display({avatar_url, login,public_repos,id,html_url,latest_repo, result1_html_url}){
        profilel_show.innerHTML = `<div class="card" style="width: 30rem;margin:20px auto">
         <img src="${avatar_url}" class="card-img-top" style="height:200px;width:200px;margin:20px auto" >
        <div class="card-body">
          <h5 class="card-title text-center my-2" id="profile_name">${login}</h5>
          <div class="container d-flex justify-content-center my-3">
            <button  class="btn btn-primary disabled"> public_repos: ${public_repos}</button>
            <button  class="btn btn-danger">id: ${id}</button>
            <a href="${ result1_html_url}" class="btn btn-success">Latest project: ${latest_repo}</a>
           
          </div>
        
          <a href="${html_url}" class="btn btn-primary d-flex justify-content-center text-center my-3">Go to github profile</a>
        </div>
        <button id="delete" class="btn btn-danger">clear</button>
        </div>`

        search.value = '';
        
    }
}
