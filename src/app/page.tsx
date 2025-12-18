'use client'
import React, { useState } from 'react';
import Tabs from '@/components/Tabs';
import CryptoToCash from '@/components/CryptoToCash';
import CashToCrypto from '@/components/CashToCrypto';

type TabId = 'crypto-to-cash' | 'cash-to-crypto' | 'loan';

export default function Home() {

  const [activeTab, setActiveTab] = useState<TabId>('crypto-to-cash');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'crypto-to-cash':
        return <CryptoToCash />;
      case 'cash-to-crypto':
        return <CashToCrypto />;
      default:
        return <CryptoToCash />;
    }
  };

  return (
    <div className='flex justify-center items-center m-auto py-10 flex-col px-4'>
      <Tabs
        activeTab={activeTab}
        onTabChange={(id) => setActiveTab(id)}
      />
      <div className="w-full max-w-[600px]">
        <div className="mt-4">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
