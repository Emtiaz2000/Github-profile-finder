//instantiate data from html    
const  github = new Github()
const profilel_show = document.querySelector("#profilel_show")
const search = document.querySelector('#search');
const submit = document.querySelector('#button')
//working after click the button 
submit.addEventListener('click',(e)=>{
e.preventDefault();
if(search === null){
    //if input is null
    alert('please fill the input')
}else{
    //after get the data from input
     github.fetchData(search.value).then((text)=>{
        const ui = new UI();
        ui.display(text);
        Store.getlocalStroge(text)
    }); 
    
}

})
