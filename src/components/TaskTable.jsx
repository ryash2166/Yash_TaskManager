import React from "react";
import { Table, Button, Popconfirm, Tag, Tooltip } from "antd";
import moment from "moment";

const TaskTable = ({ tasks, loading, onEdit, onDelete }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description) => (
        <span style={{ color: description ? "black" : "#bfbfbf" }}>
          {description || "None"}
        </span>
      ),
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
      title: "Days Left",
      key: "daysLeft",
      render: (record) => {
        const today = moment();
        const dueDate = moment(record.dueDate);
        const daysLeft = dueDate.diff(today, "days");

        let color = "black";
        if (daysLeft <= 0) color = "red";
        else if (daysLeft >= 1) color = "orange";

        return (
          <Tooltip title={daysLeft < 0 ? "Past Due" : `${daysLeft} days left`}>
            <Tag color={color}>
              {daysLeft < 0 ? "0 days left" : `${daysLeft} days left`}
            </Tag>
          </Tooltip>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
      render: (completed) =>
        completed ? (
          <Tag color="green">Completed</Tag>
        ) : (
          <Tag color="red">Not Completed</Tag>
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
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
