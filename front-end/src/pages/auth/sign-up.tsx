import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { registerRestaurant } from '../../api/register-restaurant'

const signUpForm = z.object({
  restaurantName: z.string().min(1, 'Nome do restaurante é obrigatório'),
  restaurantPhone: z.string().min(1, 'Telefone do restaurante é obrigatório'),
  restaurantCNPJ: z.string().min(1, 'CNPJ do restaurante é obrigatório'),
  managerName: z.string().min(1, 'Nome do gerente é obrigatório'),
  email: z.string().email('E-mail inválido'),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestaurantsMutate } = useMutation({
    mutationFn: registerRestaurant,
  })

  const navigate = useNavigate()
  async function handleSignUp(data: SignUpForm) {
    try {
      await registerRestaurantsMutate({
        email: data.email,
        restaurantName: data.restaurantName,
        phone: data.restaurantPhone,
        managerName: data.managerName,
      })
      toast.success(
        'Cadastro realizado com sucesso! Verifique seu e-mail para ativar sua conta.',
        {
          action: {
            label: 'Login',
            onClick: () => {
              navigate('/sign-in?email=' + data.email)
            },
          },
        },
      )
    } catch (error) {
      console.log(error)
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" className="absolute right-8 top-4" asChild>
          <Link to="/sign-in" className="">
            Fazer login
          </Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e começe suas vendas
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                placeholder="Nome do Estabelecimento"
                {...register('restaurantName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantPhone">
                Telefone do Estabelecimento
              </Label>
              <Input
                id="restaurantPhone"
                type="telephone"
                placeholder="(00) 00000-0000"
                {...register('restaurantPhone')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="restaurantCNPJ">CNPJ</Label>
              <Input
                id="restaurantCNPJ"
                type="cnpj"
                placeholder="00.000.000/0000-00"
                {...register('restaurantCNPJ')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu nome</Label>
              <Input
                id="managerName"
                type="text"
                {...register('managerName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <Button disabled={isSubmitting} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao clicar em Finalizar cadastro, você concorda com os{' '}
              <Link
                to="/terms"
                className="text-primary underline underline-offset-4"
              >
                Termos de Serviço
              </Link>{' '}
              e com a nossa{' '}
              <Link
                to="/privacy"
                className="text-primary underline underline-offset-4"
              >
                Política de Privacidade
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
