"use server"

import { db } from "@/lib/db"
import { clerkMiddleware, currentUser } from "@clerk/nextjs/server"
import { success } from "zod";

export const createLinkByUser=async (data:LinkFormData)=>{
    const user=await currentUser();
    if(!user) return {
        success:false,
        error:"No authenticated user found"
    }
    const link =await db.link.create({
        data:{
            title:data.title,
            url:data.url,
            description:data.description,
            clickcount:0,
            user:{
                connect:{
                    clerkId:user.id
                }
            }
        }
    })
    return (
        {
            success:true,
            message:"Link created Succesfully",
            data:link
        }
    )
}

export const getAllLinkforUser=async ()=>{
    const user=await currentUser();
    const links =await db.link.findMany({
        where:{
            user:{
                clerkId:user?.id
            }
        },
        select:{
            id:true,
            title:true,
            description:true,
            url:true,
            clickcount:true,
            createdAt:true,

        }

    })
    return {
        success:true,
        message:"Created all links successfully",
        data:links
    }
}