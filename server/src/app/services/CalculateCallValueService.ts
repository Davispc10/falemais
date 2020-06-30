import { PlanProps } from '../schemas/Plan'
import { TariffProps } from '../schemas/Tariff'

interface ICalculatedCall {
  formattedCallValueWithPlan: string,
  formattedCallValueWithoutPlan: string
}

class CalculateCallValueService {
  public run (tariff: TariffProps, plan: PlanProps, time: number): ICalculatedCall {
    const timeRest = time - plan.time
    let callWithPlan = 0

    if (timeRest > 0) {
      const timeRestWithTax = timeRest * tariff.tax

      callWithPlan = timeRestWithTax + ((plan.add * timeRestWithTax) / 100)
    }

    const callWithoutPlan = time * tariff.tax

    const calculatedCall: ICalculatedCall = {
      formattedCallValueWithPlan: this.formatNumberToPtBr(callWithPlan),
      formattedCallValueWithoutPlan: this.formatNumberToPtBr(callWithoutPlan)
    }

    return calculatedCall
  }

  private formatNumberToPtBr (value: number): string {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
  }
}

export default CalculateCallValueService
