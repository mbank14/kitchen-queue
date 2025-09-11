import { Cart } from "../../components/Cart";
import { ListItems } from "../../components/ListItems";
import { burgerMenus } from "../../store";

export const Order = () => {
	return (
		<div>
			<h1>Order Page</h1>
			<div 
				className={`grid grid-cols-[3fr_1fr] gap-2 relative p-3`}>
				<ListItems data={burgerMenus.value} />
				<Cart />
			</div>
		</div>
	);
};
