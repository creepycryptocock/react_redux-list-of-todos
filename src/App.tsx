import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Loader, TodoFilter, TodoList, TodoModal } from './components';
import React, { useEffect } from 'react';
import { getTodos } from './api';
import todosSlice from './features/todos';
import { useAppDispatch } from './hooks';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchTodos() {
      const todos = await getTodos();

      dispatch(todosSlice.actions.setTodos(todos));
    }

    fetchTodos();
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              <Loader />
              <TodoList />
            </div>
          </div>
        </div>
      </div>

      <TodoModal />
    </>
  );
};
