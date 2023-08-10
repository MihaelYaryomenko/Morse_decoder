function InputBlock({placeholder, handleChange, message}) {
   return (
      <div className="text-container">
         <input 
            type ="text" 
            placeholder={placeholder} 
            onChange={handleChange}
            value={message} 
         />
      </div>
   )
}

export default InputBlock