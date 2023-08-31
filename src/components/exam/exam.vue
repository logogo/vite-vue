<template>
  <div>22222</div>
</template>

<script>
import { defineComponent, watch } from 'vue';
export default defineComponent({
    name: 'Exam',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, { emit }) {
        watch(() => props.data.name, (val) => {
            console.log(val);
        }, { immediate: true });
    }
});
</script>
