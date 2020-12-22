//fetch data from github api
class Github{
    constructor(){
        this.clintId = '6699096cce1c84badb93';
        this.secretId = '2d1d8d4431f94aa4d3e4c8665f3f5e00fa5cc750'
    }
    async fetchData(user){
        const res = await fetch(`https://api.github.com/users/${user}?clinet_id=${this.clintId}&client_secret=${this.secretId}`).then((e)=>{
            return e.json()
        })
        const result1 = await fetch(res.repos_url).then((e)=>{
            return e.json()
        })
       
        return {
            avatar_url:res.avatar_url,
            login:res.login,
            public_repos:res.public_repos,
            id: res.id,
            html_url:res.html_url,
            latest_repo:result1[result1.length - 1].full_name,
            result1_html_url:result1[result1.length - 1].html_url
        }  
    }
    }
