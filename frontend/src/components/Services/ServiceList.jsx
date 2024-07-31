import React from 'react'
import { services } from '../../assets/data/service'
import ServiceCard from './ServiceCard'
const ServiceList = () => {
  return (
    // <div className="container">
            <div className="row px-5">
                {services.map((item, index) => (
                    <div className="col-sm-12 col-lg-3 p-3" key={index}>
                        <div className="cards card p-3">
                            <ServiceCard item={item} index={index} />
                        </div>
                    </div>
                ))}
            </div>
        // </div>
  )
}

export default ServiceList
