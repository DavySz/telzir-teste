import {
    CalculateWithPlanProps,
    CalculateNoPlanProps,
    CalculatePlanProps,
    CalculateType,
} from '../../types/components_functions'

function calculate({ time, valueProduct, newTax }: CalculateType) {
    const value = Number(time) - valueProduct
    if (value <= 0) {
        return 0
    } else {
        return value * newTax
    }
}

function getCalculus({ tax, time, product }: CalculateWithPlanProps) {
    const noPlan = calculateNoPlan({ tax, time }).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const withPlan = calculateWithPlan({ tax, time, product }).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    const calculated = {
        noPlan,
        withPlan
    }
    return calculated
}

function calculateNoPlan({ tax, time }: CalculateNoPlanProps) {
    return Number(time) * tax
}

function calculateWithPlan({ tax, time, product }: CalculateWithPlanProps) {
    const newTax = tax + (0.1 * tax)

    if (product === 'falemais30') {

        const valueProduct = 30
        return calculate({ time, valueProduct, newTax })

    } else if (product === 'falemais60') {

        const valueProduct = 60
        return calculate({ time, valueProduct, newTax })

    } else {

        const valueProduct = 120
        return calculate({ time, valueProduct, newTax })
    }
}

export function Calculateplans({
    origin,
    destiny,
    time,
    product
}: CalculatePlanProps) {
    if (origin === '011' && destiny === '016') {
        const tax = 1.90
        const calculated = getCalculus({ tax, time, product })
        return calculated

    } else if (origin === '016' && destiny === '011') {
        const tax = 2.90
        const calculated = getCalculus({ tax, time, product })
        return calculated

    } else if (origin === '011' && destiny === '017') {
        const tax = 1.70
        const calculated = getCalculus({ tax, time, product })
        return calculated

    } else if (origin === '017' && destiny === '011') {
        const tax = 2.70
        const calculated = getCalculus({ tax, time, product })
        return calculated

    } else if (origin === '011' && destiny === '018') {
        const tax = 0.90
        const calculated = getCalculus({ tax, time, product })
        return calculated

    } else if (origin === '018' && destiny === '011') {
        const tax = 1.90
        const calculated = getCalculus({ tax, time, product })
        return calculated
    }
}