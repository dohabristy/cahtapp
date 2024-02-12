import React from 'react'
import GroupCard from '../groupcard/GroupCard'
import'../groupcard/groupcard.css'
import one from '../../assets/images/one.jpg'
import { FaPlusCircle } from "react-icons/fa";
const UserItem = () => {
  return (
   <>
        <GroupCard title="USER LIST">
            <div className='mainitem'>
                <div className='cardbox'>
                    <div className='useritem'>
                        <div className='Userimg'>
                            <img src={one} />
                        </div>
                        <div>
                            <h4>Karina</h4>
                        </div>
                    </div>
                    <div className='userbtn'>
                        <button>
                            <FaPlusCircle />
                        </button>
                    </div>
                </div>

              <div className='cardbox'>
                    <div className='useritem'>
                        <div className='Userimg'>
                            <img src={one} />
                        </div>
                        <div>
                            <h4>Saima</h4>
                        </div>
                    </div>
                    <div className='userbtn'>
                        <button>
                            <FaPlusCircle />
                        </button>
                    </div>
              </div>

              <div className='cardbox'>
                    <div className='useritem'>
                        <div className='Userimg'>
                            <img src={one} />
                        </div>
                        <div>
                            <h4>Bristy</h4>
                        </div>
                    </div>
                    <div className='userbtn'>
                        <button>
                            <FaPlusCircle />
                        </button>
                    </div>
              </div>

                <div className='cardbox'>
                    <div className='useritem'>
                        <div className='Userimg'>
                            <img src={one} />
                        </div>
                        <div>
                            <h4>Alfa</h4>
                        </div>
                    </div>
                    <div className='userbtn'>
                        <button>
                            <FaPlusCircle />
                        </button>
                    </div>
                </div>
                <div className='cardbox'>
                    <div className='useritem'>
                        <div className='Userimg'>
                            <img src={one} />
                        </div>
                        <div>
                            <h4>Alfa</h4>
                        </div>
                    </div>
                    <div className='userbtn'>
                        <button>
                            <FaPlusCircle />
                        </button>
                    </div>
                </div>
                <div className='cardbox'>
                    <div className='useritem'>
                        <div className='Userimg'>
                            <img src={one} />
                        </div>
                        <div>
                            <h4>Alfa</h4>
                        </div>
                    </div>
                    <div className='userbtn'>
                        <button>
                            <FaPlusCircle />
                        </button>
                    </div>
                </div>
            </div>
        </GroupCard>   
   </>
  )
}

export default UserItem
