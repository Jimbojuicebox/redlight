"use client"

import { useState } from 'react'
import { phaseOne, phasePinnacle } from '@/utilities/data/staking'

const page = () => {
  const [ stakeAmount, setStakeAmount ] = useState()
  const [ selectRll, setSelectRll ] = useState('no')
  const [ showUnstake, setShowUnstake ] = useState(false)
  const [ showMoveToPinnacle, setShowMoveToPinnacle ] = useState(false)
  const [ phaseOneAmount, setPhaseOneAmount ] = useState(0)
  const [ showPercError, setShowPercError] = useState(false)
  const [ showPercTotActError, setShowPercTotActError ] = useState(false)
  const [ showPercTotError, setShowPercTotError ] = useState(false)
  const [ peakPercAmounts, setPeakPercAmounts ] = useState([0,0,0,0,0,0,0,0])
  const [ peak1Unlock, setPeak1Unlock ] = useState(0)
  const [ peak2Unlock, setPeak2Unlock ] = useState(0)
  const [ peak3Unlock, setPeak3Unlock ] = useState(0)
  const [ peak4Unlock, setPeak4Unlock ] = useState(0)
  const [ peak5Unlock, setPeak5Unlock ] = useState(0)
  const [ peak6Unlock, setPeak6Unlock ] = useState(0)
  const [ peak7Unlock, setPeak7Unlock ] = useState(0)
  const [ peak8Unlock, setPeak8Unlock ] = useState(0)
  const [ peak1Init, setPeak1Init ] = useState(0)
  const [ peak1Res, setPeak1Res ] = useState(0)
  const [ peak2Init, setPeak2Init ] = useState(0)
  const [ peak2Res, setPeak2Res ] = useState(0)
  const [ peak3Init, setPeak3Init ] = useState(0)
  const [ peak3Res, setPeak3Res ] = useState(0)
  const [ peak4Init, setPeak4Init ] = useState(0)
  const [ peak4Res, setPeak4Res ] = useState(0)
  const [ peak5Init, setPeak5Init ] = useState(0)
  const [ peak5Res, setPeak5Res ] = useState(0)
  const [ peak6Init, setPeak6Init ] = useState(0)
  const [ peak6Res, setPeak6Res ] = useState(0)
  const [ peak7Init, setPeak7Init ] = useState(0)
  const [ peak7Res, setPeak7Res ] = useState(0)
  const [ peak8Init, setPeak8Init ] = useState(0)
  const [ peak8Res, setPeak8Res ] = useState(0)
  const [ lastSelPeak, setLastSelPeak] = useState(0)
  const [ wishAmount, setWishAmount ] = useState(0)

  const phaseOneData = phaseOne
  const pinnacleData = phasePinnacle

  console.log("peaks: " + peakPercAmounts)

  const handleInputChange = (event) => {
      setStakeAmount(event.target.value)
  }

  const handleWishChange = (event) => {
      setWishAmount(event.target.value)
  }

  const handlePeak1Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[0] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak2Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[1] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak3Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[2] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak4Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[3] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak5Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[4] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak6Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[5] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak7Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[6] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }
  const handlePeak8Change = (event) => {
      setPeakPercAmounts(prevPeakPercAmounts => {
          const updatedPeakPercAmounts = [...prevPeakPercAmounts]
          updatedPeakPercAmounts[7] = (event.target.value)
          return updatedPeakPercAmounts
      })
  }

  const handleRllChange = (event) => {
      setSelectRll(event.target.value)
  }

  const handleUnstakeClick = () => {
      if (peakPercAmounts[0] > 0 && (peakPercAmounts[0] > 35 || peakPercAmounts[0] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[1] > 0 && (peakPercAmounts[1] > 35 || peakPercAmounts[1] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[2] > 0 && (peakPercAmounts[2] > 35 || peakPercAmounts[2] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[3] > 0 && (peakPercAmounts[3] > 35 || peakPercAmounts[3] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[4] > 0 && (peakPercAmounts[4] > 35 || peakPercAmounts[4] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[5] > 0 && (peakPercAmounts[5] > 35 || peakPercAmounts[5] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[6] > 0 && (peakPercAmounts[6] > 35 || peakPercAmounts[6] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else if (peakPercAmounts[7] > 0 && (peakPercAmounts[7] > 35 || peakPercAmounts[7] < 15)) {
          setShowPercError(true)
          setShowPercTotError(false)
          setShowPercTotActError(false)
          setShowUnstake(false)
      }
      else {
          let peakPercTotAct = 0
          for (let i = 0; i < peakPercAmounts.length; i++) {
              if (peakPercAmounts[i] > 0) {
                  peakPercTotAct++
              } 
          }
          
          const peakPercTot = Number(peakPercAmounts[0]) + Number(peakPercAmounts[1]) + Number(peakPercAmounts[2]) + Number(peakPercAmounts[3]) + Number(peakPercAmounts[4]) + Number(peakPercAmounts[5]) + Number(peakPercAmounts[6]) + Number(peakPercAmounts[7])
          console.log("peakpercTot: " + peakPercTot)

          if (peakPercTotAct < 4 || peakPercTotAct > 4) {
              setShowPercError(false)
              setShowPercTotError(false)
              setShowPercTotActError(true)
              setShowUnstake(false)
          }
          else if (peakPercTot != 100){
              setShowPercError(false)
              setShowPercTotError(true)
              setShowPercTotActError(false)
              setShowUnstake(false)
          }
          else {
              phaseOneUnstake()
              setShowPercError(false)
              setShowPercTotError(false)
              setShowPercTotActError(false)
              setShowMoveToPinnacle(false)
              setShowUnstake(true)
          }
      }
  }

  const handleMoveToPinnacle = () => {
      setShowUnstake(false)
      setShowMoveToPinnacle(true)
  }

  console.log(stakeAmount)
  console.log(selectRll)

  const phaseOneUnstake = () => {
      if (stakeAmount) {

          // figure assuming sell as each peak unlocks


          // figure assuming hold redlc until last selected peak unlocks
          let lastSelectedPeak = 0
          for (let i = peakPercAmounts.length - 1; i >= 0; i--) {
              if (peakPercAmounts[i] !== 0) {
                lastSelectedPeak = i;
                break;
              }
            }

          setLastSelPeak(lastSelectedPeak)
          console.log("last peak: " + lastSelectedPeak)

          // breakdown for each peak
          const init1 = ((peakPercAmounts[0]/100) * stakeAmount) * phaseOneData[0].commitMulti
          setPeak1Init(init1)
          const res1 = init1 * phaseOneData[0].unstakeMultiplier * phaseOneData[0].unlockMultiRes
          setPeak1Res(res1)
          const init2 = ((peakPercAmounts[1]/100) * stakeAmount) * phaseOneData[1].commitMulti
          setPeak2Init(init2)
          const res2 = init2 * phaseOneData[1].unstakeMultiplier * phaseOneData[1].unlockMultiRes
          setPeak2Res(res2)
          const init3 = ((peakPercAmounts[2]/100) * stakeAmount) * phaseOneData[2].commitMulti
          setPeak3Init(init3)
          const res3 = init3 * phaseOneData[2].unstakeMultiplier * phaseOneData[2].unlockMultiRes
          setPeak3Res(res3)
          const init4 = ((peakPercAmounts[3]/100) * stakeAmount) * phaseOneData[3].commitMulti
          setPeak4Init(init4)
          const res4 = init4 * phaseOneData[3].unstakeMultiplier * phaseOneData[3].unlockMultiRes
          setPeak4Res(res4)
          const init5 = ((peakPercAmounts[4]/100) * stakeAmount) * phaseOneData[4].commitMulti
          setPeak5Init(init5)
          const res5 = init5 * phaseOneData[4].unstakeMultiplier * phaseOneData[4].unlockMultiRes
          setPeak5Res(res5)
          const init6 = ((peakPercAmounts[5]/100) * stakeAmount) * phaseOneData[5].commitMulti
          setPeak6Init(init6)
          const res6 = init6 * phaseOneData[5].unstakeMultiplier * phaseOneData[5].unlockMultiRes
          setPeak6Res(res6)
          const init7 = ((peakPercAmounts[6]/100) * stakeAmount) * phaseOneData[6].commitMulti
          setPeak7Init(init7)
          const res7 = init7 * phaseOneData[6].unstakeMultiplier * phaseOneData[6].unlockMultiRes
          setPeak7Res(res7)
          const init8 = ((peakPercAmounts[7]/100) * stakeAmount) * phaseOneData[7].commitMulti
          setPeak8Init(init8)
          const res8 = init8 * phaseOneData[7].unstakeMultiplier * phaseOneData[7].unlockMultiRes
          setPeak8Res(res8)



          const res = stakeAmount * 1
          setPhaseOneAmount(res)
      }
  }

  return (
    <main className='slimmain pt-8'>
      <h4 className='text-lg font-semibold'>
        Pinnacle Staking by <span className='text-red-700'>Redlight</span>
      </h4>

      <div>
        <p className='pt-2'>
          The first staking season will be for the rebate. <span className='font-semibold'>Current</span> working data shown below (subject to change depending on price of REDLC).
        </p>
        <p className='pt-1'>
          For full details see Rebate-Pinnacle-Staking Whitepaper.
        </p>
      </div>

      <div className='pt-8'>
        <h4 className='text-lg font-medium'>
          Phase 1 Pool
        </h4>
        <div className='mt-2 py-2 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
          <table className='w-full text-xs sm:text-sm md:text-base text-center'>
            <tbody>
              <tr>
                <th>Peak</th>
                <th>Unlock Price</th>
                <th>Commit Boost</th>
                <th>Unstake Fee</th>
                <th>Unlock Multiplier</th>
              </tr>
              <tr>
                <td>{phaseOneData[0].name}</td>
                <td>${phaseOneData[0].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[0].commitBoost}%</td>
                <td>{phaseOneData[0].unstakeFee}%</td>
                <td>{phaseOneData[0].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[1].name}</td>
                <td>${phaseOneData[1].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[1].commitBoost}%</td>
                <td>{phaseOneData[1].unstakeFee}%</td>
                <td>{phaseOneData[1].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[2].name}</td>
                <td>${phaseOneData[2].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[2].commitBoost}%</td>
                <td>{phaseOneData[2].unstakeFee}%</td>
                <td>{phaseOneData[2].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[3].name}</td>
                <td>${phaseOneData[3].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[3].commitBoost}%</td>
                <td>{phaseOneData[3].unstakeFee}%</td>
                <td>{phaseOneData[3].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[4].name}</td>
                <td>${phaseOneData[4].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[4].commitBoost}%</td>
                <td>{phaseOneData[4].unstakeFee}%</td>
                <td>{phaseOneData[4].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[5].name}</td>
                <td>${phaseOneData[5].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[5].commitBoost}%</td>
                <td>{phaseOneData[5].unstakeFee}%</td>
                <td>{phaseOneData[5].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[6].name}</td>
                <td>${phaseOneData[6].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[6].commitBoost}%</td>
                <td>{phaseOneData[6].unstakeFee}%</td>
                <td>{phaseOneData[6].unlockMultiplier}%</td>
              </tr>
              <tr>
                <td>{phaseOneData[7].name}</td>
                <td>${phaseOneData[7].unlockPrice.toFixed(2)}</td>
                <td>{phaseOneData[7].commitBoost}%</td>
                <td>{phaseOneData[7].unstakeFee}%</td>
                <td>{phaseOneData[7].unlockMultiplier}%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='pt-6'>
          <label>How much of your rebate to stake: </label>
          <input
            type="number"
            id="stake-input"
            placeholder='$0.00'
            /* value={stakeAmount} */
            onChange={handleInputChange}
            className='border-solid border-2 border-red-200 rounded-lg px-1 stakeinput'
          />
        </p>
          
        <p className='pt-6'>
          Choose 4 Peaks with a percentage of your total, min 15%, max 35% (eg. 30,30,20,20 or 35,25,25,15):
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <div className='pr-2'>
            <label>1st&nbsp;</label>
            <input
              type="number"
              name="peakPerc1"
              placeholder='0'
              onChange={handlePeak1Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div className='pr-2'>
            <label>2nd&nbsp;</label>
            <input
              type="number"
              name="peakPerc2"
              placeholder='0'
              onChange={handlePeak2Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div className='pr-2'>
            <label>3rd&nbsp;</label>
            <input
              type="number"
              name="peakPerc3"
              placeholder='0'
              onChange={handlePeak3Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div className='pr-2'>
            <label>4th&nbsp;</label>
            <input
              type="number"
              name="peakPerc4"
              placeholder='0'
              onChange={handlePeak4Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div className='pr-2'>
            <label>5th&nbsp;</label>
            <input
              type="number"
              name="peakPerc5"
              placeholder='0'
              onChange={handlePeak5Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div className='pr-2'>
            <label>6th&nbsp;</label>
            <input
              type="number"
              name="peakPerc6"
              placeholder='0'
              onChange={handlePeak6Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div className='pr-2'>
            <label>7th&nbsp;</label>
            <input
              type="number"
              name="peakPerc7"
              placeholder='0'
              onChange={handlePeak7Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>

          <div>
            <label>8th&nbsp;</label>
            <input
              type="number"
              name="peakPerc8"
              placeholder='0'
              onChange={handlePeak8Change}
              className='border-solid border-2 border-red-200 rounded-lg px-1 peakinput'
            />
          </div>
        </div>

        <div className='pt-6'>
          <button className='py-2 px-4 bg-red-200 rounded-xl' onClick={handleUnstakeClick}>Calculate Result</button>
        </div>
        <div>
          {showPercError && (
            <div>
              <p><span className='text-red-700'>One of your selected Peaks has either less than 15 or more than 35 entered!</span></p>
            </div>
          )}

          {showPercTotError && (
            <div>
              <p><span className='text-red-700'>Your 4 allotted percentages do not add up to 100!</span></p>
            </div>
          )}

          {showPercTotActError && (
            <div>
              <p><span className='text-red-700'>Please select 4 Peaks!</span></p>
            </div>
          )}
        </div>

        <div>
          {showUnstake && (
            <div className='pt-8'>
              <h4 className='text-lg'>
                Results of Phase 1
              </h4>

              <p className='pt-6'>
                Assuming all price points reached and sold upon unlock, your ${Number(stakeAmount).toFixed(2)} would yield <span className='font-semibold'>${(peak1Res + peak2Res + peak3Res + peak4Res + peak5Res + peak6Res + peak7Res + peak8Res).toFixed(2)}</span>
              </p>

              <p className='pt-6'>
                Assuming all price points reached and tokens held until last unlock, your ${Number(stakeAmount).toFixed(2)} would yield <span className='font-semibold'>${
                                    (((peak1Res / phaseOneData[0].unlockPrice) +
                                    (peak2Res / phaseOneData[1].unlockPrice) +
                                    (peak3Res / phaseOneData[2].unlockPrice) +
                                    (peak4Res / phaseOneData[3].unlockPrice) +
                                    (peak5Res / phaseOneData[4].unlockPrice) +
                                    (peak6Res / phaseOneData[5].unlockPrice) +
                                    (peak7Res / phaseOneData[6].unlockPrice) +
                                    (peak8Res / phaseOneData[7].unlockPrice)) * phaseOneData[lastSelPeak].unlockPrice).toFixed(2)
                                }</span> when REDLC is at ${phaseOneData[lastSelPeak].unlockPrice.toFixed(2)}
              </p>

              <p className='pt-6'>
                <label>If you were to hodl unlocked tokens until REDLC is worth&nbsp;</label>
                <input 
                  type="number"
                  name="wish"
                  placeholder='$0.00'
                  onChange={handleWishChange}
                  className='border-solid border-2 border-red-200 rounded-lg px-1 stakeinput'
                />
                ,&nbsp;Your staked rebate of ${Number(stakeAmount).toFixed(2)} would be worth <span className='font-semibold'>${
                  (((peak1Res / phaseOneData[0].unlockPrice) +
                  (peak2Res / phaseOneData[1].unlockPrice) +
                  (peak3Res / phaseOneData[2].unlockPrice) +
                  (peak4Res / phaseOneData[3].unlockPrice) +
                  (peak5Res / phaseOneData[4].unlockPrice) +
                  (peak6Res / phaseOneData[5].unlockPrice) +
                  (peak7Res / phaseOneData[6].unlockPrice) +
                  (peak8Res / phaseOneData[7].unlockPrice)) * wishAmount).toFixed(2)
                }</span>.                                     
              </p>

              <p className='pt-6'>
                Breakdown...
              </p>

              <div>
                {peak1Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 1:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[0]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak1Init / phaseOneData[0].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak1Res / phaseOneData[0].unlockPrice).toFixed(2)} REDLC worth ${peak1Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak2Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 2:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[1]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak2Init / phaseOneData[1].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak2Res / phaseOneData[1].unlockPrice).toFixed(2)} REDLC worth ${peak2Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak3Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 3:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[2]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak3Init / phaseOneData[2].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak3Res / phaseOneData[2].unlockPrice).toFixed(2)} REDLC worth ${peak3Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak4Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 4:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[3]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak4Init / phaseOneData[3].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak4Res / phaseOneData[3].unlockPrice).toFixed(2)} REDLC worth ${peak4Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak5Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 5:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[4]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak5Init / phaseOneData[4].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak5Res / phaseOneData[4].unlockPrice).toFixed(2)} REDLC worth ${peak5Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak6Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 6:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[5]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak6Init / phaseOneData[5].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak6Res / phaseOneData[5].unlockPrice).toFixed(2)} REDLC worth ${peak6Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak7Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 7:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[6]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak7Init / phaseOneData[6].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak7Res / phaseOneData[6].unlockPrice).toFixed(2)} REDLC worth ${peak7Res.toFixed(2)}
                    </p>
                  </div>
                )}

                {peak8Init > 0 && (
                  <div className='pt-6'>
                    <p>
                      <span className='font-semibold'>Peak 8:</span>
                    </p>
                    <p>
                      Rebate committed = ${((peakPercAmounts[7]/100) * stakeAmount).toFixed(2)}
                    </p>
                    <p>
                      Allocation inc Commit Boost = {(peak8Init / phaseOneData[7].unlockPrice).toFixed(2)} REDLC
                    </p>
                    <p>
                      When unlocked you can receive {(peak8Res / phaseOneData[7].unlockPrice).toFixed(2)} REDLC worth ${peak8Res.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
            </div>  
          )}
        </div>
      </div>

    </main>
  )
}
  
export default page

