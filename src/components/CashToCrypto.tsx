import React from 'react';
import Button from './Button';

function CashToCrypto() {
    return (
        <div>
            <div className="flex flex-col items-center text-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-[32px] font-medium text-[#013941] mb-4">Coming Soon!</h2>
                <p className="text-[#4F4F4F] text-xl leading-[150%] mb-8">
                    Cash to Crypto is almost here. <br />
                    Enter your email and we&#39;ll let you know the moment it&#39;s live.
                </p>

                <div className="w-full text-left space-y-2">
                    <label className="text-base font-medium text-[#013941] ml-1">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-4 rounded-[30px] border border-[#E0E0E0] outline-none focus:ring-1 focus:ring-[#003131] placeholder:text-gray-300 transition-all"
                    />
                </div>

                <Button text='Update Me' />
            </div>
        </div>
    )
}

export default CashToCrypto