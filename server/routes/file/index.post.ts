export default defineEventHandler(async(event) =>{
    const file = await readRawBody(event, false)
    await database.file.create({
        data: {
          data: file
        },
    });
    return true
})