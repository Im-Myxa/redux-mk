/* eslint-disable arrow-body-style */
// import { $api } from 'api/axios.instance';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync } from 'store/UsersPage/actions';
import { getUsersStateSelector } from 'store/UsersPage/selector';

const UsersPage = () => {
  // Без Redux

  // const [isLoading, setIsLoading] = useState(false);
  // const [usersList, setUsersList] = useState([]);

  // const getUsers = async () => {
  //   try {
  //     setIsLoading(true);
  //     const { data } = await $api.get('/users');
  //     setUsersList(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.error('Ошибка!', error);
  //   }
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // if (isLoading) return <div>Загрузка...</div>;

  // ---------------------------------------------------------------------

  // Vanila Redux

  const dispatch = useDispatch();
  const { loading, userData } = useSelector(getUsersStateSelector);
  console.log(userData);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);
  console.log(userData);

  if (loading) return <div>Загрузка...</div>;
  return (
    <div>
      {userData?.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
};

export default UsersPage;
