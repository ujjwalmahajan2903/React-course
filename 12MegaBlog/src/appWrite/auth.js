import conf from '../Conf/conf.js';
import {Client,Account,ID} from "appwrite";

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

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
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

export default authService;