import { IOrderOut } from "../type";




export const OrderOut = ({ 
    data,
    handleDone
 }: {data: IOrderOut[], handleDone?: (no: number) => void}) => {

    const statusItem = {
        'done': 'bg-lime-300 !text-green-800',
        'process': 'bg-yellow-600',
    }

    return(
        <div>
            <div className={`w-full overflow-auto`}>
                {/* slide list of cards */}
                <div className={`flex min-h-50vh`}>
                    {data.length === 0? <div className={`flex items-center justify-center h-[40vh] w-full`}>
                        <h3 className={`text-2xl font-bold text-lime-100/80`}>Belum ada pesanan untuk diproses</h3>
                    </div> :data.map((item, index) => (
                        <div>
                        <div key={index} className={`${item.status === 'process' ? 'bg-amber-400' : ''}
                            min-w-[300px] border-blue-900/70 rounded-xl border-[1px] border-solid border-b-[2px] p-2 m-2`}>
                           <div className={`p-3 `}>
                                <div className={`flex flex-row justify-between items-center mb-2 `}>
                                    <div className={`w-full flex flex-row justify-between items-center`}>
                                        <h3 className={`${statusItem[item.status]} inline-block rounded-2xl px-2 py-1 text-sm text-white`}>{item.status}</h3>
                                        <h2 className={`text-lg`}>Order #{item.no}</h2>
                                    </div>

                                    <div>
                                    </div>
                                </div>

                                    <div className={`border-b-[2px] border-blue-900/40 w-full`}></div>

                                <div className={`my-2`}>
                                    <h2 className={`font-bold`}>List Order</h2>
                                    <ul>
                                        {item.items.map((orderItem, index) => (
                                            <li key={index} className={`border-b border-blue-900/40 py-2`}>
                                                {orderItem.name} x {orderItem.qty}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {item.notes && (
                                    <div class={`p-2 bg-teal-900 rounded-xl mt-3`}>
                                        <h2 className={`text-teal-300 text-base text-center`}>Notes</h2>
                                        <p className={`text-teal-50 text-sm mt-2`}>{item.notes}</p>
                                    </div>
                                )}

                                <div className={`flex flex-row gap-1 mt-5`}>
                                    {item.status === 'done' ? <span className={`text-center font-bold text-lime-200`}>Pesanan selesai</span> : 
                                    <button 
                                    onClick={() =>handleDone?.(item.no)}
                                    className={`bg-teal-600 text-white w-full hover:cursor-pointer active:bg-teal-900 py-2 rounded-xl`}>Done</button>
                                    }
                                </div>
                           </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}