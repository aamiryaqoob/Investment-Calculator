import { calculateInvestmentResults, formatter } from "../util/Investment"

export default function Results({ input }) {
    const resutsData = calculateInvestmentResults(input);

    if (resutsData.length === 0) {
        return <p className="center">Invalid input data provided.</p>
    }

    const initialIvestment = resutsData[0].valueEndOfYear -
        resutsData[0].interest - resutsData[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resutsData.map(yearData => {
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialIvestment;
                    const totalAmontInvested = yearData.valueEndOfYear - totalInterest;

                    return (<tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmontInvested)}</td>
                    </tr>);
                })}
            </tbody>
        </table>
    )
}