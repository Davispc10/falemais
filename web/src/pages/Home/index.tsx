import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Table from 'react-bootstrap/Table'

import "./styles.css";
import api from '../../services/api'
import logo from "../../assets/logo.svg";

interface Tariff {
  _id: string,  
  origin: string,
  destiny: string,
  tax: number
}

interface Plan {
  _id: string,
  description: string,
  time: number,
  add: number
}

interface DDD {
  ddds: string[]
}

interface CallValuesData {  
  calculatedCallWithPlan: string,
  calculatedCallWithoutPlan: string
}

const Home = () => {
  const [tariffs, setTariffs] = useState<Tariff[]>([])
  const [plans, setPlans] = useState<Plan[]>([])
  const [ddds, setDDDs] = useState<DDD>()
  const [callWithPlan, setCallWithPlan] = useState<string>('')
  const [callWithoutPlan, setCallWithoutPlan] = useState<string>('')
  
  const [selectedOrigin, setSelectedOrigin] = useState<string>('0')
  const [selectedDestiny, setSelectedDestiny] = useState<string>('0')
  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<number>(0)

  useEffect(() => {
    api.get('tariffs').then(response => {
      setTariffs(response.data)      
    })
  }, [])

  useEffect(() => {
    api.get('plans').then(response => {
      setPlans(response.data)
      setSelectedPlan(response.data[0]._id)
    })
  }, [])

  useEffect(() => {
    api.get('ddds').then(response => {
      setDDDs(response.data)

      setSelectedOrigin(response.data.ddds[0])
      setSelectedDestiny(response.data.ddds[0])
    })
  }, [])

  function handleSelectOrigin(event: ChangeEvent<HTMLSelectElement>) {
    const origin = event.target.value

    setSelectedOrigin(origin)
  }

  function handleSelectDestiny(event: ChangeEvent<HTMLSelectElement>) {
    const destiny = event.target.value

    setSelectedDestiny(destiny)
  }

  function handleSelectPlan(event: ChangeEvent<HTMLSelectElement>) {
    const planId = event.target.value

    setSelectedPlan(planId)
  }

  function handleSelectTime(event: ChangeEvent<HTMLInputElement>) {
    const time = Number(event.target.value)

    setSelectedTime(time)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const origin = selectedOrigin
    const destiny = selectedDestiny
    const planId = selectedPlan
    const time = selectedTime

    const postData = {
      origin,
      destiny,
      time,
      planId
    }

    const callValuesData: CallValuesData = await (await api.post('calculate/call', postData)).data

    setCallWithPlan(callValuesData.calculatedCallWithPlan)
    setCallWithoutPlan(callValuesData.calculatedCallWithoutPlan)
  }

  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="FaleMais"/>
          <h1>Falemais</h1>
        </header>

        <main>
          <h1>Bem vindo ao Sistema de cálculo de ligações da Telzir</h1>
          <p>A Telzir, preocupada com a transparência junto aos seus clientes, disponibiliza está
            página na web onde o cliente pode calcular o valor da ligação. Abaixo, o cliente pode escolher os
            códigos das cidades de origem e destino, o tempo da ligação em minutos, escolher qual o
            plano FaleMais e clicar no botão vermelho para calcular. (Os minutos
            excedentes ao plano tem um acréscimo de 10% sobre a tarifa normal do minuto)
          </p>

          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="origin">Origem</label>
                  <select 
                    className="ddd"
                    name="origin"
                    id="origin"
                    value={selectedOrigin}
                    onChange={handleSelectOrigin}
                  >                    
                    {ddds?.ddds.map(ddd => (
                      <option key={ddd} value={ddd}>{ddd}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="destiny">Destino</label>
                  <select
                    className="ddd"
                    name="destiny"
                    id="destiny"
                    value={selectedDestiny}
                    onChange={handleSelectDestiny}
                  >
                    {ddds?.ddds.map(ddd => (
                      <option key={ddd} value={ddd}>{ddd}</option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="time">Tempo</label>
                  <input 
                    type="number"
                    name="time"
                    id="time"
                    min="0"
                    step="1"
                    onChange={handleSelectTime}
                  />
                </div>

                <div className="field">
                  <label htmlFor="plan">Plano FaleMais</label>
                  <select 
                    name="plan"
                    id="plan"
                    value={selectedPlan}
                    onChange={handleSelectPlan}
                  >
                    {plans.map(plan => (
                      <option key={plan._id} value={plan._id}>{plan.description}</option>
                    ))}                    
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="callValueWithPlan">Com FaleMais</label>
                  <input 
                    type="text"
                    name="callValueWithPlan"
                    id="callValueWithPlan"
                    value={callWithPlan}
                    readOnly
                  />
                </div>

                <div className="field">
                  <label htmlFor="callValueWithoutPlan">Sem FaleMais</label>
                  <input 
                    type="text"
                    name="callValueWithoutPlan"
                    id="callValueWithoutPlan"
                    value={callWithoutPlan}
                    readOnly
                  />
                </div>
              </div>
            </fieldset>

            <button type="submit">
              <FiArrowLeft />
            </button>
          </form>  

          <Table>
            <thead>
              <tr>
                <th>Origem</th>
                <th>Destino</th>
                <th>R$/min</th>
              </tr>
            </thead>
            <tbody>
              {tariffs.map(tariff => (
                <tr>
                  <td>{tariff.origin}</td>
                  <td>{tariff.destiny}</td>
                  <td>{tariff.tax.toFixed(2)}</td>
                </tr>
              ))}              
            </tbody>
          </Table>       
        </main>
      </div>
    </div>
  )
}

export default Home
