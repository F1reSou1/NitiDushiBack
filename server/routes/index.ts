import { database } from "~/utils/database";

export default eventHandler(async(event) => {
  const res = await database.client.findMany()
  return res.map(c => {
    return {name: c.name}
  })
});
