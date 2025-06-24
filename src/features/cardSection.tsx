import InfoCard from "../components/Card"

export default function CardSection(){
    return (
        <div className="grid grid-cols-2 gap-6">
            <InfoCard
                title="Infrastructure Units"
                description="This describes variable two and what the shown data means."
                value="€421.07"
            />
            <InfoCard
                title="Charging Growth"
                description="This describes variable two and what the shown data means."
                value="33.07"
            />
            <InfoCard
                title="Localization change"
                description="This describes variable two and what the shown data means."
                value="21.9%"
            />
            <InfoCard
                title="Fleet growth"
                description="This describes variable two and what the shown data means."
                value="7.03%"
            />
        </div>
    )
}