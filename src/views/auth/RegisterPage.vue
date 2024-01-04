<template>
  <q-card class="card" style="width: 400px">
    <q-form autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" @submit="onSubmit">
      <q-card-section>
        <h3 class="text-h3 text-center q-mb-md">Registre-se</h3>
        <q-separator inset />
      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <FormInput label="Nome" name="name"></FormInput>

        <FormInput label="Email" name="email"></FormInput>

        <FormInput :type="!showPassword ? 'password' : 'text'" label="Senha"
                   name="password">
          <template v-slot:append>
            <q-icon :name="showPassword ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer q-pl-sm"
                    @click="showPassword = !showPassword"
            />
          </template>
        </FormInput>

        <FormInput :type="!showPassword ? 'password' : 'text'"
                   label="Confirme a senha"
                   name="password_confirmation">
          <template v-slot:append>
            <q-icon :name="showPassword ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer q-pl-sm"
                    @click="showPassword = !showPassword"
            />
          </template>
        </FormInput>

        <div class="row justify-end">
          <q-btn :disable="isSubmitting" color="primary" flat
                 label="Já está cadastrado?" to="/auth/login" />
        </div>
      </q-card-section>
      <q-card-actions align="center" class="q-pa-md">
        <q-btn :loading="isSubmitting" class="fit" color="primary" label="Cadastrar" size="lg"
               type="submit"></q-btn>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script lang="ts" setup>
import FormInput from '@/components/form/FormInput.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string, ref as yupRef } from 'yup'
import { ref } from 'vue'
import { register } from '@/services/auth.service'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const { notify } = useQuasar()
const router = useRouter()

const { handleSubmit, resetField, isSubmitting } = useForm({
  validationSchema: toTypedSchema(
    object({
      name: string().required('Nome é obrigatório'),
      email: string().email('Deve ser um email válido').required('Email é obrigatório'),
      password: string().required('Senha é obrigatória').min(8, 'Senha deve ter no mínimo 8 caracteres'),
      password_confirmation: string()
        .required('Confirmação de senha é obrigatória')
        .oneOf([yupRef('password')], 'As senhas não conferem')
    })
  ),
  initialValues: {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }
})

const showPassword = ref(false)

const onSubmit = handleSubmit(values => {
  const data = {
    name: values.name,
    email: values.email,
    password: values.password
  }

  register(data)
    .then(() => {
      resetField('password')
      resetField('password_confirmation')

      notify({
        message: 'Cadastrado realizado com sucesso!',
        type: 'positive'
      })

      router.push({ name: 'home' })
    })
    .catch(() => {
      notify({
        message: 'Erro ao cadastrar',
        type: 'negative'
      })
    })
})

</script>
