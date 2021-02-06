<template>
    <div class="min-h-screen relative">

        <!-- Menu -->
        <nav class="flex items-center absolute right-5 top-5 sm:right-9 sm:top-9">
            <!-- Notificações -->
            <IconButton icon="bell" size="3rem" iconSize="1.5rem"/>

            <div class="w-px h-8 mr-5 ml-2 bg-white"></div>

            <!-- Perfil -->
            <Dropdown>
                <template #default>
                    <CircleAvatar image="https://s2.glbimg.com/mhQAiC_bcseS7W4FXitU_XdRXts=/e.glbimg.com/og/ed/f/original/2019/05/07/24150166553_57637fca61_b.jpg" class="cursor-pointer"/>
                </template>
                <template #content>
                    <div class="w-40">
                        <DropdownItem label="Sair" @pressed="logout"/>
                    </div>
                </template>

            </Dropdown>
        </nav>

        <!-- Conteúdo -->
        <RouterView #default="{ Component }">
            <Transition name="fade" mode="out-in">
                <component :is="Component"/>
            </Transition>
        </RouterView>

        <!-- Footer -->
        <Text type="caption" class="absolute w-full text-center bottom-4">Desenvolvido por Igor Dantas</Text>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Text from '@/components/Text.vue';

import CircleAvatar from '@/components/CircleAvatar.vue';
import IconButton from '@/components/IconButton.vue';
import Dropdown from '@/components/Dropdown.vue';
import DropdownItem from '@/components/DropdownItem.vue';
import { useAlert } from '@/plugins/alert';
import { useRouter } from 'vue-router';

const SurveysMainView = defineComponent({
    components: { Text,  CircleAvatar, IconButton,Dropdown, DropdownItem },
    setup(){
        const alert = useAlert();
        const { replace } = useRouter();
      
        const logout = () => {
            alert({
                title: "Logout",
                message: "Tem certeza que deseja sair do sistema?",
                options: [
                    { 
                        icon: 'times'
                    },
                    { 
                        icon: 'check',
                        action: () => replace({ name: 'pin' })
                    }
                ]
            });
        };

        return { logout };
    }
});

export default SurveysMainView;
</script>

<style>

</style>