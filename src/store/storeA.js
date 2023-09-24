import { defineStore } from 'pinia';

export const StoreA = defineStore('storeA', {
    state: () => {
        return {
            piniaMsg: 'hello pinia',
            jsonStore: {
                name: 'li',
                age: 24
            }
        };
    },
    getters: {},
    actions: {
        getJosn(state) {
            console.log(this);
        }
    }
});
