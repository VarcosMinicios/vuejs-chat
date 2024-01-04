<template>
  <q-card class="card" style="width: 400px">
    <q-form autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" @submit="onSubmit">
      <q-card-section>
        <h3 class="text-h3 text-center q-mb-md">Bem vindo!</h3>
        <q-separator inset />
      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <FormInput label="Email ou CPF" name="email"></FormInput>

        <FormInput :type="!showPassword ? 'password' : 'text'" label="Senha"
                   name="password">
          <template v-slot:append>
            <q-icon :name="showPassword ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer q-pl-sm"
                    @click="showPassword = !showPassword"
            />
          </template>
        </FormInput>

        <div class="row justify-end">
          <q-btn :disable="isSubmitting" color="primary" flat
                 label="Não tem cadastro?" to="/auth/register" />
        </div>
      </q-card-section>
      <q-card-actions align="center" class="q-pa-md">
        <q-btn :loading="isSubmitting" class="fit" color="primary" label="Acessar" size="lg" type="submit"></q-btn>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script lang="ts" setup>
import FormInput from '@/components/form/FormInput.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string } from 'yup'
import { ref } from 'vue'
import { login } from '@/services/auth.service'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

const { notify } = useQuasar()
const router = useRouter()

const { handleSubmit, resetField, isSubmitting } = useForm({
  validationSchema: toTypedSchema(object({
    email: string().email('Deve ser um email válido').required('Email é obrigatório'),
    password: string().required('Senha é obrigatória')
  })),
  initialValues: {
    email: '',
    password: ''
  }
})

const showPassword = ref(false)

const onSubmit = handleSubmit(values => {
  login(values)
    .then(() => {
      resetField('password')
      notify({
        message: 'Logado com sucesso!',
        type: 'positive'
      })

      router.push({ name: 'home' })
    })
    .catch(() => {
      notify({
        message: 'Email ou senha inválidos',
        type: 'negative'
      })
    })
})

</script>
