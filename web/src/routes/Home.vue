<script setup lang="ts">
    import Button from "../components/ui/button/Button.vue";
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
</script>

<template>
    <div class="flex justify-center flex-col items-center">
        <img
            src="../assets/img/grb-logo.png"
            alt="Gymnasium Riedberg Logo"
            class="scroll-m-20 w-28 h-28 lg:w-52 lg:h-52"
        />
        <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Auslandsaufenthalt</h1>
        <h2 class="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">am Gymnasium Riedberg</h2>
        <p>Interessiert an einem Auslandsaufenthalt? Bitte fülle das Formular gemeinsam mit deinen Eltern aus.</p>
        <p>Melde dich dafür bitte mit deinen iServ-Zugangsdaten an, dies vereinfacht die Zuordnung deiner Daten.</p>
        <Button class="m-5"> Formular aufrufen (iServ-Login) </Button>
        <p>
            <u>Hinweis: </u> Du kannst das Formular auch nur teilweise ausfüllen und später weitermachen. Die Daten
            werden mit deinem iServ-Zugang verknüpft.
        </p>
        <h3 class="scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">FAQ</h3>
        <Accordion type="single" class="w-[90%]">
            <AccordionItem value="0">
                <AccordionTrigger>Wie früh muss ich das Auslandsjahr planen?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Idealerweise 1 bis 1,5 Jahre im Voraus, um Bewerbungsfristen für Stipendien und
                        Visumangelegenheiten zu berücksichtigen. Ein späterer Start ist möglich, aber begehrte Plätze
                        könnten bereits vergeben sein. Ein langer Vorlauf erleichtert auch die Organisation innerhalb
                        der Schule.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="1">
                <AccordionTrigger>In welchem Jahrgang darf man ins Ausland gehen?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        SuS gehen meist zwischen der 9. und 11. Klasse ins Ausland. Bei Aufenthalten vor der 9. Klasse
                        bitte frühzeitig Absprachen treffen.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
                <AccordionTrigger>Welchen Jahrgang empfiehlt das GRB?</AccordionTrigger>
                <AccordionContent>
                    <p>
                        Aus schulorganisatorischer Sicht empfehlen wir das erste oder zweite Halbjahr der 10. Klasse, um
                        Anschluss an den Lehrstoff zu gewährleisten und die Auswirkungen auf die Oberstufenqualifikation
                        zu minimieren.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="3">
                <AccordionTrigger>Muss ich dieses Formular ausfüllen?</AccordionTrigger>
                <AccordionContent>
                    <p>Ja.</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
</template>

<style scoped></style>
