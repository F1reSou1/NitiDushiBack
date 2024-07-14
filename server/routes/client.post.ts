export default defineEventHandler(async (event) =>{
    const {name,email} = await readBody(event);
    return await database.client.create({
        data:{name,email}
    })
})