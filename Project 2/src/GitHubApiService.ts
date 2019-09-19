import * as request from 'request';
import { User } from './User';

export class GitHubApiService{
    getUserInfo(userName:string)
    {
        let option: any = {
            headers:{
                'User-Agent':'request'
            },
            json:true
        }
        request.get('https://api.github.com/users/'+userName,option,(error:any,response:any,body:any) =>{
            let user = new User(body);
            console.log(user);
        })
    }
    getRepos()
    {

    }
}