
import confi from'../confi/confi'
import { Client,ID,Databases,Storage,Query} from 'appwrite'
export class Service{
    client=new Client();
    databases;
    bucket;
    account;
    constructor(){
        this.client .setEndpoint(confi.appwriteUrl).setProject(confi.appwriteProjectid);
        this.client.setEndpoint(this.client);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
}
async createpost({title,content,featuredimage,status,userid,slug}){
try {
   return await this.databases.createDocument(
       confi.appwriteDatabaseid,
       confi.appwriteCollectionid,
       slug,
       {
        title,
        content,featuredimage,
        status,
        userid,
       }

    )
} catch (error) {
    console.log(error);
}
}
async updatepost(slug,{title,content,featuredimage,status}){
try {
    return await this.databases.updateDocument(
        confi.appwriteDatabaseid,
        confi.appwriteCollectionid,
        slug,
        {title,content,featuredimage,status}
    )
} catch (error) {
   console.log(error);
}
}
async deletepost(slug){
    try {
         await this.databases.deleteDocument(
            confi.appwriteDatabaseid,
            confi.appwriteCollectionid,
            slug
        )
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
async getpost(slug){
    try {
        return await this.databases.getDocument(
            confi.appwriteDatabaseid,
            confi.appwriteCollectionid,
            slug
        );
    } catch (error) {
     console.log(error); 
     return false;
    }
}
async getposts(queries=[Query.equal("status","active")]){
    try {
      return  await this.databases.listDocuments(
        confi.appwriteDatabaseid,
        confi.appwriteCollectionid,
queries,
      );
    } catch (error) {
        console.log(error);
    }
}
async uploadfile(file){
try {
    return await this.bucket.createFile(
        confi.appwriteBucketid,
        ID.unique(),
        file
    );
} catch (error) {
   console.log(error); 
   return false;
}
}
async deletefile(fileId){
    try {
        return await this.bucket.deletefile(
            confi.appwriteBucketid,
            fileId
        );
    } catch (error) {
        console.log(error);
        return false;
    }
}

getFilePreview(fileId){
    return this.bucket.getFilePreview(confi.appwriteBucketid,fileId);
}
}



    


const service=new Service()
export default service