function InputField({type,placeholder,onChange}){
    const handleChange = (event)=>{
        onChange(event.target.value);
    };
    return(
        <input className="rounded shadow shadow-gray-400 w-full h-9 p-2 mb-4" type={type} placeholder={placeholder} onChange={handleChange}/>
    )
}
export default InputField;