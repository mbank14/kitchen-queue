import { HTMLAttributes } from "preact/compat";

type IButton = {
    label: string;
    style: "info" | "danger" | "correct" | "second";
} & HTMLAttributes<HTMLButtonElement>;


export const CButton = ({style, label, ...rest} : IButton) => {
    const btnStyle = {
        'info': 'px-3 py-1 bg-blue-400 cursor-pointer rounded-lg text-white hover:bg-blue-500',
        'danger': 'px-3 py-1 bg-red-400 cursor-pointer rounded-lg text-white hover:bg-redd-500',
        'correct': 'px-3 py-1 bg-green-400 cursor-pointer rounded-lg text-white hover:bg-green-500',
        'second': 'px-3 py-1 bg-yellow-400 cursor-pointer rounded-lg text-white hover:bg-yellow-500',
    }
    

    return (
        // fix className prop
        <button className={`${btnStyle[style]} ${rest.className}`} {...rest}>
            {label}
        </button>
    )
}