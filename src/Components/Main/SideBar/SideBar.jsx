import Tbody from "./Tbody";
import TbodyCooking from "./TbodyCooking";

const SideBar = ({ items, handleProcessingButton, processingMenu, time1, time2 }) => {


    return (
        <div className="w-1/3 border-2 rounded-2xl p-6">
            <div>
                <h3 className="text-2xl font-semibold">Want to cook: {items.length}</h3>
                <div className="">
                    <table className="table">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            items.map((item, idx) => <Tbody handleProcessingButton={handleProcessingButton} key={item.id} idx={idx} item={item}></Tbody>)
                        }
                    </table>
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-semibold">Currently Cooking: {processingMenu.length}</h3>
                <div className="">
                    <table className="table">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            processingMenu.map((item, idx) => <TbodyCooking processingMenu={processingMenu} handleProcessingButton={handleProcessingButton} key={idx} idx={idx} item={item}></TbodyCooking>)
                        }
                        <thead>
                            <tr>
                                <th></th>
                                <td></td>
                                <td>Total time= <br /> {time1} minutes</td>
                                <td>Total calories=<br /> {time2} calories</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SideBar;