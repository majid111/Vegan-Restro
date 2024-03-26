const Tbody = ({ idx, item, handleProcessingButton }) => {
    const { title, cooking_time, calories } = item;

    return (
        <tbody>
            <tr className="">
                <th>{idx + 1}</th>
                <td>{title}</td>
                <td>{cooking_time} minutes</td>
                <td>{calories} calories</td>
                <td><button onClick={()=>handleProcessingButton(item)} className="btn bg-[#0BE58A] rounded-full">Preparing</button></td>
            </tr>
        </tbody>
    );
};

export default Tbody;