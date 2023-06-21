'use client'
import { Input, Form, Button, ColorPicker, DatePicker } from 'antd';
import React, { Component } from 'react';

export default class Page extends Component {
  onFinish = (values) => {
    console.log('Form values:', values);
  };

  validateEmail = (_, value) => {
    if (value && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return Promise.reject('Vui lòng nhập một địa chỉ email hợp lệ');
    }
    return Promise.resolve();
  };

  render() {
    return (
      <div>
        <h1 className="font-serif text-xl font-black my-5">Settings</h1>
        <Form onFinish={this.onFinish}>
          <div className="grid gap-4 grid-cols-2 mx-2">
            <div className="w-42">
              <label htmlFor="input1">Title :</label>
              <Form.Item
                name="Title"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng phải điền hết thông tin!',
                  },
                ]}
              >
                <Input id="input1" placeholder="Title" />
              </Form.Item>
            </div>
            <div className="w-42">
              <label htmlFor="input2">Email:</label>
              <Form.Item
                name="Email"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng phải điền hết thông tin!',
                  },
                  {
                    validator: this.validateEmail,
                  },
                ]}
              >
                <Input type="email" id="input2" placeholder="Email" />
              </Form.Item>
            </div>
            <div className="w-42">
              <label htmlFor="input3">Background:</label>
              <Form.Item
                name="Background"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng phải điền hết thông tin!',
                  },
                ]}
              >
                <ColorPicker />
              </Form.Item>
            </div>
            <div className="w-42">
              <label htmlFor="input4">Active date:</label>
              <Form.Item
                name="date"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng phải điền hết thông tin!',
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </div>
          </div>
          <Button type="primary" htmlType="submit" className="w-full hover:bg-lime-500">Save</Button>
        </Form>
      </div>
    );
  }
}

