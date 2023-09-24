<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
export default defineComponent({
    name: 'App',
    components: {
        RouterView
    },
    setup() {}
});
</script>
