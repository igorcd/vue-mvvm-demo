<template>
    <div class="flex">

        <div class="relative transform transition-transform duration-500 " :class="{'-translate-y-8': !attached}">
            <div class="h-36 w-12 rounded-l-3xl rounded-r-sm bg-gradient-to-r from-blue-600 to-blue-500 shadow-inner pl-0.5 py-0.5 relative z-10">
                <div class="w-full h-full rounded-l-3xl rounded-r-sm bg-blue-500 shadow-inner relative">
                            
                    <div class="h-0.5 w-2 bg-gray-900 absolute top-3 right-1"></div>

                    <div class="w-6 h-6 rounded-full  absolute left-1/2 -translate-x-1/2 transform top-6 p-px">
                        <div class="w-full h-full rounded-full border-gray-800 border-2 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                    </div>

                    <div class="w-1.5 h-1.5 bg-gray-800 absolute bottom-8 left-7"></div>

                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2 top-16"></div>
                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2 top-20"></div>
                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute top-20 transform -translate-y-2 left-3"></div>
                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute top-20 transform -translate-y-2 left-7 -translate-x-0.5"></div>
                </div>
            </div>
            <div class="w-6 h-6 bg-gray-900 absolute -top-0.5 transform rotate-3 rounded-tl-full z-0"></div>
        </div>

        <div class="w-64 h-36 bg-gray-700 px-2 py-2 relative rounded-sm overflow-hidden">

            <div class="w-1.5 h-1.5 rounded-bl-full bg-white absolute top-0 right-0 z-10"></div>
                    
            <div class="w-full h-1 bg-gradient-to-b from-gray-400 to-gray-700 absolute top-0 left-0"></div>
                    
            <div class="w-full h-full bg-gray-900 rounded-md px-4 py-3">
                <div class="w-full h-full bg-gray-600 rounded-sm"></div>
            </div>

            <div class="w-full h-1 bg-gradient-to-b from-gray-700 to-gray-400 absolute bottom-0 left-0"></div>
                    
            <div class="w-1.5 h-1.5 rounded-br-full bg-white absolute top-0 left-0 z-10"></div>
        </div>

        <div class="relative">
            <div class="h-36 w-12 rounded-r-3xl rounded-l-sm bg-gradient-to-l from-red-700 to-red-500 shadow-inner relative pr-0.5 py-0.5 z-10">
                <div class="w-full h-full rounded-r-3xl rounded-l-sm bg-red-500 shadow-inner relative">
                            
                    <div class="h-0.5 w-2 bg-gray-900 absolute top-3 left-1"></div>
                    <div class="h-0.5 w-2 bg-gray-900 absolute top-3 left-1 transform rotate-90"></div>

                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2 top-6"></div>
                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2 top-10"></div>
                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute top-8 left-3"></div>
                    <div class="w-2 h-2 border border-gray-900 bg-gray-800 rounded-full absolute top-8 transform  left-7 -translate-x-0.5"></div>

                    <div class="w-1.5 h-1.5 bg-gray-800 absolute bottom-8 rounded-full left-3transform -translate-y-2 left-3" ></div>

                    <div class="w-6 h-6 rounded-full  absolute left-1/2 -translate-x-1/2 transform bottom-14 p-px">
                        <div class="w-full h-full rounded-full border-gray-800 border-2 bg-gradient-to-b from-gray-600 to-gray-700"></div>
                    </div>
                </div>
            </div>

            <div class="w-6 h-6 bg-gray-900 absolute -top-0.5 right-0 transform -rotate-3 rounded-tr-full z-0"></div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const NintendoSwitch = defineComponent({
    props: {
        attached: {
            type: Boolean,
            default: false
        }
    }
});

export default NintendoSwitch;
</script>

<style>

</style>