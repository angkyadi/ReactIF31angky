export default function Input({
    type,
    placeholder,
    ...props
}) {
    return <input type={type} placeholder={placeholder}{...props}/>
}