import HeaderOne from '@/components/Header/HeaderOne';
import React from 'react'

const Win = () => {
  return (
    <>
    <HeaderOne />

    <div className='gradient'>
    <div className='container'>
        <div className='outer_container'>
            <div className='left_win'>
                <h2 className='win_mainHeading'>
                WIN $250K With Renq Finance.
                </h2>
                <p>To celebrate our presale and our rapidly growing community, we’re giving 10 lucky people the chance to win $250k worth of the $RENQ Tokens.</p>
                <button className='button_secondary margin0'>buy $renq new</button>

                <div className='steptoParticipate'>
                    <p>To gain multiple entries, complete the steps below:</p>
                    <ol>
                        <li>Login to Renq's gleam giveaway.</li>
                        <li>Follow @renqfinance on Twitter +2 Entry</li>
                        <li>Retweet a tweet from @renqfinance on Twitter +3 Entry</li>
                        <li>Tweet on Twitter +1 Entry</li>
                        <li>Join @renqfinance on Telegram +1 Entry</li>
                        <li>Like renqfinance on Facebook +1 Entry</li>
                        <li>Follow @renqfinance on Instagram +1 Entry</li>
                        <li>Visit Renq's Website +2 Entry</li>
                        <li>Subscribe Renq Finance on YouTube +1 Entry</li>
                        <li>Join renq on Reddit +5 Entry</li>
                        <li>Refer Friends For Extra Entries +5 Entry Each</li>
                        <li>More entries = Higher chances to win.</li>
                    </ol>
                    <p className='ending_left'>To be eligible you need to be holding $100 worth of $RENQ at the time of the draw.</p>
                </div>
            </div>
            <div className='right_win'>
                
            <iframe id="GleamEmbedHnZZI" className="iframe_gleam" src="https://gleam.io/HnZZI/embed?l=https%3A%2F%2Frenq.io%2Fwin-250k%2F&amp;r=" allowfullscreen="true" allow="attribution-reporting" title="Competition" frameborder="0" class="GleamEmbedHnZZI  e-embed-frame" loaded="function  (e) {
    if(!newFrame.getAttribute('data-loaded-widget')) {
      if(oldArea.parentNode) {
        oldArea.parentNode.removeChild(oldArea);
      }

      newFrame.style.position = 'relative';
      newFrame.style.left = '';
      newFrame.setAttribute('data-loaded-widget', 'true');
    }
  }" data-loaded-widget="true"></iframe>            
                        </div>

    </div>
    <hr></hr>

    <div className='section1_buy'>
            <h2 className='heading_buy'>RemQ Finance</h2>
            <div className='buttons_container button_container_win'>
            <button className='button'>WIN 250K</button>
            <button className='button'>JOIN PRESALE</button>
            </div>
        </div>
    </div>
    </div>
    </>
        )
}

export default Win