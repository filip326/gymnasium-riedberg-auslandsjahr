<script setup lang="ts">
    import { Button } from "../components/ui/button";
    import {
        Form,
        FormControl,
        FormDescription,
        FormField,
        FormItem,
        FormLabel,
        FormMessage,
    } from "../components/ui/form";
    import {
        NumberField,
        NumberFieldContent,
        NumberFieldDecrement,
        NumberFieldIncrement,
        NumberFieldInput,
    } from "../components/ui/number-field";
    import { Label } from "../components/ui/label";
    import { Input } from "../components/ui/input";
</script>

<template>
    <div class="px-5">
        <h1 class="scroll-m-20 text-3xl font-bold">Auslandsjahr: Erstantrag</h1>
        <p>
            Bitte füllen Sie das Formular gemeinsam mit Ihrem Kind aus. Die Daten werden mit dem iServ-Zugang Ihres
            Kindes verknüpft, um die Zuordnung zu erleichtern. Die Daten werden regelmäßig zwischengespeichert, sodass
            Sie das Formular später fortsetzen können.
        </p>
        <Form>
            <h3 class="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl">
                Angaben zum Schüler / zur Schülerin
            </h3>
            <FormField name="studentFirstName">
                <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormDescription>Vorname des Schülers / der Schülerin</FormDescription>
                    <FormControl><Input /></FormControl>
                </FormItem>
            </FormField>
            <FormField name="studentLastName">
                <FormItem>
                    <FormLabel>Nachname</FormLabel>
                    <FormDescription>Nachname des Schülers / der Schülerin</FormDescription>
                    <FormControl><Input /></FormControl>
                </FormItem>
            </FormField>
            <FormField name="year">
                <FormItem>
                    <FormLabel>Jahrgang</FormLabel>
                    <FormDescription
                        >Jahrgangsstufe / Klasse, welche der Schüler / die Schülerin zurzeit besucht.
                    </FormDescription>
                    <FormControl><Input /></FormControl>
                </FormItem>
            </FormField>
            <NumberField
              :min="5"
              :max="13"
            >
                <Label>Jahrgangsstufe</Label>
                <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                </NumberFieldContent>
            </NumberField>
        </Form>
    </div>
</template>
