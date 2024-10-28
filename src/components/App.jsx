import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selectors';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </div>
  );
}