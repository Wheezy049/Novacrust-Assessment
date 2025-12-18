import React from 'react';

type TabId = 'crypto-to-cash' | 'cash-to-crypto' | 'loan';

interface TabSwitcherProps {
    activeTab: TabId;
    onTabChange: (id: TabId) => void;
}

function Tabs({ activeTab, onTabChange }: TabSwitcherProps) {

    const tabs: { id: TabId; label: string }[] = [
        { id: 'crypto-to-cash', label: 'Crypto to cash' },
        { id: 'cash-to-crypto', label: 'Cash to crypto' },
        { id: 'loan', label: 'Crypto to fiat loan' },
    ];


    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 bg-[#F3F4F3] rounded-[20px] sm:rounded-[30px] p-1 sm:p-2 mb-8 w-full sm:w-fit mx-auto max-w-[300px] sm:max-w-none">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`py-2 px-4 sm:px-6 rounded-full text-sm font-medium transition-all duration-300 w-full sm:w-auto ${activeTab === tab.id
                            ? 'bg-[#013941] text-white shadow-sm'
                            : 'text-[#828282] hover:text-[#003131]'
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    )
}

export default Tabs