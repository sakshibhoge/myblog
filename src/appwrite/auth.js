import confi from'../confi/confi'
import { Client, Account, ID } from "appwrite";

 export class Authservice{
     client = new Client();
     account;
       constructor(){
        this.client .setEndpoint(confi.appwriteUrl).setProject(confi.appwriteProjectid);
        this.account=new Account(this.client);

        }
        async createAccount({email,password,name}){
            try {
               const userAccount=await this.account.create( 
                ID.unique(), email,password,name
                );
               if(userAccount){
                return this.login({email,password});
               }else{
                return userAccount;
               }
            } catch (error) {
                throw(error);
            }
        }
       
       async login(email,password){
        try {
       return  await  this.account.createEmailSession(email,password);
        } catch (error) {
            throw error;
        }
       }

       async currentuser(email,password){
try {
    return await this.account.get(email,password)
} catch (error) {
    console.log(error);
}return null
       }

      async logout(){
        try {
            await this.account.deleteSession();

        } catch (error) {
            console.log(error);
        }
      } 
    }




const authservice=new Authservice();

export default authservice