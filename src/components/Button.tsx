import React from 'react'

function Button({ text }: { text: string }) {
    return (
        <button className="w-full mt-12 bg-[#013941] text-[#E6FBF2] text-base font-bold py-5 rounded-[30px] hover:bg-opacity-95 transition-all active:scale-[0.98]">
            {text}
        </button>
    )
}

export default Button