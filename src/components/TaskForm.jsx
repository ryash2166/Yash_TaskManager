import React, { useState } from "react";
import { Form, Input, Select, DatePicker, Switch, Button } from "antd";
import moment from "moment";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

const { Option } = Select;

const TaskForm = ({ initialValues, onSubmit }) => {
  const [form] = Form.useForm();

  const [status, setStatus] = useState(
    initialValues ? initialValues.status : false
  );

  const StatusChange = (checked) => {
    setStatus(checked);
  };

  const Finish = (values) => {
    onSubmit({
      ...values,
      dueDate: values.dueDate.format("YYYY-MM-DD"),
      id: initialValues?.id || Date.now(), // Auto-generate ID
      userId: initialValues?.userId || Math.floor(Math.random() * 100),
    });
    form.resetFields();
  };

  return (
    <Form
      form={form}
      initialValues={{
        ...initialValues,
        dueDate: initialValues?.dueDate ? moment(initialValues.dueDate) : null,
      }}
      onFinish={Finish}
    >
      <Form.Item name="title" label="Task Title" rules={[{ required: true }]}>
        <Input placeholder="Enter Title" />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea placeholder="Enter the description" />
      </Form.Item>
      <Form.Item name="priority" label="Priority" rules={[{ required: true }]}>
        <Select placeholder="Select Priority">
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="completed" label="Status" valuePropName="checked">
        <Switch
          checked={status}
          onChange={StatusChange}
          checkedChildren={<CheckCircleOutlined />}
          unCheckedChildren={<CloseCircleOutlined />}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
