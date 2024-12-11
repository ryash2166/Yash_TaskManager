import React, { useEffect, useState } from 'react';
import { Button, Modal, notification } from 'antd';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';
import { getTasks, addTask, updateTask, deleteTask } from './api/task';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  const AddTask = async (task) => {
    const newTask = await addTask(task);
    setTasks([newTask, ...tasks]);
    notification.success({ message: 'Task added!' });
    setIsModalVisible(false);
  };

  const UpdateTask = async (task) => {
    const updatedTask = await updateTask(task.id, task);
    setTasks(tasks.map((t) => (t.id === task.id ? updatedTask : t)));
    notification.success({ message: 'Task updated!' });
    setIsModalVisible(false);
  };

  const DeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t.id !== id));
    notification.success({ message: 'Task deleted!' });
  };

  return (
    <div className="bg-black">
      <h1 className='title'>Task Manager</h1>
      <div className='btn'>
      <Button type="primary"  onClick={() => setIsModalVisible(true)}>Add Task</Button>
      </div>
      <div className='table'>
        <TaskTable
          tasks={tasks}
          loading={loading}
          onEdit={(task) => {
            setCurrentTask(task);
            setIsModalVisible(true);
          }}
          onDelete={DeleteTask}
        />
      </div>
      <Modal
        title={currentTask ? 'Edit Task' : 'Add Task'}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          setCurrentTask(null);
        }}
        footer={null}
      >
        <TaskForm
          initialValues={currentTask}
          onSubmit={currentTask ? UpdateTask : AddTask}
        />
      </Modal>
    </div>
  );
};

export default App;
