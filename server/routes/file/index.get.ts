export default defineEventHandler(async(event) =>{
    return await database.file.findMany({
        select:{id:true}
    })
})