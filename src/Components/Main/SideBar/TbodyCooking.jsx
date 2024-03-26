
const TbodyCooking = ({ idx, item }) => {
    const { title, cooking_time, calories } = item;

    return (
        <tbody>
            <tr className="">
                <th>{idx + 1}</th>
                <td>{title}</td>
                <td>{cooking_time} minutes</td>
                <td>{calories} calories</td>
            </tr>
            
        </tbody>
    );
};

export default TbodyCooking;
