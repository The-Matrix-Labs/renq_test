import HeaderOne from '@/components/Header/HeaderOne';
import React from 'react';


const Buystep = () => {
  return (
    <div className='buybackground'>
        <HeaderOne />
    <div className='container'>
    <div className='section_outer'>
        <div className='section1_buy'>
            <h2 className='heading_buy'>RemQ Finance</h2>
            <div className='buttons_container'>
            <button className='button'>WIN 250K</button>
            <button className='button'>JOIN PRESALE</button>
            </div>
        </div>
        </div>
        <hr className='horizontalline'></hr>
        <div className='section2_buy'>
        <p className='titleHeading'>How To Buy RenQ Finance (RENQ)</p>
        <h2 className='main_heading'>Beginners guide on how to buy $RENQ tokens.</h2>
        <div className='step_section_1'>
            <div className='left_step'>
            <p className="step_title">Step1</p>
            <p>The First Step Is To Ensure You Have One Of The Supported Wallets By Wallet Connect.</p>
            </div>
            <div className='right_step'>
                <div className='right_step_inner'>
                <p>For Desktop:</p>
                <p>We Recommend Using MetaMask Browser Plugin For Chome Or Firefox.</p>
                </div>

                <div className='right_step_inner2'>
                <p>For Mobile:</p>
                <p>We Recommend Using Trust Wallet And Connecting Through The In Built Browser.</p>
                </div>
            </div>
        </div>
        </div>
        </div>

        <div className='background_change'>
        <div className='container'>
        <div className='step_section_2'>
            <div className='left_step'>
            <p className="step_title">Step2</p>
            <p>Once You Have Your Preferred Wallet Provider Ready, Click “Connect Wallet” And Select The Appropriate Option. For Mobile Wallet Apps You Will Need To Select “Wallet Connect”.</p>
            <p>You Will Then Have 3 Options:</p>

            <div className='cards_buy'>
                <div className='cardss'>
                    <div className='card1 card_main'>
                        <div className='heading_card'>
                        <h2>Buy RENQ With ETH</h2>
                        </div>
                        <div className='desc_card'>
                            <p>Make sure you have enough ETH in your MetaMask or Trust Wallet to complete the transaction. We recommend to have atleast $20 worth of ETH (If you don't have enought ETH please transfer ETH from any crypto exchange to your wallet address.)</p>
                        </div>
                    </div>


                    <div className='card2 card_main'>
                        <div className='heading_card'>
                        <h2>Buy RENQ With ETH</h2>
                        </div>
                        <div className='desc_card'>
                            <p>Make sure you have enough ETH in your MetaMask or Trust Wallet to complete the transaction. We recommend to have atleast $20 worth of ETH (If you don't have enought ETH please transfer ETH from any crypto exchange to your wallet address.)</p>
                        </div>
                    </div>


                    <div className='card3 card_main'>
                        <div className='heading_card'>
                        <h2>Buy RENQ With ETH</h2>
                        </div>
                        <div className='desc_card'>
                            <p>Make sure you have enough ETH in your MetaMask or Trust Wallet to complete the transaction. We recommend to have atleast $20 worth of ETH (If you don't have enought ETH please transfer ETH from any crypto exchange to your wallet address.)</p>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            
        </div>
        <div className='step_section_3'>
            <div className='left_step'>
            <p className="step_title">Step3</p>
            <p>You Can Now Check Your Bought RENQ Tokens On RenQ Dashboard.</p>
            <p>RenQ Dashboard: Visit: Https://Renq.io/Dashboard/ </p>
            </div>
            
        </div>

        <div className='final_section_buy'>
            <h2>Click Connect Wallet, You Can Now See The Amount Of RENQ Tokens You Own.</h2>
            <p>Once The Presale Has Concluded, You Will Be Able To Claim Your RENQ Tokens Via RenQ Dashboard Itself.</p>
        </div>



        </div>
    </div>
    </div>

  )
}

export default Buystep