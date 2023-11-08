import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions';
import CardUser from './CardUser';

const List = () => {
    const {loading,users}=useSelector(state=>state)
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getUsers());
       }, [])
      //  console.log(users)
  return (
    <div>
        {
            loading?
            <h3>loading...</h3>:
            
            
                React.Children.toArray(users.map(el=><CardUser user={el}/>))
          
        }
    </div>
  )
}

export default List