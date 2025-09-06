import { ListItems } from "../../components/ListItems";
import { burgerMenus } from "../../store";

export const Order = () => {
	return (
		<div>
			<h1>Order Page</h1>

			<ListItems data={burgerMenus.value} />
		</div>
	);
};
