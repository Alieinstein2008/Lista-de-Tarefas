export default function VisualCounter({ counterValue }: { counterValue: number }) {
    return (
        <figure className="w-6 h-5 rounded-2xl bg-gray-400 flex items-center justify-center text-gray-100 text-xs ">
            {counterValue}
        </figure>
    )
}