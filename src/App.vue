<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { RouterView, useRoute } from 'vue-router';
export default defineComponent({
    name: 'App',
    components: {
        RouterView
    },
    setup() {
        const route = useRoute();
        console.log(route.path);
    }
});
</script>
