import PocketBase from "pocketbase"

const pb = new PocketBase("http://127.0.0.1:8090")

export const actions = {
  default: async ({request}: {request: Request}) => {
    const data = await request.formData()

    const content = {
      text: data.get("text"),
      completed: false
    }
    
    if (!content.text) return

    await pb.collection("todos").create(content)
  }
}