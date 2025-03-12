import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const createUser = async () => {
    await client.user.create({
        data: {
            username: "suvesh",
            password: "suveshpass",
            age: 21,
            city: "satna"
        }
    })
}
// createUser();

const updateUser = async () => {
    await client.user.update({
        where: {
            id: 1
        },
        data: {
            username: "Suvesh Pandey"
        }
    })
}
// updateUser();

const getUser = async () => {
    const user = await client.user.findFirst({
        where: {
            id: 1
        }
    })
    console.log(user)
}
// getUser();

const getUserWithTodos = async () => {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    })
    console.log(user)
}
getUserWithTodos();