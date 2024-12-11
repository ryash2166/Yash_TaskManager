import React from "react";
import { Table, Button, Popconfirm, } from "antd";
const TaskTable = ({ tasks, loading, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
      render: (completed) => (completed ? "Completed" : "Not Completed"),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="btn-table">
          <Button onClick={() => onEdit(record)}>Edit</Button>&nbsp;&nbsp;
          <Popconfirm
            title="Are you sure?"
            onConfirm={() => onDelete(record.id)}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <Table dataSource={tasks} columns={columns} rowKey="id" loading={loading} />
  );
};

export default TaskTable;
