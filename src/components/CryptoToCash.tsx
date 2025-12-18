"use client"
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';


function CryptoToCash() {

    const [amount, setAmount] = useState('1.00');

    return (
        <div>
            <div className="space-y-3">
                <div className="p-4 rounded-3xl border border-gray-100 bg-white group focus-within:ring-1 focus-within:ring-[#003131]">
                    <label className="text-xs text-gray-400 block mb-1">You pay</label>
                    <div className="flex justify-between items-center">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="text-xl font-bold outline-none w-full"
                        />
                        <Dropdown
                        variant='compact'
                            options={[{ id: '1', label: 'ETH', icon: "/eth.png" }, { id: '2', label: 'NGN', icon: "/NGN.png" }]}
                            onSelect={(opt) => console.log(opt)}
                            showSearch
                        />
                    </div>
                </div>

                <div className="p-4 rounded-3xl border border-gray-100 bg-white">
                    <label className="text-xs text-gray-400 block mb-1">You receive</label>
                    <div className="flex justify-between items-center">
                        <input type="text" value="1.00" readOnly className="text-xl font-bold outline-none w-full" />
                        <Dropdown
                        variant='compact'
                            options={[{ id: '1', label: 'ETH', icon: "/eth.png" }, { id: '2', label: 'NGN', icon: "/NGN.png" }]}
                            onSelect={(opt) => console.log(opt)}
                            showSearch
                        />
                    </div>
                </div>

                {/* 3. Dropdowns */}
                <div className="space-y-3 pt-2">
                    <div>
                        <label className="text-sm font-medium text-[#013941] block mb-1">Pay from</label>
                        <Dropdown
                            placeholder="Select an option"
                            options={[{ id: '1', label: 'Metamask', icon: "/metamask.jpg"}, { id: '2', label: 'Rainbow', icon: "/rainbow.png" }]}
                            onSelect={(opt) => console.log(opt)}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-[#013941] block mb-1">Pay to</label>
                        <Dropdown
                            placeholder="Select an option"
                            options={[{ id: '3', label: 'Bank Account' }]}
                            onSelect={(opt) => console.log(opt)}
                        />
                    </div>
                </div>
            </div>
            <Button text='Convert Now' />
        </div>
    )
}

export default CryptoToCash