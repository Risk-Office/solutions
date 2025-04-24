const TabTitle = ({ title }: { title: string }) => {
    return (
        <div className="bg-[#0A103E] text-white px-6 py-4 pl-10">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <p className="text-sm mt-2">
                Answer a question to refine insights that align with your industry, risks, and strategies.
            </p>
        </div>
    );
}

export default TabTitle;