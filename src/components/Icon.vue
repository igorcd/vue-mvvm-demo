<template>
    <div class="symbol"
         :style="[{'width': size},
                  {'height': size},
                  {'background-color': color},
                  {'mask-image': 'url('+ require('@/assets/icons/'+icon+'.svg') +')'}]"></div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Icon = defineComponent({
    props: {
        icon: {
            type: String,
            required: true
        },
        size: {
            type: String,
            default: "20px"
        },
        color: {
            type: String,
            default: "white"
        }
    }
});

export default Icon;
</script>

<style>
.symbol {
    display: block;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
    -webkit-transition: .3s;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    transition: .3s;
}
</style>