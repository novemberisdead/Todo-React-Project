import {Account,Client,ID} from "appwrite"
import toast from "react-hot-toast";
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

     this.account = new Account(this.client)
    }

    async createAccount ({ email,password,name}){
        try {
          const userAccount = await this.account.create(ID.unique(),email,password,name )
          if(userAccount){
          return this.login({email,password})
          }else{
            return userAccount;
            
          }
        } catch (error) {
          toast.error('Something Went Wrong! Please try again', {
            style: {
              border: '0px solid #047857',
              backgroundColor: 'rgba(220, 38, 38,0.25)',
              padding: '10px',
              margin:'10px',
              color: '#DC2626',
              
            },
            iconTheme: {
              primary: '#DC2626',
              secondary: '#FFFAEE',
            },
          });
          console.log(error);
        }
      }

      async login ({email,password}){
        try {
         return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
          console.log(error);
          toast.error('Something Went Wrong! Please try again', {
            style: {
              border: '0px solid #047857',
              backgroundColor: 'rgba(220, 38, 38,0.25)',
              padding: '10px',
              margin:'10px',
              color: '#DC2626',
              
            },
            iconTheme: {
              primary: '#DC2626',
              secondary: '#FFFAEE',
            },
          });
        }
        }

   async getCurrentUser (){
        try {
          return await this.account.get()
        } catch (error) {
          console.log("Appwrite Error :: getCurrentUser", error);
        }
      }
    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
          toast.error('Something Went Wrong! Please try again', {
            style: {
              border: '0px solid #047857',
              backgroundColor: 'rgba(220, 38, 38,0.25)',
              padding: '10px',
              margin:'10px',
              color: '#DC2626',
              
            },
            iconTheme: {
              primary: '#DC2626',
              secondary: '#FFFAEE',
            },
          });
            console.log("Appwrite LogOut Error : ",error);
        }
    }


}

const authService = new AuthService()
export default authService
