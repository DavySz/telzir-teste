export type CalculatePlanProps = {
    origin: string | undefined;
    destiny: string | undefined;
    time: string;
    product: string | undefined;
}

export type CalculateNoPlanProps = {
    tax: number,
    time: string
}

export type CalculateWithPlanProps = {
    tax: number,
    time: string,
    product: string | undefined
}

export type CalculateType = {
    time: string,
    valueProduct: number,
    newTax: number
}