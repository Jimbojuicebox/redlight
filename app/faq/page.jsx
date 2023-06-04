import Link from "next/link"

const Faq = () => {
  return (
    <main className='slimmain pt-8'>
      <div>
        <h4 className='text-lg'>
          Frequently asked questions, information and disclaimer.
        </h4>
      </div>

      <div className='mt-10 py-3 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <h4 className='text-lg'>
          REDLC Tokenomics and overview
        </h4>
        <p className='pt-2'>
          For a more detailed look at the Redlight Blockchain and its native token $REDLC try visiting<Link href="https://redlightoverview.info/redlight-chain/" target="_blank" className='text-red-700 font-medium'> https://redlightoverview.info/redlight-chain/</Link>
        </p>
        <p className='pt-1'>
          For summaries of AMA's held by the Redlight team on discord try visiting<Link href="https://redlightoverview.info/ama-summaries/" target="_blank" className='text-red-700 font-medium'> https://redlightoverview.info/ama-summaries/</Link>
        </p>
      </div>

      <div className='mt-10 py-3 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <h4 className='text-lg'>
          Why is there a wallet connect button?
        </h4>
        <p className='pt-2'>
          The Redlight Directory has the functionality to 'up-vote' and 'down-vote' projects. To avoid bad actors trying to ruin things for everyone else, this functionality will only 
          be available if you connect your wallet and have a balance of $REDLC. The required amount is yet to be determined. We don't want it to be an elitist function for whales but equally 
          it needs to be a meaningful amount to deter bad actors. Once the blockchain is more populated a decision will be made.
        </p>
      </div>

      <div className='mt-10 py-3 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <h4 className='text-lg'>
          How do I list my project?
        </h4>
        <p className='pt-2'>
          This site is a work in progress. For the time being send relevant details and your web address in an email to:
        </p>
        <p className='pt-1'>
          <Link href='mailto:info@redlightdirectory.net' className='text-red-700 font-medium'>info@redlightdirectory.net</Link>
        </p>
        <p className='pt-1'>
          In due course a project entry form will be created and added to the site.
        </p>
      </div>

      <div className='mt-10 py-3 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <h4 className='text-lg'>
          I've found a bad link or out-dated information
        </h4>
        <p className='pt-2'>
          In due course the will be a bug entry form. For now please make a note of the issues and send an email to:
        </p>
        <p className='pt-1'>
          <Link href='mailto:info@redlightdirectory.net' className='text-red-700 font-medium'>info@redlightdirectory.net</Link>
        </p>
      </div>

      <div className='mt-10 py-3 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <h4 className='text-lg'>
          Disclaimer
        </h4>
        <p className='pt-2'>
          The projects listed on the Redlight Directory are not affiliated with the Directory or Redlight Network in anyway, unless clearly stated. As such neither the Directory nor 
          Redlight Network hold any responsibility for the operation or functions of these projects. Always do your own research and only connect your wallet to sites you are happy with.
        </p>
      </div>

      <div className='mt-10 py-3 px-6 w-full rounded-3xl bg-gradient-to-r from-red-200 via-white to-red-200'>
        <h4 className='text-lg'>
          This site has been so helpful, however could I repay your efforts?
        </h4>
        <p className='pt-2'>
          Donations can be made in crypto (including and especially $REDLC as it's gas free!). This would be very appreciated as this site and it's upkeep is personally financed. Maybe drop me an email or tag me in discord 
          (Topgun | RLN#4627) so I can keep track of who to pay back when we're all millionaires!
        </p>
        <p className='pt-1'>
          0xe66703A65c769112aE91E6912C4FC2f786Ed8ACe
        </p>
      </div>
    </main>
  )
}

export default Faq