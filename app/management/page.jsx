'use client'
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { useState,useEffect} from 'react';
import axios from 'axios';


const { Link } = Typography;

const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const page = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const handleDelete = (key) => {
    const newData = [...data];
    const index = newData.findIndex((item) => key === item.key);
    if (index > -1) {
      newData.splice(index, 1);
      setData(newData);
    }
  };

  const isEditing = (record) => record.key === editingKey;
  useEffect(() => {
    // Fetch data from the API
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const apiData = response.data;

        // Map the API data to match your table structure
        const updatedData = apiData.map(item => ({
          key: item.id.toString(),
          ID: item.id.toString(),
          UserId: item.userId,
          Title: item.title,
          Body: item.body,
        }));

        setData(updatedData);
      })
      .catch(error => {
        console.log('Error fetching data from the API:', error);
      });
  }, []);

  const edit = (record) => {
    form.setFieldsValue({
      ID: '',
      UserID: '',
      Title: '',
      Body: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'ID',
     
      editable: true,
     
    },
    {
      title: 'USER ID',
      dataIndex: 'UserId',
     
      editable: true,
    },
    {
      title: 'Title',
      dataIndex: 'Title',
     
      editable: true,
    },
    {
      title: 'Body',
      dataIndex: 'Body',
      
      editable: true,
    },
   
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 6,
              }}
            >
              Save
            </Link>
            <Popconfirm title="Chắc chắn để hủy bỏ?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              Edit
            </Link>
            <Popconfirm title="Chắc chắn để xóa?" onConfirm={() => handleDelete(record.key)}>
              <a style={{ marginLeft: 8 }}>Delete</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
 
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
        style={{ maxWidth: '100%', marginBottom: '1rem' }}
        className="table-responsive"
      />
    </Form>
  );
  
};

export default page;


