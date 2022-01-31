import googleIconImg from '../../assets/google-icon.svg'
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../Hooks/useAuth'
import './styles.css'

export function SignIn() {
    const navigate = useNavigate()
    const { signInWithGoogle, user } = useAuth()

    async function signInGoogle() {
        if (!user) {
            await signInWithGoogle()
        }
        navigate('/home/telzir')
    }

    return (
        <div id="page">
            <aside id='aside'>
                <h1 id='h1'>
                    <strong>FaleMais Telzir</strong>
                </h1>
                <h2 className='text-onboarding'>
                    A Telzir acaba de lançar um novo produto: FaleMais.
                    Com ele você pode falar de graça por muitos minutos
                    sem se preocupar com a conta, pagando apenas os minutos excedentes*
                </h2>
                <span id='span'>*Os minutos excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto</span>
            </aside>
            <main id='main'>
                <div className="main-content">
                    <h2 className='text-main'>Entre agora e descubra qual plano FaleMais melhor se encaixa com a sua necessidade.</h2>
                    <button onClick={signInGoogle} className="button-signin">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Entrar com o Google
                    </button>
                </div>
            </main>
        </div>
    )
}




