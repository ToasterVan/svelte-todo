<script lang="ts">
  let { content, id, deleteItem, updateItem }: {
    content: {
      text: string;
      completed: boolean;
    };
    id: string;
    deleteItem: Function;
    updateItem: Function;
  } = $props();
</script>

<div class="flex min-w-72 max-w-96 flex-1 gap-2 bg-slate-300 p-2 rounded-xl">
  <input type="checkbox" bind:checked={content.completed} onchange={updateItem(content, id)} class="h-[calc(100%_-_1.7rem)] self-center aspect-square" />
  <div class="flex flex-col flex-1">
    <span>{content.text}</span>
    <button onclick={deleteItem(id)} class="self-end">Remove</button>
  </div>
</div>