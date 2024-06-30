<script setup lang="ts">
    import Button from "@/components/ui/button/Button.vue";
</script>

<template>
    <div class="flex justify-center flex-col items-center">
        <img
            src="../assets/img/grb-logo.png"
            alt="Gymnasium Riedberg Logo"
            class="scroll-m-20 w-40 h-40 lg:w-52 lg:h-52"
        />
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Auslandsaufenthalt</h1>
        <h2 class="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">am Gymnasium Riedberg</h2>
        <p>Interessiert an einem Auslandsaufenthalt? Bitte fülle das Formular gemeinsam mit deinen Eltern aus.</p>
        <Button> Formular ausfüllen </Button>
    </div>
</template>

<style scoped></style>
