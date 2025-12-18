"use client"
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import Image from 'next/image';

interface Option {
    id: string;
    label: string;
    subLabel?: string;
    icon?: string;
}

interface DropdownProps {
    label?: string;
    options: Option[];
    onSelect: (option: Option) => void;
    placeholder?: string;
    showSearch?: boolean;
    variant?: 'compact' | 'full';
}

function Dropdown({ options, onSelect, placeholder, showSearch, variant = 'full' }: DropdownProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(options[0] || null);

    const buttonClasses = variant === 'compact' 
        ? "flex items-center gap-2 rounded-full border border-gray-200 bg-[#F9FAFB] px-3 py-1.5 hover:bg-gray-100 transition-all shrink-0" 
        : "flex w-full items-center justify-between rounded-[20px] border border-[#E0E0E0] bg-white p-4 transition-all hover:bg-gray-50";

    const labelClasses = variant === 'compact'
        ? "text-xs font-bold text-[#013941]"
        : "text-base font-medium text-[#013941]";

    return (
        <div className={variant === 'full' ? "relative w-full" : "relative"}>
            <button onClick={() => setIsOpen(!isOpen)} className={buttonClasses}>
                <div className="flex items-center gap-2">
                    {selected?.icon && (
                         <Image src={selected.icon} alt={selected.label} width={10} height={10} className={` ${variant === 'compact' ? 'w-4 h-4' : 'w-6 h-6'}  }rounded-full`} />
                    )}
                    <span className={labelClasses}>
                        {selected ? selected.label : placeholder}
                    </span>
                </div>
                <ChevronDown className={`${variant === 'compact' ? 'h-3 w-3' : 'h-5 w-5'} text-[#013941] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className={`absolute z-50 mt-2 ${variant === 'compact' ? 'right-0 w-48' : 'w-full'} overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl animate-in fade-in zoom-in duration-200`}>
                    {showSearch && (
                        <div className="flex items-center border-b border-gray-50 px-4 py-3">
                            <Search className="h-4 w-4 text-[#013941]" />
                            <input className="ml-2 w-full text-sm outline-none" placeholder="Search" />
                        </div>
                    )}
                    <div className="max-h-60 overflow-y-auto">
                        {options.map((opt) => (
                            <div
                                key={opt.id}
                                onClick={() => { setSelected(opt); onSelect(opt); setIsOpen(false); }}
                                className="flex gap-3 items-center px-4 py-3 hover:bg-gray-50 cursor-pointer"
                            >
                                {opt.icon && <Image src={opt.icon} alt='' width={15} height={15} className={`${variant === 'full' ? 'w-8 h-8' : 'w-4 h-4'}`}/>}
                                <span className="text-sm font-medium text-[#013941]">{opt.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dropdown