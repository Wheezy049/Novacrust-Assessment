"use client"
import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';


function CryptoToCash() {

    const [amount, setAmount] = useState('1.00');
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (id: string) => {
        setActiveDropdown(activeDropdown === id ? null : id);
    };

    return (
        <div>
            <div className="space-y-3">
                <div className="p-4 rounded-3xl border border-[#013941] bg-white group focus-within:ring-1 focus-within:ring-[#003131]">
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
                            options={[{ id: '1', label: 'USDT - CELO', value: "CELO", icon: "/celo.png" }, { id: '2', label: 'USDT - TON', value: "TON", icon: "/ton.png" }]}
                            onSelect={(opt) => console.log(opt)}
                            showSearch
                            isOpen={activeDropdown === 'pay-currency'}
                            onToggle={() => toggleDropdown('pay-currency')}
                        />
                    </div>
                </div>

                <div className="p-4 rounded-3xl border border-[#013941] bg-white">
                    <label className="text-xs text-gray-400 block mb-1">You receive</label>
                    <div className="flex justify-between items-center">
                        <input type="text" value="1.00" readOnly className="text-xl font-bold outline-none w-full" />
                        <Dropdown
                        variant='compact'
                            options={[{ id: '1', label: 'ETH - USDT', value: "ETH", icon: "/eth.png" }, { id: '2', label: 'NGN - USDT', value: "NGN",  icon: "/NGN.png" }]}
                            onSelect={(opt) => console.log(opt)}
                            showSearch
                            isOpen={activeDropdown === 'receive-currency'}
                            onToggle={() => toggleDropdown('receive-currency')}
                        />
                    </div>
                </div>

                {/* 3. Dropdowns */}
                <div className="space-y-3 pt-2">
                    <div>
                        <label className="text-sm font-medium text-[#013941] block mb-1">Pay from</label>
                        <Dropdown
                            placeholder="Select an option"
                            options={[{ id: '1', label: 'Metamask', value: "Metamask", icon: "/metamask.jpg"}, { id: '2', label: 'Rainbow', value: "Rainbow", icon: "/rainbow.png" }]}
                            onSelect={(opt) => console.log(opt)}
                            isOpen={activeDropdown === 'pay-from'}
                            onToggle={() => toggleDropdown('pay-from')}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-[#013941] block mb-1">Pay to</label>
                        <Dropdown
                            placeholder="Select an option"
                            options={[{ id: '3', label: 'Bank Account', value: "Bank Account", }]}
                            onSelect={(opt) => console.log(opt)}
                            isOpen={activeDropdown === 'pay-to'}
                            onToggle={() => toggleDropdown('pay-to')}
                        />
                    </div>
                </div>
            </div>
            <Button text='Convert Now' />
        </div>
    )
}

export default CryptoToCash