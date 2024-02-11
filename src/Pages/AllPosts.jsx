import Postcard from '../components/Postcard'
import Container from '../components/Container'
import { useEffect, useState } from 'react'
import appwriteService from'../appwrite/config'

function ALLPosts(){
    const[posts,setposts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getposts([]).then((posts)=>{
        if(posts){
            setposts(posts.documents)
        }
    })
    return(
        <div  className='w-full-py-8'>
<Container>
    <div className='flex flex-wrap'>
{posts.map((post)=>{
    <div key={post.$id}className='p-2 w-1/4'>
        <Postcard{...post}/></div>
})}
</div>
</Container>
        </div>
    )
} export default ALLPosts