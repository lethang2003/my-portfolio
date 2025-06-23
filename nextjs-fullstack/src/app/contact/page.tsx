'use client';
import { useState } from "react";
import { Input, Button, Typography, Layout, message } from "antd";

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    const res = await fetch("http://localhost:3001/api/contact", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const result = await res.json();
    message.success(result.success ? "Đã gửi thành công!" : "Gửi thất bại");
    setLoading(false);
  }

  return (
    <Layout className="p-4 md:p-10 max-w-xl mx-auto bg-white min-h-screen">
      <Typography.Title level={2}>📨 Liên hệ</Typography.Title>
      <Input placeholder="Tên" className="mb-3" onChange={e => setForm({ ...form, name: e.target.value })} />
      <Input placeholder="Email" className="mb-3" onChange={e => setForm({ ...form, email: e.target.value })} />
      <Input.TextArea placeholder="Nội dung" rows={4} className="mb-3" onChange={e => setForm({ ...form, message: e.target.value })} />
      <Button type="primary" loading={loading} onClick={submit}>Gửi</Button>
    </Layout>
  );
}