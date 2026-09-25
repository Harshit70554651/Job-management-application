import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  console.log();
  
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C]'>
           
            <Header data={data}/>
            <TaskListNumber data={data} />
            <TaskList data={data} />
        </div>
    </div>
  )
}

export default EmployeeDashboard