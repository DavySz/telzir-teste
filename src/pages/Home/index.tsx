import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Select from 'react-select'

import { optionsLocation, optionsProduct } from '../../Utils/options_select';
import { Calculateplans } from '../../functions/Calculateplans';
import { useTypeN, useTypeS } from '../../types/pages_home';
import { Button } from '../../components/Button'
import './styles.css'

export function Home() {

    const [origin, setOrigin] = useState<useTypeS>('')
    const [destiny, setDestiny] = useState<useTypeS>('')

    const [time, setTime] = useState('')
    const [product, setProduct] = useState<useTypeS>('')

    const [noplan, setNoPlan] = useState<useTypeN>()
    const [withplan, setWithPlan] = useState<useTypeN>()

    function handleClickCalculatePlan(event: FormEvent) {
        event.preventDefault()
        if (origin === '' || destiny === '' || time === '' || product === '') {
            toast.error('Preencha todos os campos!',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        } else {
            const result = Calculateplans({
                origin,
                destiny,
                time,
                product
            })
            setNoPlan(result?.noPlan)
            setWithPlan(result?.withPlan)
            if (result === undefined) {
                toast(
                    `Desculpe, infelizmente os planos FaleMais da Talzir ainda não possuem cobertura pra ligar de ${origin} pra ${destiny}.`,
                    {
                        duration: 10000,
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            textAlign: 'justify',
                            color: '#fff',
                        },
                    }
                );
            }
        }
    }

    return (
        <div id="page">
            <aside>
                <h1>Descubra qual plano Telzir combina melhor com você</h1>
                <form onSubmit={handleClickCalculatePlan}>
                    <p>Selecione o DDD de origem</p>
                    <Select
                        options={optionsLocation}
                        onChange={(e) => { setOrigin(e?.value) }}
                        className="select"
                        placeholder="Origem..."
                    />
                    <p>Selecione o DDD de destino</p>
                    <Select
                        options={optionsLocation}
                        onChange={(e) => { setDestiny(e?.value) }}
                        className="select"
                        placeholder="Destino..."
                    />
                    <p>Informe quanto tempo a ligação ira durar</p>
                    <input
                        type="number"
                        min="0"
                        placeholder="Digite o tempo em minutos"
                        onChange={(event) => setTime(event.target.value)}
                        value={time}
                        className="input-time"
                    />
                    <p>Selecione o plano</p>
                    <Select
                        options={optionsProduct}
                        onChange={(e) => { setProduct(e?.value) }}
                        className="select"
                        placeholder="FaleMais..."
                    />
                    <Button type="submit">Comparar plano</Button>
                </form>
            </aside>
            <main>
                <div>
                    <table id="data-table">
                        <thead>
                            <tr>
                                <th>Origem</th>
                                <th>Destino</th>
                                <th>Com o plano</th>
                                <th>Sem o plano</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{origin}</td>
                                <td>{destiny}</td>
                                <td>{withplan}</td>
                                <td>{noplan}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Toaster />
        </div>
    )
}


