import { NextRequest, NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
import PrismaClient from "../../../lib/db";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest){
    const data = await req.json();

    console.log(data)
    
    await prismaClient.user.create({
        data: {
            email: data.email,
            password: data.password
        }
    })
    
    
    return NextResponse.json({
        message: "You have been signed up.",
        "user credentials": data
    })
}