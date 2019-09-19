import {Repo} from './Repo';
export class User {
    login!: string;
    fullname!: string;
    repocount!: number;
    followercount!: number 
    repo?: [Repo] 


    constructor (userResponse:any)
    {
        this.login = userResponse.login;
        this.fullname = userResponse.name;
        this.repocount = userResponse.public_repos;
        this.followercount = userResponse.followers;
    }
}