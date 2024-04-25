import { calculateInvestmentResults } from "../util/Investment"

export default function Results( {input} ) {
    const resutsData = calculateInvestmentResults(input);

    console.log(resutsData)
    return
}