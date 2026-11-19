function SkirtInfo(){
    const waist = 70;
    const skirtlength = 60;
    return (
        <>
            <p>Skirt Length: {skirtlength} cm </p>
            <p>Skirt Waist: {waist} cm </p>
            <p>Quarter Waist: {waist/4} cm </p>
        </>       
)
}
export default SkirtInfo;