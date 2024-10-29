<script lang="ts">
  import TodoItem from "$lib/TodoItem.svelte"
  import PocketBase from "pocketbase"
	import { onMount } from "svelte"

  const pb = new PocketBase("http://127.0.0.1:8090")

  let items: {
    text: string;
    completed: boolean;
    id: string;
  }[] = []

  async function getTodoItems() {
    items = await pb.collection("todos").getFullList()
  }

  async function deleteItem(id: string) {
    await pb.collection("todos").delete(id)
    getTodoItems()
  }

  async function updateItem(content: { item: string; completed: boolean; }, id: string) {
    await pb.collection("todos").update(id, content)
    getTodoItems()
  }
  
  onMount(() => {
    getTodoItems()
  })
</script>

<main class="flex flex-wrap gap-3">
  <form method="POST" class="w-full">
    <input type="text" name="text" placeholder="Add a new todo" autocomplete="off" />
    <button type="submit">Add</button>
  </form>

  {#each items as item}
    <TodoItem 
    content={item}
    id={item.id} 
    deleteItem={deleteItem}
    updateItem={updateItem}
    />
  {/each}
</main>