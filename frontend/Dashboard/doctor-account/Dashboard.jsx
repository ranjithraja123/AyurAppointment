import React, { useEffect, useState } from 'react'
import Loader from '../../src/components/Loader/Loading.jsx'
import Error from '../../src/components/Error/Error.jsx'
import useGetProfile from '../../src/hooks/useFetchData.jsx'
import { BASE_URL } from '../../src/config.js'
import Tabs from './Tabs.jsx'
import userImg from '../../src/assets/images/doctor-img01.png'
import DoctorAbout from '../../src/pages/Doctors/DoctorAbout.jsx'
import Profile from './Profile.jsx'
import Appointments from './Appointments.jsx'

const Dashboard = () => {
  const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`)

  const [tab, setTab] = useState('overview')

 

  useEffect(() => {
    console.log(data, 'ddd')
  }, [])
  return (
    // <section>
    //   <div>
    //     {loading && !error && <Loader />}
    //     {error && !loading && <Error />}
    //     {
    //       !loading && !error && <div>
    //         <Tabs />
    //         fsfsfsdf
    //     </div>
    //     }
    //   </div>
    // </section>
    <div>
      <div className='row'>
        <div className='col-6 p-5'>
        <Tabs tab={tab} setTab={setTab} />

        </div>
        <div className='col-6'>
          {data.isApproved === 'pending' && <div>
            <span>
              To get approval please complete your profile
            </span></div>}

          {tab === 'overview' && <div>

            <div>
              <figure>
                <img src={userImg} className='w-25'>
                </img>
              </figure>
              <div>
                <span>
                  {data.specialization}
                </span>
                <h3>{data.name}</h3>
              </div>
            </div>
            <div>
              <p>{data?.bio}</p>
            </div>
            <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />
          </div>}
          {tab === 'appointments' && <Appointments doctorData={data}/>}
          {tab === 'settings' && <Profile doctorData={data} />}



        </div>
      </div>
    </div>
  )
}

export default Dashboard
