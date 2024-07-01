<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Button from "../components/ui/button/Button.vue";

import { Input } from "../components/ui/input";
import { z } from "zod";

const susFormSchema = z.object({
  firstName: z.string().describe("Vorname"),
  lastName: z.string().describe("Nachname"),
});
</script>

<template>
  <h1 class="scroll-m-20 text-3xl font-bold">Auslandsjahr: Erstantrag</h1>
  <p>
    Bitte füllen Sie das Formular gemeinsam mit Ihrem Kind aus. Die Daten werden mit dem
    iServ-Zugang Ihres Kindes verknüpft, um die Zuordnung zu erleichtern. Die Daten werden
    regelmäßig zwischengespeichert, sodass Sie das Formular später fortsetzen können.
  </p>
  <div class="flex justify-center">
    <Tabs default-value="sus-daten" class="w-[90%]">
      <TabsList>
        <TabsTrigger value="sus-daten">Schülerin / Schüler</TabsTrigger>
        <TabsTrigger value="eltern-daten">Eltern / Erziehungsberechtigte </TabsTrigger>
        <TabsTrigger value="auslandsaufenthalt">Auslandsaufenthalt</TabsTrigger>
      </TabsList>
      <TabsContent value="sus-daten">
        <Card>
          <CardHeader>
            <CardTitle> Daten des Schülers / der Schülerin </CardTitle>
            <CardDescription>
              Bitte überprüfen Sie die Daten Ihres Kindes und korrigieren oder ergänzen
              diese.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input labal="Vorname" />
            <Input label="Nachname" />
            <Input label="Geburtsdatum" />
          </CardContent>
          <CardFooter> <Button>Weiter</Button> </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="eltern-daten">
        <p>Formular Eltern / Erziehungsberechtigte</p>
      </TabsContent>
      <TabsContent value="auslandsaufenthalt">
        <p>Formular Auslandsaufenthalt</p>
      </TabsContent>
    </Tabs>
  </div>
</template>
