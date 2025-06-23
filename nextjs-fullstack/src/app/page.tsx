'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Typography, Layout, List, Button } from "antd";

export default function HomePage() {
  const [profile, setProfile] = useState<any>(null);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/profile").then(res => res.json()).then(setProfile);
    fetch("http://localhost:3001/api/projects").then(res => res.json()).then(setProjects);
  }, []);

  return (
    <Layout className="p-4 md:p-10 max-w-3xl mx-auto bg-white min-h-screen">
      <Typography.Title>{profile?.name || "[Tên]"}</Typography.Title>
      <Typography.Title level={3}>{profile?.title || "[Chức danh]"}</Typography.Title>
      <Typography.Paragraph>{profile?.bio || "[Mô tả ngắn]"}</Typography.Paragraph>

      <Typography.Title level={4}>Kỹ năng</Typography.Title>
      <List dataSource={profile?.skills || []} renderItem={(item) => <List.Item>{item}</List.Item>} />

      <Typography.Title level={4}>Projects</Typography.Title>
      <List dataSource={projects} renderItem={(item) => <List.Item>{item.title}</List.Item>} />

      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <Button type="primary" href="/cv.pdf" download>⬇️ Tải CV</Button>
        <Link href="/contact"><Button type="default">📧 Gửi liên hệ</Button></Link>
      </div>
    </Layout>
  );
}