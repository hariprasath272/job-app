import React from 'react'
import {  Checkbox } from 'antd';
import VectorIcon from "../assets/images/Vector.svg"

const index = () => {
    return (
     
            <div className="w-full md:w-1/4 p-6  mt-5">

                <div className='shadow-md  bg-gray-800 border-none rounded text-white'  >

                    <div className='flex justify-between p-4 '>
                        <p className='text-lg'>Filters by</p>
                        <p>3 filters applied, <span>Clear all</span></p>
                    </div>
                    {filterData.map((val, id) => (
                        <div className='border-t border-white' key={id}>
                            <div className='w-full p-4'>
                                <div className='flex justify-between'>
                                    <p>{val?.title}</p>
                                    <img src={VectorIcon} />
                                </div>
                                {val?.company?.map((val, id) => (
                                    <div className='flex gap-2 mt-2'>

                                        <Checkbox key={id} />

                                        <p>{val?.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
       
    )
}

export default index

const filterData = [{
    title: "Company",
    id: "00",
    company: [{
      id: "001",
      value: "Amazon"
    },
    {
      id: "002",
      value: "CVS Health"
    }
      ,
    {
      id: "003",
      value: "Toyoto"
    }
      ,
    {
      id: "004",
      value: "Apple"
    }
    ]
  },
  
  
  {
    title: "Location",
    id: "01",
    company: [{
      id: "005",
      value: "Mumbai"
    },
    {
      id: "006",
      value: "Chandigarah"
    }
      ,
    {
      id: "007",
      value: "Karnataka"
    }
      ,
    {
      id: "008",
      value: "Banglore"
    }
    ]
  },
  
  
  {
    title: "Data Posted",
    id: "02",
    company: [{
      id: "009",
      value: "Last 24 hours"
    },
    {
      id: "010",
      value: "Last 48 hours"
    }
      ,
    {
      id: "011",
      value: "Last 7 days"
    }
      ,
    {
      id: "012",
      value: "Last 14 days"
    },
    {
      id: "013",
      value: "Last Month"
    }
    ]
  },
  
  {
    title: "Salary Range",
    id: "03",
    company: [{
      id: "014",
      value: "3 Lakh+"
    },
    {
      id: "015",
      value: "6 Lakh+"
    }
      ,
    {
      id: "016",
      value: "10 Lakh+"
    }
      ,
    {
      id: "017",
      value: "15 Lakh+"
    }
      , {
      id: "018",
      value: "25 Lakh+"
    }
    ]
  }
    ,
  {
    title: "Skills",
    id: "04",
    company: [{
      id: "019",
      value: "Javascript"
    },
    {
      id: "020",
      value: "Machine Learning"
    }
      ,
    {
      id: "021",
      value: "Jquery"
    }
      ,
    {
      id: "022",
      value: "Artificial Intelligence"
    }
    ]
  },
  {
    title: "Skills",
    id: "05",
    company: [{
      id: "023",
      value: "0-2 years"
    },
    {
      id: "024",
      value: "3-5 years"
    }
      ,
    {
      id: "025",
      value: "5-8 years"
    }
      ,
    {
      id: "026",
      value: "Above 8 years"
  
    }
    ]
  }
    ,
  {
    title: "Education",
    id: "06",
    company: [{
      id: "027",
      value: "Bachelors"
    },
    {
      id: "028",
      value: "Masters"
    }
      ,
    {
      id: "029",
      value: "Phd"
    }
      ,
    {
      id: "030",
      value: "Diploma"
    }
    ]
  }
  ]