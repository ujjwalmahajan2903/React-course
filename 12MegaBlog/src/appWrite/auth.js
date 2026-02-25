import conf from '../Conf/conf.js';
import {Client,Account,Id} from "appwrite";

export class AuthService{
    Client = new Client();
    account;

    constructor(){
        this.Client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.account =  new Account(this.Client)
    }
    async createAccount({email,password,name}){
        try {
            const userAccount =  await this.account.create(Id.unique(), email, password, name);
            if(userAccount){
                // call another methhod
                this.login({email,password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            throw error
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw(error)
        }
    }
}

const authService = new AuthService();

export default AuthService;