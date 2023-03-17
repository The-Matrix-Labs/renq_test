import HeaderOne from '@/components/Header/HeaderOne'
import React from 'react'
const Dashboard = () => {
  return (
    <> <HeaderOne />
    <div className="background">
    <div className='container'>
        <div className='section_wrapper'>
            <div className='section1'>
                <div className='section_padding'>
                <p className='titleHeading'>Renq Dashboard</p>
                <h2 className='main_heading'>Connect Wallet To Check Your Holdings.</h2>
                <p>NOTE: $RENQ tokens will be avaliable for claim once presale has finished.</p>
                <button className='button'>CONNECT WALLET</button>
                <div>
                    <div className='innerSection'>
                <h2 className='main_heading'>RenQ Finance</h2>
                <button className='button'>JOIN PRESALE</button>
                </div>  
                </div>
                </div>
            </div>
            <div className='section2_old'>
                <h2>To Check Your Holdings Connect Wallet.</h2>
                <p>SOLD - 95,539,609/101,000,000</p>
                <p>RAISED - $2,215,991/$2,352,500</p>
                <div className='progressbar'></div>
                <button className='button_secondary'>CLAIM TOKENS</button>
               
                
            </div>
        </div>
    </div>
    </div>
    </>

  )
}

export default Dashboard