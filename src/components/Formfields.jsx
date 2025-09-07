const FormFields = ({type,inputClass,labelClass,labelID,label,fieldName,placeholder,onChange,value}) => {
    return(
        <>
        <label className={labelClass} htmlFor={labelID}>{label}</label>
        <input
         type={type}
         name={fieldName}
         placeholder={placeholder}
         onChange={onChange}
         value={value}
         className={inputClass}
         />
        </>
    )
}
export default FormFields;