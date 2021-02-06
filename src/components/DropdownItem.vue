<template>
    <button class="w-full text-sm text-neutral-900 h-12 px-5  hover:bg-gray-50 cursor-pointer flex items-center disabled:opacity-50 disabled:cursor-not-allowed outline-none"
            @click="$emit('pressed')"
            :class="{'font-medium !text-primary': selected}">
        <p class="mr-2 text-base" style="font-weight: inherit; color: inherit">{{ label }}</p>
        <img src="@/assets/icons/check.svg" class="w-3" v-if="selected"/>
    </button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const DropdownItem = defineComponent({
    props: {
        label: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            default: false
        }
    }
});

export default DropdownItem;
</script>

<style>

</style>