<script setup>
import { FormKitSchema, createInput } from '@formkit/vue';
import VueMultiSelectFormKit from '@/formkit-components/VueMultiSelectFormKit.vue';

const ms = createInput(VueMultiSelectFormKit);

const formData = ref({
  username: 'alanmaldonado',
  password: '',
});

const formDataPro = ref([]);

async function handleSubmit(data) {
  await wait(3000);
  console.log(data);
}
</script>
<template>
  <div>
    <pre>{{  formDataPro }}</pre>
    <FormKit
      v-model="formDataPro"
      id="repeater"
      name="users"
      type="repeater"
      label="Users"
    >
      <FormKit
        type="email"
        label="Email"
        name="email"
        validation="required|email"
        placeholder="Add email address..."
      />
      <FormKit type="text" label="Name" name="name" validation="required" />
      <FormKit type="toggle" name="toggle" label="Is Admin" />
    </FormKit>
    <FormKitSchema
      :data="{
        formData,
        attrs: {
          onSubmit: handleSubmit,
        },
      }"
      :schema="[
        {
          $formkit: 'form',
          submitBehavior: 'live',
          submitLabel: 'Login',
          value: '$formData',
          bind: '$attrs',
          plugins: [],
          children: [
            {
              $el: 'h1',
              children: 'Login',
            },
            {
              validation: '(500)username_is_unique',
              $formkit: 'text',
              label: 'Username',
              name: 'username',
              help: 'Please fill out your username',
            },
            {
              $formkit: 'password',
              label: 'Password',
              name: 'password',
              if: '$value.username',
            },
            {
              $formkit: ms,
              label: 'Framework',
              value: 'Vue',
              options: ['Vue', 'React', 'Svelte'],
              multiple: true,
            },
          ],
        },
        ,
      ]"
    />
  </div>
</template>
