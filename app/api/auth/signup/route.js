import {PrismaClient} from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(request){
    try {
        const {email, password,name} = await request.json();
        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await prisma.user.create({
            data : {
                email,
                name,
                password : hashedPassword,
            }
        });
        return Response.json({
            message : 'User Created Successfully',
            user: user
        });
    }catch(err){
        return Response.json({
            message : 'User could not be created',
            error : err
        })
    }
}