
import { useState,useEffect } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import appwriteService from '../appwrite/config'
import Container from "../components/Container";
import PostForm from "../components/PostForm";
function EditPost(){
    const[post,setposts]=useState(null)
    const{slug}=useParams()
    const navigate=useNavigate();
    useEffect(()=>{
        if(slug){
            appwriteService.getpost(slug).then((post)=>{
                if(post){
                    setposts(post)
                }
            });
        }
        else{
            navigate("/");
        }
    },[slug,navigate]);
return post?(<div>
    <Container>
        <PostForm/>

    </Container>
</div>):null;
}
export default EditPost;