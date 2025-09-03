import { useState } from 'preact/hooks';
import { OrderIn } from '../../components/OrderIn'
import { OrderOut } from '../../components/OrderOut'
import { signalOrderIn, signalOrderOut } from '../../store';
// import { getTotalDoneOrderOut } from '../../store';
// import {CButton} from './../../components/CButton'
import './style.css';

export function Home() {
	const [showProcessConfirm, setShowProcessConfirm] = useState(false)
	const [showCancel, setShowCancel] = useState(false)

	return (
		<div class="home flex flex-col w-full">
			<div className={'flex flex-col min-h-screen'}>
				<div className={'h-1/2'}>
					<h3>Order In</h3>
					<OrderIn
					handleCancel={() => setShowCancel(!showCancel)}
					handleProcess={() => setShowProcessConfirm(!showProcessConfirm)}
					 orderData={signalOrderIn.value} />
				</div>
				<div className={'h-1/2 bg-teal-500 w-full'}>
					<h3>Order Process</h3>
					<OrderOut data={signalOrderOut.value} />
				</div>
			</div>


			{/* modal */}
			{showProcessConfirm && (
				<div className={`fixed bg-black/60 inset-0 flex justify-center items-center`}>
					<div className={`bg-white rounded-xl p-4 min-w-3/5`}>
						<div className={`text-center`}>
							<p className={`text-2xl`}>Apakah anda yakin untuk lanjut proses ? </p>
						</div>
						<div className={`flex flex-row justify-end items-center mt-6 gap-2`}>
							<a className={`bg-red-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
							onClick={() => setShowProcessConfirm(!showProcessConfirm)}>Cancel</a>
							<a href=""
							onClick={() => {
								alert("print details order for chef");
								setShowProcessConfirm(!showProcessConfirm)
							}}
							 className={`bg-teal-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
							>Yes, and print!</a>
						</div>
					</div>
				</div>
			)}

			{showCancel && (
				<div className={`fixed bg-black/60 inset-0 flex justify-center items-center`}>
					<div className={`bg-white rounded-xl p-4 min-w-1/3`}>
						<div className={`text-center`}>
							<p className={`text-2xl`}>Kasih tau kami kenapa cancel ?</p>
						</div>
						<div className={`flex flex-col`}>
							<select name="cancelreason" id="" multiple>
								<option value="sayur kososng">Sayur Kosong</option>
								<option value="pembatalan">Pembatalan</option>
								<option value="alat makan habis">Alat makan habis</option>
							</select>

							<textarea className={`border-2`} name="cancelReason" id=""></textarea>
						</div>
						<div className={`flex flex-row justify-end items-center mt-6 gap-2`}>
							<a className={`bg-red-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
							onClick={() => setShowCancel(!showCancel)}>Close</a>
							<a href=""
							onClick={() => {
								alert("print details order for chef");
								setShowCancel(!showCancel)
							}}
							 className={`bg-teal-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
							>Yes, and print!</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}