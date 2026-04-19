import {db} from "@/lib/db"

export const getAvailableUsernameSuggestions=async(base:string,count=3,maxtries=10)=>{
    const suggestions:string[]=[];
    let value=0;
    for(let i=0;i<maxtries&&suggestions.length<count;i++){
        value+=Math.floor(Math.random()*100);
        const candidate=`${base}${value}`
        const exists=await db.user.findUnique({
            where:{
                username:candidate
            }
        })
        if(!exists){
            suggestions.push(candidate);
        }
    }
    return suggestions;
}