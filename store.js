//work with localstorage
class Store{
    static  getlocalStroge(githubId){
          let gitId;
          if(localStorage.getItem('githubId')===null){
              gitId=[]
          }else{
              gitId = JSON.parse(localStorage.getItem('githubId'))
          }
          
           gitId[0] = githubId
          localStorage.setItem('githubId',JSON.stringify(gitId));
           
      }
    //return data from localStorage
     static getDatafromLoaclStorage(){
          let gitId;
          if(localStorage.getItem('githubId')===null){
              gitId=[]
          }else{
              gitId = JSON.parse(localStorage.getItem('githubId'))
          }
          return gitId
      } 
  //geting data from localStorage and display it in web page 
     static useDataFromLoaclStorage(){
          const gitId = Store.getDatafromLoaclStorage();
          gitId.forEach(element => {
              const ui = new UI()
              ui.display(element);
          });
      }
  }
//show data after load the pahe
  window.addEventListener('DOMContentLoaded',Store.useDataFromLoaclStorage)
