export default function Label({ labelTitle }: { labelTitle: string}) {
    return (
        <p className={`text-sm text-gray-500`}>
            {labelTitle}
        </p>
    )
}