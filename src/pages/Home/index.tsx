import { useState } from "preact/hooks";
import { OrderIn } from "../../components/OrderIn";
import { OrderOut } from "../../components/OrderOut";
import { signalOrderIn, signalOrderOut } from "../../store";
// import { getTotalDoneOrderOut } from '../../store';
// import {CButton} from './../../components/CButton'
import "./style.css";
import { IOrderIn, IOrderOut } from "../../type";

export function Home() {
  const [showProcessConfirm, setShowProcessConfirm] = useState(false);
  const [showCancel, setShowCancel] = useState(false);

  const [selectedCancelReason, setSelectedCancelReason] = useState<string[]>(
    []
  );
  const [detailCancelReason, setDetailCancelReason] = useState("");

  const cancelReasonList = ["bumbu habis", "alat habis", "diabatalkan user"];

  function handleCancelReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    const valueReason = target.value;

    setSelectedCancelReason((prev: string[]) => {
      return target.checked
        ? [...prev, valueReason]
        : prev.filter((item) => item !== valueReason);
    });
  }

  function handleToProcess (item: IOrderIn) {
	const temp: IOrderOut = {items: item.items, no: item.no, status: 'process', notes: item.notes}
	
	signalOrderOut.value = [...signalOrderOut.value, temp]
	signalOrderIn.value = signalOrderIn.value.filter((i) => i.no !== item.no)

  }

  function handleProcessToDone (no: number) {
	console.log(no);
	signalOrderOut.value = signalOrderOut.value.map((i) => {
		if(i.no === no) {
			return {...i, status: 'done'}
		} else {console.log('data tidak ada');}
		return i
	})
	
  }

  function filteredOrderOut () {
	return signalOrderOut.value.filter((item) => item.status !== 'done');
  }

  return (
    <div class="home flex flex-col w-full">
      <div className={"flex flex-col min-h-screen"}>
        <div className={"h-1/2"}>
          <h3>Order In</h3>
          <OrderIn
            handleCancel={() => setShowCancel(!showCancel)}
            handleProcess={handleToProcess}
            orderData={signalOrderIn.value}
          />
        </div>
        <div className={"min-h-[46vh] bg-teal-500 w-full"}>
          <h3>Order Process</h3>
          <OrderOut
		  	handleDone={handleProcessToDone}
		   data={filteredOrderOut()} />
        </div>
      </div>

      {/* modal */}
      {showProcessConfirm && (
        <div
          className={`fixed bg-black/60 inset-0 flex justify-center items-center`}
        >
          <div className={`bg-white rounded-xl p-4 min-w-3/5`}>
            <div className={`text-center`}>
              <p className={`text-2xl`}>
                Apakah anda yakin untuk lanjut proses ?{" "}
              </p>
            </div>
            <div
              className={`flex flex-row justify-end items-center mt-6 gap-2`}
            >
              <a
                className={`bg-red-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
                onClick={() => setShowProcessConfirm(!showProcessConfirm)}
              >
                Cancel
              </a>
              <a
                href=""
                onClick={() => {
                  alert("print details order for chef");
                  setShowProcessConfirm(!showProcessConfirm);
                }}
                className={`bg-teal-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
              >
                Yes, and print!
              </a>
            </div>
          </div>
        </div>
      )}

      {showCancel && (
        <div
          className={`fixed bg-black/60 inset-0 flex justify-center items-center`}
        >
          <div className={`bg-white rounded-xl p-4 min-w-1/3`}>
            <div className={`text-center`}>
              <p className={`text-2xl`}>Kasih tau kami kenapa cancel ?</p>
            </div>
            <div className={`flex flex-col`}>
              {cancelReasonList.map((item) => {
                return <label htmlFor={item} className={`block`}>
                  <input id={item}
                    type="checkbox"
                    name="cancelReason"
                    value={item}
                    checked={selectedCancelReason.includes(item)}
                    onChange={handleCancelReasonChange}
                  />
				  {item}
                </label>;
              })}

              <textarea
                className={`border-2`}
                onChange={(e: Event) => {
                  const target = e.target as HTMLTextAreaElement;
                  setDetailCancelReason(target.value);
                }}
                name="cancelReason"
                id=""
                value={detailCancelReason}
              ></textarea>
            </div>
            <div
              className={`flex flex-row justify-end items-center mt-6 gap-2`}
            >
              <a
                className={`bg-red-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
                onClick={() => setShowCancel(!showCancel)}
              >
                Close
              </a>
              <a
                href=""
                onClick={() => {
				// handleToProcess();
                  alert("print details order for chef");
                  setShowCancel(!showCancel);
                }}
                className={`bg-teal-400 py-1 px-4 rounded-xl hover:cursor-pointer`}
              >
                Yes, and print!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
