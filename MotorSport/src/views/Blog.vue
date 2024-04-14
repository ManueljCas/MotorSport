<template>
    <div class="home">

        <NavBarComponent/>

        <FooterComponent/>


    </div>

</template>

<script>
import NavBarComponent from '@/components/shared/NavBarComponent.vue';
import FooterComponent from '@/components/shared/FooterComponent.vue';

export default {
    name: 'Blog',
    components: {
        NavBarComponent,
        FooterComponent
    }
};
</script>

<style>
</style>