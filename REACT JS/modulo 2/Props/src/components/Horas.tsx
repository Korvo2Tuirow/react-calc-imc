export const Horas = () => {
   
     const hours = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
    }).format();



const h = new Date().getHours();
let msg = '';

if (h >= 0 && h < 12) {
    msg = 'Bom Dia';
} else if (h >= 12 && h < 18) {
    msg = 'Boa Tarde'
} else {
    msg = 'Boa Noite';
}

return (
    <div className='flex flex-col justify-center items-center w-full p-16 border-2 border-green-300 bg-gradient-to-r from-sky-400 to-indigo-400' >
        <p className="flex justify-center">{hours}</p>
        <p className="flex justify-center">{msg}</p>
    </div>
)

}