import { formatCurrency } from "../libs/utils/formatCurrency"
import { addToCart } from "../store"
import { IMenu } from "../type"


export const ListItems = ({data, handleAddCart}: {
    data: IMenu[], handleAddCart?: (no:number) => void
}) => {
    return(
        <div>
            <ul className={`min-h-[50vh] grid grid-cols-3 gap-1`}>
                {data.length === 0 ? (
                    <li className={`w-full`}>
                        <div className={`flex justify-center items-center h-full w-full`}>
                            <p className={`font-bold text-4xl`}>Menu sedang kosong </p>
                        </div>
                    </li>
                ): data.map((item, index) => (
                    <li className={` `}>
                        <div className={`w-full overflow-hidden rounded-xl border-[1px] border-solid border-b-[2px] border-black/55`}>
                        <div className={`overflow-hidden rounded-t-xl h-auto w-full cursor-pointer`}>
                            <picture>
                                <img src={item.img} alt={item.name} />
                            </picture>
                        </div>
                        <div className={`p-2`}>
                            <h3>{item.name}</h3>
                            <p>{item.dsc}</p>
                            <div className={`flex flex-row gap-2 justify-between`}>
                                <p>rate : <span>{item.rate}</span></p>
                                <p>{formatCurrency(item.price)}</p>
                            </div>
                            <div>
                                <button 
                                    onClick={() => addToCart(item)}
                                    className={`hover:cursor-pointer
                                    bg-teal-500 w-full rounded-xl text-white py-1 mt-2 hover:bg-teal-700`}>Add to cart</button>
                            </div>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}