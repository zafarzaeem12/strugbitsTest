import React from 'react';
import {  useNavigate } from 'react-router-dom';
import { deleteCustomer } from '../../redux/thunk/UserReducers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch , useSelector} from 'react-redux'
import Image01 from '../../images/user-36-05.jpg';
import Image02 from '../../images/user-36-06.jpg';
import Image03 from '../../images/user-36-07.jpg';
import Image04 from '../../images/user-36-08.jpg';
import Image05 from '../../images/user-36-09.jpg';
const liveUrl = 'http://localhost:3005'
function DashboardCard10({fetchCustomers}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handlecontrol = (e , customer) => {
  navigate(`/customer/${customer._id}`)
  }

  const handledelete = (e ,customer) => {
    const bodyparams = { id : customer._id};
    dispatch(deleteCustomer(bodyparams))
    
  }
  
  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Customers</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">profilePicture</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Username</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
              {
                fetchCustomers?.map(customer => {
                  return (
                    <tr key={customer._id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-full" src={`${liveUrl}/${customer.profilePicture}`} width="40" height="40" />
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-slate-800 dark:text-slate-100">{customer.name}</div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">{customer.email}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">{customer.username}</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className='flex flex-row space-x-4'>
                          <div className="text-lg text-center">  <FontAwesomeIcon icon={faEdit} onClick={(e)=>handlecontrol(e,customer)} className="text-blue-500 cursor-pointer" /></div>
                          <div className="text-lg text-center"> <FontAwesomeIcon icon={faTrash} onClick={(e)=>handledelete(e,customer)} className="text-red-500 cursor-pointer" /></div>
                        </div>
                       
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default DashboardCard10;
