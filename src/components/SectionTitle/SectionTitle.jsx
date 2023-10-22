
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className=" md:w-3/12 mx-auto text-center my-8">
            <p className=" text-yellow-400 pb-2">---{subHeading}---</p>
            <h3 className=" text-3xl border-y-4 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;