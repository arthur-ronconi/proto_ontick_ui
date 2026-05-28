<template>
  <ComponentPageLayout>
    <template #title> Inputs </template>
    <template #body>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">
            <span class="text-ontick-gray-400"> // </span>
            Text-like
          </h3>
          <div class="grid grid-cols-3 gap-4">
            <OTInput
              name="texto"
              type="text"
              label="Nome completo"
              placeholder="Seu nome aqui"
              v-model="data.text"
            />
            <OTInput
              name="idade"
              type="number"
              label="Idade"
              placeholder="Sua idade aqui"
              v-model="data.number"
            />
            <OTInput
              name="email"
              type="email"
              label="Email"
              placeholder="Seu email aqui"
              v-model="data.email"
            />
            <OTInput
              name="password"
              type="password"
              label="Senha"
              placeholder="Sua senha aqui"
              v-model="data.password"
            />
            <OTInput
              name="tel"
              type="tel"
              label="Telefone"
              placeholder="Seu ZAP aqui"
              v-model="data.tel"
              mask="(##) #####-####"
            />
            <OTInput
              name="search"
              type="search"
              label="Buscar"
              placeholder="Sua busca aqui"
              v-model="data.search"
              @search="onSearch"
            />
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold">
            <span class="text-ontick-gray-400"> // </span>
            Checkboxes, Switches e Radios
          </h3>
          <div class="flex flex-col gap-4">
            <h4 class="texl-lg">Checkbox</h4>
          </div>
        </div>
      </div>
    </template>
  </ComponentPageLayout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ComponentPageLayout from '@/layouts/ComponentPageLayout.vue';
import OTInput from '@/components/OTInput.vue';
import OTButton from '@/components/OTButton.vue';

const data = reactive({
  text: '',
  number: undefined,
  email: '',
  password: '',
  tel: '',
  search: '',
});

function onSearch() {
  alert('Não conhece o Google?');
}

function validateFields() {
  alert('Oi 😏');
}
</script>

<style scoped></style>
