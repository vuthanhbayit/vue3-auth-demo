<template>
  <div>
    Login
    <div>
      phone:
      <input v-model="state.phone" type="text" />
    </div>
    <div>
      Password:
      <input v-model="state.password" type="text" />
    </div>

    <button @click="onSubmit">submit</button>

    <pre>{{ state }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useAuth } from 'vue3-auth'

const { login } = useAuth()

const state = reactive({
  phone: '0979108737',
  password: '',
})

const onSubmit = async () => {
  try {
    await login(state)
  } catch (e) {
    console.log({ e })
  }
}
</script>
