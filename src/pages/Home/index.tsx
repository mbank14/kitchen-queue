import { OrderIn } from '../../components/OrderIn'
import { OrderOut } from '../../components/OrderOut'
import { signalOrderIn, signalOrderOut } from '../../store';
// import { getTotalDoneOrderOut } from '../../store';
// import {CButton} from './../../components/CButton'
import './style.css';

export function Home() {

	return (
		<div class="home flex flex-col w-full">
			<div className={'flex flex-col min-h-screen'}>
				<div className={'h-1/2'}>
					<h3>Order In</h3>
					<OrderIn orderData={signalOrderIn.value} />
				</div>
				<div className={'h-1/2 bg-teal-500 w-full'}>
					<h3>Order Process</h3>
					<OrderOut data={signalOrderOut.value} />
				</div>
			</div>
		</div>
	);
}