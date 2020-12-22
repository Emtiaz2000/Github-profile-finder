
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
     static getDatafromLoaclStorage(){
          let gitId;
          if(localStorage.getItem('githubId')===null){
              gitId=[]
          }else{
              gitId = JSON.parse(localStorage.getItem('githubId'))
          }
          return gitId
      } 
  
     static useDataFromLoaclStorage(){
          const gitId = Store.getDatafromLoaclStorage();
          gitId.forEach(element => {
              const ui = new UI()
              ui.display(element);
          });
      }
  }
  window.addEventListener('DOMContentLoaded',Store.useDataFromLoaclStorage)