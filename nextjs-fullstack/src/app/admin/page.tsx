'use client';
import { useEffect, useState } from "react";
import { Input, Button, Typography, List, message, Layout, Space } from "antd";
const { Title } = Typography;
const { TextArea } = Input;

export default function AdminPage() {
  const [profile, setProfile] = useState({ name: '', title: '', email: '', bio: '', skills: [] });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/profile").then(res => res.json()).then(setProfile);
    fetch("http://localhost:3001/api/projects").then(res => res.json()).then(setProjects);
  }, []);

  async function saveProfile() {
    await fetch("http://localhost:3001/api/profile", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });
    message.success("Đã lưu thông tin!");
  }

  async function addProject() {
    const title = prompt("Tên Project?");
    if (!title) return;
    const newProj = await fetch("/api/projects", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    }).then(res => res.json());
    setProjects([...projects, newProj]);
  }

  return (
    <Layout className="p-4 md:p-10 bg-white min-h-screen">
      <Title level={2}>🛠 Quản lý CV</Title>
      <Space direction="vertical" className="w-full" size="large">
        <Input placeholder="Tên" value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} />
        <Input placeholder="Tiêu đề" value={profile.title} onChange={e => setProfile({ ...profile, title: e.target.value })} />
        <TextArea placeholder="Giới thiệu bản thân" rows={4} value={profile.bio} onChange={e => setProfile({ ...profile, bio: e.target.value })} />
        <Button type="primary" onClick={saveProfile}>💾 Lưu</Button>

        <Title level={4}>📦 Dự án</Title>
        <List
          bordered
          dataSource={projects}
          renderItem={(item) => <List.Item>{item.title}</List.Item>}
        />
        <Button onClick={addProject}>➕ Thêm Dự án</Button>
      </Space>
    </Layout>
  );
}
